function getValue(){
var unitPrice = document.querySelector("#unit_price").value;
var quantity = document.querySelector("#quantity").value;
var total = unitPrice * quantity;
if(isNaN(total)){
   	document.getElementById("error_message").innerHTML="Quantity and the Price must be a valid Number"
   }
else{
	document.getElementById("total_price").value = total
}

}
 