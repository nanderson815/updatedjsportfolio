$('.sidenav').sidenav({
    draggable: true
});

var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthpage', 'lastPage'],
    menu: '#menu',
    paddingTop: "50px",
    lazyLoad: true,
    fixedElements: '#header, .footer',
    paddingTop: "10em"
});

