function theme() {
    var body = document.getElementById('body');
    var main = document.querySelector('main');
  
    if (body.style.backgroundColor !== 'black') {
      body.style.backgroundColor = 'black';
      changeTextColor('white');
      changeOutline(main, '1px solid white');
    } else {
      body.style.backgroundColor = 'white';
      changeTextColor('black');
      changeOutline(main, '1px solid black');
    }
  }
  
  function changeTextColor(color) {
    var links = document.querySelectorAll('header a ');
    links.forEach(function(link) {
      link.style.color = color;
    });
  }
  
  function changeOutline(element, outline) {
    element.style.border = outline;
  }
  


