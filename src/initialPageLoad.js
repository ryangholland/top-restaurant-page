function initialPageLoad() {
  const content = document.getElementById("content");
  const heading = document.createElement("h1");
  heading.textContent = "Ryan's Restaurant";
  const paragraph = document.createElement("p");
  paragraph.textContent = "You love eatin' food. We love makin' food.";

  content.append(heading, paragraph);
}

export default initialPageLoad;