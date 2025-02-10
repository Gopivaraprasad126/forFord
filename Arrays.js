//differnt types of data...
let names = ['gopi','ashok','ch'];
console.log(names[1]);  

let data = ["Ashok",6,{tech:'bank'},
    function(){
        console.log("this is in Arrayfunction")
    }

]

console.log(data );

//Array methods in JS
/*>Shift
>Unshift
>Push
>Pop
*/
//what is >splice 
let num =[6,3,5,6,8,90];
console.log(num.splice(3,1,26,22));

console.log(num);
  

//for in Loop , For of Loop|

let nums = [];
nums[0] =5;
nums[99] = 9;
console.log(nums)