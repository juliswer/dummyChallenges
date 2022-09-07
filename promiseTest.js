const globalUser = {
  name: "John",
  surname: "Doe",
  username: "jhondoe123",
};

const talk = (text) => {
  const toUppper = text.toUpperCase();
  return toUppper;
};

function getTheNumber(num) {
  let testPromise = new Promise(function (resolve, reject) {
    if (num === 2) {
      const result = talk("that was nice");
      const bodyAnswer = {
        status: 200,
        username: globalUser.username,
        text: result,
      };
      resolve(bodyAnswer);
    } else {
      const result = talk("something went wrong");
      const bodyAnswer = {
        status: 500,
        name: `${globalUser.name} ${globalUser.surname}`,
        date: `${new Date().toLocaleDateString()}`,
        text: result,
      };
      reject(bodyAnswer);
    }
  });
  return testPromise;
}
getTheNumber(2)
  .then(function (x) {
    console.log(x);
  })
  .catch(function (err) {
    console.log(err);
  });
