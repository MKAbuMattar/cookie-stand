'use strict';

/*
! Pat, IT'S NOT MY FRIEND
* the minimum number of customers per hour >> minNumOfCustomers
* the maximum number of customers per hour >> maxminNumOfCustomers
* the average number of cookies purchased per customer >> avg
* hours of operation per day >> hoursOfOperation // function tot 14h
  - shops open at 6am >> startTime
  - shops close at 8pm >> endTime
  - current time >> currentTime
  - work hours >> workHours
* calculate the total number of cookies >> calcTotal // function
*/

function getRandomNumber(minNumber, maxNumber)
{
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function hoursOfOperation(){
  let startTime = 6;
  let endTime = 9;
  let pm = false;
  let currentTime = startTime;

  let workHours = [];

  while(pm === false || currentTime < endTime)
  {
    if (pm === false && currentTime < 12)
    {
      workHours.push(currentTime + ':00am');
      currentTime++;
    }
    else if (pm === false && currentTime === 12)
    {
      pm = true;
      workHours.push(currentTime + ':00pm');
      currentTime = 1;
    }
    else
    {
      workHours.push(currentTime + ':00pm');
      currentTime++;
    }
  }

  return workHours;
}

const seattle = {
  branchLocation: 'Seattle',
  minNumOfCustomers: 23,
  maxminNumOfCustomers: 65,
  avg: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  cookiesPerOperation: [],
  totalCookiesPerDay: 0,
  getCustomersPerHour: function(){
    for(let i = 0; i < 15; i++)
    {
      this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
    }
  },
  getCookiesPerHour: function()
  {
    for(let i = 0; i < 15; i++)
    {
      let temp = this.customersPerHour[i] * this.avg;
      this.cookiesPerHour.push(Math.floor(temp));
    }
  },
  getCookiesPerOperation: function()
  {
    for(let i = 0; i < 15; i++)
    {
      this.cookiesPerOperation.push(`${hoursOfOperation()[i]}: ${this.cookiesPerHour[i]} cookies`);
    }
  },
  getTotalCookiesPerDay: function()
  {
    for(let i = 0; i < 15; i++)
    {
      this.totalCookiesPerDay += this.cookiesPerHour[i];
    }
  },
  render: function()
  {
    const container = document.getElementById('cookie-stand');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.branchLocation;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< this.cookiesPerOperation.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.cookiesPerOperation[i];
    }
    const pE1 = document.createElement('p');
    articleEl.appendChild(pE1);
    pE1.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  }
};

seattle.getCustomersPerHour();
seattle.getCookiesPerHour();
seattle.getCookiesPerOperation();
seattle.getTotalCookiesPerDay();
seattle.render();

const tokyo = {
  branchLocation: 'Tokyo',
  minNumOfCustomers: 3,
  maxminNumOfCustomers: 24,
  avg: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  cookiesPerOperation: [],
  totalCookiesPerDay: 0,
  getCustomersPerHour: function(){
    for(let i = 0; i < 15; i++)
    {
      this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
    }
  },
  getCookiesPerHour: function()
  {
    for(let i = 0; i < 15; i++)
    {
      let temp = this.customersPerHour[i] * this.avg;
      this.cookiesPerHour.push(Math.floor(temp));
    }
  },
  getCookiesPerOperation: function()
  {
    for(let i = 0; i < 15; i++)
    {
      this.cookiesPerOperation.push(`${hoursOfOperation()[i]}: ${this.cookiesPerHour[i]} cookies`);
    }
  },
  getTotalCookiesPerDay: function()
  {
    for(let i = 0; i < 15; i++)
    {
      this.totalCookiesPerDay += this.cookiesPerHour[i];
    }
  },
  render: function()
  {
    const container = document.getElementById('cookie-stand');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.branchLocation;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< this.cookiesPerOperation.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.cookiesPerOperation[i];
    }
    const pE1 = document.createElement('p');
    articleEl.appendChild(pE1);
    pE1.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  }
};

tokyo.getCustomersPerHour();
tokyo.getCookiesPerHour();
tokyo.getCookiesPerOperation();
tokyo.getTotalCookiesPerDay();
tokyo.render();

const dubai = {
  branchLocation: 'Dubai',
  minNumOfCustomers: 11,
  maxminNumOfCustomers: 38,
  avg: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  cookiesPerOperation: [],
  totalCookiesPerDay: 0,
  getCustomersPerHour: function(){
    for(let i = 0; i < 15; i++)
    {
      this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
    }
  },
  getCookiesPerHour: function()
  {
    for(let i = 0; i < 15; i++)
    {
      let temp = this.customersPerHour[i] * this.avg;
      this.cookiesPerHour.push(Math.floor(temp));
    }
  },
  getCookiesPerOperation: function()
  {
    for(let i = 0; i < 15; i++)
    {
      this.cookiesPerOperation.push(`${hoursOfOperation()[i]}: ${this.cookiesPerHour[i]} cookies`);
    }
  },
  getTotalCookiesPerDay: function()
  {
    for(let i = 0; i < 15; i++)
    {
      this.totalCookiesPerDay += this.cookiesPerHour[i];
    }
  },
  render: function()
  {
    const container = document.getElementById('cookie-stand');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.branchLocation;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< this.cookiesPerOperation.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.cookiesPerOperation[i];
    }
    const pE1 = document.createElement('p');
    articleEl.appendChild(pE1);
    pE1.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  }
};

dubai.getCustomersPerHour();
dubai.getCookiesPerHour();
dubai.getCookiesPerOperation();
dubai.getTotalCookiesPerDay();
dubai.render();

const paris = {
  branchLocation: 'Paris',
  minNumOfCustomers: 20,
  maxminNumOfCustomers: 38,
  avg: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  cookiesPerOperation: [],
  totalCookiesPerDay: 0,
  getCustomersPerHour: function(){
    for(let i = 0; i < 15; i++)
    {
      this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
    }
  },
  getCookiesPerHour: function()
  {
    for(let i = 0; i < 15; i++)
    {
      let temp = this.customersPerHour[i] * this.avg;
      this.cookiesPerHour.push(Math.floor(temp));
    }
  },
  getCookiesPerOperation: function()
  {
    for(let i = 0; i < 15; i++)
    {
      this.cookiesPerOperation.push(`${hoursOfOperation()[i]}: ${this.cookiesPerHour[i]} cookies`);
    }
  },
  getTotalCookiesPerDay: function()
  {
    for(let i = 0; i < 15; i++)
    {
      this.totalCookiesPerDay += this.cookiesPerHour[i];
    }
  },
  render: function()
  {
    const container = document.getElementById('cookie-stand');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.branchLocation;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< this.cookiesPerOperation.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.cookiesPerOperation[i];
    }
    const pE1 = document.createElement('p');
    articleEl.appendChild(pE1);
    pE1.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  }
};

paris.getCustomersPerHour();
paris.getCookiesPerHour();
paris.getCookiesPerOperation();
paris.getTotalCookiesPerDay();
paris.render();

const lima = {
  branchLocation: 'Lima',
  minNumOfCustomers: 2,
  maxminNumOfCustomers: 16,
  avg: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  cookiesPerOperation: [],
  totalCookiesPerDay: 0,
  getCustomersPerHour: function(){
    for(let i = 0; i < 15; i++)
    {
      this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
    }
  },
  getCookiesPerHour: function()
  {
    for(let i = 0; i < 15; i++)
    {
      let temp = this.customersPerHour[i] * this.avg;
      this.cookiesPerHour.push(Math.floor(temp));
    }
  },
  getCookiesPerOperation: function()
  {
    for(let i = 0; i < 15; i++)
    {
      this.cookiesPerOperation.push(`${hoursOfOperation()[i]}: ${this.cookiesPerHour[i]} cookies`);
    }
  },
  getTotalCookiesPerDay: function()
  {
    for(let i = 0; i < 15; i++)
    {
      this.totalCookiesPerDay += this.cookiesPerHour[i];
    }
  },
  render: function()
  {
    const container = document.getElementById('cookie-stand');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.branchLocation;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< this.cookiesPerOperation.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.cookiesPerOperation[i];
    }
    const pE1 = document.createElement('p');
    articleEl.appendChild(pE1);
    pE1.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  }
};

lima.getCustomersPerHour();
lima.getCookiesPerHour();
lima.getCookiesPerOperation();
lima.getTotalCookiesPerDay();
lima.render();
