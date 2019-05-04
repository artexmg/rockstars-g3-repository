/* --------
 *  easyHTTP library
 *  creates HTTP requests
 *
 *  @version 2.0
 * 
 * --------- */

class EasyHTTP {
  // MAKE an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
  // MAKE an HTTP POST request
  post(url, postData) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(postData)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // MAKE an HTTP PUT Request
  put(url, putData) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(putData)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // MAKE an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
      })
        .then(resolve("Resource Deleted"))
        .catch(error => error);
    });
  }
}
