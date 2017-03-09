var crew = new Array();
$(document).ready(function(){
  crew = createCrew(50);

  listCrew();

  $('#order-by-area').on('click', function (e){
    e.preventDefault();

    // sortCrewByMultiplier();
    sortCrewByArea();
    $('.members-list').empty();
    listCrew();
  });

});

function createCrew (numberOfMebers){
  var race = ['human', 'vulcan', 'betazoid'];
  var color = ['blue', 'red', 'yellow'];
  var area = ['science', 'engineering', 'command']

  for (i=0; i<numberOfMebers; i++){
    var raceIndex = 0 + Math.floor(Math.random() * 3);
    var areaIndex = 0 + Math.floor(Math.random() * 3);
    var multiplier = 1 + Math.floor(Math.random() * 3);

    var member = {
      'id': i,
      'race' : race[raceIndex],
      'area' : area[areaIndex],
      'color' : color[areaIndex],
      'multiplier' : multiplier
    }
    crew.push (member);
  }
  return crew;
}

function listCrew (){
  var template = "";
  console.log (crew.length);
  for(i=0; i<crew.length; i++){
    template += '<li><div class="col-xs-2"><span class="position-color ' + crew[i].color + '"></span></div><div class="col-xs-8"><div class="member-id">' + crew[i].id + '</div><div class="race">' + crew[i].race + '</div></div><div class="col-xs-2"><div class="multiplier">' + crew[i].multiplier + '</div></div></li>'
  }

  $('.members-list').append(template);
}


function sortCrewByMultiplier (){
  crew.sort(function(a, b) {
    var memberA = a.multiplier;
    var memberB = b.multiplier;
    return (memberA < memberB) ? -1 : (memberA > memberB) ? 1 : 0;
  });
}

function sortCrewByArea (){
  crew.sort(function(a, b) {
    var memberA = a.area.toLowerCase();
    var memberB = b.area.toLowerCase();
    return (memberA < memberB) ? -1 : (memberA > memberB) ? 1 : 0;
  });
}
