var headers = Array.from(document.getElementsByClassName('magPageHeader'));
var pageBgs = Array.from(document.getElementsByClassName('bgImage'));
var pageDivs = Array.from(document.getElementsByClassName('page'));
var pageIndex = document.getElementById('pageIndex');
var closeIndexDiv = document.getElementById('closeIndexDiv');
var indexPageList = document.getElementById('indexPageList');


pageDivs.forEach(page => {
    const num = pageDivs.indexOf(page) + 1;
    page.setAttribute('id', num);
});

function openIndex() {
    pageIndex.style.transform = 'translateX(0)';
    pageIndex.style.boxShadow = '0 0 40px 0 #090a0b';

    closeIndexDiv.style.display = 'block';
}

function closeIndex() {
    pageIndex.style.transform = 'translateX(-30vw)';
    pageIndex.style.boxShadow = '0 0 0px 0 #090a0b';

    closeIndexDiv.style.display = 'none';
}

//Create index items for each page
pageDivs.forEach(page => {
    const num = pageDivs.indexOf(page);
    const pageNum = page.getAttribute('id');
    var createIndexLi = document.createElement('li');
    var indexLiAtt = document.createAttribute("class");
    indexLiAtt.value = 'indexItem';
    var indexLiId = document.createAttribute("id");
    indexLiId.value = pageNum;
    createIndexLi.setAttributeNode(indexLiAtt);
    createIndexLi.setAttributeNode(indexLiId);
    indexPageList.appendChild(createIndexLi);

    var indexItems = Array.from(document.getElementsByClassName('indexItem'));
    var createIndexNum = document.createElement('a');
    var indexNumAtt = document.createAttribute("class");
    indexNumAtt.value = 'indexItemNum';
    createIndexNum.setAttributeNode(indexNumAtt);
    indexItems[num].appendChild(createIndexNum);

    var indexItemNums = Array.from(document.getElementsByClassName('indexItemNum'));
    indexItemNums[num].innerHTML = pageNum + ' - ';
    
    var createIndexTitle = document.createElement('a');
    var indexTitleAtt = document.createAttribute("class");
    indexTitleAtt.value = 'indexItemTitle';
    createIndexTitle.setAttributeNode(indexTitleAtt);
    indexItems[num].appendChild(createIndexTitle);

var indexItemTitles = Array.from(document.getElementsByClassName('indexItemTitle'));
    var pageTitle = pageDivs[num].getAttribute('name');
    indexItemTitles[num].innerHTML = pageTitle;
});

function scrollToPage() {
    var e = window.event;
    var clicked = e.target;
    if (clicked.nodeName == 'A') {
        var clicked = clicked.parentElement;
    }
    var clickedNum = clicked.getAttribute('id');
    if (clickedNum % 2 == 1) {
        var selectedElem = pageDivs[clickedNum - 1];
    } else {
        var selectedElem = pageDivs[clickedNum - 2];
    }
    selectedElem.scrollIntoView({behavior: 'smooth'});
    closeIndex();
}

var indexItems = Array.from(document.getElementsByClassName('indexItem'));
indexItems.forEach(item => {
    item.addEventListener('click', scrollToPage);
});