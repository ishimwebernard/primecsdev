switchNav(0);
function switchNav(n){
    const mainnavs = document.getElementsByClassName('mainnav');
    for(let mainnav of mainnavs){
        mainnav.style.display="none";
    }
    mainnavs[n].style.display = "flex";
    animateMain(mainnavs[n]);
}

function animateMain(MAIN_PART){
    const TWEENTL = new TimelineMax();
    TWEENTL.fromTo(MAIN_PART, .35, {x: "100%"},{x:"0%"});
}