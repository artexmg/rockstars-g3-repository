function easyHTTP() {
  this.http = new XMLHttpRequest();
}
// MAKE an HTTP GET Resquest
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  that = this;

  this.http.onload = function() {
    if (that.http.status === 200) {
      callback(null, that.http.responseText);
    } else {
      callback(new Error("easy HTTP ERROR " + that.http.status));
    }
  };
  this.http.send();
};

// MAKE an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let that = this;
  this.http.onload = function() {
    callback(null, that.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// MAKE an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let that = this;
  this.http.onload = function() {
    callback(null, that.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// MAKE an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);

  that = this;

  this.http.onload = function() {
    if (that.http.status === 200) {
      callback(null, "MSG DELETED");
    } else {
      callback(new Error("easy HTTP ERROR " + that.http.status));
    }
  };
  this.http.send();
};
