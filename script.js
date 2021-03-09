"use strict"

function fBerechnen() {
    var vG = parseFloat(document.getElementById('idG').value);
    var vP = parseFloat(document.getElementById('idP').value);
    var vA = parseFloat(document.getElementById('idA').value);
    var vB = parseFloat(document.getElementById('idB').value);
    var vOAS = 0;
    var vOBS = 0;
    var vKB = 0;
    var vKA = 0;
    var vAusgabe;

    vOAS = Math.pow(vG, vA) % vP;
    vOBS = Math.pow(vG, vB) % vP;
    vKA = Math.pow(vOBS, vA) % vP;
    vKB = Math.pow(vOAS, vB) % vP;

    vAusgabe = "Öffentlicher Schlüssel Alice: " + vOAS + "<br>";
    vAusgabe = vAusgabe + "Öffentlicher Schlüssel Bob: " + vOBS + "<br><hr>";
    vAusgabe = vAusgabe + "Generierter Schlüssel K Alice: " + vKA + "<br>";
    vAusgabe = vAusgabe + "Generierter Schlüssel K Bob: " + vKB + "<br>";

    document.getElementById('idAusgabe').innerHTML = vAusgabe;
}