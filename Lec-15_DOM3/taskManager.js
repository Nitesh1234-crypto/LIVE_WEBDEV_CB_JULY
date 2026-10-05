
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
    li.innerHTML = `
            <h1>${titleValue}</h1>
            <p>${descValue}</p>
            <div>
                <button class="delete">delete</button>
                <button class="edit">edit</button>
                <button class="up">⬆️</button>
                <button class="down">⬇️</button>
            </div>
        `

    ul.append(li);
})


ul.addEventListener("click",function(e){
    // console.log(e.target);
    let targetElement = e.target;

    if(targetElement.classList.contains("delete")){
        targetElement.parentElement.parentElement.remove();
    }
    else if(targetElement.classList.contains("edit")){
        console.log("edit ka kaam hoga")
    }
    else if(targetElement.classList.contains("up")){
        console.log("up ka kaam hoga")
    }
    else if(targetElement.classList.contains("down")){
        console.log("down ka kaam hoga")
    }

})