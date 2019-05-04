// ES5 Object Oriented Library - use of Prototypes

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//// ERROR 1:  that <> this
//// MAKE and HTTP GET Request
//
easyHTTP.prototype.get = function(url) {
  this.http.open("GET", url, true);

  that = this;
  this.http.onload = function() {
    if ((this.http.status === 200)) {
      console.log(this.http.responseText);
    }
  };
  this.http.send();
};

// ERROR 2: no callback!
// MAKE and HTTP GET Request
//
// easyHTTP.prototype.get = function(url) {
//   this.http.open("GET", url, true);

//   that = this;
//   this.http.onload = function() {
//     if ((that.http.status = 200)) {
//       //
//       //console.log(that.http.responseText);
//       //
//       return that.http.responseText;
//     }
//   };
//   this.http.send();
// };

// THIRD and FINAL: with callback
//
/*
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  that = this;
  this.http.onload = function() {
    if ((that.http.status = 200)) {
      callback(that.http.responseText);
    }
  };
  this.http.send();
};
*/

// MAKE and HTTP POST Request
// MAKE and HTTP PUT Request
// MAKE and HTTP DELETE Request
