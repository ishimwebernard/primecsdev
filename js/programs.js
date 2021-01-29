var allRows = document.getElementsByClassName("data");
for(let counter=0;counter<allRows.length;counter++){
    if(counter%2 !=0){
        allRows[counter].style.background="#fff";
    }
}