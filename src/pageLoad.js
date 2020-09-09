function loadPage(){
    let targetElement = document.getElementById("content");
    //targetElement.style.backgroundImage = "url('inside.jpg')";
    //targetElement.style.backgroundSize = "cover";


    let listContain = document.getElementById("navBar");

    let childElement = document.createElement("li");
    childElement.innerText = "HOME PAGE";
    childElement.id = "tab1";
    listContain.appendChild(childElement);

    childElement = document.createElement("li");
    childElement.innerText = "ENTREES";
    childElement.id = "tab2";
    listContain.appendChild(childElement);

    childElement = document.createElement("li");
    childElement.innerText = "DESSERTS";
    childElement.id = "tab3";
    listContain.appendChild(childElement);


    childElement = document.createElement("h1");
    childElement.id = "header";
    childElement.innerText = "Welcome to the Lighthouse Cafe!";
    listContain.appendChild(childElement);


    childElement = document.createElement("br");
    targetElement.appendChild(childElement);


    // Make tab1,
    // Make tab2,
    // Make tab3,
    // Make tab4,

    childElement = document.createElement("div");
    childElement.id = "tabContent";
    targetElement.appendChild(childElement);


    
}

export default loadPage;