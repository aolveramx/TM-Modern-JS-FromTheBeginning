//1-Create Data
const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'http://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'http://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'http://randomuser.me/api/portraits/men/83.jpg'
  },
];

//3-Create variable Profiles
const profiles = profileIterator(data);

//6-Call first profile
nextProfile();

//4-Create next events
document.getElementById('next').addEventListener('click', nextProfile);

//5-Create nextProfile function
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class = "list-group-item">Name: ${currentProfile.name}
        </li>
        <li class = "list-group-item">Age: ${currentProfile.age}
        </li>
        <li class = "list-group-item">Location: ${currentProfile.location}
        </li>
        <li class = "list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    //No More profiles
    window.location.reload();
  }
}

//2-Create Iterator Function - Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  };
}
