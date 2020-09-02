function loadPage(){
    let targetElement = document.getElementById("content");
    let childElement = document.createElement("img");
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