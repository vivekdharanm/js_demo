// console.log("Java Script")

// console.log(69);
// console.log("Sixty Nine");
// console.log(10>20);
// console.log("10"+20);
// console.log({"name":"kumar","age":20});
// console.table({"name":"kumar","age":20});
// console.error("Error");
// console.warn("Warning");
// console.time();
// for(i=0;i<=10;i++)
//     console.log(i);
// console.timeEnd();
// console.clear();

// let a=10;
// console.log(a, typeof a)
// a=a.toString()
// console.log(a, typeof a)
// a=parseInt(a);
// console.log(a, typeof a)

// a="name"
// console.log(a, typeof a)
// a=parseInt(a);
// console.log(a, typeof a)

// const stud={"name":"kumar","age":12};
// console.table(stud);
// console.log(stud.name);
// stud.name="ravi";
// console.log(stud);

// let a=10;
// let b=2;
// let c;
// c=a+b;
// c=a-b;
// c=a/b;
// c=a*b;
// c=a%b;
// c=++a;
// c=--b;
// console.log(c);

// a=10;
// a+=5;
// a-=5;
// a*=5;
// a/=5;
// a%=5;
// console.log(a);

// let a=20;
// let b="20";
// console.log(a===b);
// console.log(a==b);
// console.log(a!=b);

// let a=10;
// let b=20;
// console.log(a>b) 
// console.log(a<b)
// console.log(a<=b)
// console.log(a>=b)

// let m=45;
// console.log(m>=35 && m<=100);
// let m1=2;
// console.log(m1==2 || m==20);
// a=false;
// console.log(!a);

// const a=23;
// const result=a>=18?"eligible":"not eligible";
// console.log(result);

// function welcome(name)
// {
//     const result=name?name:"Not Found";
//     console.log("your name:"+result);
// }
// welcome();
// welcome(null);
// welcome('kumar');


// user={'name':'kumari','age':25};
// console.table(user);
// console.log(user.name);


// const greeting=(user)=>
// {
//     const name=user.name?user.name:"not found";
//     return "Hello "+name;
// }
// console.log(greeting(user));


// const avg=70;
// const grade=avg>=90?"A Grade":avg>=80?"B Grade":"C Grade";
// console.log("Grade : ",grade);


// const num = (a,b) => a+b;
// console.log(num(10,20));


// let numbers = [1,2,3,4,5,6];
// let mapNumbers = numbers.map(number=>number*2);
// console.log(mapNumbers)


// let words = ['Abinaya', 'bala', 'chaitra', 'dhivyaa', 'elakkiyaa'];
// let filterWords = words.filter(word=>word.length>5);
// console.log(filterWords);

// let numbers = [1,2,3,4,5,6];
// console.log(numbers);
// let total = numbers.reduce((sum,number)=>sum+number,0);
// console.log(total);

// let createCounter = () => {
//     let count=0;
//     return ()=>{
//         count++;
//         return count;
//     }
// }

// let counter = createCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// function myCallback()
// {
//     console.log("Function.");
// }

// function higherOrderFunction(myCallback)
// {
//     myCallback();
// }
// higherOrderFunction(myCallback);

// setTimeout(function(){
//     console.log("5 Secs Delay.")
// },5000)

// setInterval(function(){
//     console.log("Looping...")
// },5000)

// let array=[1,2,3,4,5,6];
// console.log(array);
// console.table(array);

// const nums = [1,2,3,4,5,6];
// console.log(nums);
// nums.forEach((val)=>{
//     console.log(val)
// });

// const users = [
//     {fname:"Rajan", age:36, city:"Vada Chennai", occupation:"Leader"},
//     {fname:"Senthil", age:34, city:"Vada Chennai", occupation:"Gangster"},
//     {fname:"Gunaa", age:34, city:"Vada Chennai", occupation:"Politician"},
//     {fname:"Velu", age:33, city:"Vada Chennai", occupation:"Assistant"},
//     {fname:"Anbu", age:30, city:"Vada Chennai", occupation:"Stalker"},
// ];
// console.table(users);
// users.forEach((value)=>{
//     console.log(value.fname);
// });
// setTimeout(()=>{
//     users.forEach(value=>{
//         console.log(value.fname);
//     });
// },4000);
// setInterval(()=>{
//     users.forEach(value=>{
//         console.log(value.fname);
//     });
// },6000);

// const fnames = ['appii', 'orgii', 'grapii', 'mangii', 'pomeii'];
// fnames.forEach(fname=>console.log(fname));

const nums = [1,2,3,4,5,6];

// let total=0;
// nums.forEach(val=>{
//     total+=val;
// });
// console.log(total);

// const douNumbs = [];
// nums.forEach(val=>{
//     douNumbs.push(val*2)
// })
// console.log(douNumbs)

// console.log(nums);
// let max = nums[0];
// nums.forEach(num=>{
//     if(num>max)
//     {
//         max=num;
//     }
// });
// console.log(max);
