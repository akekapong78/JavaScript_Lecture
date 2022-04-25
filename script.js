// การแสดงผล

console.log("2. การเขียนใน .js file");
document.getElementById("text_fromJS").innerHTML = "3. การแสดงผลโดยใช้ getElement";
// document = หน้า html ทั้งไฟล์
/* tag script ใน html ต้องอยู่หลังเสมอ หากมีการเรียกออปเจคๆให้ 
เพราะจะหาไม่เจอ หรือมีค่าเป็น null */

document.write("4. การแสดงผลโดยใช้คำสั่ง write");

// window.alert("5. การแสดงผลการ alert")
//เรียกใช้งานก่อน เป็นลำดับแรกๆๆ

// ==================================================================

// การประกาศตัวแปร
// 1. var   ->  ประกาศซ้ำได้ กำหนดค่าใหม่ได้
var price1 = 5;
var price2 = 6;
var total = price1+price2;
console.log(price1+price2);
console.log(total); 

// 2. let   ->  ES6 ขึ้นไป ประกาศได้ครั้งเดียว แต่กำหมดค่าใหม่ได้
let yy = 5;
// let yy = 6;
yy = 6;
console.log(yy);

// 3. const  ->  ES6 ขึ้นไป ประกาศได้ครั้งเดียว และกำหมดค่าใหม่ไม้ได้
const zz = 99;
// zz = 100;
console.log(zz);

// 4. let กับ const เป็น Box scope เท่านั้น ต่างจาก var จะเป็น global/local
{
    let a = 3;
    var b = 4;
}
// console.log(a);      // error
console.log(b);         // ไม่ error
console.log("ค่าของตัวแปร b คือ "+b);



// =================================================================
 
// การเชื่อมต่อ String -> Concadnate
var firstname = "Akekapong";
var lastname = 'Kongsavat';
var fullname = firstname+" "+lastname;
console.log(fullname);
// ================================================================

// Aritmetic Operator (การดำเนินการทางคณิตศาสตร์)
console.log(9**2);      // ยกกำลัง
console.log(10%3);      // Modulus หารเอาเศษ
// x++  x--             จะให้ค่า x ก่อนบวก/ลบ         
// ++x  --x             จะให้ค่า x หลังบวก/ลบแล้ว
var x = 5;
console.log(x++);
console.log(x);
console.log(++x);
console.log(x);
var x = 10;
// let x = 10;          // var ประกาศซ้ำได้, let ประกาศซ้ำไม่ได้
console.log(x);
// ===============================================================

// Comparison Operator
/*
    == และ ===      เท่ากับ
    != และ !==      ไม่เท่ากับ
    >               มากกกว่า
    <               น้อยกว่า
    >=              มากกว่าเท่ากับ
    <=              น้อยกว่าเท่ากับ
*/
console.log(5===3);     // false
console.log(5>=3);      // true
// ===============================================================

// Assigment Operator
/*
    x = y          x = y
    x += y         x = x+y
    x -= y         x = x-y
    x *= y         x = x*y
    x /= y         x = x/y
*/
let a = 10;
a += 5;
console.log(a);     // a = a+5 = 10+5 = 15
// ===============================================================

// Logical Operator
/*
    &&      และ
    ||      หรือ
    
    โดย && จะถูกคำนวนก่อน || จึงต้องใส่วงเล็บด้วย
*/
console.log( false && true || true);        // ได้ true
console.log( false && (true || true));      // ได้ false
// ==============================================================


// การสร้าง Function
function myFuction(value1,value2) {
    return value1*value2;
}
 console.log(myFuction(5,5));

function changeBg() {
    document.body.style.backgroundColor = "red";
    console.log("Change BG to red");
}
// changeBg();

function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp*9/5+32;
    var message = cTemp+"\xB0C is "+cToFahr+"\xB0F";
    console.log(message);
}
cToF(35);

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCels = (fTemp-32)*5/9;
    var message = fTemp+"\xB0F is "+fToCels+"\xB0C";
    console.log(message);
}
fToC(95);
// =============================================================


// การสร้าง Object -> เหมือนตัวแปร แต่เก็บได้หลายค่า
// การสร้าง
var myCar = {
    brand: "Ford",
    model: "1",
    color: "black"
};
// การเข้าถึง
console.log(myCar.color);
console.log(myCar["brand"]);
// ============================================================


// การสร้าง Method  -> คือ function ที่อยู่ใน Object
var person = {
    firstname: "Akekapong",
    lastname: "Kongsavat",
    eyeColor: "Black",
    fullname: function() {
        return this.firstname+" "+this.lastname;    // this หมายถึง object นี้
        // return person.firstname+" "+person.lastname;    // this หมายถึง object นี้
    }
}
console.log(person.lastname);
console.log(person.fullname);           // ยังไม่ใช้ return จะแสดงค่าโค้ดใน FN ทั้งหมดแทน
console.log(person.fullname());         // มี () เพราะใช้งาน FN

// ============================================================


// การสร้าง Event  ->  คือ สิ่งที่จะเกิดขึ้นใน HTML เมื่อสั่งการทำงานจาก JavaScript
function displayDate() {
    document.getElementById('showDate').innerHTML = Date();
    // document.getElementsByClassName('classDate').innerHTML = Date();
}

// ===========================================================

// การจัดการ String
var myname = "Akekapong Kongsavat \n\"Ake\"";        // ใช้ \ นำหน้าเครื่องหมายตั้งห้าม
console.log(myname.length);                          // \n ขึ้นบรรทัดใหม่ใน Javascript
console.log(myname);
// ===========================================================

// การสร้าง Array
// 1. แบบ Literal  ->  การประกาศตัวแปรแล้วกำหนดค่าเลย โดยใช้วงเล็บ ช่วยบอกชนิดข้อมูล
var myArr = [
    "Ake",
    "Kae",
    "Pleng",
    "Praw"
];
console.log(myArr);

// 2. แบบ Constructor
var myArr2 = new Array("Ake","Kae","Pleng","Praw");
console.log(myArr2);

// 3. การเข้าถึงข้อมูลใน Array
console.log(myArr[1]);
console.log(myArr.length);      // จน.สมาชิกใน array

// 4. Array Method
// 4.1 .toString การทำอาเรย์ เป็นสตริง
document.getElementById("demo").innerHTML = "หลัง innerHTML ต้องเป็น string เท่านั้น";
document.getElementById("demo").innerHTML = myArr.toString();
// log: Ake,Kae,Pleng,Praw

// 4.2 Joint การเชื่อมอาเรย์
document.getElementById("demo").innerHTML = myArr.join("-");
// log: Ake-Kae-Pleng-Praw

// 4.3 pop การลบข้อมูลตัวสุดท้าย ในอาเรย์
myArr.pop();
// myArr.pop();
console.log(myArr);

// 4.4 push การเพิ่มข้อมูลตัวสุดท้าย ในอาเรย์
myArr.push("Mom");
console.log(myArr);

// 4.5 shift การลบข้อมูลตัวหน้าสุด ในอาเรย์
myArr.shift();
console.log(myArr);

// 4.6 shift การเพิ่มข้อมูลตัวหน้าสุด ในอาเรย์
myArr.unshift("Dad");
console.log(myArr);

// 4.7 การทำหนดค่าโดยระบุ index
myArr[0] = "พ่อ";
console.log(myArr);

// 4.8  delete ค่าโดยระบุ index แต่ขนาน array เท่าเดิม
delete myArr[0];
console.log(myArr);

// 4.9 splice การเพิ่มข้อมูลโดยระบุ index (index ที่จะเพิ่ม, จำนวนข้อมูลที่จะลบ, ค่าที่เพิ่ม)
myArr.splice(2, 0, "แม่");              // (index ที่จะเพิ่ม, จำนวนข้อมูลที่จะลบ, ค่าที่เพิ่ม)
console.log(myArr);

myArr.splice(0, 1, "ลูก");              // (index ที่จะเพิ่ม, จำนวนข้อมูลที่จะลบ, ค่าที่เพิ่ม)
console.log(myArr);

// 4.10 concat การรวม array
var myArr3 = myArr.concat(myArr2, ["ลุง", "ป้า"]);
console.log(myArr3);

// 4.11 slice การตัดส่วนของ array ไปสร้าง array ใหม่ (index ที่จะเริ่มตัดมาใช้งาน)
// (index ที่จะเริ่มตัดมาใช้งาน, index สิ้นสุด เอาถึงค่าก่อนหน้า)
var myArr4 = myArr3.slice(2);
console.log(myArr4);
var myArr5 = myArr3.slice(2,4);
console.log(myArr5);

// ============================================================



//  ------------ 7 Data types of JavaScript ------------
//  Primatice type -> เก็บค่าได้ค่าเดียว
var myNum = 10;                 // 1.
var mySreing = "Akekapong";     // 2.
var myBoolean_T = true;         // 3.
var myBoolean_F = false;
var myNull = null;              // 4.
var myUndefined;                // 5.

//  Object type -> เก็บค่าได้หลายค่า
var myObject = {};              // 6.
var myArray = [];               // 7.

// คำสั่งเกี่ยวกับ type data
console.log(typeof(myBoolean_T));
console.log(typeof(myNum));
// ============================================================



// คำสั่งทางคณิตศาสตร์ ใน JavaScript
/*
    Math.PI     ->  3.14...
    Math.round(4.5)     ->      5           // ปัดตามหลักคณิต
    Math.round(4.4)     ->      4
    Math.pow(4,2)       ->      16
    Math.sqrt(64)       ->      8
    Math.ceil(4.2)      ->      5           // ปัดขึ้นเท่านั้น
    Math.floor(4.6)     ->      4           // ปัดลงเท่านั้น
    Math.random()       ->      0.2453435   (ระหว่าง 0-1)
*/
// ============================================================
    
//  การใช้งาน if-else
var time = 22;
if (time < 12) {
    console.log("Good moring");
} else if (time < 18) {
    console.log("Good Affternoon");
} else {
    console.log("Good Evening");
}
// ==========================================================


// การใช้งาน switch statement
console.log(Date());
console.log(new Date().getDay());
switch(new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wennesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Firdat");
        break;
    case 6:
        console.log("Saturday");
        break;
}

var myPhone = "OPPO";
var myPhone = "Iphone";
switch(myPhone) {
    case "Iphone":
        console.log("30,000 Bath");
        break;
    case "Samsung":
        console.log("25,000 bath");
        break;
    default:
        console.log("We dont have phone for U");
}
// ==========================================================


// การเขียน For-Loop   ->  นิยมใช้กับ Array
for (var i=0; i<=5; i++) {
    console.log(i);
}

var car = ["BMW","Ford","Honda","Audi"];
for (var i=0; i<car.length; i++) {
    console.log(car[i]);
}
// ===========================================================

// การเขียน For-In-Loop   ->  นิยมใช้กับ Object โดยจะ loop ผ่าน properties ให้เองเลย
var person2 = {
    firstname: "Paytaii",
    lastname: "Kongsavat",
    nickname: "PlengRock"
};
for(var x in person2) {         // ตัวแปร x จะเอาไปรับ properties ใน object เอง
    console.log(person2[x]);
}
// ========================================================


// การเขียน For-of-Loop   ->  นิยมใช้กับ Array  ตัวแปร x จะเอาไปค่าของ array เลย
var car = ["BMW","Ford","Honda","Audi"];
for(var x of car) {
    console.log(x);         // ตัวแปร x จะเอาไปค่าของ array เลย ไม่ใช้ index แบบวน i
}

var mystring = "JavaScript";
for(var x of mystring) {
    console.log(x);
}
// ========================================================



// Type of Conversion การแปลงชนิดของข้อมูล
/*
    String(123)     ->      "123"
    Number("321")   ->      321
    Number(true)    ->      1
    Boolean(0)      ->      false
*/
// ========================================================


// JavaScript Hoisting  -> พฤติกรรมทั้วไปของ JavaScript
// 1. กำหนดค่าตัวแปร ก่อนประกาศ ได้
z = 10;             
console.log(z);
console.log(y);
var z;              // Declaration (ถูก Hoisting) ->  การประกาศแบบนี้ เมื่อรัน จะถูกย้ายไปข้างบนก่อนเลย
var y = 20;         // Innitialzation -> ไม่ถูกย้าย หากที่การประกาศพร้อมกำหนดค่า
 
// ========================================================



// this key word
var person3 = {
    firstname: "Prawpticha",
    lastname: "Kongsavat",
    fullname: function() {
        return this.firstname+" "+this.lastname;        // this ใน object เพื่ออ้างอิงชื่อตัวแปร object นั้น ไม่ต้องพิมพ์ชื่อเต็ม
    }
}
console.log(person3.fullname());
console.log(this);                      // this อ้างอิง window object ของหน้านี้ทั้งหมด มีทุกฟังกชั่นภายในเว็ปนี้
// go to html file เพื่อลองใข้ this อีกแบบ
// ==========================================================



// ES6 Arrow function -> มาจากกับสร้าง fn แบบ expression
//  1. แบบ Declaration
function myFuction(value1,value2) {
    return value1*value2;
}
console.log(myFuction(5,5));
//  2. แบบ Expession
var myFuction = function(value1,value2) {
    return value1*value2;
}
console.log(myFuction(5,5));
//  3. Arrow function
// 3.1 ลบคำว่า "function" เติม => หลัง () ของ FN ให้ชี้ไปส่วนของ Box {}
var myFuction = (value1,value2) => {
    return value1*value2;
}
console.log(myFuction(5,5));
// 3.2 ลบ {} และ return
var myFuction = (value1,value2) => value1*value2;
console.log(myFuction(5,5));
var hello = () => "Hello Akekapong";        // สั้งเหตุ ไม่ใช้ตัวแปร แต่เป็น FN จาก arrow
console.log(hello());                       // สั้งเหตุ ไม่ใช้ตัวแปร แต่เป็น FN ต้องมี ()
// 3.3 ลบ () ได้อีก ถ้ารับ parameter เพียงตัวเดียว
var hello = value => "Hello "+value;
console.log(hello('Akekapong'));

// ============================================================



// Class ใน JavaScript   ->  การเข้าถึงจะใช้ตัวแปร+new มารับ
// 1. class ปกติทั่วไป
class myClass {                         // ตอนสร้างไม่มี ()
    constructor(name) {
        this.myName = name;
    }

    fullname(hello) {
        return hello + " My name is " + this.myName;
    }
}

var person = new myClass("Akekapong");  // ตอนเรียกใช้ ต้องมีตัวแปรมารับ + new + ใส่ (parameter) ไปด้วย

console.log(person);
console.log(person.fullname());
console.log(person.fullname("Goog moring"));

// 2. Static Meter  ->  การเข้าถึงจะใช้ ชื่อ class เลย
class myClass_static {
    // method ที่มาคู่กับ class
    constructor(name) {
        this.myName = name;
    }
    // method ปกติที่เราสร้างขึ้น   -> เข้าถึงผ่านตัวแปรที่สร้าง + new
    fullname (helloWord) {
        return helloWord+"from static Class My name is "+this.myName;
    }
    // เพิ่ม staic method     -> เข้าถึงผ่านชื่อ class
    static hello() {
        return "Hello!"
    }
    static hello2(name) {
        return "Hello! : "+name;
    }
}
var person_static = new myClass_static("Akekapong");
console.log(person_static.fullname("Good moring"));
// console.log(person_static.hello());         // <<<< จะ error เนื่องจากเป็น method static จะต้องเรียนผ่านชื่อ class
console.log(myClass_static);
console.log(myClass_static.hello());            // <<< การเรียกที่ถูกต้อง
console.log(myClass_static.hello2("Ake"));            // <<< การเรียกที่ถูกต้อง

// 3. การส่งผ่าน method ระหว่างคลาสแม่ กับคลาสลูก
class Car {
    constructor(band) {
        this.carname = band;
    }
    present() {
        return "I have a " + this.carname;
    }
}
class Model extends Car {       // การผูก extent class
    constructor(band, model) {
        super(band);            // คำสั่งเรียก parameter จาก class แม่มาใช้งาน
        this.model = model;
    }
    show() {
        return this.present() + ", it's a " + this.model;  // เรียกใช้งาน method จากคลาสแม่
    }
}
var myCar = new Model("Ford", "Mustang");       // อ้างจาก constructor ในคลาสลูก
console.log(myCar.show());
// ============================================================================



// JavaScript Style Guild ==================

// 1. ชื่อตัวแปร (canmelCase อูฐ) -> พิมพ์เล็ก ตามต้วยพิมพ์ใหญ่
var firstName = "Akekappong";

// 2. การ เว้นวรรค ระหว่างตัวแปร และ เครื่องหมาย
var x = y + z;

// 3. การ เว้นวรรค ค่าใน array หรือค่ากลัง commma ,
var myArray = ["value1", "value2", "value3"];

// 4. การ เว้นวรรค ใน Object ระหว่าง properties:  และ value
var person = {
    firstName: "Akekapong",
    lastName: "Kongsavat"
};   // ต้องมีการปิด ; ด้วย

// 5. การ เว้นวรรค ใน for ()
for(var i = 0; i < 10; i++) {
    console.log(i);
}
// 6. การ เว้นวรรค ใน if-else 
if(i < 10) {
    console.log("i < 10");
} else {
    console.log("i >= 10")
}
// ==================================================================


// HTML Control     ->  สั่งการ HTML
let content2 = document.getElementById('content-2');
let textHTML = '<b>เกิดมาไม่เคยเจอใครเหมือนเธอ</b>';
textHTML += '<i> หลับฝันละเมอภาพเธอคอยมาหลอนทุกคืน</i>';
content2.innerHTML = textHTML;


// HTML Event *****************************
let discountButton = document.getElementById('discount-button');    // สร้างตัวแปรรอรับปุ่มกด
let message = document.getElementById('message');    // สร้างตัวแปรรอรับ การสั่งแก้ข้อความ

function showMessage() {
    message.innerHTML ="ตอนนี้หมดเวลาของคุณแล้ว";
}
discountButton.addEventListener('click',showMessage)    // ไม่ใส่ () เพราะยังไม่ต้องการให้ทำงานเลย ต้องรอ click

