function menuPage() {
    const content = document.getElementById("content");
    const heading = document.createElement("h2");
    heading.textContent = "Menu:";
    const list = document.createElement("ul");
    const listItem1 = document.createElement("li");
    const listItem2 = document.createElement("li");
    listItem1.textContent = "Meat";
    listItem2.textContent = "Potatoes";

    content.innerHTML = "";
    list.append(listItem1, listItem2);  
    content.append(heading, list);
  }
  
  export default menuPage;