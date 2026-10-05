

//how to add css


let h1 = document.querySelector("#Heading");
h1.style.background = 'red';
h1.style.color = "white";

let body = document.querySelector("body");


setTimeout(()=>{
body.style.background = "green";
},1000)


/**
 * task
 * body ka background haar 500ms ke change krna hai with different color
 */
let colors = ["white","orange","blue","brown","pink","red","purpule","yellow","skyblue","green"]

Math.random(); //0 --> 1
// 0.132456 -> 0.1342543356475652342 --> 0.87654325
function giveRandomColor(){
    let randomIndx = Math.floor(Math.random() * 10);
    let color = colors[randomIndx];
    return color;

    
}

// let id=setInterval(()=>{
// body.style.background= giveRandomColor();
// },100)

//   let randomIndx = Math.floor(Math.random() * 10)
//  console.log(randomIndx);

//  setTimeout(()=>{
// clearInterval(id);
//  },5000)


//how to add a new node/object/element on dom

/**
 * 1. create a new element with function document.createElement();
 * 2. add content in that element using innerText, innerHtml or textContent.
 * 3. append that element in parent.
 */

let ul = document.querySelector("#User-list");
let li = document.createElement("li"); //<li></li>

li.innerText = "User 4"; //<li>User 4 </li>

ul.append(li);

/**
 * task
 *  <ul id="todo-list">
        <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
    </ul>
    add Todo 4 in list
 */

    let divContainer = document.querySelector(".container");
    let paragraph = document.createElement("div"); //<div></div>
    // <div>
    //         <div class="paragraph-container">
    //             <p class="paragraph-item">this is second  paragraph</p>
    //         </div>
    // </div>
    paragraph.setAttribute("class","paragraph")
    paragraph.innerHTML = `<div class="paragraph-container">
                            <p class="paragraph-item">this is my  paragraph</p>
                          </div>`


   paragraph.style.background = "pink"
    divContainer.append(paragraph);