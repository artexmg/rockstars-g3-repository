// // PROMISE
// let goalAchieved = confirm("Did you get the grades?");

// let willIGetMyNewCar = new Promise(myNewCarProm);

// function myNewCarProm(resolve, reject) {
//   if (goalAchieved) {
//     car = {
//       brand: "ferrari",
//       model: "488 GTB",
//       color: "red"
//     };
//     resolve(car);
//   } else {
//     reject("You got NOTHING!");
//   }
// }

// let askParent = function() {
//   willIGetMyNewCar
//     .then(function(myNewCar) {
//       //console.log(myNewCar);
//       document.body.innerHTML = `
//       Congratulations, you got a new car!
//         <li>${myNewCar.brand}</li>
//         <li>${myNewCar.color}</li>
//         <li>${myNewCar.model}</li>
//       `;
//     })
//     .catch(function(err) {
//       console.log(err);
//       document.body.innerHTML = `
//         ${err}, try harder next time!
//       `;
//     });
// };

// //askParent();

const myTweets = [
  {
    id: "101",
    account: "@LinusTorvald",
    body:
      "I've never told anyone this, but Tux is actually just a cat in a penguin costume",
    replays: 1,
    retweets: 120,
    likes: 3432
  },
  {
    id: "102",
    account: "@LinusTorvald",
    body:
      "Steve Jobs thought that eating organic foods stopped you from swating, and therefore never had a shower. He was wrong. No wonder Apple products stink",
    replays: 9,
    retweets: 1100,
    likes: 2100
  },
  {
    id: "103",
    account: "@LinusTorvald",
    body:
      "The fact I have got just under 400 followers in a week just confirms the theory that people love Linux, I guess",
    replays: 0,
    retweets: 102,
    likes: 33320
  }
];

tweet104 = {
  id: "104",
  account: "@LinusTorvald",
  body:
    "'Linux in the cloud' yet the cloud itself is running on Linux. Linuxception",
  replays: 1,
  retweets: 100,
  likes: 300
};

tweet105 = {
  id: "105",
  account: "@LinusTorvald",
  body:
    "You guys rdemember that time when Microsoft tried to contribute to the Linux kernel but got denied because their code wasn't good enough? Good times",
  replays: 112,
  retweets: 892,
  likes: 32123
};

function createTweet(newTweet) {
  return new Promise(function(resolve, reject) {
    let err = false;

    setTimeout(function() {
      myTweets.push(newTweet);

      if (!err) {
        resolve();
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}

function showTweets() {
  let output = "";

  myTweets.forEach(function(tweet) {
    output += `<li>${tweet.id} ${tweet.account} ${tweet.body}<li>`;
  });
  document.body.innerHTML = output;
}

createTweet(tweet104)
  .then(showTweets)
  .catch(function(error) {
    console.log(error);
  });

//createTweet(tweet104);
//showTweets();

// with callback
//createTweet(tweet104, showTweets);
