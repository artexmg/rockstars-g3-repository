/*
let promiseToCleanMyRoom = new Promise(promiseHandler);

function promiseHandler(resolve, reject) {
  const clean = true;
  if (clean) {
    resolve("room is clean");
  } else {
    reject("room is dirty and nasty!");
  }
}

promiseToCleanMyRoom.then(success).catch(noSuccess);

function success(output) {
  console.log(output);
}

function noSuccess(output) {
  console.log(output);
}
*/
clean = false;

let promiseToCleanMyRoom = new Promise(function(resolve, reject) {
  if (clean) {
    resolve("room is clean");
  } else {
    reject("room is dirty and nasty!");
  }
});

promiseToCleanMyRoom
  .then(function(output) {
    console.log(output);
  })
  .catch(function(output) {
    console.log(output);
  });
