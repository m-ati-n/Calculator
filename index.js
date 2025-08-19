let keydown = document.querySelectorAll(".down");
let result = document.querySelector(".result p").innerText;
keydown.forEach(item => {
    item.addEventListener("click",select);
})
function select(event){
    let chose = event.target.innerText;
    if(result == 0){
            result = chose;
        }
    else{
        result += chose;
    }
    RE();
}
let AC = document.querySelector(".AC");
AC.addEventListener("click", aClear);
function aClear(){
    result = 0
    RE();
}
function RE(){
    document.querySelector(".result p").innerText = result;
}
let C = document.querySelector(".C");
C.addEventListener("click", Clear);
function Clear(){
    if(result.length == 1){
        result = 0;
    }else{
    result = result.substring(0, result.length - 1);
    }
    RE();
}
let calk = document.querySelector(".calk");
calk.addEventListener("click", so);
function so(){
    result = eval(result);
    RE();
}