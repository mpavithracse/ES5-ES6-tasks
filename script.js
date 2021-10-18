const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

 // Task 1
// Print the name list - As an array

const PrintNameList = scores.map(({name})=>name);
console.log(PrintNameList);

//Task 2
// >=40 pass.. find those student that passed

const PassedStudent = scores.filter(({marks}) => marks >=40);
console.log(PassedStudent.map(({name}) =>name));

// Task 3
//  Find all the names who failed the exams (Array methods)

const FailedStudent = scores.filter(({marks}) => marks < 40);
console.log(FailedStudent.map(({name}) =>name));

// Task 4
// Find the Average marks

const total = scores.reduce((init,{marks}) => init +  marks, 0);
const avg = total/scores.length
console.log(avg);

// Task 5
// Find the topper's name
// Expected Output
// "Debra Beard"

// Only use
// map, reduce, filter & destructuring

const topper_mark =scores.reduce((acc, {marks}) => acc = acc > marks ? acc : marks,0);


console .log(scores.filter(({marks}) => marks === topper_mark)[0].name);

// Task 6 - use es6
// Build -  intersection, uniq, without, groupBy
// https://lodash.com/docs/4.17.15#groupBy

const arr1 = [1, 2, 3, 4, 5, 53, 67, 33, 77, 2, 3,4];
const arr2 = [2, 3, 55, 53, 67, 44, 65, 58];

//intersection

const intersection1 = arr1.filter(elt=>arr2.includes(elt));
console.log(intersection1);

//without

const  without  = (arr,...removeelmts)=> arr.filter(num=>!removeelmts.includes(num));
console.log(without(arr1,1,2,4))

//uniq

const uniq = arr1.filter((value,index)=>arr1.indexOf(value)==index);
console.log(uniq);

//groupBy

const even = arr1.filter(val=>val%2==0);
console.log(even);

