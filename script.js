var selectField=document.getElementById("selectField");
var selectText=document.getElementById("selectText");
var options=document.getElementsByClassName("options");
var arrowİcon=document.getElementById("arrowİcon");

var list=document.getElementById("list");

selectField.onclick=function(){
    list.classList.toggle("hide");
    arrowİcon.classList.toggle("rotate");
    

}
for(option of options){
    option.onclick=function(){
        selectText.innerHTML=this.textContent;
        list.classList.toggle("hide");
        arrowİcon.classList.toggle("rotate");
    }
}

