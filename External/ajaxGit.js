let btn = document.querySelector("#btn");
let users = document.querySelector("#users");

btn.addEventListener("click" , () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://api.github.com/users" , true);
    xhr.onload = () =>{
        if(xhr.status === 200){
            let response  = JSON.parse(xhr.responseText);
            let output = "";
            response.forEach( items => {
                output += 
                `<div class="user">
                <img src = ${items.avatar_url} style =" width : 70px ; height : 70px ">
                    <ul>
                        <li>
                            ID : ${items.id}
                        </li>
                        <li>
                            Name :${items.login}
                        </li>
                        <li>
                            Type :${items.type}
                        </li>
                    </ul>
                </div>`
            })
            users.innerHTML = output;
        }
        else{
            console.log("error")
        }
    }
    xhr.send();
})