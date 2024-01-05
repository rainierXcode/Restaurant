function scroll() {
  const nav = document.querySelector('nav');
  let lastScrollTop = 0;
  let isScrollingUp = false;

  window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      if (isScrollingUp) {
        nav.style.opacity = 0;
        isScrollingUp = false;
      }
    } else {
      // Scrolling up
      if (!isScrollingUp) {
        nav.style.opacity = 1;
        isScrollingUp = true;
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}


function homeAnimation(){
  const yellowBox = document.getElementById("small-box-yellow");
  const mainShape = document.getElementById("mainShape");

  yellowBox.classList.add('yellowBox-intersect');
  mainShape.classList.add("mainShape-intersect");
}

function homeObserver(){
  const home = document.querySelector(".home-container")
  const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{

       if(entry.isIntersecting){
         homeAnimation();
       }
       else{
        
       }

    })
  }, {threshold: 0.3})
  observer.observe(home);
}

homeObserver();
scroll();