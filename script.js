

function getVars(){
    var firstVar = document.getElementById('one').value;
    var secondVar = document.getElementById('two').value;
    var thridVar = document.getElementById('three').value;
    var p = (+firstVar + +secondVar + +thridVar)/2;
    var result = Math.sqrt(p*(p - firstVar)*(p - secondVar)*(p - thridVar));
    alert( result);
}
