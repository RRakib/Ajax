let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let user = document.querySelector("#user");
let users = document.querySelector("#users");


btn1.addEventListener("click" , () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET" , "user.json" , true);
    xhr.onload = () => {
        if(xhr.status === 200){
            let x = JSON.parse(xhr.responseText);
            user.innerHTML = 
            "<img src=" + x.image + ">" + "<br>"  +
            "<b> Name: </b>" + x.name + "<br>" +
            "<b> Email:</b> " + x.email + "<br>"
        }
        else if(xhr.status ===404){
            user.innerHTML = "File Not Found";
        }
    }
    xhr.send();
    users.style.display = "none";
    user.style.display = "block";
    btn2.disabled = false;
})
btn2.addEventListener("click" , () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET" , "users.json" , true);
    xhr.onload = () => {
        if(xhr.status === 200){
            let x = JSON.parse(xhr.responseText);
            for(let i = 0; i < x.friends.length ; i++){
            users.innerHTML += 
            `
            <div>
            <img src = ${x.friends[i].image} >
            <br>
            <b>Name : </b> ${x.friends[i].name}
            <br>
            <b>Email : </b> ${x.friends[i].email}
            </div>
            `
            }
        }
        else if(xhr.status ===404){
            users.innerHTML = "File Not Found";
        }
    }
    xhr.send();
    btn2.disabled = true;
    users.style.display = "grid";
    user.style.display = "none";
})