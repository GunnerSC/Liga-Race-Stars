document.getElementById("myButton").addEventListener("click", function(){
    var stylesheet = document.getElementById("myStylesheet");
    if (stylesheet.getAttribute("href") == "resultados.css") {
      stylesheet.href = "resultados2.css";
    } else {
      stylesheet.href = "resultados.css";
    }
  });

  
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

  function teste() {

  testando.innerText = `
  Gunner:
  Resistência I: ${gunnerresistencia1}
  Resistência II; ${gunnerresistencia2}
  Europa I: ${gunnereuropa1}
  Europa II: ${gunnereuropa2}
  Espelho I: ${gunnerespelho1}
  Espelho II: ${gunnerespelho2}
  Internacional: ${gunnerinternacional}
  No Pacífico: ${gunnerpacifico}
  Personalizado: ${gunnerpersonalizado}
  
  Sliink:
  Resistência I: ${sliinkresistencia1}
  Resistência II: ${sliinkresistencia2}
  Europa I: ${sliinkeuropa1}
  Europa II: ${sliinkeuropa2}
  Espelho I: ${sliinkespelho1}
  Espelho II: ${sliinkespelho2}
  Internacional: ${sliinkinternacional}
  No Pacífico: ${sliinkpacifico}
  Personalizado: ${sliinkpersonalizado}
  
  
  Nekomori:
  Resistência I: ${nekomoriresistencia1}
  Resistência II; ${nekomoriresistencia2}
  Europa I: ${nekomorieuropa1}
  Europa II: ${nekomorieuropa2}
  Espelho I: ${nekomoriespelho1}
  Espelho II: ${nekomoriespelho2}
  Internacional: ${nekomoriinternacional}
  No Pacífico: ${nekomoripacifico}
  Personalizado: ${nekomoripersonalizado}
  
  
  `
  }
  