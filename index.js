document.getElementById("mousemove1").addEventListener("mouseenter",MouseEnter1);
function MouseEnter1(){
    document.getElementById("mousemove1").style.width="105%";
}


document.getElementById("mousemove1").addEventListener("mouseleave",MouseLeave1);
function MouseLeave1(){
    document.getElementById("mousemove1").style.width="100%";
}


document.getElementById("mousemove2").addEventListener("mouseenter",MouseEnter2);
function MouseEnter2(){
    document.getElementById("mousemove2").style.width="105%";
}


document.getElementById("mousemove2").addEventListener("mouseleave",MouseLeave2);
function MouseLeave2(){
    document.getElementById("mousemove2").style. width="100%";
}


document.getElementById("mousemove3").addEventListener("mouseenter",MouseEnter3);
function MouseEnter3(){
    document.getElementById("mousemove3").style.width="105%";
}


document.getElementById("mousemove3").addEventListener("mouseleave",MouseLeave3);
function MouseLeave3(){
    document.getElementById("mousemove3").style.width="100%"; 
}

let subMenu = document.getElementById("subMenu");
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}
function toggleMenEnter(){
    document.getElementById("subMen").style.maxHeight="40rem"; 
}
function toggleMenLeave(){
    document.getElementById("subMen").style.maxHeight="0rem"; 
}

function togglewomenEnter(){
    document.getElementById("subWomen").style.maxHeight="40rem"; 
}
function togglewomenLeave(){
    document.getElementById("subWomen").style.maxHeight="0rem"; 
}
function togglekidsEnter(){
    document.getElementById("subKids").style.maxHeight="40rem"; 
}
function togglekidsLeave(){
    document.getElementById("subKids").style.maxHeight="0rem"; 
}
function togglesportsEnter(){
    document.getElementById("subSports").style.maxHeight="40rem"; 
}
function togglesportsLeave(){
    document.getElementById("subSports").style.maxHeight="0rem"; 
}

function togglebrandEnter(){
    document.getElementById("subbrand").style.maxHeight="40rem";
}

function togglebrandLeave(){
    document.getElementById("subbrand").style.maxHeight="0rem";
}
function togglelifeEnter(){
    document.getElementById("sublife").style.maxHeight="40rem";
}

function togglelifeLeave(){
    document.getElementById("sublife").style.maxHeight="0rem";
}
function toggleoutletsEnter(){
    document.getElementById("suboutlets").style.maxHeight="40rem";
}

function toggleoutletsLeave(){
    document.getElementById("suboutlets").style.maxHeight="0rem";
}

