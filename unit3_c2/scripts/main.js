



document.querySelector("#form").addEventListener("submit",myfunction);
var data1=JSON.parse(localStorage.getItem("form"))||[]

function myfunction(event){
    event.preventDefault(event);

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var address = document.querySelector("#address").value;
    var amount = document.querySelector("#amount").value;

    var obj1 = {
        name:name,
        email:email,
        address:address,
        amount:amount,
    }
    data1.push(obj1);
    localStorage.setItem("user", JSON.stringify(data1))
    window.location.reload();
}

