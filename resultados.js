document.getElementById("myButton").addEventListener("click", function(){
    var stylesheet = document.getElementById("myStylesheet");
    if (stylesheet.getAttribute("href") == "resultados.css") {
      stylesheet.href = "resultados2.css";
    } else {
      stylesheet.href = "resultados.css";
    }
  });

  