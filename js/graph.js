
// Produire le graphe

if (dataArray) {

  var largeur=80;
        
  if (document.documentElement.clientWidth >= 600) {
    var largeur=120;
  }

  if (document.documentElement.clientWidth >= 900) {
    var largeur=160;
  }

  // dataArray.sort(compareSecondColumn);

  var dataLabels = arrayKeys(dataArray);
  var dataChiffres = arrayValues(dataArray);


  new Chartist.Pie('.ct-chart', {
     labels: dataLabels,
     series: dataChiffres
  }, {
    donut: true,
    donutWidth: largeur,
    donutSolid: true,
    startAngle: 270,
    showLabel: true
  });

  legendeAutomatique(dataArray, "legende");

}

// Produire la liste visuelle


function legendeAutomatique(data,targetID) {

  var legendeContenu = '';

  // additionner tous les chiffres
  var dataChiffres = arrayValues(data);
  var dataTotal = dataChiffres.reduce((a, b) => a + b, 0);

  for (var i = 0; i < data.length; i++) {
  
    var legendeData     = data[i];
  // var legendeChiffre = seriesBrain[i];

    var legendePourcent = Math.round(( legendeData[1] / dataTotal ) * 100);

    legendeCouleur = '<div class="couleur"></div>';

    legendeContenu += '<li>' + legendeCouleur + '<span>' + legendePourcent + '% : ' + legendeData[0] + '</span></li>';

  }

  var legendeUL = document.createElement("ul");
  legendeUL.className = "liste-legende";
  legendeUL.innerHTML = legendeContenu;
  document.getElementById(targetID).appendChild(legendeUL);


}


