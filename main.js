function pay() {
    var MOP = document.getElementById("ball").value;
    document.getElementById("CAP").innerHTML= MOP;

    var MOP = document.getElementById("sell").value;
    document.getElementById("MOP").innerHTML= MOP;

    var MOP = document.getElementById("amt").value;
    document.getElementById("amount").innerHTML= MOP;

    var MOP = document.getElementById("comment").value;
    document.getElementById("dist").innerHTML= MOP;

var num ="";
var copy = "CAP";
var numm = "dist";
var amt = "amount";
var mop = "MOP";

var serial = [];
serial.push({Number:numm,category:copy,amount:amt,MOP:mop});
for(i=0; i < serial.length; i++){
    num +="<tr><td>" + Number(i+1) + "</td><td>"+serial[i].category+"</td><td>"+serial[i].amount+"</td><td>"+serial[i].MOP+"</td></tr>";
    }
    document.getElementById("demy").innerHTML = num;
}