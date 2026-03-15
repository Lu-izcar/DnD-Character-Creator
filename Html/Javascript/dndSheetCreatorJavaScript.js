var isOnMenu = 1;
var isOnClass = 0;
var isOnSpecies = 0;
var isOnStats = 0;
var isOnOrigin = 0;
var isOnInfo = 0;

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