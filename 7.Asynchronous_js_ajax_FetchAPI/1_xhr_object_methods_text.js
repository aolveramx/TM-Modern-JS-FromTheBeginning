//1-Create event listener
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //2-Create an XHR object
  const xhr = new XMLHttpRequest();

  //3-OPEN where specify url
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  //Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  /* Not using this, it´s old syntax */
  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function () {
    console.log('Request error...');
  }

  xhr.send();
}

/* HTTP Statuses
  200: Ok
  403: Forbidden
  404: Not found
  */

/* Ready State Values
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
*/



