//42-Storage Controller
const StorageCtrl = (function () {
  //42.1-Public methods
  return {
    storeItem: function (item) {
      let items;
      //42.3-Check if any items in local storage
      if (localStorage.getItem('items') === null) {
        items = [];
        //42.4-Push new item
        items.push(item);
        //42.5-Set local storage
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        //42.6-Get what is already in local storage
        items = JSON.parse(localStorage.getItem('items'));
        //42.7-Push new item
        items.push(item);
        //42.8-Reset local storage
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    //43-
    getItemsFromStorage: function () {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem('items'));
      items.forEach(function (item, index) {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
        localStorage.setItem('items', JSON.stringify(items));
      });
    },
    //44.1-
    deleteItemFromStorage: function (id) {
      let items = JSON.parse(localStorage.getItem('items'));
      items.forEach(function (item, index) {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    //45-Clear all from local storage
    clearItemsFromStorage: function () {
      localStorage.removeItem('items');
    }
  }
})();

//1-Item Controller ief - inmediate evoque function 
const ItemCtrl = (function () {
  //3-Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  //4-Data Structure /State
  const data = {
    // items: [
    // { id: 0, name: 'Steak Dinner', calories: 1200 },
    // { id: 1, name: 'Cookie', calories: 400 },
    // { id: 2, name: 'Eggs', calories: 300 },
    // ],
    //43.1-
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

  return {
    //7-Public methods
    getItems: function () {
      return data.items;
    },
    //16.2
    addItem: function (name, calories) {
      //17-Create ID
      let ID;
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      //18-Calories to number
      calories = parseInt(calories);
      //18.1-Create new item
      newItem = new Item(ID, name, calories);
      //18.2-Add to items array
      data.items.push(newItem);

      return newItem;
    },
    //25.4
    getItemById: function (id) {
      let found = null;
      //25.5-Loop through items
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found
    },
    //29.4-
    updateItem: function (name, calories) {
      //29.5-Calories to number
      calories = parseInt(calories);
      //29.6-
      let found = null;
      data.items.forEach(function (item) {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    //31.4-
    deleteItem: function (id) {
      //31.5-Get ids
      const ids = data.items.map(function (item) {
        return item.id;
      });
      //31.6-Get index
      const index = ids.indexOf(id);
      //31.7-Remove item
      data.items.splice(index, 1);
    },
    //40.4-
    clearAllItems: function () {
      data.items = [];
    },
    //26.1-
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    //27.2-
    getCurrentItem: function () {
      return data.currentItem;
    },
    //20.1-Loop through items and add cals
    getTotalCalories: function () {
      let total = 0;

      data.items.forEach(function (item) {
        total += item.calories;
        total = total + item.calories;
      });
      //20.2 Set total cal in data structure
      data.totalCalories = total;
      //20.3 Return total
      return data.totalCalories;
    },
    logData: function () {
      return data;
    }
  }
})();

// UI Controller
const UICtrl = (function () {
  //12- Put inside selector
  const UISelectors = {
    itemList: '#item-list',
    //12.5 Add class to UI selector
    addBtn: '.add-btn',
    //29.8-
    listItems: '#item-list li',
    //22.1
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    //40-
    clearBtn: '.clear-btn',
    //15.2
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    //21.2-Add UI selector
    totalCalories: '.total-calories'
  }

  //Public methods
  return {
    //10-Loop throw items ans insert into UL
    populateItemList: function (items) {
      let html = '';
      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}:</strong> <em>${item.calories}</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });
      //11-Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    //15.1
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    //17.1
    addListItem: function (item) {
      //19.3-Show the list
      document.querySelector(UISelectors.itemList).getElementsByClassName.display = 'block';
      //17.2-Create li element
      const li = document.createElement('li');
      //17.3-Add class
      li.className = 'collection-item';
      //17.4-Add ID
      li.id = `item-${item.id}`;
      //17.5-Add HTML
      li.innerHTML = `<strong>${item.name}:</strong> <em>${item.calories}</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      //17.6-Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    //29.7
    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      //29.9-Turn Node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function (listItem) {
        const itemID = listItem.getAttribute('id');
        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}:</strong> <em>${item.calories}</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        }
      });
    },
    //31.9-
    deleteListItem: function (id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    //18-Clear input
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    //27.1
    addItemToForm: function () {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      //28-
      UICtrl.showEditState();
    },
    //40.6-
    removeItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      //40.7- Turn Node list into array
      listItems = Array.from(listItems);
      listItems.forEach(function (item) {
        item.remove();
      });
    },
    //19-Hide line from empty list
    hideList: function () {
      document.querySelector(UISelectors.itemList).getElementsByClassName.display = 'none';
    },
    //21.1-Show total calories
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    //22-Hide BTNs when nothing is written
    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    //28.1-
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    //12.1-Create UI Selectors with public method to allow select them
    getSelectors: function () {
      return UISelectors;
    }
  }
})();

//2-App Controller
const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
  //12-Load event listeners
  const loadEventListeners = function () {
    //12.3-Get UI selectors
    const UISelectors = UICtrl.getSelectors();
    //12.4-Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    //30-Disable submit on enter
    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    //24-Edit icon click event - with event delegation after the page loads
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
    //29.1-Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
    //32-Delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
    //31-Back button event
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
    //40.1-Clear items event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
  }

  //13-Add item submit
  const itemAddSubmit = function (e) {
    //15-Get form input from UI Controller
    const input = UICtrl.getItemInput();

    //16-Check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      //16.1-Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      //17-Add item to UI list
      UICtrl.addListItem(newItem);
      //20-Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //21-Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);
      //42.2-Store in local storage
      StorageCtrl.storeItem(newItem);

      //18-Clear fields
      UICtrl.clearInput();
    }
    e.preventDefault();
  }

  //29-Update item submit
  const itemUpdateSubmit = function (e) {
    //29.2-Get item input
    const input = UICtrl.getItemInput();
    //29.3-Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    //29.7-Update UI
    UICtrl.updateListItem(updatedItem);
    //Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
    //44-Update local storage
    StorageCtrl.updateItemStorage(updatedItem);
    UICtrl.clearInput();
    e.preventDefault();
  }

  //24.1-Click edit item
  const itemEditClick = function (e) {
    if (e.target.classList.contains('edit-item')) {
      //25-Gets list item ID (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id;
      //25.1-Break into an array
      const listIdArr = listId.split('-');
      //25.2-Get the actual id
      const id = parseInt(listIdArr[1]);
      //25.3-Get item
      const itemToEdit = ItemCtrl.getItemById(id);
      console.log(itemToEdit);
      //26-Set current item
      ItemCtrl.setCurrentItem(itemToEdit);
      //27-Add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  }

  //31.1-Delete button event
  const itemDeleteSubmit = function (e) {
    //31.2-Get current item
    const currentItem = ItemCtrl.getCurrentItem();
    //31.3-Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);
    //31.8-Delete from UI
    UICtrl.deleteListItem(currentItem.id);
    //Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
    //44-Delet from local storage
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    UICtrl.clearEditState();

    e.preventDefault();
  }

  //40.2-Clear items event
  const clearAllItemsClick = function () {
    //40.3-Delete all items from data structure
    ItemCtrl.clearAllItems();
    //Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
    //40.5-Remove from UI
    UICtrl.removeItems();
    //45.1-Clear All from local storage
    StorageCtrl.clearItemsFromStorage();
    //41-Hide UL
    UICtrl.hideList();
  }

  //5-Public methods
  return {
    init: function () {
      //22.3-Clear edit state or set initial set
      UICtrl.clearEditState();
      //8-Fetch items from data structure
      const items = ItemCtrl.getItems();
      //19.1-Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        //9-Populate list with items
        UICtrl.populateItemList(items);
      }
      //20-Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //21-Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);
      //14-Load event listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, StorageCtrl, UICtrl);

//6-Initialize App
App.init();