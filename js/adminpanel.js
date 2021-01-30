
function switchTab(TO){
    let navigators = document.getElementsByClassName('navItem');
    let captains = document.getElementsByClassName('captain');
    for(let i=0; i<navigators.length;i++){
        captains[i].style.display="none";
    }
    captains[TO].style.display = "block";
}