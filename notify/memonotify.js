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

    cursorMain.style.width = '10px';
    cursorMain.style.height = '10px';
    cursorMain.style.borderRadius = '0';
    cursorMain.style.animation = 'spin 6s linear infinite';

    cursorRing.style.width = '25px';
    cursorRing.style.height = '25px';
    cursorRing.style.border = '2px solid #f6f5f4';
    cursorRing.style.borderRadius = '0%';
    cursorRing.style.animation = 'reverse-spin 8s linear infinite';

    cursorRing2.style.width = '5px';
    cursorRing2.style.height = '5px';
    cursorRing2.style.opacity = '0%';
    cursorRing2.style.animation = null;
}


document.addEventListener('mousemove', setMousePos);
hoverable.forEach(element => {
    element.addEventListener('mouseover', hoverCursor);
    element.addEventListener('mouseout', normalCursor);
});