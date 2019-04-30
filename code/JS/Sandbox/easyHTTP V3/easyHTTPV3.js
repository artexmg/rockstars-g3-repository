class EasyHTTP {
  // Make GET HTTP Request
  async get(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  }

  async post(url, postData) {
    const requestPackage = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(postData)
    };

    const resp = await fetch(url, requestPackage);
    const data = await resp.json();
    return data;
  }
  // PUT REQUEST
  async put(url, postData) {
    const requestPackage = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(postData)
    };

    const resp = await fetch(url, requestPackage);
    const data = await resp.json();
    return data;
  }
  //DELETE REQUEST
  async delete(url) {
    const resp = await fetch(url);
    return "Record Deleted";
  }

  // Class EasyHTTP
}
