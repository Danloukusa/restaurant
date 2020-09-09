import loadPage from './pageLoad';


function clearTabContents(){
    // Gonna put button into the tab.
    // AKA, button is CHILD of TAB
     let container = document.getElementById("tabContent");
     if(container != null)
         container.remove();
}
function putTab1(){
    clearTabContents();
    // make children of tab1
    document.getElementById("header").innerText = "Welcome to the Lighthouse Cafe";
    let majorParent = document.getElementById("content");
    let child = document.createElement("div");
    child.id = "tabContent";
    majorParent.appendChild(child);

    majorParent = document.getElementById("tabContent");
    child = document.createElement("p");
    child.innerText = "Welcome to the lighthouse restauraunt. Please note that disruptful patrons will be sent to the songbird.";
    majorParent.appendChild(child);

    let targetElement = document.getElementById("tabContent")
    let childElement = document.createElement("img");
    childElement.src="Montauk_Point_Lighthouse.jpg";
    childElement.alt="Montauk_Point_Lighthouse";
    childElement.id = "lightPic";
    targetElement.appendChild(childElement);


    childElement = document.createElement("h1");
    childElement.innerText = "Lighthouse Cafe";
    targetElement.appendChild(childElement);

    childElement = document.createElement("p");
    childElement.innerText = "Any food is better than no food.";
    targetElement.appendChild(childElement);
    // place children of tab1
}

// ENTREES
function putTab2(){
    clearTabContents();
    document.getElementById("header").innerText = "Killer Entrees";
    // make children of tab1
    let majorParent = document.getElementById("content");
    let child = document.createElement("div");
    child.id = "tabContent";
    majorParent.appendChild(child);

    majorParent = document.getElementById("tabContent");
    child = document.createElement("p");
    child.id = "song";
    child.innerText = "The SongBird Special";
    majorParent.appendChild(child);

    child = document.createElement("img");
    child.src = "songBird.jpg";
    document.getElementById("song").appendChild(child);
    
    // place children of tab1
}

// DESSERTS
function putTab3(){
    clearTabContents();
    // make children of tab1
    document.getElementById("header").innerText = "Deadly Desserts";
    let majorParent = document.getElementById("content");
    let child = document.createElement("div");
    child.id = "tabContent";
    majorParent.appendChild(child);

    majorParent = document.getElementById("tabContent");
    child = document.createElement("p");
    child.id = "murica";
    child.innerText = "Father Freedom";
    majorParent.appendChild(child);

    child = document.createElement("img");
    child.src = "patriot.jpg";
    document.getElementById("murica").appendChild(child);
    

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
