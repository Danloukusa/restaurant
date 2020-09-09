import pageLoad from './pageLoad';
import loadPage from './pageLoad';


function clearTabContents(){
    // Gonna put button into the tab.
    // AKA, button is CHILD of TAB
     let container = document.getElementById("tab");
     if(container != null)
         container.remove();
}
function putTab1(){
    clearTabContents();
    // make children of tab1
    let majorParent = document.getElementById("tabContent");
    let child = document.createElement("div");
    child.id = "tab";
    majorParent.appendChild(child);

    majorParent = document.getElementById("tab");
    child = document.createElement("p");
    child.innerText = "Welcome to the lighthouse restauraunt. Please note that disruptful patrons will be sent to the songbird.";
    majorParent.appendChild(child);
    // place children of tab1
}

function putTab2(){
    clearTabContents();
    // make children of tab1
    let majorParent = document.getElementById("tabContent");
    let child = document.createElement("div");
    child.id = "tab";
    majorParent.appendChild(child);

    majorParent = document.getElementById("tab");
    child = document.createElement("p");
    child.innerText = "Here is some sample text about stuff you're never gonna read.";
    majorParent.appendChild(child);
    // place children of tab1
}

function putTab3(){
    clearTabContents();
    // make children of tab1
    let majorParent = document.getElementById("tabContent");
    let child = document.createElement("div");
    child.id = "tab";
    majorParent.appendChild(child);

    majorParent = document.getElementById("tab");
    child = document.createElement("p");
    child.innerText = "The quick brown fox jumps over the lazy dog.";
    majorParent.appendChild(child);
    // place children of tab1
}
function tabInitialize(){
    console.log("BS");
    document.getElementById("tab1").addEventListener("click", putTab1);
    document.getElementById("tab2").addEventListener("click", putTab2);
    document.getElementById("tab3").addEventListener("click", putTab3);

    putTab1();
    // make TAB 2 and TAB 3, but none of their child elements.

    // make and place TAB 2

    // make and place TAB 3
}

loadPage();
tabInitialize();


console.log("Basic Message");
