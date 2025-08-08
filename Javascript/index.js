// /*let name = 'John';
// let age = 25;
// let gpa = 2.1;

// console.log(`My name is ${name} and i am ${age} years old`)
// console.log(`My gpa is ${gpa}`)*/

// /*let firstname = 'Olomoal Praise';
// let age = 21;
// let student = true;
// document.getElementById("p1").textContent= `My name is ${firstname}`;
// document.getElementById("p2").textContent= `I am ${age} years old`;
// document.getElementById("p3").textContent= `Enrolled: ${student}`;*/
// //let students =30;
// /*students= students ** 3*/
// //let extrastudents = students % 3;
// //students += 1
// //students -= 1
// //students *= 2
// //students /= 2
// //students ** 2
// //students %= 2
// //students ++
// //students -- 
// //console.log(students)
// //let results = 1 + 2 * 3 + 4 ** 2
// //console.log(results)

//  //let username;
//  //username= window.prompt("what's your username")
//  //console.log(username)
// /* let username;
//  document.getElementById('Mybutton').onclick = function(){
//     username= document.getElementById('Mytext').value;
//     document.getElementById('H1').textContent = `Hello ${username}`
// }*/
// //let age = window.prompt('How old are you');
// //age= Number(age)
// //age+= 1
// //console.log(age)


// /*const pi =3.142;
// let radius;
// let circumference;


// document.getElementById('Submit').onclick= function(){
//    radius= document.getElementById('mytext').value
//    radius= Number(radius);
//    circumference=2*pi*radius
//    document.getElementById('myh3').textContent=circumference + 'cm';
// }*/




// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count =  0;

// increaseBtn.onclick = function(){
//     count+1;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count-1;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count=0;
//     countLabel.textContent = count;
// }

//console.log(Math.PI);
//console.log(Math.E);
//let x=-3.21;
//let y=2;
//let z;
//z= Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x,y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z=Math.sin(x);
//z=Math.cos(x);
//z=Math.tan(x);
//z=Math.abs(x);
//console.log(z);

// /*const myBtn = document.getElementById('myBtn');
// const label1 = document.getElementById('label1');
// const label2 = document.getElementById('label2');
// const label3= document.getElementById('label3');
// const min =1;
// const max =100;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myBtn.onclick = function(){
//     randomNum1 = Math.floor(Math.random()*max)*min;
//     randomNum2= Math.floor(Math.random()*max)*min;
//     randomNum3 = Math.floor(Math.random()*max)*min;
//     label1.textContent= randomNum1
//     label2.textContent= randomNum2
//     label3.textContent= randomNum3
// }

// const myText= document.getElementById("myText")
// const mySubmit= document.getElementById("mySubmit")
// const resultElement= document.getElementById("resultElement")
// let age;

// mySubmit.onclick= function(){

//     age = myText.value;
//     age = Number(age);

//  if(age >= 100){
//      resultElement.textContent="You are TOO OLD to enter this site";
// } 
// else if(age == 0){
//     resultElement.textContent="You can't enter. You were just born";
// }
// else if(age>=18){
//      resultElement.textContent="You  are old enough to enter this site";
// }
// else if(age <0 ){
//     resultElement.textContent = "Your age can't be below  0";
// }
// else{
//     resultElement.textContent="You must be 18+ to enter this site";
// }*/

// /*const myCheckbox = document.getElementById("myCheckbox");
// const VisaBtn = document.getElementById("VisaBtn");
// const Mastercard= document.getElementById("Mastercard");
// const Paypal = document.getElementById("Paypal");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick =function(){
//     if(myCheckbox.checked){
//          subResult.textContent ="You are subscribed!";
//     }
//     else{
//         subResult.textContent ="You are not subscribed!";
//     }
//     if(VisaBtn.checked){
//         paymentResult.textContent ="You are paying with visa!";
//     }
//     else if(Mastercard.checked){
//         paymentResult.textContent="You are paying with Mastercard!";
//     }
//     else if(Paypal.checked){
//         paymentResult.textContent="You are paying with Paypal!";
//     }
//     else{
//         paymentResult.textContent="You must select a payment method!";
//     }
// }

// let time=13;
// let Greeting = time<12? "Good Morning" : "Good Afternoon"
// console.log(Greeting)
//  let Day = 6;

//  if(Day==1){
//     console.log("It is Monday")
//  }
//  else if(Day==2){
//     console.log("It is Tuesday")
//  }
//  else if(Day==3){
//     console.log("It is Wednesday")
//  }
//  else if(Day==4){
//     console.log("It is Thursday")
//  }
//  else if(Day==5){
//     console.log("It is Friday")
//  }
//  else if(Day==6){
//     console.log("It is Saturday")
//  }
// else if(Day==7){
//     console.log("It is Sunday")
// }
//  else{
//   console.log(`${Day} is not a day`)
//  }
//   let phoneNumber= "123-4567-890;
//   phoneNumber = phoneNumber.replaceAll("-", "");
//   console.log(phoneNumber);

//   const gmail = "Bro123@gmail.com"
//  let username = gmail.slice(0, gmail.indexOf("@"))
//  console.log(username)

//  let username= window.prompt("Enter your username:")

//  username= username.trim();
//  let letter = username.charAt(0);
//  letter = letter.toUpperCase();

//  let extrachar=username.slice(1);
//  extrachar= extrachar.toLowerCase();

//  username= letter+extrachar
//  console.log(username)

//  let username= window.prompt("Enter your username:")

//  username= username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//  console.log(username)

//  const temp=20;

//  if(temp<=0 || temp>30){
//     console.log("The weather is Bad")
//  }
//   OR
//  else{
//     console.log("The weather is good")
//  }
//  const temp=20;

//  if(temp>0 && temp<=30){
//     console.log("The weather is Good")
//  }
//   AND
//  else{
//     console.log("The weather is Bad")
//  }

//     const isSunny= false;
//  if (!isSunny){
//     console.log("It's Cloudy")
//  }
//  NOT
//  else{
//     console.log("It's Sunny")
//  }
   
     
//     let loggedin= false;
//     let username;
//     let password;

//     while(!loggedin){
//         username=window.prompt("Enter your Username");
//         password=window.prompt("Enter your Password");
//         if(username === "Praise" && password === "Dammy0001@"){
//          loggedin = true;
//         console.log("You are Logged In");
//         }
//     else{
//           console.log("Inavlid Credentials. Please try again");
//        }
//     }

//        for(let i = 1 ; i<= 20; i++){

//         if(i == 13){
//             break;
//         }
//         else{
//              console.log(i);
//        }
//         }
//        console.log("HAPPY NEW YEAR!")

// const minNum=1;
// const maxNum=100;
// const answer=Math.floor(Math.random()*(maxNum - minNum +1));
//  console.log(answer)
 
//  let attempts = 0;
//  let guess;
//  let runing= true;

//  while(runing == true){
//       guess = window.prompt(`Guess the number between ${minNum} - ${maxNum}`);
//       guess = Number(guess);
        
//       if(isNaN(guess)){
//         window.alert(' Please enter a Vailid Number');
//       }
//       else if( guess < minNum || guess> maxNum){
//         window.alert(' Please enter a Vailid Number');
//       }
//       else{
//         attempts++;
//         if(guess< answer){
//             window.prompt("TO LOW!  TRY AGAIN");
//         }
//         else if(guess> answer){
//             window.prompt("TO HIGH! TRY AGAIN");
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
//              runing = false;
//         } 
//     }
//       }
//      let username;
//      let age;
//     username = window.prompt("Enter your name")
//     age = window.prompt(" Enter your age")
//      function happyBirthday(){
//             console.log("Happy Birthday to you!")
//             console.log("Happy Birthday to you!")
//             console.log(`Happy Birthday to you ${username}!`)
//             console.log("Happy Birthday to you!")
//             console.log(`i'm ${age} years old`)
//             console.log("Happy Birthday to you!")
//      }
//      happyBirthday();

//      function add(x, y){
//         return x+y;
//      }
//      function subtract(x, y){
//         return x-y;
//     }
//     function multiple(x, y){
//         return x*y;
//     }
//     function division(x, y){
//         return x/y;
//     }

// function isEven(number){
//     if(number%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
 
// function isValidEmail(email){
//    if(email.includes("@gmail.com")){
//     return true;
//    }
//    else{
//     return ('Enter a valid email')
//    }
// }
// console.log(isValidEmail("praiseolomola@gmail.com"))
 

// const textbox = document.getElementById("textbox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result= document.getElementById("result");
// let temp;
// function convert(){
   
//     if(toFahrenheit.checked){
//       temp= Number(textbox.value);
//       temp = temp * 9 / 5 + 32; 
//       result.textContent = temp.toFixed(1) + "•ϝ"
//     }
//     else if (toCelsius.checked){
//         temp= Number(textbox.value);
//       temp = temp * 5 / 9 - 32; 
//       result.textContent = temp + "•F"
//     }
//     else{
//         result.textContent= "Select a Unit "
//     }
// }*/
 
// // let fruits = ["apple","orange","banana"];

// // fruits.push("Coconut");

// // console.log(fruits[0]);
// // console.log(fruits[1]);
// // console.log(fruits[2]);
// // console.log(fruits[3]);

// // let firstname
// // let lastname
// //   firstname = window.prompt("Enter first name ")
// //   lastname = window.prompt("Enter last name")
// // let user = firstname + " " + lastname
// //  console.log(user)


// // let num = parseInt("500 Praise")
// console.log(num)

// let x= 7, y=4, z=4

// let num= x<y || x<z

// let num1= !num
// console.log(num1, num)

// let num1 = 10
// let num2 = 10
// let num3 = 10

// let result= num1>num2 && num1>num3
// if(result)
//   console.log("num1 is greater");
// else if(num2>num1 && num2> num3)
//    console.log("num2 is greater");
// else if(num3>num1 && num3> num2)
//    console.log("num3 is greater");
// else
//    console.log("They are equal");


// let num = 50

// let result 

// if(num%2===0)
// result= "Even"
// else
// result="Odd"
// console.log(result)


// let day = " Thursdays"

// switch(day){
//   case "Mondays":
//     console.log("7am");
//     break;
//   case "Tuesdays":
//   case "Wednesdays":
//   case "Thursdays":
//     console.log("4am");
//     break;
//   case "Fridays":
//     console.log("9am")
//     break;
//   case "Saturdays":
//   case "Sundays":
//     console.log("9am")
//     break;
//   default:
//     console.log("7am-YT Videos")


// let num1 =7
// let num2 =4
 
// let result = num1 + num2

// console.log(`The addition of ${num1} and ${num2} is ${result}`)

// console.log(`My name is 
// Olomola Praise`)

// for(p=1; p<=5;p++)
// {
//     console.log("Hi", p)
// for(i=1; i<=5; i++){
//     console.log("Hello", i)
// }
// }

// for(i=1; i<=100; i++){
//     if(i%3===0)
//         console.log(i)
// }

// let num=123456

// console.log(num%10)
// num= parseInt(num/10)
// console.log(num)
// console.log(num%10)
// num= parseInt(num/10)
// console.log(num)
// console.log(num%10)
// num= parseInt(num/10)
// console.log(num)

// let alpha= 987654321

// // while(alpha>0){
// //     console.log(alpha%10)
// //     alpha=parseInt(alpha/10)
// //         num=alpha
// //     console.log(num)
// // }
// let self ={
//     name: "Olomla Praise ",
//     school:"OAU",
//     complexion: "Black",
//     age:"21",
//     date_of_birth:"21/06/2004"
// }
// console.log(self.name,
//     self.school,
//     self.age, 
//     self .complexion)
 
// let self ={
//     name: "Olomla Praise ",
//     school:"OAU",
//     complexion: "Black",
//     age:"21",
//     date_of_birth:{
//         date:"21st",
//         month:"June",
//         year:"2004"
//     }

// }
// delete self.complexion
// console.log(self.name,
//     self.school,
//     self.age, 
//     self.complexion,
//         self.date_of_birth.date, self.date_of_birth.month, self.date_of_birth.year)

// // for(let p in self)
// //     console.log(p, self.date_of_birth)


// function greet(user)
// {
//     return `Hello ${user}`
// }
// let user = "Praise"
// let str = greet(user);
// console.log(str)

// let laptop2 = {
//     cpu: "19th Gen Intel Core i9",
//     ram: "16GB",
//     storage: "1TB HHD",
//     brand: "Aplle",

//     getconfig: function() {
//         console.log(this.cpu);
  
// }
// }

// let laptop1 = {
//     cpu: "19th Gen Intel Core i9",
//     ram: "16GB",
//     storage: "1TB SSD",
//     brand: "HP",

//     comapre: function(other) {
//         if (this.cpu > other.cpu )
//             console.log(this);
//         else {
//             console.log(other);
//         }
//     },

//     getconfig: function() {
//         console.log(this.cpu);
  
// }
// }
// laptop1.comapre(laptop2);

// function People(name, age, country){
//     this.name = name;
//     this.age = age;
//     this.country = country;

// }
// let person1 = new People("Praise", 21, "Nigeria");
// let person2 = new People("John", 25, "USA");
// let person3 = new  People("Marry", 30, "UK");

// person1.country = "canada";
// person1.name = "Jumoke";
// console.log(person1.name, person1.age, person1.country);
// console.log(person2.name, person2.age, person2.country);
// console.log(person3.name, person3.age, person3.country);


// let nums=[]
// nums[0]=5;
// nums[99]=9;

// for(let n of nums){
//     console.log(n);
// }

// let nums = [1,2,3,4,5,6,7,8,9,10];
// console.log(nums)
// let [a, b, c, d, e, f, g, h, i, j] = nums;
// console.log(a)

// let nums = [1,2,3,4,5,6,7,8,9,10];
// let [a, b, c, d, e, f, g, h, i, j] = nums;
// [a,b,c,d,e,f,g,h,i,j] = [j,i,h,g,f,e,d,c,b,a];
//  let newnums = [j,i,h,g,f,e,d,c,b,a];
// console.log(a, b, c, d, e, f, g, h, i, j);

// let nums = [1,2,3,4,5,6,7,8,9,10];
// nums.filter(n=> n%2===0)
//     .map(n=> n*2)
//     .forEach(n => {
//     console.log(n);
// }) 

// let nums=[1,2,3,4,5,6,7,8,9,10];

// let result = nums.filter(n=> n%2===0)
//     .map(n=> n*2)
//     .reduce((a,b) => a+b );

// console.log(result);


// let element = new Set();

// element.add(5);
// element.add(4);
// element.add(7);
// element.add(8);
// element.add(9);

// console.log(element.has(7))

//     element.forEach( n => {
//         console.log(n);
//     });\


// let map = new Map();

// map.set("Praise", "Javascript");
// map.set("Marry", "Python");
// map.set('Loveth', "HTML");
// map.set ('Loveth', "BLOCKCHAIN");

// for(let [k,v] of map){
//     console.log(k, ":", v)
// }

// console.log(map.has("Praise"))


// let num=1;
//  function show(){
//     console.log("Hi", num);
//     num++;
//     if(num <= 200);
//     show();
//  }

//  show();

// function fact(n){

//     if(n==0)
//       return 1;
//     else 
//         return n * fact(n-1);
 
// }

// let num = 5;
// let result = fact(num);
// console.log(result);

// for(i=0; i<=100; i++){
//     console.log('I LOVE YOU')
// }
// time = window.prompt("Enter the time in 24hr format");
// time = Number(time);



// const myinput = document.getElementById("myinput");
// const mybutton = document.getElementById("mybutton");
// const myresult = document.getElementById("myresult");
// let time;

// mybutton.onclick = function(){
//     time = myinput.value;
//     time = Number(time);

//     if(time <12 ){
//     myresult.textContent = "Good Morning";
// }
// else if (time >=12 && time < 17 ){
//   myresult.textContent = "Good Afternoon";
// }
// else if (time >= 17 && time < 20){
//     myresult.textContent = "Good Evening";
// }
// else if (time >= 20 && time <= 23){
//    myresult.textContent = "Good Night";
// }
// else{
//   myresult.textContent = "Invalid time";
// }
// }

// let lettergrades;
// let totalscore= window.prompt("Enter your total score");
// totalscore = Number(totalscore);
// {
//     switch(true){
//     case totalscore >=40 && totalscore <= 44:
//     lettergrades = "E";
//     break;

//     case totalscore >=45 && totalscore <49:
//     lettergrades = "D";
//     break;

//     case totalscore >=50 && totalscore <=59:
//     lettergrades = "C";
//     break;

//     case totalscore >=60 && totalscore <=69:
//     lettergrades = "B";
//     break;

//     case totalscore >=70 :
//     lettergrades = "A";
//     break;

//     default:
//         lettergrades = "F";
//         break;
// }

// }

// console.log(`You Total grade is ${lettergrades}`)

// let email = window.prompt("Enter your email");

// if(email.toLowerCase().endsWith("@gmail.com")){ 
//         window.alert("Valid email");
//     }
// else{
//     window.alert("InValid email. Enter a valid email");
// }
        

// let username = email.slice(0, email.indexOf("@"));
// let extension= email.slice( email.indexOf("@"));
// console.log(`Your username is ${username}`)
// console.log()

// let number = window.prompt("Enter a your numbebr")

// if (
//     (number.startsWith("080")||
//     number.startsWith("070")||
//     number.startsWith("090")||
//      number.startsWith("081")||
//     number.startsWith("091") 
// ) &&  
//     number.length === 11){
//     window.alert("Valid number");
//     let formatted = "+234" + number.slice(1);

//     if (formatted.length === 14 && formatted.startsWith("+234")) {
//         window.alert(` Valid phone number.\nFormatted: ${formatted}`);
//     } 
//     else {
//         window.alert(" Invalid phone number after formatting.");
//     }
//     console.log(`You register this ${formatted} number with us`)
// }
// else{
//     window.alert("Invalid number. Enter a valid 11-digit Nigerian phone number starting with 080, 070, 090, 081, or 091.");
//     console.log("Your number was not registered. Please try again with a valid number");
// }

// let Firstname = "Praise";
// let Lastname = "Olomola";


// let Nickname = Firstname.slice(0, 3) + Lastname.slice(0,3);
// console.log(`Yoour nickkname is ${Nickname}`)

// let Username = window.prompt ("Enter you Username");
// Username = Username.trim();
// let letter = Username.charAt(0);
// letter = letter.toUpperCase();

// let extrachar = Username.slice(1);
// extrachar = extrachar.toLowerCase();

// Username = letter + extrachar;
// console.log(`Your username iS ${Username}`)

// let username = window.prompt ("Enter you Username");
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username)

// const issunny =true ;
// if(!issunny){
//    ` console.log("It is Cloudy")`
// }
// else{
//      console.log("It is Sunny")}



// let loggedin =true;
// let username;
// let password;

// do{
//     username = window.prompt("Enter your Username");
//     password = window.prompt("Enter your Password");   
//     if(username === "username" && password === "password"){
//         loggedin = true;
//         console.log("You are Logged In")
//     }

//     else{
//         console.log("Invalid credentials. please try again");

//     }
// }
// while(!loggedin);

//  const minNum= 1;
//  const maxNum = 100;
//  const answer = Math.floor(Math.random()* (maxNum - minNum +1)) + minNum;

// let attempt = 0;
// let guess;
// let running = true;

// while(running){
//     guess= window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//     guess = Number(guess)

//     if(isNaN(guess)){
//         window.alert("Enter a vaild number")
//     }
//     else if( guess < minNum || guess > maxNum){
//         window.alert("Enter a vaild number")
//     }
//     else{
//         attempt++
//         if(guess < answer){
//             window.alert("Your guess too Low. Try again")
//         }
//         else if(guess > answer){
//             window.alert("Your guess too High. Try again")
//         }
//         else{
//             window.alert(`Correct! The answer was ${answer}. It took you ${attempt} attempt`)
//          running = false;
//         }
//     }
   
// }



