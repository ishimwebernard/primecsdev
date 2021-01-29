function showHideHamburger(){
    var hamburgerElement = document.getElementById("menu");
    if(hamburgerElement.style.display != "none"){
        hamburgerElement.style.display = "none";
        console.log("Hiding");
    }else{
        hamburgerElement.style.display = "grid";
        console.log("Revealing");
    }
}
function switchTabTo(TAB, YOU){
    var tabs = document.getElementsByClassName("tab");
    var triggers = document.getElementsByClassName("lander");
    var newTab = document.getElementById(TAB);
    for(let i of tabs){
        i.style.display = "none";
    }
    for(let trigger of triggers){
        trigger.style.background = "linear-gradient(180deg, #fff, #F6F6F6)";
    }
    newTab.style.display = "block";//E4E4E4
    YOU.style.background = "linear-gradient(180deg, #F4F4F4, #D9D9D9)";
    
}