import homePage from "./homePage";
import menuPage from "./menuPage";
import aboutPage from "./aboutPage";

homePage();

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", () => {
  homePage();
});

menuBtn.addEventListener("click", () => {
  menuPage();
});

aboutBtn.addEventListener("click", () => {
  aboutPage();
});
