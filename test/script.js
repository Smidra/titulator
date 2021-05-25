// Odoznaci vsechny radio buttons
function odoznac() {
    document.getElementById("inlineRadioMuz").checked = false;
    document.getElementById("inlineRadioZena").checked = false;
    document.getElementById("inlineRadioRektor").checked = false;
    document.getElementById("inlineRadioProrektor").checked = false;
    document.getElementById("inlineRadioDekan").checked = false;
    document.getElementById("inlineRadioProdekan").checked = false;

}

// Zavři okno s výsledkem
function zavri() {
    document.getElementById("karta").hidden = true
}

// Vycisti string od nealfanumerickych znaku a prevede ho na lowercase
function vycisti(jmeno_vstup) {
    // Vycisti '.' a ',' split do pole
    nameClean = jmeno_vstup.replaceAll(".", ' ');
    nameClean = nameClean.replaceAll(',', ' ');
    nameClean = nameClean.replaceAll('	', ' ');
    nameClean = nameClean.toLowerCase();
    // Nahradit tituly rozdelene teckou bezteckovou variantou
    nameClean = nameClean.replaceAll('ph d', 'phd');
    nameClean = nameClean.replaceAll('th d', 'thd');
    nameClean = nameClean.replaceAll('ing  arch', 'ingarch');
    nameClean = nameClean.replaceAll('akad  arch', 'akadarch');
    nameClean = nameClean.replaceAll('ak  mal', 'akmal');
    nameClean = nameClean.replaceAll('dr h c', 'drhc');
    nameClean = nameClean.replaceAll('dr  h  c', 'drhc');
    nameClean = nameClean.replaceAll('d  eng  h c', 'drhc'); // Má jenom Zuna...
    nameClean = nameClean.replaceAll('prof h c', 'profhc');
    nameClean = nameClean.replaceAll('prof  h  c', 'profhc');
    nameClean = nameClean.replaceAll('odb as', 'odbas');
    nameClean = nameClean.replaceAll('odb  as', 'odbas');
    nameClean = nameClean.replaceAll('M A', 'ma');
    nameClean = nameClean.replaceAll('M B A', 'mba');
    nameClean = nameClean.replaceAll('B A', 'ba');
    return nameClean
}

// Zjisti jestli je titulovany zena
function jeZena(jmeno_vstup) {
    // Zjisti jestli si určil pomocí radiových tlačítek v "rozšířené"
    if (document.getElementById("inlineRadioZena").checked) {
        return true
    } else if (document.getElementById("inlineRadioMuz").checked) {
        return false
    }
    // Odhadni podle přípony jména
    if (jmeno_vstup.match(/(ova|ová|á)($|,|\.|\ )/g) !== null) {
        return true
    }

    return false
}

// Vymysli spravne osloveni akademicke funkce
function vymysliFunkci(isWoman) {
    var osloveni = ""
    var akademicka_funkce = ""
    // --- Podle akademické funkce ---
    if (document.getElementById("inlineRadioRektor").checked) {
        if (isWoman) { osloveni = "Vážená paní rektorko," } else { osloveni = "Vážený pane rektore," }
        akademicka_funkce = "Rektor"
    } else if (document.getElementById("inlineRadioProrektor").checked) {
        if (isWoman) { osloveni = "Vážená paní prorektorko," } else { osloveni = "Vážený pane prorektore," }
        akademicka_funkce = "Prorektor"
    } else if (document.getElementById("inlineRadioDekan").checked) {
        if (isWoman) { osloveni = "Vážená paní děkanko," } else { osloveni = "Vážený pane děkane," }
        akademicka_funkce = "Děkan"
    } else if (document.getElementById("inlineRadioProdekan").checked) {
        if (isWoman) { osloveni = "Vážená paní proděkanko," } else { osloveni = "Vážený pane proděkane," }
        akademicka_funkce = "Proděkan"
    }
    return [osloveni, akademicka_funkce]
}

// Vymysli spravne osloveni pro vycistene jmeno
function vymysliOsloveni(nameArray, isWoman) {
    var osloveni = ""

    // --- Pole možných titulů ---
    profesorArr = ["prof", "profesor"]
    docentArr = ["doc", "docent"]
    doktorArr = ["drsc","dsc", "phd", "thd", "phdr", "judr", "rndr", "pharmdr", "thdr", "mudr", "mddr", "mvdr", "paeddr", "msdr", "rcdr", "rsdr", "rtdr", "dr"]
    inzenyrArr = ["ing", "ingarch"]
    magistrArr = ["mgr", "mga", "phmr", "thmgr"]
    licencArr = ["thlic"]
    bakalarArr = ["bc", "bca"]

    // Najdi doszene tituly
    profesor = nameArray.some(r => profesorArr.includes(r))
    docent = nameArray.some(r => docentArr.includes(r))
    doktor = nameArray.some(r => doktorArr.includes(r))
    inzenyr = nameArray.some(r => inzenyrArr.includes(r))
    magistr = nameArray.some(r => magistrArr.includes(r))
    licenc = nameArray.some(r => licencArr.includes(r))
    bakalar = nameArray.some(r => bakalarArr.includes(r))

    // Vymysli osloveni z hierarchie
    if (profesor) {
        if (isWoman) { osloveni = "Vážená paní profesorko," } else { osloveni = "Vážený pane profesore," }
    }
    else if (docent) {
        if (isWoman) { osloveni = "Vážená paní docentko," } else { osloveni = "Vážený pane docente," }
    }
    else if (doktor) {
        if (isWoman) { osloveni = "Vážená paní doktorko," } else { osloveni = "Vážený pane doktore," }
    }
    else if (inzenyr) {
        if (isWoman) { osloveni = "Vážená paní inženýrko," } else { osloveni = "Vážený pane inženýre," }
    }
    else if (magistr) {
        if (isWoman) { osloveni = "Vážená paní magistro," } else { osloveni = "Vážený pane magistře," }
    }
    //else if (licenc) {
    //    if (isWoman) { osloveni = "Vážená paní licenciátko," } else { osloveni = "Vážený pane licenciáte," }
    //}
    else {
        if (isWoman) { osloveni = "Vážená paní kolegyně," } else { osloveni = "Vážený pane kolego," }
    }
    return osloveni
}

// Provede cely skript. Upravi html s novou hodnotou osloveni.
function oslovuj() {
    var name = document.getElementById("inputName").value;
    document.getElementById("dopis").innerHTML = name;
    document.getElementById("karta").hidden = false

    // var nameClean = vycisti(name)s
    // var nameArray = nameClean.split(/ +/);
    // var isWoman = jeZena(nameClean)

    // Zkus oslovit akad. funkci
    // var osloveni_s_funkci = vymysliFunkci(isWoman)
    // var osloveni = osloveni_s_funkci[0]
    // var funkce = osloveni_s_funkci[1]
    // if (osloveni == "") {
    //     // Nemel akad fci, oslovujeme tituly
    //     osloveni = vymysliOsloveni(nameArray, isWoman)
    //     nastavDetail(nameArray, isWoman, false, funkce)
    // } else {
    //     // Mel akad fci, neoslovujeme tituly
    //     nastavDetail(nameArray, isWoman, true, funkce)
    // }

    // Nastav a zobraz
    //document.getElementById("dopis").innerHTML = osloveni;
    // document.getElementById("dopis").innerHTML = "Husty";
    // if ( test == "asdf"){
    //     console.log("A")
    //     document.getElementById("dopis").innerHTML = test;
    // }else{
    //     console.log("B")
    //     document.getElementById("dopis").innerHTML = test;
    // }
}

// Poslouchej na tlačítko enter
// Sauce https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
var input = document.getElementById("inputName");
input.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("oslovit").click();
    }
});
