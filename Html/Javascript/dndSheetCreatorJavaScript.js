//Variables start here
var isOnMenu = true;
var isOnClass2014 = false;
var isOnSpecies2014 = false;
var isOnStats2014 = false;
var isOnOrigin2014 = false;
var isOnInfo2014 = false;
var isOnClass2024 = false;
var isOnSpecies2024 = false;
var isOnStats2024 = false;
var isOnOrigin2024 = false;
var isOnInfo2024 = false;
var version2014 = false;
var version2024 = false;
//Variables end here

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
  isOnMenu = false;
  isOnClass2014 = true;
  isOnSpecies2014 = false;
  isOnStats2014 = false;
  isOnOrigin2014 = false;
  isOnInfo2014 = false;
  version2014 = true;
};

function createSpecies2014(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2014").style.display = 'none';
  document.getElementById("speciesSelect2014").style.display = 'block';
  document.getElementById("statsSelect2014").style.display = 'none';
  document.getElementById("originSelect2014").style.display = 'none';
  document.getElementById("infoSelect2014").style.display = 'none';
  isOnMenu = false;
  isOnClass2014 = false;
  isOnSpecies2014 = true;
  isOnStats2014 = false;
  isOnOrigin2014 = false;
  isOnInfo2014 = false;
};

function createStats2014(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2014").style.display = 'none';
  document.getElementById("speciesSelect2014").style.display = 'none';
  document.getElementById("statsSelect2014").style.display = 'block';
  document.getElementById("originSelect2014").style.display = 'none';
  document.getElementById("infoSelect2014").style.display = 'none';
  isOnMenu = false;
  isOnClass2014 = false;
  isOnSpecies2014 = false;
  isOnStats2014 = true;
  isOnOrigin2014 = false;
  isOnInfo2014 = false;
};

function createOrigin2014(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2014").style.display = 'none';
  document.getElementById("speciesSelect2014").style.display = 'none';
  document.getElementById("statsSelect2014").style.display = 'none';
  document.getElementById("originSelect2014").style.display = 'block';
  document.getElementById("infoSelect2014").style.display = 'none';
  isOnMenu = false;
  isOnClass2014 = false;
  isOnSpecies2014 = false;
  isOnStats2014 = false;
  isOnOrigin2014 = true;
  isOnInfo2014 = false;
};

function createInfo2014(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2014").style.display = 'none';
  document.getElementById("speciesSelect2014").style.display = 'none';
  document.getElementById("statsSelect2014").style.display = 'none';
  document.getElementById("originSelect2014").style.display = 'none';
  document.getElementById("infoSelect2014").style.display = 'block';
  isOnMenu = false;
  isOnClass = false;
  isOnSpecies = true;
  isOnStats = false;
  isOnOrigin = false;
  isOnInfo = false;
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
  isOnMenu = false;
  isOnClass2024 = true;
  isOnSpecies2024 = false;
  isOnStats2024 = false;
  isOnOrigin2024 = false;
  isOnInfo2024 = false;
  version2024 = true;
};

function createSpecies2024(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2024").style.display = 'none';
  document.getElementById("speciesSelect2024").style.display = 'block';
  document.getElementById("statsSelect2024").style.display = 'none';
  document.getElementById("originSelect2024").style.display = 'none';
  document.getElementById("infoSelect2024").style.display = 'none';
  isOnMenu = false;
  isOnClass2024 = false;
  isOnSpecies2024 = true;
  isOnStats2024 = false;
  isOnOrigin2024 = false;
  isOnInfo2024 = false;
};

function createStats2024(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2024").style.display = 'none';
  document.getElementById("speciesSelect2024").style.display = 'none';
  document.getElementById("statsSelect2024").style.display = 'block';
  document.getElementById("originSelect2024").style.display = 'none';
  document.getElementById("infoSelect2024").style.display = 'none';
  isOnMenu = false;
  isOnClass2024 = false;
  isOnSpecies2024 = false;
  isOnStats2024 = true;
  isOnOrigin2024 = false;
  isOnInfo2024 = false;
};

function createOrigin2024(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2024").style.display = 'none';
  document.getElementById("speciesSelect2024").style.display = 'none';
  document.getElementById("statsSelect2024").style.display = 'none';
  document.getElementById("originSelect2024").style.display = 'block';
  document.getElementById("infoSelect2024").style.display = 'none';
  isOnMenu = false;
  isOnClass2024 = false;
  isOnSpecies2024 = false;
  isOnStats2024 = false;
  isOnOrigin2024 = true;
  isOnInfo2024 = false;
};

function createInfo2024(){
  document.getElementById("mainPage").style.display = 'none';
  document.getElementById("classSelect2024").style.display = 'none';
  document.getElementById("speciesSelect2024").style.display = 'none';
  document.getElementById("statsSelect2024").style.display = 'none';
  document.getElementById("originSelect2024").style.display = 'none';
  document.getElementById("infoSelect2024").style.display = 'block';
  isOnMenu = false;
  isOnClass2024 = false;
  isOnSpecies2024 = false;
  isOnStats2024 = false;
  isOnOrigin2024 = false;
  isOnInfo2024 = true;
};
// Here ends the  2024(5.5e) functions