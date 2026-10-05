

let taskArray = [
    {
        id:1,
        title:"Task 1",
        description : "compplete javascript assignment"
    },
    {
        id:2,
        title:"Task 2",
        description : "revise dp"
    },
    {
        id:3,
        title:"Task 3",
        description : "practice operating system"
    }
]
let ul = document.querySelector(".Task-list")
function displayOneTask(task){
    //{id:1,title:"Task 1",description : "compplete javascript assignment"}
    let li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML=` <div class="task-item-container">
                    <h1 class="task-title">${task.title}</h1>
                    <p class="task-description"> ${task.description}</p>
                    <div class="task-btn">
                        <button class="edit">✍️</button>
                        <button class="delete">X</button>
                    </div>
                </div>`

    ul.append(li);

}
for(let i =0;i<taskArray.length;i++){
    let task = taskArray[i];
    displayOneTask(task);
}