//Variables start here
const rightSide = document.querySelectorAll(".rightBox");
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
  document.getElementById("mainPage").style.display = 'grid';
  document.getElementById("classSelect2014").style.display = 'none';
  document.getElementById("speciesSelect2014").style.display = 'none';
  document.getElementById("statsSelect2014").style.display = 'none';
  document.getElementById("originSelect2014").style.display = 'none';
  document.getElementById("infoSelect2014").style.display = 'none';
  document.getElementById("classSelect2024").style.display = 'none';
  document.getElementById("speciesSelect2024").style.display = 'none';
  document.getElementById("statsSelect2024").style.display = 'none';
  document.getElementById("originSelect2024").style.display = 'none';
  document.getElementById("infoSelect2024").style.display = 'none';
  version2014 = false;
  version2024 = false;
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
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2014").style.display = 'block';
  document.getElementById("speciesSelect2014").style.display = 'none';
  document.getElementById("statsSelect2014").style.display = 'none';
  document.getElementById("originSelect2014").style.display = 'none';
  document.getElementById("infoSelect2014").style.display = 'none';
  document.getElementById("versionButtons").style.display = 'none';
};

//Class choice functions start here

function createBarbarian2014(){
  const firstFeat = document.createElement("div");
  const firstHeader = document.createElement("div");
  const firstContent = document.createElement("div");
  firstFeat.classList.add("featuresAccordion");
  firstHeader.classList.add("featuresHeader");
  firstContent.classList.add("featuresContent");
  firstHeader.textContent = "Hit Points"
  firstContent.textContent = "Hit Point Dice: D12 per Barbarian Level\nHit Points at Level 1: 12 + Con. modifier\nHit Points per additional Barbarian Level: D12 + your Con. modifier, or, 7 + your Con. modifier"
  rightSide[0].appendChild(firstFeat);
  firstFeat.appendChild(firstHeader)
  firstFeat.appendChild(firstContent)
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
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2014").style.display = 'none';
  document.getElementById("speciesSelect2014").style.display = 'block';
  document.getElementById("statsSelect2014").style.display = 'none';
  document.getElementById("originSelect2014").style.display = 'none';
  document.getElementById("infoSelect2014").style.display = 'none';

};

function createStats2014(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2014").style.display = 'none';
  document.getElementById("speciesSelect2014").style.display = 'none';
  document.getElementById("statsSelect2014").style.display = 'block';
  document.getElementById("originSelect2014").style.display = 'none';
  document.getElementById("infoSelect2014").style.display = 'none';
};

function createOrigin2014(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2014").style.display = 'none';
  document.getElementById("speciesSelect2014").style.display = 'none';
  document.getElementById("statsSelect2014").style.display = 'none';
  document.getElementById("originSelect2014").style.display = 'block';
  document.getElementById("infoSelect2014").style.display = 'none';
};

function createInfo2014(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2014").style.display = 'none';
  document.getElementById("speciesSelect2014").style.display = 'none';
  document.getElementById("statsSelect2014").style.display = 'none';
  document.getElementById("originSelect2014").style.display = 'none';
  document.getElementById("infoSelect2014").style.display = 'block';
};

//Here ends the 2014(5e) functions

// Here starts the 2024(5.5e) functions
function createClass2024(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2024").style.display = 'block';
  document.getElementById("speciesSelect2024").style.display = 'none';
  document.getElementById("statsSelect2024").style.display = 'none';
  document.getElementById("originSelect2024").style.display = 'none';
  document.getElementById("infoSelect2024").style.display = 'none';
  document.getElementById("versionButtons").style.display = 'none';
};

function createSpecies2024(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2024").style.display = 'none';
  document.getElementById("speciesSelect2024").style.display = 'block';
  document.getElementById("statsSelect2024").style.display = 'none';
  document.getElementById("originSelect2024").style.display = 'none';
  document.getElementById("infoSelect2024").style.display = 'none';
};

function createStats2024(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2024").style.display = 'none';
  document.getElementById("speciesSelect2024").style.display = 'none';
  document.getElementById("statsSelect2024").style.display = 'block';
  document.getElementById("originSelect2024").style.display = 'none';
  document.getElementById("infoSelect2024").style.display = 'none';
};

function createOrigin2024(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2024").style.display = 'none';
  document.getElementById("speciesSelect2024").style.display = 'none';
  document.getElementById("statsSelect2024").style.display = 'none';
  document.getElementById("originSelect2024").style.display = 'block';
  document.getElementById("infoSelect2024").style.display = 'none';
};

function createInfo2024(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2024").style.display = 'none';
  document.getElementById("speciesSelect2024").style.display = 'none';
  document.getElementById("statsSelect2024").style.display = 'none';
  document.getElementById("originSelect2024").style.display = 'none';
  document.getElementById("infoSelect2024").style.display = 'block';
};
// Here ends the  2024(5.5e) functions