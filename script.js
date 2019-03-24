function greet(){
	window.alert("Hello world!");
}
function init(){
	/*document.getElementById("flower1").getElementsByTagName("img")[1].src="flower2.png";
	document.getElementsByTagName("img")[4].src="flower1.png";
	//document.getElementById("empty").innerHTML="<div><p> You are great! </p></div>"
	/*let image=document.createElement("img");
	image.getElementById("new_element").appendChild(image).src="flower2.png";*/
	let image=document.createElement("img");
	image.src="flower2.png";
	document.getElementById("new_element").appendChild(image);

	//////////////////////////////////////////////////////////////

	let spans = document.getElementById("rainbow").getElementsByTagName("span");

	 // fill with proper code
let colors = ["red", "orange","yellow","green","blue","purple","pink"];

for (var i = spans.length - 1; i >= 0; i--) {
	spans[i].style.color = colors[i];
	//document.getElementById("rainbow").appendChild(spans);
}

var changeSrc = function(event) {
  if (event.target.src) {
  	let filename = event.target.src.replace(/^.*[\\\/]/, '');
  		if(filename=="flower2.png"){
  			event.target.src="flower1.png";
  		}else{
  			event.target.src="flower2.png";
  		}
  	console.log(filename);
  };
};

document.getElementById("event").addEventListener("mouseover", changeSrc);

}

function addItem(){
  let valeur=document.getElementById("items").value;
  let node = document.createElement("LI");
  let textnode = document.createTextNode(valeur);
  node.appendChild(textnode);
  let checkImp =document.getElementById("important");
  let checkBuy =document.getElementById("buy");
  if(checkImp.checked==true){
  document.getElementById("list").appendChild(node).style.color="red";
	}
  if(checkBuy.checked==true){
  document.getElementById("list").appendChild(node).style["text-decoration"]="underline";	
  }else{
    document.getElementById("list").appendChild(node);
  }
 
}
function removeItem(){
  let rm=document.getElementById("list");
  let numb=document.getElementById("myNumber").value;
  rm.removeChild(rm.childNodes[numb]);
}