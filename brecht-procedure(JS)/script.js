
function buystock() {
    var price=parseInt(document.getElementById("stock-price").innerHTML);
    var share=parseInt(document.getElementById('shr').innerHTML);
    var cash =parseInt(document.getElementById('cash_player').innerHTML);
  var cost=0;
  cost= price * share;
    if (cost <= cash) {
        cash -= cost;
    }
    else{
        alert("insufiant cash");
    }
    cash_player.innerHTML=cash;
};
function sellstock() {
    var price=parseInt(document.getElementById("stock-price").innerHTML);
    var share=parseInt(document.getElementById('shr').innerHTML);
    var cash =parseInt(document.getElementById('cash_player').innerHTML);
    var cost=0;
    cost= price * share;
          cash += cost;
      cash_player.innerHTML=cash;
  };
  function takeloans() {
    var price=parseInt(document.getElementById("loan-price").innerHTML);
    var cash =parseInt(document.getElementById('cash_player').innerHTML);
          cash += price;
      cash_player.innerHTML=cash;
  };
  function refundloans() {
    var loanprice=parseInt(document.getElementById("loan-price").innerHTML);
    var cash =parseInt(document.getElementById('cash_player').innerHTML);
    var refund =parseInt(document.getElementById('refund_loan').innerHTML);
    var interet =0
     interet=(loanprice*10)/100
     refund= refund+loanprice+interet;
          cash -= refund;
      cash_player.innerHTML=cash;
      refund_loan.innerHTML=refund;
  };
  function statut(){
    var playercash =parseInt(document.getElementById('cash_player').innerHTML);
    var payday =parseInt(document.getElementById('cash_player').innerHTML);
    if(playercash<0 & payday<0){
        var sgss = document.getElementById("rsl0");
        sgss.style.display = sgss.style.display === "block" ? "block" : "block";
    }
    else{
        document.getElementById("rsl1").style.display="block";
    }
  }
  function newchild(){
    var child=parseInt(document.getElementById("child_player").innerHTML);
    var playercash=parseInt(document.getElementById('cash_player').innerHTML);
    var playerexpense=parseInt(document.getElementById('expense_player').innerHTML);
    var max ;
    var expense;
    expense=5;
    max=3;
    if(max<=3){
        child+=1;
    }
     playercash-=5
     playerexpense+=expense;
    child_player.innerHTML=child;
    cash_player.innerHTML=playercash;
    expense_player.innerHTML=playerexpense;
    expense

  }