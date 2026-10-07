// let postContainer = document.querySelector(".postContainer");


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>{
//    return response.json()
// })
// .then((data)=>{
//     console.log(data);
//     displayPosts(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// //[{},{},{},{}]

// function displayPosts(data){
//     //[{},{},{}]
//     data.forEach(post => {
//         displaySinglePost(post);
//     });
// }
// function displaySinglePost(post){
//     //{title,body,id,userid}
//     let li = document.createElement("li");
//     li.innerHTML=`
//                     <h1>${post.title}</h1>
//                     <p>${post.body}</p>
//                 `
//     postContainer.append(li);
// }
let addpost = document.querySelector(".btn");
let deletePost = document.querySelector(".deletebtn")
let postData={
    title:"This is my first post",
    body:"this post contain documentation regarding fetch ",
    userid: "1"
}
addpost.addEventListener("click",function(){

fetch("/addpost",{
    method:"Post",
    body:JSON.stringify(postData),
    headers:{
        "content-type":"application/json"
    }
})
.then((response)=>{
    console.log(response);
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
})
deletePost.addEventListener("click",function(){
    fetch("/posts/deletepost/68585555",{
        method:"Delete"
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
})

