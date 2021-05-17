// Zobraz detail vysledku
var showDetail = true
function detailne() {
    showDetail = !showDetail
    document.getElementById("detail").hidden = showDetail
}

// Nastav detail ohledně titulů
function nastavDetail(nameArray, isWoman, hasFunction, whatFunction) {
    var detailtext = ""
    detailtext += "<i>Pohlaví určeno podle přípon -á/-ová, nebo manuálně.</i>"
    detailtext += "<p><b>Pohlaví:</b>    "
    // Nastav detail pohlaví
    if (isWoman) { detailtext = detailtext + " žena</p>" }
    else { detailtext += " muž</p>" }

    // Nastav akademický titul
    if (hasFunction) { detailtext += "<i>Akademické funkce mají přednost před tituly.</i>" + "<p><b>Funkce:</b>    " + whatFunction + "</p>" }

    // Projeď tituly a vypiš co k nim víš
    for (slovo of nameArray) {
        switch (slovo) {
            // Čestné tituly
            case "profhc":
                detailtext += "<i>Čestná profesura (professor honoris causa). Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "prof. h. c." + "</p>"
                break;

            case "drhc":
                detailtext += "<i>Čestný doktorát (doctor honoris causa). Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "dr. h. c." + "</p>"
                break;
            
            // Neakademické tituly
            case "dis":
                detailtext += "<i>Neakademický titul diplomovaný specialista. Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "DiS." + "</p>"
                break;

            // Věděcko-pedagogické tituly
            case "profesor":
            case "prof":
                detailtext += "<i>Profesory jmenuje prezident. Je to nejvyšší vědecko-pedagogický titul.</i>" + "<p><b>Titul:</b>    " + "profesor" + "</p>"
                break;

            case "docent":
            case "doc":
                detailtext += "<i>Docent je druhý nejvyšší vědecko-pedagogický titul.</i>" + "<p><b>Titul:</b>    " + "docent  " + "</p>"
                break;

            case "odbas":
                detailtext += "<i>Odborný asistent (angl. assistant professor). Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "odb. as." + "</p>"
                break;
    
            case "as":
                detailtext += "<i>Asistent je nejnižší věděcko-pedagogický titul. Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "as." + "</p>"
                break;

            // Vědecko-akademické tituly
            case "phd":
                detailtext += "<i>Velký doktorát je nejvyšší akademicko-vědecký titul (ISCED 8).</i>" + "<p><b>Titul:</b>    " + "Ph.D.  " + "</p>"
                break;
            
            case "dsc":
                detailtext += "<i>Dotor věd (doctor scientiarum) je neoficiální titul udělovaný AV ČR za 'zvláště vysoké kvalifikace prokázané vytvořením závažných, vědecky originálních prací důležitých pro rozvoj bádání.'</i>" + "<p><b>Titul:</b>    " + "DSc.  " + "</p>"
                break;
        
            case "csc":
                detailtext += "<i>Kandidát věd (candidatus scientiarum) byla nižší vědecká hodnost (ISCED 8). Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "CSc." + "</p>"
                break;
            
            case "drsc":
                detailtext += "<i>Doktor věd (doctor scientiarum) byla vyšší vědecká hodnost (ISCED 8). Dnes částečně nahrazena neoficiálním titulem DSc.</i>" + "<p><b>Titul:</b>    " + "DrSc." + "</p>"
                break;

            /*
            case "dr":
                detailtext += "<i></i>" + "<p><b>Titul:</b>    " + "Dr." + "</p>"
                break;
            

            // 7 + rigorozni + minulost 
            case "akadarch":
            case "akmal":
            case "aksoch":
            case "msdr":
            case "paedr":
            case "phmr":
            case "rcdr":
            case "rtdr":
            case "thmgr":
                detailtext += "<i>Malý doktorát byl akademicko-vědecký titul udělen po složení rigorózní zkoušky (ISCED 7).</i>" + "<p><b>Titul:</b>    " + slovo + "</p>"
                break;
            */
            // 7 + rigorozni + soucasnost
            case "mudr":
            case "mddr":
            case "mvdr":

            case "judr":
                detailtext += "<i>Doktor práv (juris utriusque doctor) patří mezi tzv. malé doktoráty (ISCED 7). Získán složením rigorózní zkoušky.</i>" + "<p><b>Titul:</b>    " + "JUDr." + "</p>"
                break;

            case "phdr":
                detailtext += "<i>Doktor filozofie (philosophiae doctor) patří mezi tzv. malé doktoráty (ISCED 7). Získán složením rigorózní zkoušky.</i>" + "<p><b>Titul:</b>    " + "PhDr." + "</p>"
                break;

            case "rndr":
                detailtext += "<i>Doktor přírodních věd (rerum naturalium doctor) patří mezi tzv. malé doktoráty (ISCED 7). Získán složením rigorózní zkoušky.</i>" + "<p><b>Titul:</b>    " + "RNDr." + "</p>"
                break;
            
            case "pharmdr":
                detailtext += "<i>Doktor farmacie (pharmaciae doctor) patří mezi tzv. malé doktoráty (ISCED 7). Získán složením rigorózní zkoušky.</i>" + "<p><b>Titul:</b>    " + "PharmDr." + "</p>"
                break;

            case "thlic":
                detailtext += "<i>Licentát teologie (theologiae licentiatus) patří mezi tzv. malé doktoráty (ISCED 7). Získán složením rigorózní zkoušky.</i>" + "<p><b>Titul:</b>    " + "ThLic." + "</p>"
                break;

            case "thdr":
                detailtext += "<i>Doktor teologie (theologiae doctor) patří mezi tzv. malé doktoráty (ISCED 7). Získán složením rigorózní zkoušky.</i>" + "<p><b>Titul:</b>    " + "ThDr." + "</p>"
                break;
            
            // 7 + soucasnost
            case "ingarch":
            case "ing":
                detailtext += "<i>Inženýr je akademicko-vědecký titul udělený po obhájení diplomové práce a složení státní závěrečné zkoušky (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "Ing.  " + "</p>"
                break;

            case "mgr":
            case "mga":
                detailtext += "<i>Magistr je akademicko-vědecký titul udělený po obhájení diplomové práce a složení státní závěrečné zkoušky (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "Mgr.  " + "</p>"
                break;

            // 6 + soucasnost
            case "bc":
                detailtext += "<i>Bakalář (baccalaureus) je akademicko-vědecký titul udělen po obhájení bakalářské práce a složení státní závěrečné zkoušky (ISCED 6). Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "Bc.  " + "</p>"
                break;

            case "bca":
                detailtext += "<i>Bakalář umění (baccalaureus artis) je akademicko-vědecký titul udělen po složení státní závěrečné zkoušky a větišnou obhajobě práce (ISCED 6). Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "Bc.  " + "</p>"
                break;
        }
    }

    // Nastav text detailu
    document.getElementById("textDetail").innerHTML = detailtext
}

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
    doktorArr = ["phd", "thd", "phdr", "judr", "rndr", "pharmdr", "thdr", "mudr", "mddr", "mvdr", "paeddr", "msdr", "rcdr", "rsdr", "rtdr"]
    inzenyrArr = ["ing", "ingarch"]
    magistrArr = ["mgr", "mga", "phmr"]
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
    var nameClean = vycisti(name)
    var nameArray = nameClean.split(/ +/);
    var isWoman = jeZena(nameClean)

    // Zkus oslovit akad. funkci
    var osloveni_s_funkci = vymysliFunkci(isWoman)
    var osloveni = osloveni_s_funkci[0]
    var funkce = osloveni_s_funkci[1]
    if (osloveni == "") {
        // Nemel akad fci, oslovujeme tituly
        osloveni = vymysliOsloveni(nameArray, isWoman)
        nastavDetail(nameArray, isWoman, false, funkce)
    } else {
        // Mel akad fci, neoslovujeme tituly
        nastavDetail(nameArray, isWoman, true, funkce)
    }

    // Nastav a zobraz
    if (name == "Radek Šmíd") {
        document.getElementById("dopis").innerHTML = "Husťák";
    }
    else {
        document.getElementById("dopis").innerHTML = osloveni;
    }
    document.getElementById("karta").hidden = false
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
