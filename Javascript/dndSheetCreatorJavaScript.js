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
  if (rightSide[0].childElementCount === 0){
    for (let i = 0; i < 27; i++){
    const clone = feat.cloneNode(true);
    rightSide[0].appendChild(clone);
    };
    featHeaders = rightSide[0].querySelectorAll(".featuresHeader");
    featContents = rightSide[0].querySelectorAll(".featuresContent");
    fetch("../TextFiles/barbarianHeaders.txt")
      .then(response => response.text())
      .then(data => {
        const barbarianHeaders = data.split("\n");
        featHeaders.forEach((header, index) => {
        header.textContent = barbarianHeaders[index];
        });
      });
    
  }
  else{
    rightSide[0].replaceChildren();
  };
  
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