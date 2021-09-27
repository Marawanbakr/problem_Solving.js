const array_new = [];
const array_new_2 = [];
let frist_item = document.querySelector('td').textContent;
let cheeck = document.querySelectorAll('td');
for (i = 0; i < cheeck.length; i++) {
  let value = cheeck[i].textContent;
  let result = value.localeCompare(frist_item);
  if (result === 0) {
    array_new.push(value);
  } else if (result === 1) {
    array_new_2.push(value);
  }
}
let getnumber = document.querySelectorAll('td');
let pushNumber = [];
let covertToNumber;
for (i = 1; i < getnumber.length; i = i + 2) {
  covertToNumber = getnumber[i].textContent;
  parseInt(covertToNumber);
  pushNumber.push(parseInt(covertToNumber));
}

let collect = 0;
for (i = 0; i < pushNumber.length; i = i + 2) {
  collect += pushNumber[i];
}

let collect_2 = 0;
for (i = 1; i < pushNumber.length; i = i + 2) {
  collect_2 += pushNumber[i];
}
// create Mohamed elemnt and apped its to body
let get_one_elemnt = array_new.pop();
let get_second_elemnt = array_new_2.pop();

let createTable = document.createElement('table');
let createCaption = document.createElement('caption');
let createTbody = document.createElement('tbody');
let createTr = document.createElement('tr');
let createTd_1 = document.createElement('td');
let createTd_2 = document.createElement('td');
let Div = document.querySelector('div');
Div.appendChild(createTable);
createTable.appendChild(createCaption);
createTable.appendChild(createTbody);
createTbody.appendChild(createTr);
createTr.appendChild(createTd_1);
createTr.appendChild(createTd_2);
createCaption.innerHTML = 'Total Points';

// create Sayed elemnt and apped its to body
let createTr_2 = document.createElement('tr');
let createTd_3 = document.createElement('td');
let createTd_4 = document.createElement('td');
createTbody.appendChild(createTr_2);
createTr_2.appendChild(createTd_3);
createTr_2.appendChild(createTd_4);

// Show usernaem Mohamed
createTd_1.innerHTML = get_one_elemnt;
// collect number
createTd_2.innerHTML = collect;
// Show user Sayed
createTd_3.innerHTML = get_second_elemnt;
// collect number
createTd_4.innerHTML = collect_2;

// Start Style  Card
document.querySelector('div').style = [
  `
  background-color: rgb(238, 238, 238);
  width: 95%;
  height: 600px;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  `,
];
let alltable = document.querySelectorAll('table');
for (i = 0; i < alltable.length; i++) {
  alltable[i].style = [
    `
  width: 100%;
  padding-left: 30%;
  padding-right: 30%;
  
  `,
  ];
}
allTbody = document.querySelectorAll('tbody');
for (i = 0; i < alltable.length; i++) {
  allTbody[i].style.backgroundColor = '#fff';
}
allTr = document.querySelectorAll('td');
for (i = 0; i < allTr.length; i++) {
  allTr[i].style = [
    `
    padding:10px
  `,
  ];
}
// DONE
