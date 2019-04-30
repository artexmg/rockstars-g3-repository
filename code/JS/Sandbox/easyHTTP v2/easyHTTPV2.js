// CLASS EasyHTTP
class EasyHTTP {
  // Make GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make POST Request
  post(url, postData) {
    const requestPackage = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(postData)
    };
    return new Promise((resolve, reject) => {
      fetch(url, requestPackage)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  // Make PUT Request
  put(url, putData) {
    const requestPackage = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(putData)
    };
    return new Promise((resolve, reject) => {
      fetch(url, requestPackage)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // Make DELETE Request
  delete(url) {
    const requestPackage = {
      method: "DELETE",
      headers: { "Content-type": "application/json" }
    };
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(resolve("Resource Deleted"))
        .catch(err => reject(err));
    });
  }
} // END OF CLASS easyHTTP
