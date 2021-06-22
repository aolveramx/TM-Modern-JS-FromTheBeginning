/* 
* EasyHTTP Library
* Library for making HTTP requests
* Fetch with Async await
* 
* @version 3.0.0
* @author Brad Traversy
* @license MIT
*/

class EasyHTTP {
  //1-Make HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //4-Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //7-Make an HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //9-Make an HTTP Delete Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const resData = await 'Resource Deleted...';
    return resData;
  }
}