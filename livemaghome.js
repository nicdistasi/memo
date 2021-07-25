
var cursor = document.getElementById('cursorCont');
var hoverable = Array.from(document.getElementsByClassName('hoverable'));

function setMousePos() {
    var e = window.event;
    var posX = e.clientX;
    var posY = e.clientY;
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;
    var cursorLink = document.getElementById('magLink');

    cursor.style.transform = 'translate('+posX+'px, '+posY+'px)';
    cursorLink.style.transform = 'translate('+posX+'px, '+posY+'px)';

    if (posX < 10 || posX > (pageWidth - 10) || posY < 10 || posY > (pageHeight - 10)) {
        cursor.style.opacity = '0%';
    } else {
        cursor.style.opacity = '100%';
    }
}

function hoverCursor() {
    var cursorMain = document.getElementById('cursorMain');
    var cursorIcon = document.getElementById('cursorIcon');
    var cursorRing = document.getElementById('cursorRing');
    var cursorRing2 = document.getElementById('cursorRing2');

    cursor.setAttribute('class', 'hovering');

    cursorIcon.style.width = '0';
    cursorMain.style.width = '10px';
    cursorMain.style.height = '10px';
    cursorMain.style.borderRadius = '50%';

    cursorRing.style.width = '20px';
    cursorRing.style.height = '20px';
    cursorRing.style.border = '2px solid #f6f5f4';

    cursorRing2.style.width = '50px';
    cursorRing2.style.height = '50px';
    cursorRing2.style.opacity = '100%';
    cursorRing2.style.borderRadius = '50%';
    cursorRing2.style.animation = 'scale-pulse 3s ease-in-out infinite';
}

function normalCursor() {
    var cursorMain = document.getElementById('cursorMain');
    var cursorIcon = document.getElementById('cursorIcon');
    var cursorRing = document.getElementById('cursorRing');
    var cursorRing2 = document.getElementById('cursorRing2');

    cursor.removeAttribute('class', 'hovering');

    cursorIcon.style.width = '15px';
    cursorMain.style.width = '40px';
    cursorMain.style.height = '40px';
    cursorMain.style.borderRadius = '0';
    cursorMain.style.animation = 'spin 6s linear infinite';

    cursorRing.style.width = '45px';
    cursorRing.style.height = '45px';
    cursorRing.style.border = '2px solid #f6f5f4';
    cursorRing.style.borderRadius = '0%';
    cursorRing.style.animation = 'reverse-spin 8s linear infinite';

    cursorRing2.style.width = '30px';
    cursorRing2.style.height = '30px';
    cursorRing2.style.opacity = '0%';
    cursorRing2.style.animation = null;
}


function writeCatchphrase(event) {
    // array with texts to type in typewriter
    var dataText = [ "&#60;the only magazine you can see from space*/&#62;", "&#60;memo lives on the internet*/&#62;", "&#60;read the mag, get the memo*/&#62;", "&#60;ships anywhere in the world at abt 18 mb/s*/&#62;", "&#60;viewer submissions in edition 2!*/&#62;"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("#homeCatchphrase").innerHTML = text.substring(0, i+1);
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 7000);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 2000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
}

document.addEventListener('mousemove', setMousePos);
hoverable.forEach(element => {
    element.addEventListener('mouseover', hoverCursor);
    element.addEventListener('mouseout', normalCursor);
});
document.addEventListener('DOMContentLoaded',writeCatchphrase);
