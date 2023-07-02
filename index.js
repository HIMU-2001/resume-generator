function addNewWe(){
    console.log("CLICKED");
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here");
    newNode.setAttribute("rows","5");

    let we = document.querySelector("#we");
    let  weAddButton = document.querySelector("#weAddButton");

    we.insertBefore(newNode,weAddButton);
}


function addNewAQ(){
    console.log("CLICKED");
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here");
    newNode.setAttribute("rows","5");

    let aq = document.querySelector("#aq");
    let aqAddButton = document.querySelector("#aqAddButton");

    aq.insertBefore(newNode,aqAddButton);
}

function generateCV(){
    console.log("CLICKED");
    let name = document.getElementById("nameField").value;
    document.getElementById("nameT").textContent=name;
    document.getElementById("nameT2").textContent=name;

    let contact = document.getElementById("contactField").value;
    document.getElementById("contactT").textContent=contact;

    let address = document.getElementById("addressField").value;
    document.getElementById('addressT').textContent= address;

    let linkedIn = document.getElementById("linkedField").value;
    document.getElementById("linkedT").setAttribute("href",linkedIn);

    let git = document.getElementById("gitField").value;
    document.getElementById("gitT").setAttribute("href",git);

    let tweet = document.getElementById("tweetField").value;
    document.getElementById("tweetT").setAttribute("href",tweet);

    let objective = document.getElementById("objective").value;
    document.getElementById('objectiveT').textContent= objective;

    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;


    let eqs = document.getElementsByClassName("eqField");
    let str1 = "";
    for (let e of eqs){
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader);
    reader.onloadend = function(){
        document.getElementById("imgT").setAttribute("src",reader.result);

    }

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

function printCV(){
    window.print();
}