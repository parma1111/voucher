const url = 'https://masai-vouchers-api.herokuapp.com/api/vouchers';
// var wallet=document.getElementById("amount")
// if(arr==0){
//     wallet.innerText=0;
// }else{
//     wallet.innerText=arr;
// }

// function addtocart(){
//     var amount = document.getElementById("wallet_balance").value;
//     var total = Number(amount)+Number(arr)
//     localStorage.setItem("amount", JSON.stringify(Number(total)))
//     window.location.reload();
// }

const container = document.getElementById("vouchers");
fetch(url)
       .then(function(res) {
           return res.json();
       })
       .then(function(res){
           appendData(res.data);
       })
       .catch(function(err){
           console.log(err);
       });
  function appendData(data) {
      container.innerHTML=""
      data.map(function(el){

          let div = document.createElement("div")

          let name = document.createElement("p")
          name.innerText=el.name;

          let img = document.createElement("img")
          img.innerText=el.image;

          let price = document.createElement("p")
          price.innerText=el.price;

        //   let add = document.createElement("button")
        //   add.innerText = "Add"
        //   add.setAttribute("class","buy_voucher")
        //   add.addEventListener("click", function(){
            //   addtocart(el)
            //   console.log(el)
        //   })
          div.append(img,name,price,add)
          container.append(div)
      })
  }    
  var arr = JSON.parse(localStorage.getItem("voucher_list"))||[];
//   function addtocart(el){
//       window.location.reload()
//       arr.push(el)
      localStorage.setItem("purchase", JSON.stringify(arr))
//   }
      



