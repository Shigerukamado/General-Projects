// // // // // // // // /*let name = 'John';
// // // // // // // // let age = 25;
// // // // // // // // let gpa = 2.1;

// // // // // // // // console.log(`My name is ${name} and i am ${age} years old`)
// // // // // // // // console.log(`My gpa is ${gpa}`)*/

// // // // // // // // /*let firstname = 'Olomoal Praise';
// // // // // // // // let age = 21;
// // // // // // // // let student = true;
// // // // // // // // document.getElementById("p1").textContent= `My name is ${firstname}`;
// // // // // // // // document.getElementById("p2").textContent= `I am ${age} years old`;
// // // // // // // // document.getElementById("p3").textContent= `Enrolled: ${student}`;*/
// // // // // // // // //let students =30;
// // // // // // // // /*students= students ** 3*/
// // // // // // // // //let extrastudents = students % 3;
// // // // // // // // //students += 1
// // // // // // // // //students -= 1
// // // // // // // // //students *= 2
// // // // // // // // //students /= 2
// // // // // // // // //students ** 2
// // // // // // // // //students %= 2
// // // // // // // // //students ++
// // // // // // // // //students -- 
// // // // // // // // //console.log(students)
// // // // // // // // //let results = 1 + 2 * 3 + 4 ** 2
// // // // // // // // //console.log(results)

// // // // // // // //  //let username;
// // // // // // // //  //username= window.prompt("what's your username")
// // // // // // // //  //console.log(username)
// // // // // // // // /* let username;
// // // // // // // //  document.getElementById('Mybutton').onclick = function(){
// // // // // // // //     username= document.getElementById('Mytext').value;
// // // // // // // //     document.getElementById('H1').textContent = `Hello ${username}`
// // // // // // // // }*/
// // // // // // // // //let age = window.prompt('How old are you');
// // // // // // // // //age= Number(age)
// // // // // // // // //age+= 1
// // // // // // // // //console.log(age)


// // // // // // // // /*const pi =3.142;
// // // // // // // // let radius;
// // // // // // // // let circumference;


// // // // // // // // document.getElementById('Submit').onclick= function(){
// // // // // // // //    radius= document.getElementById('mytext').value
// // // // // // // //    radius= Number(radius);
// // // // // // // //    circumference=2*pi*radius
// // // // // // // //    document.getElementById('myh3').textContent=circumference + 'cm';
// // // // // // // // }*/




// // // // // // // // /*const decreaseBtn = document.getElementById("decreaseBtn");
// // // // // // // // const resetBtn = document.getElementById("resetBtn");
// // // // // // // // const increaseBtn = document.getElementById("increaseBtn");
// // // // // // // // const countLabel = document.getElementById("countLabel");
// // // // // // // // let count =  0;

// // // // // // // // increaseBtn.onclick = function(){
// // // // // // // //     count+1;
// // // // // // // //     countLabel.textContent = count;
// // // // // // // // }
// // // // // // // // decreaseBtn.onclick = function(){
// // // // // // // //     count-1;
// // // // // // // //     countLabel.textContent = count;
// // // // // // // // }
// // // // // // // // resetBtn.onclick = function(){
// // // // // // // //     count=0;
// // // // // // // //     countLabel.textContent = count;
// // // // // // // // }*/

// // // // // // // // //console.log(Math.PI);
// // // // // // // // //console.log(Math.E);
// // // // // // // // //let x=-3.21;
// // // // // // // // //let y=2;
// // // // // // // // //let z;
// // // // // // // // //z= Math.round(x);
// // // // // // // // //z = Math.floor(x);
// // // // // // // // //z = Math.ceil(x);
// // // // // // // // //z = Math.trunc(x);
// // // // // // // // //z = Math.pow(x,y);
// // // // // // // // //z = Math.sqrt(x);
// // // // // // // // //z = Math.log(x);
// // // // // // // // //z=Math.sin(x);
// // // // // // // // //z=Math.cos(x);
// // // // // // // // //z=Math.tan(x);
// // // // // // // // //z=Math.abs(x);
// // // // // // // // //console.log(z);

// // // // // // // // /*const myBtn = document.getElementById('myBtn');
// // // // // // // // const label1 = document.getElementById('label1');
// // // // // // // // const label2 = document.getElementById('label2');
// // // // // // // // const label3= document.getElementById('label3');
// // // // // // // // const min =1;
// // // // // // // // const max =100;
// // // // // // // // let randomNum1;
// // // // // // // // let randomNum2;
// // // // // // // // let randomNum3;

// // // // // // // // myBtn.onclick = function(){
// // // // // // // //     randomNum1 = Math.floor(Math.random()*max)*min;
// // // // // // // //     randomNum2= Math.floor(Math.random()*max)*min;
// // // // // // // //     randomNum3 = Math.floor(Math.random()*max)*min;
// // // // // // // //     label1.textContent= randomNum1
// // // // // // // //     label2.textContent= randomNum2
// // // // // // // //     label3.textContent= randomNum3
// // // // // // // // }

// // // // // // // // const myText= document.getElementById("myText")
// // // // // // // // const mySubmit= document.getElementById("mySubmit")
// // // // // // // // const resultElement= document.getElementById("resultElement")
// // // // // // // // let age;

// // // // // // // // mySubmit.onclick= function(){

// // // // // // // //     age = myText.value;
// // // // // // // //     age = Number(age);

// // // // // // // //  if(age >= 100){
// // // // // // // //      resultElement.textContent="You are TOO OLD to enter this site";
// // // // // // // // } 
// // // // // // // // else if(age == 0){
// // // // // // // //     resultElement.textContent="You can't enter. You were just born";
// // // // // // // // }
// // // // // // // // else if(age>=18){
// // // // // // // //      resultElement.textContent="You  are old enough to enter this site";
// // // // // // // // }
// // // // // // // // else if(age <0 ){
// // // // // // // //     resultElement.textContent = "Your age can't be below  0";
// // // // // // // // }
// // // // // // // // else{
// // // // // // // //     resultElement.textContent="You must be 18+ to enter this site";
// // // // // // // // }*/

// // // // // // // // /*const myCheckbox = document.getElementById("myCheckbox");
// // // // // // // // const VisaBtn = document.getElementById("VisaBtn");
// // // // // // // // const Mastercard= document.getElementById("Mastercard");
// // // // // // // // const Paypal = document.getElementById("Paypal");
// // // // // // // // const mySubmit = document.getElementById("mySubmit");
// // // // // // // // const subResult = document.getElementById("subResult");
// // // // // // // // const paymentResult = document.getElementById("paymentResult");

// // // // // // // // mySubmit.onclick =function(){
// // // // // // // //     if(myCheckbox.checked){
// // // // // // // //          subResult.textContent ="You are subscribed!";
// // // // // // // //     }
// // // // // // // //     else{
// // // // // // // //         subResult.textContent ="You are not subscribed!";
// // // // // // // //     }
// // // // // // // //     if(VisaBtn.checked){
// // // // // // // //         paymentResult.textContent ="You are paying with visa!";
// // // // // // // //     }
// // // // // // // //     else if(Mastercard.checked){
// // // // // // // //         paymentResult.textContent="You are paying with Mastercard!";
// // // // // // // //     }
// // // // // // // //     else if(Paypal.checked){
// // // // // // // //         paymentResult.textContent="You are paying with Paypal!";
// // // // // // // //     }
// // // // // // // //     else{
// // // // // // // //         paymentResult.textContent="You must select a payment method!";
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // let time=13;
// // // // // // // // let Greeting = time<12? "Good Morning" : "Good Afternoon"
// // // // // // // // console.log(Greeting)
// // // // // // // //  let Day = 6;

// // // // // // // //  if(Day==1){
// // // // // // // //     console.log("It is Monday")
// // // // // // // //  }
// // // // // // // //  else if(Day==2){
// // // // // // // //     console.log("It is Tuesday")
// // // // // // // //  }
// // // // // // // //  else if(Day==3){
// // // // // // // //     console.log("It is Wednesday")
// // // // // // // //  }
// // // // // // // //  else if(Day==4){
// // // // // // // //     console.log("It is Thursday")
// // // // // // // //  }
// // // // // // // //  else if(Day==5){
// // // // // // // //     console.log("It is Friday")
// // // // // // // //  }
// // // // // // // //  else if(Day==6){
// // // // // // // //     console.log("It is Saturday")
// // // // // // // //  }
// // // // // // // // else if(Day==7){
// // // // // // // //     console.log("It is Sunday")
// // // // // // // // }
// // // // // // // //  else{
// // // // // // // //   console.log(`${Day} is not a day`)
// // // // // // // //  }
// // // // // // // //   let phoneNumber= "123-4567-890;
// // // // // // // //   phoneNumber = phoneNumber.replaceAll("-", "");
// // // // // // // //   console.log(phoneNumber);

// // // // // // // //   const gmail = "Bro123@gmail.com"
// // // // // // // //  let username = gmail.slice(0, gmail.indexOf("@"))
// // // // // // // //  console.log(username)

// // // // // // // //  let username= window.prompt("Enter your username:")

// // // // // // // //  username= username.trim();
// // // // // // // //  let letter = username.charAt(0);
// // // // // // // //  letter = letter.toUpperCase();

// // // // // // // //  let extrachar=username.slice(1);
// // // // // // // //  extrachar= extrachar.toLowerCase();

// // // // // // // //  username= letter+extrachar
// // // // // // // //  console.log(username)

// // // // // // // //  let username= window.prompt("Enter your username:")

// // // // // // // //  username= username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// // // // // // // //  console.log(username)

// // // // // // // //  const temp=20;

// // // // // // // //  if(temp<=0 || temp>30){
// // // // // // // //     console.log("The weather is Bad")
// // // // // // // //  }
// // // // // // // //   OR
// // // // // // // //  else{
// // // // // // // //     console.log("The weather is good")
// // // // // // // //  }
// // // // // // // //  const temp=20;

// // // // // // // //  if(temp>0 && temp<=30){
// // // // // // // //     console.log("The weather is Good")
// // // // // // // //  }
// // // // // // // //   AND
// // // // // // // //  else{
// // // // // // // //     console.log("The weather is Bad")
// // // // // // // //  }

// // // // // // // //     const isSunny= false;
// // // // // // // //  if (!isSunny){
// // // // // // // //     console.log("It's Cloudy")
// // // // // // // //  }
// // // // // // // //  NOT
// // // // // // // //  else{
// // // // // // // //     console.log("It's Sunny")
// // // // // // // //  }
   
     
// // // // // // // //     let loggedin= false;
// // // // // // // //     let username;
// // // // // // // //     let password;

// // // // // // // //     while(!loggedin){
// // // // // // // //         username=window.prompt("Enter your Username");
// // // // // // // //         password=window.prompt("Enter your Password");
// // // // // // // //         if(username === "Praise" && password === "Dammy0001@"){
// // // // // // // //          loggedin = true;
// // // // // // // //         console.log("You are Logged In");
// // // // // // // //         }
// // // // // // // //     else{
// // // // // // // //           console.log("Inavlid Credentials. Please try again");
// // // // // // // //        }
// // // // // // // //     }

// // // // // // // //        for(let i = 1 ; i<= 20; i++){

// // // // // // // //         if(i == 13){
// // // // // // // //             break;
// // // // // // // //         }
// // // // // // // //         else{
// // // // // // // //              console.log(i);
// // // // // // // //        }
// // // // // // // //         }
// // // // // // // //        console.log("HAPPY NEW YEAR!")

// // // // // // // // const minNum=1;
// // // // // // // // const maxNum=100;
// // // // // // // // const answer=Math.floor(Math.random()*(maxNum - minNum +1));
// // // // // // // //  console.log(answer)
 
// // // // // // // //  let attempts = 0;
// // // // // // // //  let guess;
// // // // // // // //  let runing= true;

// // // // // // // //  while(runing == true){
// // // // // // // //       guess = window.prompt(`Guess the number between ${minNum} - ${maxNum}`);
// // // // // // // //       guess = Number(guess);
        
// // // // // // // //       if(isNaN(guess)){
// // // // // // // //         window.alert(' Please enter a Vailid Number');
// // // // // // // //       }
// // // // // // // //       else if( guess < minNum || guess> maxNum){
// // // // // // // //         window.alert(' Please enter a Vailid Number');
// // // // // // // //       }
// // // // // // // //       else{
// // // // // // // //         attempts++;
// // // // // // // //         if(guess< answer){
// // // // // // // //             window.prompt("TO LOW!  TRY AGAIN");
// // // // // // // //         }
// // // // // // // //         else if(guess> answer){
// // // // // // // //             window.prompt("TO HIGH! TRY AGAIN");
// // // // // // // //         }
// // // // // // // //         else{
// // // // // // // //             window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
// // // // // // // //              runing = false;
// // // // // // // //         } 
// // // // // // // //     }
// // // // // // // //       }
// // // // // // // //      let username;
// // // // // // // //      let age;
// // // // // // // //     username = window.prompt("Enter your name")
// // // // // // // //     age = window.prompt(" Enter your age")
// // // // // // // //      function happyBirthday(){
// // // // // // // //             console.log("Happy Birthday to you!")
// // // // // // // //             console.log("Happy Birthday to you!")
// // // // // // // //             console.log(`Happy Birthday to you ${username}!`)
// // // // // // // //             console.log("Happy Birthday to you!")
// // // // // // // //             console.log(`i'm ${age} years old`)
// // // // // // // //             console.log("Happy Birthday to you!")
// // // // // // // //      }
// // // // // // // //      happyBirthday();

// // // // // // // //      function add(x, y){
// // // // // // // //         return x+y;
// // // // // // // //      }
// // // // // // // //      function subtract(x, y){
// // // // // // // //         return x-y;
// // // // // // // //     }
// // // // // // // //     function multiple(x, y){
// // // // // // // //         return x*y;
// // // // // // // //     }
// // // // // // // //     function division(x, y){
// // // // // // // //         return x/y;
// // // // // // // //     }

// // // // // // // // function isEven(number){
// // // // // // // //     if(number%2===0){
// // // // // // // //         return true;
// // // // // // // //     }
// // // // // // // //     else{
// // // // // // // //         return false;
// // // // // // // //     }
// // // // // // // // }
 
// // // // // // // // function isValidEmail(email){
// // // // // // // //    if(email.includes("@gmail.com")){
// // // // // // // //     return true;
// // // // // // // //    }
// // // // // // // //    else{
// // // // // // // //     return ('Enter a valid email')
// // // // // // // //    }
// // // // // // // // }
// // // // // // // // console.log(isValidEmail("praiseolomola@gmail.com"))
 

// // // // // // // // const textbox = document.getElementById("textbox");
// // // // // // // // const toFahrenheit = document.getElementById("toFahrenheit");
// // // // // // // // const toCelsius = document.getElementById("toCelsius");
// // // // // // // // const result= document.getElementById("result");
// // // // // // // // let temp;
// // // // // // // // function convert(){
   
// // // // // // // //     if(toFahrenheit.checked){
// // // // // // // //       temp= Number(textbox.value);
// // // // // // // //       temp = temp * 9 / 5 + 32; 
// // // // // // // //       result.textContent = temp.toFixed(1) + "•ϝ"
// // // // // // // //     }
// // // // // // // //     else if (toCelsius.checked){
// // // // // // // //         temp= Number(textbox.value);
// // // // // // // //       temp = temp * 5 / 9 - 32; 
// // // // // // // //       result.textContent = temp + "•F"
// // // // // // // //     }
// // // // // // // //     else{
// // // // // // // //         result.textContent= "Select a Unit "
// // // // // // // //     }
// // // // // // // // }*/
 
// // // // // // // // // let fruits = ["apple","orange","banana"];

// // // // // // // // // fruits.push("Coconut");

// // // // // // // // // console.log(fruits[0]);
// // // // // // // // // console.log(fruits[1]);
// // // // // // // // // console.log(fruits[2]);
// // // // // // // // // console.log(fruits[3]);

// // // // // // // // // let firstname
// // // // // // // // // let lastname
// // // // // // // // //   firstname = window.prompt("Enter first name ")
// // // // // // // // //   lastname = window.prompt("Enter last name")
// // // // // // // // // let user = firstname + " " + lastname
// // // // // // // // //  console.log(user)


// // // // // // // // // let num = parseInt("500 Praise")
// // // // // // // // console.log(num)

// // // // // // // let x= 7, y=4, z=4

// // // // // // // let num= x<y || x<z

// // // // // // // let num1= !num
// // // // // // // console.log(num1, num)

// // // // // // let num1 = 10
// // // // // // let num2 = 10
// // // // // // let num3 = 10

// // // // // // let result= num1>num2 && num1>num3
// // // // // // if(result)
// // // // // //   console.log("num1 is greater");
// // // // // // else if(num2>num1 && num2> num3)
// // // // // //    console.log("num2 is greater");
// // // // // // else if(num3>num1 && num3> num2)
// // // // // //    console.log("num3 is greater");
// // // // // // else
// // // // // //    console.log("They are equal");


// // // // // let num = 50

// // // // // let result 

// // // // // if(num%2===0)
// // // // // result= "Even"
// // // // // else
// // // // // result="Odd"
// // // // // console.log(result)


// // // // let day = " Thursdays"

// // // // switch(day){
// // // //   case "Mondays":
// // // //     console.log("7am");
// // // //     break;
// // // //   case "Tuesdays":
// // // //   case "Wednesdays":
// // // //   case "Thursdays":
// // // //     console.log("4am");
// // // //     break;
// // // //   case "Fridays":
// // // //     console.log("9am")
// // // //     break;
// // // //   case "Saturdays":
// // // //   case "Sundays":
// // // //     console.log("9am")
// // // //     break;
// // // //   default:
// // // //     console.log("7am-YT Videos")
// // // // }

// // // let num1 =7
// // // let num2 =4
 
// // // let result = num1 + num2

// // // console.log(`The addition of ${num1} and ${num2} is ${result}`)

// // // console.log(`My name is 
// // // Olomola Praise`)

// // // for(p=1; p<=5;p++)
// // // {
// // //     console.log("Hi", p)
// // // for(i=1; i<=5; i++){
// // //     console.log("Hello", i)
// // // }
// // // }

// // // for(i=1; i<=100; i++){
// // //     if(i%3===0)
// // //         console.log(i)
// // // }

// // // let num=123456

// // // console.log(num%10)
// // // num= parseInt(num/10)
// // // console.log(num)
// // // console.log(num%10)
// // // num= parseInt(num/10)
// // // console.log(num)
// // // console.log(num%10)
// // // num= parseInt(num/10)
// // // console.log(num)

// // let alpha= 987654321

// // // while(alpha>0){
// // //     console.log(alpha%10)
// // //     alpha=parseInt(alpha/10)
// // //         num=alpha
// // //     console.log(num)
// // // }
// // let self ={
// //     name: "Olomla Praise ",
// //     school:"OAU",
// //     complexion: "Black",
// //     age:"21",
// //     date_of_birth:"21/06/2004"
// // }
// // console.log(self.name,
// //     self.school,
// //     self.age, 
// //     self .complexion)
 
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

