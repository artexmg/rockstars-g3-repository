/* --------
 *  easyHTTP library
 *  creates HTTP requests
 *
 *  @version 3.0
 * 
 * --------- */

class EasyHTTP {
  // MAKE an HTTP GET Request
  async get(url) {
    const resp = await fetch(url);
    const data = await data.json();
    return data;
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
  async put(url, putData) {
    const request = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(putData)
    };

    const resp = await fetch(url, request);
    const data = resp.json();
    return data;
  }

  // MAKE an HTTP DELETE Request
  async delete(url) {
    const request = {
      method: "DELETE",
      headers: { "Content-type": "application/json" }
    };

    const resp = await fetch(url, request);
    return "Resource Deleted";
  }
}
