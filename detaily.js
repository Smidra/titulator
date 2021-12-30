// Zobraz detail vysledku
var showDetail = false
function detailne() {
    document.getElementById("textDetail").hidden = showDetail
    showDetail = !showDetail
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
            // Zahraniční tituly
            case "mba":
            case "msc":
            case "ma":
                detailtext += "<i>Zahraniční magisterský titul. V ČR netitulujeme.</i>" + "<p><b>Titul:</b>    " + "MSc / MA / MBA" + "</p>"
                break;

            case "ba":
                detailtext += "<i>Zahraniční bakalářský titul. V ČR netitulujeme.</i>" + "<p><b>Titul:</b>    " + "BA" + "</p>"
                break;

            case "drhabil":
                detailtext += "<i>Německá varianta docenta. Titulujeme, protože zahraniční profesory taky tituluje jako profesory. Občas se využívá PD jako Privatdozent</i>" + "<p><b>Titul:</b>    " + "Dr. habil." + "</p>"
                break;

            // Čestné tituly
            case "mult":
            case "multiplex":
                detailtext += "<i>Značí, že příjemce má více čestných doktorátů. Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "mult." + "</p>"
                break;

            case "profhc":
                detailtext += "<i>Čestná profesura (professor honoris causa). Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "prof. h. c." + "</p>"
                break;

            case "drhc":
                detailtext += "<i>Čestný doktorát (doctor honoris causa). Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "dr. h. c." + "</p>"
                break;
            
            // Neakademické tituly + divnotituly
            case "dis":
                detailtext += "<i>Neakademický titul diplomovaný specialista. Netitulujeme.</i>" + "<p><b>Titul:</b>    " + "DiS." + "</p>"
                break;
            
            case "freng":
            case "feng":
                detailtext += "<i>Neakademický titul člena britské Royal Academy of Engineering (Fellowship of the Royal Academy of Engineering).</i>" + "<p><b>Titul:</b>    " + "FEng." + "</p>"
                break;
            
            case "muc":
                detailtext += "<i>Medicinae universae candidatus je student medicíny, který dokončil alespoň 6 semestrů výuky.</i>" + "<p><b>Titul:</b>    " + "MUC." + "</p>"
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
                detailtext += "<i>Velký doktorát je nejvyšší akademicko-vědecký titul (ISCED-8).</i>" + "<p><b>Titul:</b>    " + "Ph.D.  " + "</p>"
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
            
            case "thd":
                detailtext += "<i>Doktor teologie (theologiae doctor) byla vyšší vědecká hodnost (ISCED 8). Nyní nahrazeno ThDr. nebo Ph.D.</i>" + "<p><b>Titul:</b>    " + "Th.D." + "</p>"
                break;

            case "artd":
            case "darts":
            case "da":
                detailtext += "<i>Doktor umění je slovenský akademický titul. Obodoba PhD pro umělce. (ISCED 8).</i>" + "<p><b>Titul:</b>    " + "ArtD" + "</p>"
                break;

            // 7 + rigorozni + minulost 
            case "akadarch":
                detailtext += "<i>Akademický architekt byl akademicko-vědecký titul (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "ak. arch." + "</p>"
                break;

            case "akmal":
                detailtext += "<i>Akademický malíř byl akademicko-vědecký titul (ISCED 7). Byl nahrazen titulem MgA.</i>" + "<p><b>Titul:</b>    " + "ak. mal." + "</p>"
                break;

            case "aksoch":
                detailtext += "<i>Akademický sochař byl akademicko-vědecký titul (ISCED 7). Také se uděluje absoloventům akdemie sochařství.</i>" + "<p><b>Titul:</b>    " + "ak. soch." + "</p>"
                break;
            
            case "msdr":
                detailtext += "<i>Doktor zubního lékařství (medicinae stomatologicae doctor) byl akademicko-vědecký titul (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "MSDr." + "</p>"
                break;

            case "paeddr":
                detailtext += "<i>Doktor pedagogiky (paedagogiae doctor) byl akademicko-vědecký titul (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "PaedDr." + "</p>"
                break;

            case "rcdr":
                detailtext += "<i>Doktor obchodních věd (rerum commercialium doctor) byl akademicko-vědecký titul (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "RCDr." + "</p>"
                break;

            case "rsdr":
                detailtext += "<i>Doktor sociálně-politických věd (rerum socialium doctor) byl akademicko-vědecký titul (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "RSDr." + "</p>"
                break;

            case "rtdr":
                detailtext += "<i>Doktor technických věd (rerum technicarum doctor) byl akademicko-vědecký titul (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "RTDr." + "</p>"
                break;

            case "dr":
                detailtext += "<i>Doktor byla zkrácená verze akademicko-vědeckých titulů (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "Dr." + "</p>"
                break;    

            case "phmr":
                detailtext += "<i>Magistr farmacie (pharmaciae magister) byl akademicko-vědecký magisterský titul (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "PhMr." + "</p>"
                break;

            case "thmgr":
                detailtext += "<i>Magistr teologie byl akademicko-vědecký magisterský titul (ISCED 7).</i>" + "<p><b>Titul:</b>    " + "ThMgr." + "</p>"
                break;

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
                detailtext += "<i>Inženýr architekt je akademicko-vědecký titul udělený po obhájení diplomové práce a složení státní závěrečné zkoušky (ISCED 7). Můžeme oslovovat i 'pane architekte'.</i>" + "<p><b>Titul:</b>    " + "Ing.  " + "</p>"
                break;

            case "ing":
                detailtext += "<i>Inženýr je akademicko-vědecký titul udělený po obhájení diplomové práce a složení státní závěrečné zkoušky (ISCED-7).</i>" + "<p><b>Titul:</b>    " + "Ing.  " + "</p>"
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
