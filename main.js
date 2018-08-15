let url = "https://randomuser.me/api/?results=50";
let container = document.getElementById("people");
let filters = [];
let data;

function printJson(response) {
    return response.json();
};

document.getElementById("first").addEventListener("click", filterData);
document.getElementById("last").addEventListener("click", filterData);
document.getElementById("age").addEventListener("click", filterData);

fetch(url)
.then(printJson)
.then(function (myjson) {
    console.log(myjson)
    displayUsers(myjson.results);
    data = myjson
});


function filterData(event) {
    event.preventDefault();
    container.innerHTML = "";
    let input = document.getElementById("user_input").value;
    let buttonId = event.target.id;
    console.log(buttonId);
    if (buttonId == "first") {
        let users = data.results.filter(function (user) {
            console.log(user);
            if (user.name.first.indexOf(input) != -1) {
                return user;
            }
        });
        displayUsers(users);
    }
    if (buttonId == "last") {
        let users = data.results.filter(function (user) {
            if (user.name.last.indexOf(input) != -1) {
                return user;
                }
        });
            displayUsers(users);
        }
    if (buttonId == "age"){
        let users = data.results.filter(function (user) {
            if (user.registered.age.indexOf(input) != -1) {
                return user;
            }
        })
        displayUsers(users);
    }
    }

   
    function displayUsers(users) {
        for (let user of users) {
            appendUser(user);
        }
    }

    function appendUser(user) {
        // let userElement = document.createElement("div");
        // userElement.innerHTML = user.name.first + " " + user.name.last;
        // userElement.innerHTML = user.gender + " " + user.email + " " + user.home;
        // container.appendChild(userElement);
        const fname = user.name.first;
        const lname = user.name.last;
        const gender = user.registered.age;
        const home  = user.cell;
        const email = user.email;
        const pic = user.picture.large;

        const div = document.createElement("div");
        div.styles = {
            "width": "50px"
            
        }
        //console.log(myjson.results[i].name.first)
        div.innerHTML = "<img src ='" + pic + "'/></div><div>"+fname + " " + lname + "</div><div>" + gender + "</div><div> " + email + "</div><div>" + home + "</div>"
        document.getElementById("people")
        let people = document.getElementById("people")
        people.appendChild(div)
    }
