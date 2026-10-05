// //accessing dom element

// //1. by id

// let element1 = document.getElementById("Heading");
// console.log(element1);
// //return type is node/object/element;

// //2. by class
// let elemenents2 =  document.getElementsByClassName("paragraph");
// console.log(elemenents2);

// //second paragraph access krna hai
// console.log(elemenents2[1])


// //return type is collection ( list/array);


// //task
// let element3 = document.getElementsByClassName("hello");
// console.log(element3[0]);

// //3. tagName

// let el4 = document.getElementsByTagName("p");
// console.log(el4);
// let el5 = document.getElementsByTagName("h1");
// console.log(el5);

// let li = document.getElementsByTagName("li")[0];
// console.log(li);


// //4. querySelector / queryselectorAll ---> both id, class, or tag

// let q1 = document.querySelector("#Heading");
// console.log(q1);

// let q2 = document.querySelector(".hello"); //return node/object/element
// console.log(q2);

// let q3 = document.querySelectorAll("li");
// console.log(q3);

// //question
// let q4 = document.querySelector(".paragraph"); //the first node with class paragraph
// console.log(q4);


//properties
/**
 * innerHTML
 * innerText
 * textContent
 * 
 * to view or update html element content
 */


//i want to see the content inside first paragraph tag

let p = document.getElementsByClassName("paragraph")[0];

// console.log(p);

// let text = p.innerHTML;
// console.log(text);

// let text2 = p.innerText;
// console.log(text2);

// let text3 = p.textContent;
// console.log(text3);

// let ul = document.getElementById("User-list");
// console.log(ul);
// //getter
// let con1 = ul.innerHTML; //html ke tag bhi dega
// let con2 = ul.innerText; //string //only return what's visible
// let con3 = ul.textContent; // give hidden text also
// console.log(con1)
// console.log(con2);
// console.log(con3);

//setter --> add content in html element

// p.innerText = "change paragraph";
// ul.innerText= '<li>User4 </li>'; // string
// ul.innerHTML = "<li>User 5 </li>" //li will be view as html tag



/**
 * Parent
 * child
 * sibling -> previous , next
 * remove()
 */

// let p2 = document.querySelector(".paragraph");
// console.log(p2.parentElement.parentElement.parentElement); //div

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// let childs =ul.children;
// let length = childs.length;
// console.log(length);
// console.log(childs[length-1]);

// //firstchild
// console.log(ul.firstElementChild);
// //last child
// console.log(ul.lastElementChild)
// ul.firstElementChild.remove();

// p.parentElement.parentElement.parentElement.previousElementSibling.remove();

/** Attributes
 * getAttribute()
 * setAttribute()
 * classList
 */

let h1 = document.querySelector("#Heading");

let classAtr = h1.getAttribute("class");
console.log(classAtr);

let lis = document.getElementsByTagName("li");
console.log(lis);

let ul = document.querySelector("#User-list");
let firstLi = ul.firstElementChild;

firstLi.setAttribute("class","user-1");

//task --> add id (lastUser) to lastchild of ul
let lastChild = ul.lastElementChild;
lastChild.setAttribute("id","last-user");

// let classlist = h1.classList; //return arr of class 
// console.log(classlist);
// /**
//  * add
//  * remove
//  * toggel
//  */

// classlist.add("added-class");

let dashboard = document.getElementById("dashboard");
let dashboardclass = dashboard.classList;
console.log(dashboardclass);
dashboardclass.add("dashboard");

h1.classList.remove("dom");



h1.classList.toggle("hide");
h1.classList.toggle("mypage");