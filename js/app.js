'use strict';

// /*
// ! Pat, IT'S NOT MY FRIEND
// * the minimum number of customers per hour >> minNumOfCustomers
// * the maximum number of customers per hour >> maxminNumOfCustomers
// * the average number of cookies purchased per customer >> avg
// * hours of operation per day >> hoursOfOperation // function tot 14h
//   - shops open at 6am >> startTime
//   - shops close at 8pm >> endTime
//   - current time >> currentTime
//   - work hours >> workHours
// * calculate the total number of cookies >> calcTotal // function
// */

// function getRandomNumber(minNumber, maxNumber)
// {
//   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// }

// function hoursOfOperation(){
//   let startTime = 6;
//   let endTime = 9;
//   let pm = false;
//   let currentTime = startTime;

//   let workHours = [];

//   while(pm === false || currentTime < endTime)
//   {
//     if (pm === false && currentTime < 12)
//     {
//       workHours.push(currentTime + ':00am');
//       currentTime++;
//     }
//     else if (pm === false && currentTime === 12)
//     {
//       pm = true;
//       workHours.push(currentTime + ':00pm');
//       currentTime = 1;
//     }
//     else
//     {
//       workHours.push(currentTime + ':00pm');
//       currentTime++;
//     }
//   }

//   return workHours;
// }

// const seattle = {
//   branchLocation: 'Seattle',
//   minNumOfCustomers: 23,
//   maxminNumOfCustomers: 65,
//   avg: 6.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   cookiesPerOperation: [],
//   totalCookiesPerDay: 0,
//   getCustomersPerHour: function(){
//     for(let i = 0; i < 15; i++)
//     {
//       this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
//     }
//   },
//   getCookiesPerHour: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       let temp = this.customersPerHour[i] * this.avg;
//       this.cookiesPerHour.push(Math.floor(temp));
//     }
//   },
//   getCookiesPerOperation: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       this.cookiesPerOperation.push(`${hoursOfOperation()[i]}: ${this.cookiesPerHour[i]} cookies`);
//     }
//   },
//   getTotalCookiesPerDay: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       this.totalCookiesPerDay += this.cookiesPerHour[i];
//     }
//   },
//   render: function()
//   {
//     const container = document.getElementById('cookie-stand');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.branchLocation;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0; i< this.cookiesPerOperation.length; i++)
//     {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.cookiesPerOperation[i];
//     }
//     const pE1 = document.createElement('p');
//     articleEl.appendChild(pE1);
//     pE1.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
//   }
// };

// seattle.getCustomersPerHour();
// seattle.getCookiesPerHour();
// seattle.getCookiesPerOperation();
// seattle.getTotalCookiesPerDay();
// seattle.render();

// const tokyo = {
//   branchLocation: 'Tokyo',
//   minNumOfCustomers: 3,
//   maxminNumOfCustomers: 24,
//   avg: 1.2,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   cookiesPerOperation: [],
//   totalCookiesPerDay: 0,
//   getCustomersPerHour: function(){
//     for(let i = 0; i < 15; i++)
//     {
//       this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
//     }
//   },
//   getCookiesPerHour: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       let temp = this.customersPerHour[i] * this.avg;
//       this.cookiesPerHour.push(Math.floor(temp));
//     }
//   },
//   getCookiesPerOperation: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       this.cookiesPerOperation.push(`${hoursOfOperation()[i]}: ${this.cookiesPerHour[i]} cookies`);
//     }
//   },
//   getTotalCookiesPerDay: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       this.totalCookiesPerDay += this.cookiesPerHour[i];
//     }
//   },
//   render: function()
//   {
//     const container = document.getElementById('cookie-stand');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.branchLocation;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0; i< this.cookiesPerOperation.length; i++)
//     {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.cookiesPerOperation[i];
//     }
//     const pE1 = document.createElement('p');
//     articleEl.appendChild(pE1);
//     pE1.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
//   }
// };

// tokyo.getCustomersPerHour();
// tokyo.getCookiesPerHour();
// tokyo.getCookiesPerOperation();
// tokyo.getTotalCookiesPerDay();
// tokyo.render();

// const dubai = {
//   branchLocation: 'Dubai',
//   minNumOfCustomers: 11,
//   maxminNumOfCustomers: 38,
//   avg: 3.7,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   cookiesPerOperation: [],
//   totalCookiesPerDay: 0,
//   getCustomersPerHour: function(){
//     for(let i = 0; i < 15; i++)
//     {
//       this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
//     }
//   },
//   getCookiesPerHour: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       let temp = this.customersPerHour[i] * this.avg;
//       this.cookiesPerHour.push(Math.floor(temp));
//     }
//   },
//   getCookiesPerOperation: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       this.cookiesPerOperation.push(`${hoursOfOperation()[i]}: ${this.cookiesPerHour[i]} cookies`);
//     }
//   },
//   getTotalCookiesPerDay: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       this.totalCookiesPerDay += this.cookiesPerHour[i];
//     }
//   },
//   render: function()
//   {
//     const container = document.getElementById('cookie-stand');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.branchLocation;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0; i< this.cookiesPerOperation.length; i++)
//     {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.cookiesPerOperation[i];
//     }
//     const pE1 = document.createElement('p');
//     articleEl.appendChild(pE1);
//     pE1.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
//   }
// };

// dubai.getCustomersPerHour();
// dubai.getCookiesPerHour();
// dubai.getCookiesPerOperation();
// dubai.getTotalCookiesPerDay();
// dubai.render();

// const paris = {
//   branchLocation: 'Paris',
//   minNumOfCustomers: 20,
//   maxminNumOfCustomers: 38,
//   avg: 2.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   cookiesPerOperation: [],
//   totalCookiesPerDay: 0,
//   getCustomersPerHour: function(){
//     for(let i = 0; i < 15; i++)
//     {
//       this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
//     }
//   },
//   getCookiesPerHour: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       let temp = this.customersPerHour[i] * this.avg;
//       this.cookiesPerHour.push(Math.floor(temp));
//     }
//   },
//   getCookiesPerOperation: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       this.cookiesPerOperation.push(`${hoursOfOperation()[i]}: ${this.cookiesPerHour[i]} cookies`);
//     }
//   },
//   getTotalCookiesPerDay: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       this.totalCookiesPerDay += this.cookiesPerHour[i];
//     }
//   },
//   render: function()
//   {
//     const container = document.getElementById('cookie-stand');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.branchLocation;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0; i< this.cookiesPerOperation.length; i++)
//     {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.cookiesPerOperation[i];
//     }
//     const pE1 = document.createElement('p');
//     articleEl.appendChild(pE1);
//     pE1.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
//   }
// };

// paris.getCustomersPerHour();
// paris.getCookiesPerHour();
// paris.getCookiesPerOperation();
// paris.getTotalCookiesPerDay();
// paris.render();

// const lima = {
//   branchLocation: 'Lima',
//   minNumOfCustomers: 2,
//   maxminNumOfCustomers: 16,
//   avg: 4.6,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   cookiesPerOperation: [],
//   totalCookiesPerDay: 0,
//   getCustomersPerHour: function(){
//     for(let i = 0; i < 15; i++)
//     {
//       this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
//     }
//   },
//   getCookiesPerHour: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       let temp = this.customersPerHour[i] * this.avg;
//       this.cookiesPerHour.push(Math.floor(temp));
//     }
//   },
//   getCookiesPerOperation: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       this.cookiesPerOperation.push(`${hoursOfOperation()[i]}: ${this.cookiesPerHour[i]} cookies`);
//     }
//   },
//   getTotalCookiesPerDay: function()
//   {
//     for(let i = 0; i < 15; i++)
//     {
//       this.totalCookiesPerDay += this.cookiesPerHour[i];
//     }
//   },
//   render: function()
//   {
//     const container = document.getElementById('cookie-stand');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.branchLocation;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0; i< this.cookiesPerOperation.length; i++)
//     {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.cookiesPerOperation[i];
//     }
//     const pE1 = document.createElement('p');
//     articleEl.appendChild(pE1);
//     pE1.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
//   }
// };

// lima.getCustomersPerHour();
// lima.getCookiesPerHour();
// lima.getCookiesPerOperation();
// lima.getTotalCookiesPerDay();
// lima.render();

function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

let workHours = hoursOfOperation();

function hoursOfOperation() {
  let startTime = 6;
  let endTime = 9;
  let pm = false;
  let currentTime = startTime;

  let workHours = [];

  while (pm === false || currentTime < endTime) {
    if (pm === false && currentTime < 12) {
      workHours.push(currentTime + ':00am');
      currentTime++;
    } else if (pm === false && currentTime === 12) {
      pm = true;
      workHours.push(currentTime + ':00pm');
      currentTime = 1;
    } else {
      workHours.push(currentTime + ':00pm');
      currentTime++;
    }
  }

  return workHours;
}

let Store = function (location, minNumOfCustomers, maxminNumOfCustomers, averageCookiesPerCustomer) {
  this.location = location;
  this.minNumOfCustomers = minNumOfCustomers;
  this.maxminNumOfCustomers = maxminNumOfCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPerDay = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesPerDay = 0;
};

Store.prototype.getCustomersPerHour = function () {
  for (let i = 0; i < workHours.length; i++) {
    this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
  }
};

Store.prototype.getCookiesPerHour = function () {
  for (let i = 0; i < workHours.length; i++) {
    let temp = this.customersPerHour[i] * this.averageCookiesPerCustomer;
    this.cookiesPerHour.push(Math.floor(temp));
  }
};

Store.prototype.getTotalCookiesPerDay = function () {
  for (let i = 0; i < workHours.length; i++) {
    this.totalCookiesPerDay += this.cookiesPerHour[i];
  }
};

let renderHeader = function () {
  const container = document.getElementById('sales-Table');
  const trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (let i = 0; i < workHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = workHours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  container.appendChild(trEl);
};

let eachHoursTotals = [];

for (let i = 0; i < workHours.length; i++) {
  eachHoursTotals.push(0);
}

Store.prototype.render = function () {
  const container = document.getElementById('sales-Table');
  const trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  container.appendChild(trEl);
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (let i = 0; i < workHours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
    eachHoursTotals[i] += this.cookiesPerHour[i];
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdEl);
};

function calculateTotal() {
  let dailyTotal = 0;
  for (let i = 0; i < eachHoursTotals.length; i++) {
    dailyTotal += eachHoursTotals[i];
  }
  return dailyTotal;
}

let renderFooter = function () {
  const container = document.getElementById('sales-Table');
  const trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for (let i = 0; i < eachHoursTotals.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = eachHoursTotals[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = calculateTotal();
  trEl.appendChild(tdEl);
  container.appendChild(trEl);
};

const seattle = new Store('Seattle', 23, 65, 6.3);
seattle.getCustomersPerHour();
seattle.getCookiesPerHour();
seattle.getTotalCookiesPerDay();

const tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.getCustomersPerHour();
tokyo.getCookiesPerHour();
tokyo.getTotalCookiesPerDay();

const dubai = new Store('Dubai', 11, 38, 3.7);
dubai.getCustomersPerHour();
dubai.getCookiesPerHour();
dubai.getTotalCookiesPerDay();

const paris = new Store('Paris', 20, 38, 2.3);
paris.getCustomersPerHour();
paris.getCookiesPerHour();
paris.getTotalCookiesPerDay();

const lima = new Store('Lima', 2, 16, 4.6);
lima.getCustomersPerHour();
lima.getCookiesPerHour();
lima.getTotalCookiesPerDay();

renderHeader();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

renderFooter();
