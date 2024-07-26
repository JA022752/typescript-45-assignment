//45 assignment 
//Q # 1
// famous quotation 

let personName= "Prophet Muhammad(Salallaho Aleh Wassalam)"
console.log(personName,"says","The seeking of knowledge is obligatory for every Muslims.")

// Q # 2

// name cases
let personName:string = "Jawad ahmed";
console.log (personName.toLocaleLowerCase());
console.log(personName.toUpperCase());

//Q # 3

//stripping name
let whitespaceName = "\n\tJawad Ahmed\t\n"
console.log(whitespaceName);
let whitoutwhitespaceName = whitespaceName.trim();
console.log(whitoutwhitespaceName);

//Q # 4

//Simple addition,subtraction,multiplication and division

console.log(5+7)
console.log(5-7)
console.log(5*7)
console.log(5/7)

//Q # 5

//MY favorit number

let myNumber= 3;
let message = "My favorite no is "
console.log(message,myNumber)
//Q # 6
//array

let friendsName=["Talha","Usman","Muzammil","Ali"]
console.log(friendsName)

friendsName.forEach(friendsName=> console.log(friendsName))

//Q # 7

// Greetingprog

let brotherName =["junaid","jawad","bilal"]
brotherName.forEach(brotherName=>console.log(`Hello, ${brotherName},How are you`) )

// Q no 8
// Number Eight: write  addition,subtraction,multiplication and division operation and get each result eight

console.log(5+3)
console.log(10-2)
console.log(2*4)
console.log(16/2)


// Q no 9
// Adding comment choose two of the program you have  written and add at least one comment to each
// Auther: [jawad ahmed]
// Date : [Tuesday, june, 2024]

//Q # 10

let modesofTransportaion = ["sports car","sport bike","vegon"]
modesofTransportaion.forEach(modesofTransportaion=> console.log(`I would like to ride on ${modesofTransportaion}, definetly`));


//Q # 11


let guestList= ["Ali","Sara","Noman","Tahir","Zubair","Ahmed"];
guestList.forEach(guestList=> console.log(`Welcome ${guestList} to our home`));


//Q # 12
// splice 

let GuestList=["Mustafa","Shoaib raza","Salwa","Amna","Sadia","Maroof","Zainab"]

let absent=GuestList[6];
GuestList.splice(6,6,"bilal")
console.log(absent,"cannot come")
GuestList.forEach(GuestList=> console.log(`Welcome ${GuestList}, would you like to have dinner with me`));


//Q # 13
// Array=> Push,unshift,splice

let guestList=["Kamran","Rashid","Atif","Saleem","Sohail","Saqib","Saba","Nida","Faryal"]
let message= "Hello Every one you all are invited to annual dinner of My Company"
console.log(message);

let absent=guestList[4];
console.log(absent,"have a family get togather")
guestList.splice(4,4,"Muzammil");
guestList.push("Usman")
guestList.unshift("Mohsin")
guestList.forEach(guestList=> console.log(`Hello ${guestList}, nice to see you`));

//Q #14


let countriesVisit: string[]=["Arab","Yeme","phelistine","Oman","Qatar"]
console.log("Orignal order:",countriesVisit)

//Q no 15
let guestList =["zahra","salwa","mustafa","Ali","Husnain"]
guestList.forEach(guestList=>console.log(`Aaray tm ${guestList},jalde ajao`)
)
let lengthguest: number = guestList.length;
console.log(`we are inviting total ${lengthguest} guest, and Zahra is cheif guest`)



// Q # 16
 // making list of array

 let students:string[]= ["anabia","abdul rehman","nabiha","bilal","hamdan","hashir","nofil"]
 students.forEach(students=> console.log(`Grade 1 student ${students} of miss zahra hasan` ))



// Q no 17
// find index of an array
// in list

let alphabet = ["A","B","C","D","E","F","G"];
console.log(alphabet[3])
alphabet.forEach(alphabet=>console.log(alphabet))


 
//Q # 18

// conditional test of numbers
//with true and false

let five = 5;
let ten = 10;
console.log("Give answer in True and False")
//test 1 
console.log("\ntest 1: is five is equal to 5?")
console.log(five==5)

//test 2
console.log("\n test 2: is 10 is greater than 5?")
console.log(10>5)

//test 3
console.log("\n test 3 : is 10 is less than 5?")
console.log(10<5)

//test 4
console.log("n\ test 4: is five is not equal to ten?")
console.log(five!=10)

//test 5 
console.log("n\ test 5 :is ten is equal to ten?")
console.log(ten==10)

//test 6

console.log("n\ test 6 :is ten is not equal to 5?")
console.log(ten != 5)

//test 7 
console.log("n\ test 7 : is five is greater than 10?")
console.log(5 > 10)


// Q no 19

//define veriable 

let color = "black";

if ( color=== "black"){
    console.log("team A got 5 points")

}
if (color=== "white"){
    console.log("team B got 5 points")

}



// Q no 20

// define veriable in IF and ElSE condition

let position1 = "Team Jawad";
if(position1==="Team jawad"){
    console.log("congrates team",position1)

}
else{
    console.log("better luck nex time")};


 
// Q no 21

//Define a function with rest of parameter that accept items in aurgument in case of sandwich

 function makeSandwich(...item: string[]){
    
     console.log("n\ try sandwich with items:\n")
    
     item.forEach(itemlist=> console.log(itemlist));
  console.log("now enjoy your desire sandwich")

 }

// // call the function three times with 3 different aurgument

 makeSandwich("chicken","cheese","egg","with mayo");

 makeSandwich("chicken","vegetable","souces")
 makeSandwich("egg","cheese","mayo")


// Q no 22

// define the profession to show with persons names

function profession_name(profession: string[]){
profession.forEach(name=> console.log(name));
}
// function to make Great with map() to modify array
function make_great(profession:string[]){
    return profession.map(name => console.log(`The Great,${name}`))
}
// define an array for profession name 

let profession_names=["doctor","engineer","teacher"]

// making copy of orignal array through slice
let copy_profession_names = profession_names.slice()

// modify the array to include The Great with their name

let copy_great_profession = make_great(copy_profession_names);

// print both array orignal and copy

profession_name(profession_names);

console.log("orignal array\n");

profession_name(copy_profession_names);


//Q no 23

// define function to print each name from array

function closeFriends(friends: string[]){
     friends.forEach(friends=> console.log(friends))
}
// define array of closeFriends
let friends=["kamran","usman","talha"]
closeFriends(friends);


// Q no 24
// Define the make_album function

function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name, 
        title: album_title,
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

// Calling three function with different values
let album1 = make_album("jawad", "Album title 1");
let album2 = make_album("Usman", "Album title2");
let album3 = make_album(" Umer", " Album title3", 10);

// Print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);

 // q no 25

 // test for equality and inequality in strings
 
 const string1 : string="jawad ahmed"
const string2 : string="bilal ali"
console.log(string1===string2)
console.log(string1!==string2)

//test using the lowercase function
const uppercase: string = "HELLO"
const lowercase: string = "hello"
console.log(uppercase.toLowerCase()==lowercase);

//numerical test involving equality and inequality 

const num1 : number = 1;
const num2 : number = 2;

console.log(num1===num2);//false
console.log(num1!==num2);//true
console.log(num1>num2);//falsa
console.log(num2>num1);//true
console.log(num1>=num2);
console.log(num1<=num2);

// tests using "and" and "or" operator

const x : number= 10;
const y : number=20;
const z : number=30;

console.log(x< y && y < z); //true
console.log(x>y || y < z); // true

// test item is whether an array

// question no 26

//write program that creates objects containing items..




interface item {
    name: string
    price: number 
    quantity : number

}

// creat more than one object 

const medicine: item ={
    name :"panadol",
    price: 540,
    quantity: 3,
}

const medicine1: item={
    name:"disprin",
    price: 240,
    quantity: 5,

}

console.log(`medicine name: ${medicine.name} and price is: ${medicine.price}`);
console.log(`medicine name: ${medicine1.name} and price is: ${medicine1.price}`);


// question no 27
//intentional error

let array:(string|number)[]= ["jawad","junaid",5,6,9]
console.log(array[5]);

//Question no 28
// creat a veriable called Alien color

let alien_color: string="green";
//if alien color is green
if(alien_color=="green"){
    console.log("the player just earned 5 points");
    
}

// if fail there is no out put
alien_color="yellow";
if(alien_color=="green"){
    console.log("the player just earned 5 points");

}

//question no 29
//choose the coler for an alien as 
//you did in exercise 28 and write an if else chain

let alien_color: string="red";
//if the alien color is green than print this
if(alien_color=="green"){
    console.log("the player just earned 5 points for shooting the alien");
}
//if the alien color is not green than print this

else{
    console.log("the player just earned 10 points");
    
}

// question no 30
 
let alien_color: string="green";


//if the alien color is green then print
if(alien_color=="green"){
    console.log("the player just earned 5 points");
}
//if the alien color is yellow then print the player earned 10 points

else if(alien_color=="yellow"){
    console.log("the player just earned 10 points");
}

//if the alien color is red then print the player earned 15 points

else if(alien_color=="red"){
    console.log("the player just earned 15 points");
}

else{
    console.log("please select the write color");
}

// version 2
alien_color="red"  
if(alien_color=="green"){
    console.log("the player just earned 5 points");
}
//if the alien color is yellow then print the player earned 10 points

else if(alien_color=="yellow"){
    console.log("the player just earned 10 points");
}

//if the alien color is red then print the player earned 15 points

else if(alien_color=="red"){
    console.log("the player just earned 15 points");
}

else{
    console.log("please select the write color");

    
}

// version 3
alien_color="yellow"  
if(alien_color=="green"){
    console.log("the player just earned 5 points");
}
//if the alien color is yellow then print the player earned 10 points

else if(alien_color=="yellow"){
    console.log("the player just earned 10 points");
}

//if the alien color is red then print the player earned 15 points

else if(alien_color=="red"){
    console.log("the player just earned 15 points");
}

else{
    console.log("please select the write color");

    
}


//question no 31 

//determine the person stage of life
// set the value for the variable age
//if the person is less than two years old the print
// the person is a baby


let age: number=1;

if (age<2){
    console.log("the person is baby.");
    
}
// if the person is at least two year old but less than 4 than print
// the person is a toddler
else if (age>=2 && age < 4){
    console.log("the person is toddler.");
}
//if the person is at least 4 year old but less than 13 than print
// the person is kid

else if (age>=4 && age < 13){
    console.log("the person is kid.");
}

//if the person is at least 13 years old but less than 20 than print
// the person is teenager
else if (age>=13 && age < 20){
    console.log("the person is teenager.");
}
//if the person is at leat 20 years old but less than 65 than print
// the person is an adult

else if (age>=20 && age < 65){
    console.log("the person is adult.");

}

else if (age>65)
    console.log("person is an elder.");


//question no 32
    
//make a array of three favorite fruit

let favorite_fruits: string []= ["mango","apple","banana"]
if (favorite_fruits.includes("mango")){
    console.log("I really like mango");
    
}
if(favorite_fruits.includes("apple")){
    console.log("I really like apple");
    
}
if(favorite_fruits.includes("banana")){
    console.log("I really like banana");

}
if(favorite_fruits.includes("orange")){
    console.log("I really like orange");

}
if(favorite_fruits.includes("grapes")){
    console.log("i really like grapes");
}



//Question no 33
 
// if the user is admin than print special greeting

let users : string[]=["jawad","zahra","salwa","mustafa",admin]

for (let user of users){
   if (user==="admin"){
    console.log("hello admin would you like to see the status report");
}

else{
    console.log(`hello ${user}, thank you for logging in again`);
    
}
}


//Question no 34 

let users: string[]=["jawad","zahra","salwa","mustafa","admin"]

if(users.length===0){
    console.log("we need to find some user");
}
//remove all the user from an array 
//and make sure the correct message is printed
else{
    users=[],
    console.log("all user have been removed "+ users.length); 
}

//quesation no 35

let current_users: string[]=["jawad","junaid","bilal","admin","ahmed"];
let new_users:string[]=["kamran","admin","ali","husnain","user9"];
let newUsers: any
new_users.forEach((newUsers));{
    if(
        current_users.some(
            (currentUsers)=> currentUsers.toLowerCase()===newUsers.toLowerCase()
        )
    )
    {
        console.log(`${newUsers} will need to add a new user name`);
        
    }
    else{
        console.log(`${newUsers} is available`);
        
    }
};


//question no 36
//ordinal number indicates thier position in a array 

let myNumbers = [1,2,3,4,5,6,7,8,9]
for(let i=0; i< myNumbers.length; i++ ){
    if(myNumbers[i]==1){
        console.log(`${myNumbers[i]}st`);
    }else if(myNumbers[i]==2){
        console.log(`${myNumbers[i]}nd`);
        
    }else if(myNumbers[i]==3){
        console.log(`${myNumbers[i]}rd`);
}else if(myNumbers[i]>=4&& myNumbers[i]<=9){
        console.log(`${myNumbers[i]}th`);
}

}

//question no 37
//store three pizza 

let myPizza = ["cheese pizza","arabian pizza","vegetable pizza"]
//print name of pizza 
for(let i=0; i<myPizza.length; i++ ){
    console.log(myPizza[i]);
//print name and sentence/message
for(let i=0; i<myPizza.length; i++ ){
    console.log(`I Like to eat ${myPizza[i]}`);
}
console.log(`\n I almost prefer to eat Pizza from this resturant`);
}





// quesion no 38

let animals: string[]=["cat","dog","rabbit"]
animals.forEach(animals => {
    console.log(`a ${animals} would be a great pet`);    
});
console.log(`Any of these animals would be a good pet!`);


// Question no 39


modify the make_shirt() function so that shirts are large bu default.
//message that read I love Typescript


function make_shirt(size:string="large",message:string="I love Typescript"){
    console.log(`making a ${size} t-shirt with messege"${message}" print on it`);
}

// default large 
make_shirt()


//default message and medium size
make_shirt(`medium`);

// custum message and small size
make_shirt("small","Dive into coding");

//Question no 40 

//write a function called describe_city() that accept the name of the city and its country


function describe_city(nameofcity:string,country:string="Pakistan"){
    return`${nameofcity} is in ${country}`
}
let city1=describe_city("karachi")
let city2=describe_city("lahore")
let city3=describe_city("Hyderabad")
let city4=describe_city("Larkana")
let city5=describe_city("Dubai","UAE")

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
console.log(city5);

// question no 41

// write a fuction called city_country() that takes in the name of a city
function city_country(city: string, country: string){
    //return `${city},${country}
   console.log(`"${city}, ${country}"`);
}
    city_country("karachi","Pakistan");

let mycities = city_country("karachi","Pakistan");
console.log(mycities);

console.log(city_country("Dubai","UAE"));
console.log(city_country("Doha","Qatar"));
console.log(city_country("cape town","south africa"));
console.log(city_country("london","United kingdom"));


//Question no 42

//making album

function making_album(artistName: string, albumTitle:string){
    return{artistName,albumTitle}
}
let album1=making_album("jawad","ujala");
let album2=making_album("zahra","aangun");
let album3=making_album("mustafa","sawaira");

console.log(album1);
console.log(album2);
console.log(album3);


//Question 43

// Add Number of tracks

function making_album(artistName: string, albumTitle:string, tracks: number){
    return{artistName,albumTitle,tracks}

}
let album4=making_album("ali","apni kahani",12);
let album5=making_album("husnain","taire galian",10);
let album6=making_album("maroof","pardais",15);

console.log(album4);
console.log(album5);
console.log(album6);



//question 44

// make a array of magician name pass a array to a function called
// show_magician which print the name of each magician in an array

let magicians: string[]=["kamran","rashid","asif"]
    function show_magicians(magicians:string[]){
        magicians.forEach(magician=>{
            console.log(magician);

            
        })

    }
show_magicians(magicians)


// question no 45

// write a function called make_great() that modifies the array of magicians
//by adding the phrase the great to each magicians name.call show_magicians() to 
// see the list has actually been modified

let magicians: string[]=["sabi","talha","rashid"]
function make_great(magicians: string[]){
for(let i=0; i< magicians.length; i++){
    magicians[i]=magicians [i] + " the great";
}
}
make_great(magicians);
console.log(magicians);



































































































































































