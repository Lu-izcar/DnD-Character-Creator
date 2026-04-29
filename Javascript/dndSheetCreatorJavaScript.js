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
window.addEventListener("load", () => {
  const Imagens = [
    "Html/Images/artificerBack.jpeg",
    "Html/Images/barbarianBack.jpeg",
    "Html/Images/bardBack.jpeg",
    "Html/Images/classBackground.jpg",
    "Html/Images/clericBack.jpeg",
    "Html/Images/DnDIcon.png",
    "Html/Images/druidBack.jpeg",
    "Html/Images/fighterBack.jpeg",
    "Html/Images/infoBackground.jpg",
    "Html/Images/magnifyingLenses.png",
    "Html/Images/mainPageBackground.jpg",
    "Html/Images/monkBack.jpeg",
    "Html/Images/originBackground.jpg",
    "Html/Images/paladinBack.jpeg",
    "Html/Images/rangerBack.jpeg",
    "Html/Images/rogueBack.jpeg",
    "Html/Images/sorcererBack.jpeg",
    "Html/Images/speciesBackground.jpg",
    "Html/Images/statsBackground.jpg",
    "Html/Images/warlockBack.jpeg",
    "Html/Images/wizardBack.jpeg"
  ];

  Imagens.forEach((src) => {
    const img = new Image();
    img.src = src;
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
  const header = document.createElement("div");
  header.classList.add("featuresHeader");
  const content = document.createElement("div");
  content.classList.add("featuresContent");
  feat.appendChild(header);
  feat.appendChild(content);
  header.textContent = "Header";
  content.textContent = "Content";
  for (let i = 0; i < 27; i++){
    const clone = feat.cloneNode(true);
    rightSide[0].appendChild(clone);
  };
  const firstFeat = document.createElement("div");
  const firstHeader = document.createElement("div");
  const firstContent = document.createElement("div");
  firstFeat.classList.add("featuresAccordion");
  firstHeader.classList.add("featuresHeader");
  firstContent.classList.add("featuresContent");
  firstHeader.textContent = "Hit Points";
  firstContent.textContent = "Hit Point Dice: D12 per Barbarian Level\nHit Points at Level 1: 12 + Con. modifier\nHit Points per additional Barbarian Level: D12 + your Con. modifier, or, 7 + your Con. modifier";
  rightSide[0].appendChild(firstFeat);
  firstFeat.appendChild(firstHeader);
  firstFeat.appendChild(firstContent);
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
  ocument.getElementById("infoSelect2014").style.display = 'none';
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