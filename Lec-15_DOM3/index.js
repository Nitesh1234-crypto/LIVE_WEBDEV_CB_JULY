
let body = document.querySelector("body");

// body.addEventListener("click",function(e){
//     console.log(e);
//     //konse element pe click hua hai..
//     console.log(e.target);

// })

//submit event ---> form

let form = document.querySelector(".addTodo");
let ul = document.querySelector(".task-list");
form.addEventListener("submit",function(e){
    e.preventDefault() //it prevents default behavious
    console.log(e);
    let titleInp = document.querySelector(".title");
    let descInp = document.querySelector(".description");

    let titleValue = titleInp.value;
    let descValue = descInp.value;

    titleInp.value = "";
    descInp.value = ""
    

    let li = document.createElement("li"); //<li></li>
    li.innerHTML = `<h1>${titleValue}</h1>
            <p>${descValue}</p>
            <div>
                <button>delete</button>
                <button>edit</button>
            </div>`

    ul.append(li);
})

//Note : whenever a form is submitted it refresh the browser

//use form to add new task in ul(task list)