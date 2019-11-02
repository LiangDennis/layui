/**
 * 数据格式
  // "id": "1",
  // "username": "Dennis",
  // "age": "12",
  // "character": "凶狠",
  // "height": "190"
 */

let arr = [];

const names = ['a','d','e','s','e','s','i','o','n','f'];
const characters = ["温柔","诚实","善良","勤奋","凶狠"];

for (let index = 0; index < 100; index++) {
  let tempObj = {};
  tempObj.id = index+1;
  tempObj.username = 
    names[Math.floor(Math.random()*10)] +
    names[Math.floor(Math.random()*10)] +
    names[Math.floor(Math.random()*10)] +
    names[Math.floor(Math.random()*10)] +
    names[Math.floor(Math.random()*10)] +
    names[Math.floor(Math.random()*10)];
  tempObj.age = Math.floor(Math.random()*101);
  tempObj.character = characters[Math.floor(Math.random()*5)];
  tempObj.height = Math.floor(Math.random()*100+100);
  arr.push(tempObj);
}
// console.log(JSON.stringify(JSON.parse(arr)));
console.log(arr);