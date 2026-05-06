//Variables start here
const rightSide = document.querySelectorAll(".rightBox");
const MainPage = document.getElementById("mainPage")
const class2014 = document.getElementById("classSelect2014");
const species2014 = document.getElementById("speciesSelect2014");
const stats2014 = document.getElementById("statsSelect2014");
const origin2014 = document.getElementById("originSelect2014");
const info2014 = document.getElementById("infoSelect2014");
const class2024 = document.getElementById("classSelect2024");
const species2024 = document.getElementById("speciesSelect2024");
const stats2024 = document.getElementById("statsSelect2024");
const origin2024 = document.getElementById("originSelect2024");
const info2024 = document.getElementById("infoSelect2024");

/*
Index for right sides:
0 - Class2014
1 - Species2014
2 - Stats2014
3 - Origin2014
4 - Info2014
5 - Class2024
6 - Species2024
7 - Stats2024
8 - Origin2024
9 - Info2024
*/
//Variables end here
document.addEventListener("DOMContentLoaded", function() {
  rightSide.forEach(side => {
    side.classList.add("accordion");
    side.id = 'accordionPanelsStayOpenExample';
  });
});

function returnMenu(){
  MainPage.style.display = 'grid';
  class2014.style.display = 'none';
  species2014.style.display = 'none';
  stats2014.style.display = 'none';
  origin2014.style.display = 'none';
  info2014.style.display = 'none';
  class2024.style.display = 'none';
  species2024.style.display = 'none';
  stats2024.style.display = 'none';
  origin2024.style.display = 'none';
  info2024.style.display = 'none';
};

function choseVersion(){
  let boxChose = document.getElementById("versionButtons");

  if (boxChose.style.display === "block"){
    boxChose.style.display = "none";
  }
  else{
    boxChose.style.display = "block"
  }
};

//Here starts the 2014(5e) functions
function createClass2014(){
  MainPage.style.display = 'none';
  class2014.style.display = 'block';
  species2014.style.display = 'none';
  stats2014.style.display = 'none';
  origin2014.style.display = 'none';
  info2014.style.display = 'none';
  document.getElementById("versionButtons").style.display = 'none';
};

//Class choice functions start here

function createBarbarian2014(){
  const feat = document.createElement("div");
  feat.classList.add("featuresAccordion");
  feat.classList.add("accordion-item");

  const header = document.createElement("h6");
  header.classList.add("accordion-header");
  const headerButton = document.createElement("button");
  headerButton.classList.add("accordion-button", "collapsed");
  headerButton.classList.add("featuresHeader");
  headerButton.type = "button";
  headerButton.setAttribute("data-bs-toggle", "collapse");
  header.appendChild(headerButton);

  const content = document.createElement("div");
  content.classList.add("accordion-collapse", "collapse");
  const contentInside = document.createElement("div");
  contentInside.classList.add("accordion-body");
  contentInside.classList.add("featuresContent");
  content.appendChild(contentInside);

  feat.appendChild(header);
  feat.appendChild(content);


  if (rightSide[0].childElementCount === 0){
    const wrapper = document.createElement("div");
    wrapper.style.justifySelf = "end";
    const label = document.createElement("label");
    label.textContent = "Level: ";
    label.htmlFor = "level";
    label.classList.add("levelLabel");
    const select = document.createElement("select");
    rightSide[0].appendChild(select);
    select.id = "level";
    wrapper.appendChild(label);
    wrapper.appendChild(select);
    rightSide[0].appendChild(wrapper);
    for (let i = 1; i <= 20; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.appendChild(option);
    }
    select.addEventListener("change", () => {
      if (select.value === "1") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=4){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "2") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=6){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "3") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=7){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "4") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=8){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "5") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=10){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "6") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=11){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "7") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=12){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "8") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=13){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "9") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=14){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "10") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=15){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "11") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=16){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "12") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=17){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "13") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=18){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "14") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=19){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "15") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=20){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "16") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=21){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "17") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=22){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "18") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=23){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "19") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=24){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      } else if (select.value === "20") {
        for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=25){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
      }
    });

    for (let i = 0; i < 25; i++){
      const clone = feat.cloneNode(true);
      const button = clone.querySelector(".accordion-button");
      const content = clone.querySelector(".accordion-collapse");
      button.setAttribute("data-bs-target", `#panelStayOpen-collapse${i}`);
      content.id = `panelStayOpen-collapse${i}`;
      rightSide[0].appendChild(clone);
    };
    for (let i = 1; i < rightSide[0].children.length; i++){
          if (i<=4){
            rightSide[0].children[i].style.display = "block";
          }else{
            rightSide[0].children[i].style.display = "none";
          }
        }
    featButtons = rightSide[0].querySelectorAll(".accordion-button");
    featContents = rightSide[0].querySelectorAll(".accordion-body");
    fetch("../TextFiles/barbarianHeaders.txt")
      .then(response => response.text())
      .then(data => {
        const barbarianHeaders = data.split("\n");
        featButtons.forEach((button, index) => {
        button.textContent = barbarianHeaders[index];
        });
      });
    fetch("../TextFiles/barbarianContents.txt")
      .then(response => response.text())
      .then(data => {
        const barbarianContents = data.split("|");
        featContents.forEach((content, index) => {
        content.innerHTML = barbarianContents[index];
        });
        console.log(barbarianContents);
      });
  }else{
    rightSide[0].replaceChildren();
  };
  console.log(rightSide[0].childElementCount);
};
function createBard2014(){

};
function createCleric2014(){

};
function createDruid2014(){

};
function createFighter2014(){

};
function createMonk2014(){

};
function createPaladin2014(){

};
function createRanger2014(){

};
function createRogue2014(){

};
function createSorcerer2014(){

};
function createWarlock2014(){

};
function createWizard2014(){

};
function createArtificer2014(){

};

//Class choice functions end here

function createSpecies2014(){
  MainPage.style.display = 'none';
  class2014.style.display = 'none';
  species2014.style.display = 'block';
  stats2014.style.display = 'none';
  origin2014.style.display = 'none';
  info2014.style.display = 'none';

};

function createStats2014(){
  MainPage.style.display = 'none';
  class2014.style.display = 'none';
  species2014.style.display = 'none';
  stats2014.style.display = 'block';
  origin2014.style.display = 'none';
  info2014.style.display = 'none';
};

function createOrigin2014(){
  MainPage.style.display = 'none';
  class2014.style.display = 'none';
  species2014.style.display = 'none';
  stats2014.style.display = 'none';
  origin2014.style.display = 'block';
  info2014.style.display = 'none';
};

function createInfo2014(){
  MainPage.style.display = 'none';
  class2014.style.display = 'none';
  species2014.style.display = 'none';
  stats2014.style.display = 'none';
  origin2014.style.display = 'none';
  info2014.style.display = 'block';
};

//Here ends the 2014(5e) functions

// Here starts the 2024(5.5e) functions
function createClass2024(){
  MainPage.style.display = 'none';
  class2024.style.display = 'block';
  species2024.style.display = 'none';
  stats2024.style.display = 'none';
  origin2024.style.display = 'none';
  info2024.style.display = 'none';
  document.getElementById("versionButtons").style.display = 'none';
};

function createSpecies2024(){
  MainPage.style.display = 'none';
  class2024.style.display = 'none';
  species2024.style.display = 'block';
  stats2024.style.display = 'none';
  origin2024.style.display = 'none';
  info2024.style.display = 'none';
};

function createStats2024(){
  MainPage.style.display = 'none';
  class2024.style.display = 'none';
  species2024.style.display = 'none';
  stats2024.style.display = 'block';
  origin2024.style.display = 'none';
  info2024.style.display = 'none';
};

function createOrigin2024(){
  MainPage.style.display = 'none';
  class2024.style.display = 'none';
  species2024.style.display = 'none';
  stats2024.style.display = 'none';
  origin2024.style.display = 'block';
  info2024.style.display = 'none';
};

function createInfo2024(){
  MainPage.style.display = 'none';
  class2024.style.display = 'none';
  species2024.style.display = 'none';
  stats2024.style.display = 'none';
  origin2024.style.display = 'none';
  info2024.style.display = 'block';
};
// Here ends the  2024(5.5e) functions