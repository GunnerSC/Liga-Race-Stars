   
   
   
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

      
  const resistencia1Rows = document.querySelectorAll('tr.resistencia1'); // seleciona todas as linhas com class "resistencia1"
  const resistencia2Rows = document.querySelectorAll('tr.resistencia2'); 
  const europa1Rows = document.querySelectorAll('tr.europa1'); 
  const europa2Rows = document.querySelectorAll('tr.europa2'); 
  const internacionalRows = document.querySelectorAll('tr.internacional'); 
  const pacificoRows = document.querySelectorAll('tr.pacifico'); 
  const espelho1Rows = document.querySelectorAll('tr.espelho1'); 
  const espelho2Rows = document.querySelectorAll('tr.espelho2'); 
  const personalizadoRows = document.querySelectorAll('tr.personalizado')

  let gunnerresistencia1 = 0;
  let gunnerresistencia2 = 0;
  let gunnereuropa1 = 0;
  let gunnereuropa2 = 0;
  let gunnerinternacional = 0;
  let gunnerpacifico = 0;
  let gunnerespelho1 = 0;
  let gunnerespelho2 = 0;
  let gunnerpersonalizado = 0

  let sliinkresistencia1 = 0; // contador de Sliinks
  let sliinkresistencia2 = 0;
  let sliinkeuropa1 = 0; 
  let sliinkeuropa2 = 0;
  let sliinkinternacional = 0;
  let sliinkpacifico = 0;
  let sliinkespelho1 = 0;
  let sliinkespelho2 = 0;
  let sliinkpersonalizado = 0;

  let nekomoriresistencia1 = 0;
  let nekomoriresistencia2 = 0;
  let nekomorieuropa1 = 0;
  let nekomorieuropa2 = 0;
  let nekomoriinternacional =0;
  let nekomoripacifico = 0;
  let nekomoriespelho1 = 0;
  let nekomoriespelho2 = 0;
  let nekomoripersonalizado = 0;
  
  resistencia1Rows.forEach(row => {
    const p1 = row.querySelector('td.p1'); // seleciona a primeira coluna da linha atual
    if (p1.textContent.includes('Sliink')) { // verifica se o texto da coluna contém "Sliink"
      sliinkresistencia1++; // incrementa o contador de Sliinks
    } else if (p1.textContent.includes('Gunner')) {
      gunnerresistencia1++;
    } else if (p1.textContent.includes('Nekomori')) {
      nekomoriresistencia1++;
    }

  });

  resistencia2Rows.forEach(row => {
    const p1 = row.querySelector('td.p1'); // seleciona a primeira coluna da linha atual
    if (p1.textContent.includes('Sliink')) { // verifica se o texto da coluna contém "Sliink"
      sliinkresistencia2++; // incrementa o contador de Sliinks
    } else if (p1.textContent.includes('Gunner')) {
      gunnerresistencia2++;
    } else if (p1.textContent.includes('Nekomori')) {
      nekomoriresistencia2++;
    }
  });

  europa1Rows.forEach(row => {
    const p1 = row.querySelector('td.p1'); 
    if (p1.textContent.includes('Sliink')) { 
      sliinkeuropa1++; 
    } else if (p1.textContent.includes('Gunner')) {
      gunnereuropa1++;
    } else if (p1.textContent.includes('Nekomori')) {
      nekomorieuropa1++;
    }
  });

  europa2Rows.forEach(row => {
    const p1 = row.querySelector('td.p1'); 
    if (p1.textContent.includes('Sliink')) {
      sliinkeuropa2++; 
    } else if (p1.textContent.includes('Gunner')) {
      gunnereuropa2++;
    } else if (p1.textContent.includes('Nekomori')) {
      nekomorieuropa2++;
    }
  });

  internacionalRows.forEach(row => {
    const p1 = row.querySelector('td.p1');
    if (p1.textContent.includes('Sliink')) {
      sliinkinternacional++;
    } else if (p1.textContent.includes('Gunner')) {
      gunnerinternacional++;
    } else if (p1.textContent.includes('Nekomori')) {
      nekomoriinternacional++;
    }
  })

  pacificoRows.forEach(row => {
    const p1 = row.querySelector('td.p1');
    if (p1.textContent.includes('Sliink')) {
      sliinkpacifico++;
    } else if (p1.textContent.includes('Gunner')) {
      gunnerpacifico++;
    } else if (p1.textContent.includes('Nekomori')) {
      nekomoripacifico++;
    }
  })
  
  espelho1Rows.forEach(row => {
    const p1 = row.querySelector('td.p1');
    if (p1.textContent.includes('Sliink')) {
      sliinkespelho1++;
    } else if (p1.textContent.includes('Gunner')) {
      gunnerespelho1++;
    } else if (p1.textContent.includes('Nekomori')) {
      nekomoriespelho1++;
    }
  })

  espelho2Rows.forEach(row => {
    const p1 = row.querySelector('td.p1');
    if (p1.textContent.includes('Sliink')) {
      sliinkespelho2++;
    } else if (p1.textContent.includes('Gunner')) {
      gunnerespelho2++;
    } else if (p1.textContent.includes('Nekomori')) {
      nekomoriespelho2++;
    }
    
  })

  personalizadoRows.forEach(row => {
    const p1 = row.querySelector('td.p1');
    if (p1.textContent.includes('Sliink')) {
      sliinkpersonalizado++;
    } else if (p1.textContent.includes('Gunner')) {
      gunnerpersonalizado++;
    } else if (p1.textContent.includes('Nekomori')) {
      nekomoripersonalizado++;
    }
  })









function campeonatos() {

res.innerHTML = `
<body id="res" onload="campeonatos()">
    <header>
        <button id="myButton">Dark/Light</button>
        <h1><a href="index.html"><img src="img/logom.png" alt=""></a></h1>
            <menu id="mainmenu">
                <a class="menu" href="index.html">Home</a>
                <a class="menu" href="resultados.html">Resultados</a>
                <a class="menu" href="ranking.html">Rankings</a>
                <a class="menu" href="stats.html">Stats</a>
                <a class="menu" href="campeonatos.html">Campeonatos</a>
            </menu>
    </header>
    <main>
        <div>
            <div class="padrao">
                <h1>Resistência I</h1>
                <p>
                    <h2>6 Grandes Prêmios</h2>
                    1 <img src="img/flag/bel.webp" alt="">Bélgica<br>
                    2 <img src="img/flag/sing.webp" alt="">Cingapura<br>
                    3 <img src="img/flag/bra.webp" alt="">Brasil<br>
                    4 <img src="img/flag/uk.webp" alt="">Grã-Bretanha<br>
                    5 <img src="img/flag/ita.webp" alt="">Itália<br>
                    6 <img src="img/flag/ale.webp" alt="">Alemanha<br>
                    <h2>Maiores vencedores</h2>
                    <img src="img/Sliink.png" alt=""> Sliink      ${sliinkresistencia1}<br>
                    <img src="img/Gunner.png" alt=""> Gunner      ${gunnerresistencia1}<br>
                    <img src="img/Nekomori.png" alt=""> Nekomori    ${nekomoriresistencia1}<br>
                </p>
            </div>
            <div class="padrao">
                <h1>Resistência II</h1>
                <p>
                    <h2>11 Grandes Prêmios</h2>
                    1 <img src="img/flag/bel.webp" alt="">Bélgica<br>
                    2 <img src="img/flag/sing.webp" alt="">Cingapura<br>
                    3 <img src="img/flag/bra.webp" alt="">Brasil<br>
                    4 <img src="img/flag/uk.webp" alt="">Grã-Bretanha<br>
                    5 <img src="img/flag/ita.webp" alt="">Itália<br>
                    6 <img src="img/flag/ale.webp" alt="">Alemanha<br>
                    7 <img src="img/flag/abu.webp" alt="">Abu Dhabi<br>
                    8 <img src="img/flag/us.webp" alt="">Estados Unidos<br>
                    9 <img src="img/flag/astr.webp" alt="">Austrália<br>
                    10<img src="img/flag/jap.webp" alt="">Japão<br>
                    11 <img src="img/flag/mon.webp" alt="">Mônaco<br>
                    <h2 style="margin-top: 0px;">Maiores vencedores</h2>
                    <img src="img/Gunner.png" alt=""> Gunner      ${gunnerresistencia2}<br>
                    <img src="img/Sliink.png" alt=""> Sliink      ${sliinkresistencia2}<br>
                </p>
            </div>
            <div class="padrao">
                <h1>Europa I</h1>
                <p>
                    <h2>3 Grandes Prêmios</h2>
                        1 <img src="img/flag/ita.webp" alt="">Itália<br>
                        2 <img src="img/flag/ale.webp" alt="">Alemanha<br>
                        3 <img src="img/flag/bel.webp" alt="">Bélgica<br>
                    <h2>Maiores vencedores</h2>
                    <img src="img/Nekomori.png" alt=""> Nekomori    ${nekomorieuropa1}<br>
                    <img src="img/Gunner.png" alt=""> Gunner      ${gunnereuropa1}<br>
                    <img src="img/Sliink.png" alt=""> Sliink      ${sliinkeuropa1}<br>
                </p>
            </div>
            <div class="padrao">
                <h1>Europa II</h1>
                <p>
                    <h2>5 Grandes Prêmios</h2>
                    1 <img src="img/flag/ale.webp" alt="">Alemanha<br>
                    2 <img src="img/flag/uk.webp" alt="">Grã-Bretanha<br>
                    3 <img src="img/flag/ita.webp" alt="">Itália<br>
                    4 <img src="img/flag/bel.webp" alt="">Bélgica<br>
                    5 <img src="img/flag/mon.webp" alt="">Mônaco<br>
                    <h2>Maiores vencedores</h2>
                    <img src="img/Nekomori.png" alt=""> Nekomori    ${nekomorieuropa2}<br>
                    <img src="img/Gunner.png" alt=""> Gunner      ${gunnereuropa2}<br>
                    <img src="img/Sliink.png" alt=""> Sliink      ${sliinkeuropa2}<br>
                </p>
            </div>
            <br>
            <div class="padrao">
                <h1>Espelho I</h1>
                <p>
                    <h2>4 Grandes Prêmios</h2>
                    1 <img src="img/flag/sing.webp" alt="">Cingapura<br>
                    2 <img src="img/flag/abu.webp" alt="">Abu Dhabi<br>
                    3 <img src="img/flag/us.webp" alt="">Estados Unidos<br>
                    4<img src="img/flag/jap.webp" alt="">Japão<br>
                </p>
            </div>
            <div class="padrao">
                <h1>Espelho II</h1>
                <p>
                    <h2>4 Grandes Prêmios</h2>
            
                    1 <img src="img/flag/bra.webp" alt="">Brasil<br>
                    2 <img src="img/flag/ita.webp" alt="">Itália<br>
                    3 <img src="img/flag/astr.webp" alt="">Austrália<br>
                    4 <img src="img/flag/mon.webp" alt="">Mônaco<br>
                    <h2>Maiores vencedores</h2>
                    <img src="img/Nekomori.png" alt=""> Nekomori    ${nekomoriespelho2}<br>
                    <img src="img/Sliink.png" alt=""> Sliink      ${sliinkespelho2}<br>
                </p>
            </div>
            <div class="padrao">
                <h1>Internacional</h1>
                <p>
                    <h2>4 Grandes Prêmios</h2>
                    1 <img src="img/flag/uk.webp" alt="">Grã-Bretanha<br>
                    2 <img src="img/flag/abu.webp" alt="">Abu Dhabi<br>
                    3<img src="img/flag/jap.webp" alt="">Japão<br>
                    4 <img src="img/flag/mon.webp" alt="">Mônaco<br>
                    <h2>Maiores vencedores</h2>
                    <img src="img/Sliink.png" alt=""> Sliink      ${sliinkinternacional}<br>
                </p>
            </div>
            <div class="padrao">
                <h1>No Pacífico</h1>
                <p>
                    <h2>4 Grandes Prêmios</h2>
                    1 <img src="img/flag/sing.webp" alt="">Cingapura<br>
                    2 <img src="img/flag/abu.webp" alt="">Abu Dhabi<br>
                    3 <img src="img/flag/astr.webp" alt="">Austrália<br>
                    4<img src="img/flag/jap.webp" alt="">Japão<br>
                    <h2>Maiores vencedores</h2>
                    <img src="img/Gunner.png" alt=""> Gunner      ${gunnerpacifico}<br>
                </p>
            </div>
            <br>
            <div class="padrao">
                <h1>Personalizado</h1>
                <p>
                    <h2>Maiores vencedores</h2>
                    <img src="img/Nekomori.png" alt=""> Nekomori    ${nekomoripersonalizado}<br>
                    <img src="img/Sliink.png" alt=""> Sliink      ${sliinkpersonalizado}<br>
                    <img src="img/Gunner.png" alt=""> Gunner      ${gunnerpersonalizado}<br>
                </p>
            </div>
        </div>



        

    </main>
    
    <script src="campeonatos.js"></script>
</body>`

document.getElementById("myButton").addEventListener("click", function(){
    var stylesheet = document.getElementById("myStylesheet");
    if (stylesheet.getAttribute("href") == "campeonatos.css") {
      stylesheet.href = "campeonatos2.css";
    } else {
      stylesheet.href = "campeonatos.css";
    }
  });
}