function oslovuj() {
  var name = document.getElementById("inputName").value;
  // Vycisti '.' a ',' split do pole
  nameClean = name.replaceAll(".",' ');
  nameClean = nameClean.replaceAll(',',' ');
  nameArray = nameClean.split(/ +/);

  // Zjisti jestli je titulovany zena
  var isWoman = false
  if( name.match(/(ova|ová|á)($|,|\.|\ )/g) !== null ){
    isWoman = true
  }

  // Pole možných titulů
  profesorArr = ["prof", "profesor", "Prof"]
  docentArr   = ["doc", "docnet"]
  doktorArr   = ["Ph", "PhD", "ThD", "CSc", "PhDr", "JUDr", "RNDr", "PharmDr", "ThDr", "MUDr", "MDDr", "MVDr", "PaedDr", "MSDr", "RCDr", "RSDr", "RTDr"]
  inzenyrArr  = ["Ing", "ing"]
  magistrArr  = ["Mgr", "mgr", "MgA", "PhMr"]
  licencArr   = ["ThLic"]
  bakalarArr  = ["bc", "Bc", "BcA"]

  // Najdi doszene tituly
  profesor  = nameArray.some(r=> profesorArr.includes(r) )
  docent    = nameArray.some(r=> docentArr.includes(r) )
  doktor    = nameArray.some(r=> doktorArr.includes(r) )
  inzenyr   = nameArray.some(r=> inzenyrArr.includes(r) )
  magistr   = nameArray.some(r=> magistrArr.includes(r) )
  licenc    = nameArray.some(r=> licencArr.includes(r) )
  bakalar   = nameArray.some(r=> bakalarArr.includes(r) )

  // Vymysli osloveni
  var osloveni = ""
  if( profesor ) {
    if(isWoman){osloveni = "Vážená paní profesorko,"}
    else{       osloveni = "Vážený pane profesore,"}
  }
  else if ( docent ){
    if(isWoman){osloveni = "Vážená paní docentko,"}
    else{       osloveni = "Vážený pane docente,"}
  }
  else if ( doktor ){
    if(isWoman){osloveni = "Vážená paní doktorko,"}
    else{       osloveni = "Vážený pane doktore,"}
  }
  else if ( inzenyr ){
    if(isWoman){osloveni = "Vážená paní inženýrko,"}
    else{       osloveni = "Vážený pane inženýre,"}
  }
  else if ( magistr ){
    if(isWoman){osloveni = "Vážená paní magistro,"}
    else{       osloveni = "Vážený pane magistře,"}
  }
  else if ( licenc ){
    if(isWoman){osloveni = "Vážená paní licenciátko,"}
    else{       osloveni = "Vážený pane licenciáte,"}
  }
  else{
    if(isWoman){osloveni = "Vážená paní kolegyně,"}
    else{       osloveni = "Vážený pane kolego,"}
  }
  
  // Nastav a zobraz
  if(name == "Radek Šmíd"){
    document.getElementById("dopis").innerHTML = "Husťák";
  }
  else{
    document.getElementById("dopis").innerHTML = osloveni;
  }
  document.getElementById("karta").hidden = false
}

// Poslouchej na tlačítko enter
// Get the input field
var input = document.getElementById("inputName");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("oslovit").click();
  }
});
