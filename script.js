const submit = document.querySelector(".submit");

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

     authenticateUser(user, password)
                    .then((res)=> {
                        const div = document.querySelector(".res");
                        div.style.color = "green";
                        div.textContent = res;
                        console.log(res);
                    })
                    .catch((rej)=> {
                        const div = document.querySelector(".res");
                        div.style.color = "red";
                        div.textContent = rej.message;
                        console.log(rej.message);
                    });
});


const authenticateUser = (userName, password) =>{
    return new Promise( (resolve, reject) => {
        if(userName === "yehya" && password === "tamimi"){
            resolve("Success!");
        }

        if(userName !== "yehya" || password !== "tamimi"){
            reject( new Error("Incorrect username or password"));
        }
    })
}



