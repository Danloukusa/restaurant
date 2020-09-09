// When page loads, make tab Structure, and autofill first tab.
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

function clearTabContents(){
    // Gonna put button into the tab.
    // AKA, button is CHILD of TAB
    let container = document.getElementById("tabContent");
    container.removeChild();
}


// inject html
function putTab1(){
    clearTabContents();
    // make children of tab1
    let majorParent = document.getElementById("tabContent");
    let child = document.createElement("div");
    child.id = "tab1";
    majorParent.appendChild(child);

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
    child.id = "tab2";
    majorParent.appendChild(child);

    child = document.createElement("p");
    child.innerText = "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";
    majorParent.appendChild(child);
    // place children of tab1
    // see tab1
}

function putTab3(){
    // make children of tab1
    clearTabContents();
    let majorParent = document.getElementById("tabContent");
    let child = document.createElement("div");
    child.id = "tab3";
    majorParent.appendChild(child);

    child = document.createElement("p");
    child.innerText = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    majorParent.appendChild(child);
    // place children of tab1
    // see tab1
}
