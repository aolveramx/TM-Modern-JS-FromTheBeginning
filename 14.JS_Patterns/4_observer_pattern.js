//1-Create main function
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now suscribe to ${fn.name}`)
  },
  unsuscribe: function (fn) {
    //Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassingns the list of observers.
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsuscribed from ${fn.name}`)
  },
  fire: function () {
    this.observers.forEach(function (item) {
      item.call();
    })
  }
}

const click = new EventObserver();

//2-Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurrMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsuscribe(getCurrMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsuscribe(getCurrSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

//3-Click Handler
const getCurrMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}