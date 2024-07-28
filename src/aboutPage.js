function aboutPage() {
    const content = document.getElementById("content");
    const heading = document.createElement("h2");
    heading.textContent = "About Ryan's Restaurant";
    const paragraph = document.createElement("p");
    paragraph.textContent = "A restaurant owned by a guy named Ryan."
  
    content.innerHTML = "";
    content.append(heading, paragraph);
  }
  
  export default aboutPage;