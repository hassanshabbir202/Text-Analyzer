// text Bold
function bold(){
   document.getElementById("textanalyze").style.fontWeight = "bold"
}

// text italic
function italic(){
    document.getElementById("textanalyze").style.fontStyle = "italic";
}

// copy text
function copyText(){
   var textanalyze = document.getElementById("textanalyze");
   textanalyze.select();
   navigator.clipboard.writeText(textanalyze.value)
}

// increase fontSize 
var textSize = 16;
function increaseFont(){
  var text = document.getElementById("textanalyze");
  textSize = textSize + 1;
  text.style.fontSize = textSize + "px"
  var ff_main_size = document.getElementById("ff_main_size");
  ff_main_size.value++;
}

// decrease fontsize 
function decrease(){
    var text = document.getElementById("textanalyze");
    textSize = textSize - 1;
    text.style.fontSize = textSize + "px"
    var ff_main_size = document.getElementById("ff_main_size");
    ff_main_size.value--;
}

// selectAll

function selectAll(){
    var textanalyze = document.getElementById("textanalyze");
    textanalyze.select();
    navigator.clipboard.writeText(textanalyze.value)
}

// clearText

function clearText(){
    document.getElementById("textanalyze").value = ""
}