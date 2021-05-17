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
                detailtext += "<i>Doktor medicíny (medicinae universae doctor) patří mezi tzv. profesní doktoráty (ISCED 7). Získán složením rigorózní zkoušky.</i>" + "<p><b>Titul:</b>    " + "MUDr." + "</p>"
                break;

            case "mddr":
                detailtext += "<i>Doktor zubního lékařství (medicinae dentium doctor) patří mezi tzv. profesní doktoráty (ISCED 7). Získán složením rigorózní zkoušky.</i>" + "<p><b>Titul:</b>    " + "MDDr." + "</p>"
                break;

            case "mvdr":
                detailtext += "<i>Doktor veterinární medicíny (medicinae veterinariae doctor) patří mezi tzv. profesní doktoráty (ISCED 7). Získán složením rigorózní zkoušky.</i>" + "<p><b>Titul:</b>    " + "MVDr." + "</p>"
                break;
    
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

            case "mga":
                detailtext += "<i>Magistr umění (magister artis) je akademicko-vědecký titul udělený po obhájení diplomové práce a složení státní závěrečné zkoušky (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "MgA.  " + "</p>"
                break;

            case "mgr":
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
