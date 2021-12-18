var num = 1
var objetos = {"Objects": []};
var objItens = []

function SpawnObject(nomeEvento, pos, yaws) {

  var cords = pos.split(" ")
  var outras = yaws.split(" ")
  var yam = outras[0];
  var pit = outras[1];
  var rol = outras[2];
  //Broken down new loot co-ordinates
  var x = cords[0];
  var y = cords[1];
  var z = cords[2];
  var eventspawn = "";

  nomeEvento2 = nomeEvento.replace('_', '')

  let evento = ('        <event name="Vehicle'+nomeEvento2+''+num+'">\n            <nominal>1</nominal>\n            <min>1</min>\n            <max>1</max>\n            <lifetime>300</lifetime>\n            <restock>0</restock>\n            <saferadius>5</saferadius> <!-- The saferadius is the distance away from the player position that this event can spawn. -->\n            <distanceradius>5</distanceradius> <!-- The distanceradius is the minimum distance away from other similar event. -->\n            <cleanupradius>5</cleanupradius> <!-- The cleanupradius is the distance away from the player position that the event will despawn after lifetime ticks down. -->\n            <flags deletable="0" init_random="0" remove_damaged="0"/>\n            <position>fixed</position>\n            <limit>mixed</limit>\n            <!-- <limit>child</limit> -->\n            <active>1</active>\n            <children>\n                <child lootmax="0" lootmin="0" max="1" min="1" type="'+nomeEvento+'"/>\n            </children>\n        </event>\n');

  a = yam;
  if (a < 0) {
    a = 360 - (a*-1);
  }
  eventspawn = (`<event name="Vehicle${nomeEvento2}${num}">\n    <pos x="${x}" y="${y}" z="${z}" a="${a}" />\n</event>`);

  var objeto = {
      "name": nomeEvento,
      "pos": [
        parseFloat(x),
        parseFloat(y),
        parseFloat(z)
      ],
      "ypr": [
        parseFloat(yam),
        parseFloat(pit),
        parseFloat(rol)
      ]
    };

  objetos.Objects.push(objeto);

  // console.log(JSON.stringify(objeto, null, '\t'));

  $("#events").val($("#events").val() + evento );
  $("#eventspawn").val($("#eventspawn").val() + eventspawn );

} 

$("#enviar").click(function() {
  $("#events").val("");
  $("#eventspawn").val("");
  $("#jsonObject").val("");
  var lines = $('#dayzpc').val().split('\n');
  for(var i = 0;i < lines.length;i++) {
    eval(lines[i])
  }

  $("#jsonObject").val($("#jsonObject").val() + JSON.stringify(objetos, null, '\t'));

  console.log(JSON.stringify(objetos, null, '\t'));

});
