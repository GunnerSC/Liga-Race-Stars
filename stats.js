   
   
   
     let gunnerp1 = 0;       let gunnerp2 = 0;       let gunnerp3 = 0;

    let sliinkp1 = 0;       let sliinkp2 = 0;       let sliinkp3 = 0;

    let nekomorip1 = 0;     let nekomorip2 = 0;     let nekomorip3 = 0;

    let balaop1 = 0;        let balaop2 = 0;       let balaop3 = 0;

    let newplayerp1 = 0;    let newplayerp2 = 0;    let newplayerp3 = 0;

    let botp1 = 0;
    let botp2 = 0;
    let botp3 = 0;

    let caterhamp1 = 0;     let caterhamp2 = 0;     let caterhamp3 = 0;
    let mclarenp1 = 0;      let mclarenp2 = 0;      let mclarenp3 = 0;
    let ferrarip1 = 0;      let ferrarip2 = 0;      let ferrarip3 = 0;
    let lotusp1 = 0;        let lotusp2 = 0;        let lotusp3 = 0;
    let redbullp1 = 0;      let redbullp2 = 0;      let redbullp3 = 0;  
    let tororossop1 = 0;    let tororossop2 = 0;    let tororossop3 = 0;
    let williamsp1 = 0;     let williamsp2 = 0;     let williamsp3 = 0;
    let satsup1 = 0;        let satsup2 = 0;        let satsup3 = 0;
    let mercedesp1 = 0;     let mercedesp2 = 0;     let mercedesp3 = 0;
    let forceindiap1 =0;    let forceindiap2 =0;    let forceindiap3 = 0;
    let hrtp1 = 0;          let hrtp2 = 0;          let hrtp3 = 0;
    let sauberp1 = 0;       let sauberp2 = 0;       let sauberp3 = 0;
    let marussiap1 = 0;     let marussiap2 = 0;     let marussiap3 = 0;
    let tecnovap1 = 0;      let tecnovap2 = 0;      let tecnovap3 = 0;
    
    let tableRows = document.querySelectorAll("tr");
tableRows.forEach(function(row) {
    let p1 = row.querySelector(".p1");
    if (p1 && p1.textContent.includes("Gunner")) {gunnerp1++;}
    else if (p1 && p1.textContent.includes("Sliink")) {sliinkp1++;}
    else if (p1 && p1.textContent.includes("Nekomori")) {nekomorip1++;}
    else if (p1 && p1.textContent.includes("Balao")) {balaop1++;}
    else if (p1 && p1.textContent.includes("Newplayer")) {newplayerp1++;}
    else if (p1 && p1.textContent.includes("Bot")) {botp1++;}
    else if (p1 && p1.textContent.includes("Caterham")) {caterhamp1++;}})

tableRows.forEach(function(row) {
    let p2 = row.querySelector(".p2");
    if (p2 && p2.textContent.includes("Gunner")) {gunnerp2++;}
    else if (p2 && p2.textContent.includes("Sliink")) {sliinkp2++;}
    else if (p2 && p2.textContent.includes("Nekomori")) {nekomorip2++;}
    else if (p2 && p2.textContent.includes("Balao")) {balaop2++;}
    else if (p2 && p2.textContent.includes("Newplayer")) {newplayerp2++;}
    else if (p2 && p2.textContent.includes("Bot")) {botp2++;}});

tableRows.forEach(function(row) {
    let p3 = row.querySelector(".p3");
    if (p3 && p3.textContent.includes("Gunner")) {gunnerp3++;}
    else if (p3 && p3.textContent.includes("Sliink")) {sliinkp3++;}
    else if (p3 && p3.textContent.includes("Nekomori")) {nekomorip3++;}
    else if (p3 && p3.textContent.includes("Balao")) {balaop3++;}
    else if (p3 && p3.textContent.includes("Newplayer")) {newplayerp3++;}
    else if (p3 && p3.textContent.includes("Bot")) {botp3++;}});

tableRows.forEach(function(row) {
    let carp1 = row.querySelector(".carp1");
    if (carp1 && carp1.textContent.includes("Caterham")) {caterhamp1++;}
    else if (carp1 && carp1.textContent.includes("McLaren")) {mclarenp1++;}
    else if (carp1 && carp1.textContent.includes("Ferrari")) {ferrarip1++;}
    else if (carp1 && carp1.textContent.includes("Lotus")) {lotusp1++;}
    else if (carp1 && carp1.textContent.includes("Red Bull")) {redbullp1++;}
    else if (carp1 && carp1.textContent.includes("Toro Rosso")) {tororossop1++;}
    else if (carp1 && carp1.textContent.includes("Williams")) {williamsp1++;}
    else if (carp1 && carp1.textContent.includes("Satsu")) {satsup1++;}
    else if (carp1 && carp1.textContent.includes("Mercedes")) {mercedesp1++;}
    else if (carp1 && carp1.textContent.includes("Force India")) {forceindiap1++;}
    else if (carp1 && carp1.textContent.includes("HRT")) {hrtp1++;}
    else if (carp1 && carp1.textContent.includes("Sauber")) {sauberp1++;}
    else if (carp1 && carp1.textContent.includes("Marussia")) {marussiap1++;}
    else if (carp1 && carp1.textContent.includes("TecNova")) {tecnovap1++;}})

    tableRows.forEach(function(row) {
        let carp2 = row.querySelector(".carp2");
        if (carp2 && carp2.textContent.includes("Caterham")) {caterhamp2++;}
        else if (carp2 && carp2.textContent.includes("McLaren")) {mclarenp2++;}
        else if (carp2 && carp2.textContent.includes("Ferrari")) {ferrarip2++;}
        else if (carp2 && carp2.textContent.includes("Lotus")) {lotusp2++;}
        else if (carp2 && carp2.textContent.includes("Red Bull")) {redbullp2++;}
        else if (carp2 && carp2.textContent.includes("Toro Rosso")) {tororossop2++;}
        else if (carp2 && carp2.textContent.includes("Williams")) {williamsp2++;}
        else if (carp2 && carp2.textContent.includes("Satsu")) {satsup2++;}
        else if (carp2 && carp2.textContent.includes("Mercedes")) {mercedesp2++;}
        else if (carp2 && carp2.textContent.includes("Force India")) {forceindiap2++;}
        else if (carp2 && carp2.textContent.includes("HRT")) {hrtp2++;}
        else if (carp2 && carp2.textContent.includes("Sauber")) {sauberp2++;}
        else if (carp2 && carp2.textContent.includes("Marussia")) {marussiap2++;}
        else if (carp2 && carp2.textContent.includes("TecNova")) {tecnovap2++;}})

    tableRows.forEach(function(row) {
        let carp3 = row.querySelector(".carp3");
        if (carp3 && carp3.textContent.includes("Caterham")) {caterhamp3++;}
        else if (carp3 && carp3.textContent.includes("McLaren")) {mclarenp3++;}
        else if (carp3 && carp3.textContent.includes("Ferrari")) {ferrarip3++;}
        else if (carp3 && carp3.textContent.includes("Lotus")) {lotusp3++;}
        else if (carp3 && carp3.textContent.includes("Red Bull")) {redbullp3++;}
        else if (carp3 && carp3.textContent.includes("Toro Rosso")) {tororossop3++;}
        else if (carp3 && carp3.textContent.includes("Williams")) {williamsp3++;}
        else if (carp3 && carp3.textContent.includes("Satsu")) {satsup3++;}
        else if (carp3 && carp3.textContent.includes("Mercedes")) {mercedesp3++;}
        else if (carp3 && carp3.textContent.includes("Force India")) {forceindiap3++;}
        else if (carp3 && carp3.textContent.includes("HRT")) {hrtp3++;}
        else if (carp3 && carp3.textContent.includes("Sauber")) {sauberp3++;}
        else if (carp3 && carp3.textContent.includes("Marussia")) {marussiap3++;}
        else if (carp3 && carp3.textContent.includes("TecNova")) {tecnovap3++;}})
    


    

    let gunnerpodium = (gunnerp1+gunnerp2+gunnerp3)
    let sliinkpodium = (sliinkp1+sliinkp2+sliinkp3)
    let nekomoripodium = (nekomorip1+nekomorip2+nekomorip3)
    let newplayerpodium = (newplayerp1+newplayerp2+newplayerp3)
    let balaopodium = (balaop1+balaop2+balaop3)
    let botpodium = (botp1+botp2+botp3)
    
    let gun = document.getElementsByClassName('gunnerpt')
    let gunnerpontos = 0;

    let neko = document.getElementsByClassName('nekomoript')
    let nekomoripontos = 0;

    let slink = document.getElementsByClassName('sliinkpt')
    let sliinkpontos = 0;
    
    let bala = document.getElementsByClassName('balaopt')
    let balaopontos = 0;

    let newp = document.getElementsByClassName('newplayerpt')
    let newplayerpontos = 0;



    for(let i = 0; i < gun.length; i++) {
        gunnerpontos += parseInt(gun[i].textContent);
    }

    for(let i = 0; i < neko.length; i++) {
        nekomoripontos += parseInt(neko[i].textContent);
    }

    for(let i = 0; i < slink.length; i++) {
        sliinkpontos += parseInt(slink[i].textContent);
    }

    for(let i = 0; i < bala.length; i++) {
        balaopontos += parseInt(bala[i].textContent);
    }

    for(let i = 0; i < neko.length; i++) {
        newplayerpontos += parseInt(neko[i].textContent);
    }
    

    let Gunner = {
        nome: 'Gunner',
        pontos: gunnerpontos,  
        p1: gunnerp1,
        p2: gunnerp2,
        p3: gunnerp3,
        podium: gunnerpodium
        
        }

    let Sliink = {
        nome: 'Sliink',
        pontos: sliinkpontos,
        p1: sliinkp1,
        p2: sliinkp2,
        p3: sliinkp3,
        podium: sliinkpodium
    }
    
    let Nekomori = {
        nome: 'Nekomori',
        pontos: nekomoripontos,
        p1: nekomorip1,
        p2: nekomorip2,
        p3: nekomorip3,
        podium: nekomoripodium
    }

    let Balao = {
        nome: 'Balao',
        pontos: balaopontos,
        p1: balaop1,
        p2: balaop2,
        p3: balaop3,
    }

    let Newplayer = {
        nome: 'New Player',
        pontos: newplayerpontos,
        p1: newplayerp1,
        p2: newplayerp2,
        p3: newplayerp3,
    }

    let Bot = {
        nome: 'Bot',
        p1: botp1,
        p2: botp2,
        p3: botp3,
        podium: botpodium
    }

    let Caterham = { nome: 'Caterham', p1: caterhamp1, p2: caterhamp2, p3: caterhamp3, podium: caterhamp1+caterhamp2+caterhamp3}

   

function stats() {
    res.innerHTML = `
    <body>
    <header>
    <button id="myButton">Dark/Light</button>
    <h1><a href="index.html"><img src="img/logom.png" alt=""></a></h1>
    <menu id="mainmenu">
        <a class="menu" href="index.html">Home</a>
        <a class="menu" href="resultados.html">Resultados</a>
        <a class="menu" href="ranking.html">Rankings</a>
        <a class="menu" href="stats.html">Stats</a>
</menu>
    </header>
    <div id="statspage">
        <div class="statsplayer"><h1>Gunner</h1>
        <img src="img/gunner89.png" alt=""> <br>
    <p>
    🏆${Gunner.p1} Títulos  <br>
    🥈${Gunner.p2} vice-campeonatos<br>
    🥉${Gunner.p3} vezes terceiro lugar <br>
    <img class="podium" src="img/podium.png" alt=""> ${Gunner.podium} vezes no pódio
    <br>
    Pontos: ${Gunner.pontos}<br>
    Carro mais usado: <span class="McLaren">McLaren</span></p>
    
    </p>
    </div>
        <div class="statsplayer"><h1>Sliink</h1>
        <img src="img/sliink89.png" alt="">
    <p>
    🏆 ${Sliink.p1} Títulos  <br>
    🥈 ${Sliink.p2} vice-campeonatos<br>
    🥉 ${Sliink.p3} vezes terceiro lugar <br>
    <img class="podium" src="img/podium.png" alt=""> ${Sliink.podium} vezes no pódio
    <br>
    Pontos: ${Sliink.pontos} <br>
    Carro mais usado: <span class="Ferrari">Ferrari</span>
    </div>
        <div class="statsplayer"><h1>Nekomori</h1>
            <img src="img/nekomori89.png" alt="">
    <p>
    🏆 ${Nekomori.p1} Títulos  <br>
    🥈 ${Nekomori.p2} vice-campeonatos<br>
    🥉 ${Nekomori.p3} vezes terceiro lugar <br>
    <img class="podium" src="img/podium.png" alt=""> ${Nekomori.podium} vezes no pódio
    <br>
    Pontos: ${Nekomori.pontos} <br>
    Carro mais usado: <span class="Caterham">Caterham</span></p>
    
    </p>
    </div>

</body>
    `

    document.getElementById("myButton").addEventListener("click", function(){
        var stylesheet = document.getElementById("myStylesheet");
        if (stylesheet.getAttribute("href") == "stats.css") {
          stylesheet.href = "stats2.css";
        } else {
          stylesheet.href = "stats.css";
        }
      });
    
      
}

