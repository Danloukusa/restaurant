function loadPage(){
    let targetElement = document.getElementById("content");
    let childElement = document.createElement("ul");
    childElement.id = "navBar";

    targetElement.appendChild(childElement);

    childElement = document.createElement("li");
    childElement.innerText = "Tab 1";
    childElement.id = "tab1";
    targetElement.appendChild(childElement);

    childElement = document.createElement("li");
    childElement.innerText = "Tab 2";
    childElement.id = "tab2";
    targetElement.appendChild(childElement);

    childElement = document.createElement("li");
    childElement.innerText = "Tab 3";
    childElement.id = "tab3";
    targetElement.appendChild(childElement);

    childElement = document.createElement("br");
    targetElement.appendChild(childElement);

    // Make tab1,
    // Make tab2,
    // Make tab3,
    // Make tab4,

    childElement = document.createElement("div");
    childElement.id = "tabContent";
    targetElement.appendChild(childElement);


    childElement = document.createElement("img");
    childElement.href="dist/Montauk_Point_Lighthouse.jpg";
    childElement.alt="Montauk_Point_Lighthouse";
    childElement.id = "lightPic";
    targetElement.appendChild(childElement);

    childElement = document.createElement("h1");
    childElement.innerText = "Lighthouse Cafe";
    targetElement.appendChild(childElement);

    childElement = document.createElement("p");
    childElement.innerText = "Any food is better than no food.";
    targetElement.appendChild(childElement);
}

export default loadPage;