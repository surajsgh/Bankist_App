'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((value, key) => {
    const type = value < 0 ? `withdrawal` : `deposit`;

    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      key + 1
    } ${type}</div>
                    <div class="movements__value">${value}</div></div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const nameAccount = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word[0];
      })
      .join('');
  });
};
nameAccount(accounts);
console.log(accounts);
/*
const userNameHack = function (user) {
  const userName = user
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word[0];
    })
    .join('');
  return userName;
};
console.log(userNameHack('Steven Thomas Williams'));
*/
// const user = 'Steven Thomas Williams';

// console.log(userName);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('----------------For-of loop---------------');
for (let [index, movement] of movements.entries()) {
  if (movement < 0) {
    console.log(
      `Movement ${index + 1} : You withdrew the amount of ${Math.abs(movement)}`
    );
  } else {
    console.log(
      `Movement ${index + 1} : You deposited the amount of ${movement}`
    );
  }
}

console.log('-------------For-each loop----------------');
movements.forEach((element, index, array) => {
  if (element < 0) {
    console.log(
      `Movement ${index + 1} : You withdrew the amount of ${Math.abs(element)}`
    );
  } else {
    console.log(
      `Movement ${index + 1} : You deposited the amount of ${element}`
    );
  }
});
/////////////////////////////////////////////////


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});

const set = new Set(['USD', 'INR', 'EUR', 'USD', 'INR']);
console.log(set);
set.forEach((value, _, set) => {
  console.log(`${value} : ${value}`);
});
*/

////////////////////////////////////////////////////

// Problem-Solving Framework
// 1. Crate a function checkDogs with two input arrays showing Julia's and Kate's data.
// 2. Since, some of Julia's array data contain the records of cats, You have to create a shallow copy of that array and remove the cats' data from that copied array.
// 3. Create a joined array from both Julia's and Kate's data.
// 4. For the remaining data remained inside the joined array, log the output.
// 5. Run the function for both the datasets.
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopied = dogsJulia.slice(1, -2);
  const joinedData = [...dogsJuliaCopied, ...dogsKate];
  console.log(joinedData);
  joinedData.forEach((age, index) => {
    if (age < 3) {
      console.log(`Dog number ${index + 1} is still a puppy.`);
    } else {
      console.log(`Dog number ${index + 1} is an adult.`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const dogsJulia = [3, 5, 2, 12, 7];
// const data = dogsJulia.slice(1, -2);
// console.log(data);

const eurToUSD = 1.1;
const convertToUSD = account1.movements.map(function (movement) {
  return movement * eurToUSD;
});

console.log(account1.movements);
console.log(convertToUSD);
// convertToUSD();

*/
