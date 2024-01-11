function isScreenWidthBelow1000() {
  return window.innerWidth < 1000;
}

function scroll() {
  const header = document.querySelector('header');
  let lastScrollTop = 0;
  let isScrollingUp = false;

  window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      if (isScrollingUp) {
        header.style.opacity = 0;
        isScrollingUp = false;
      }
    } else {
      // Scrolling up
      if (!isScrollingUp) {
        header.style.opacity = 1;
        isScrollingUp = true;
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}


function currentNavObserver(current) {
  if(!isScreenWidthBelow1000()){
    const nav = document.querySelectorAll(".navbar a");
    nav.forEach(n => { n.classList.remove('current-nav') });
    current.classList.add("current-nav")
  }
}

function homeObserver() {
  const homeObserver = new IntersectionObserver(entries => {
    const shape = document.getElementById("mainShape");
    const home = document.querySelector(".navbar a:first-child");

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        shape.classList.add("mainShapeIX")
        currentNavObserver(home)
      }

      else {
        shape.classList.remove("mainShapeIX")
      }
    })
  })

  homeObserver.observe(document.querySelector('.home-container'))
}

function menuObserver() {
  const menuObserver = new IntersectionObserver(entries => {
    const menu = document.querySelector(".navbar a:nth-child(2)");

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentNavObserver(menu)
      }
    })
  })

  menuObserver.observe(document.querySelector('.menu-container'))
}

function contactObserver() {
  const contactObserver = new IntersectionObserver(entries => {
    const contact = document.querySelector(".navbar a:nth-child(3)");

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentNavObserver(contact)
      }
    })
  })

  contactObserver.observe(document.getElementById('contact-container'))
}



function observer() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshol: 1 })

  const hidden = document.querySelectorAll(".hidden");
  hidden.forEach(el => observer.observe(el));

}

function fadeObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');
      }
      else {
        entry.target.classList.remove('fadeIn');
      }
    })
  }, { threshol: 0.75 })

  const fadeIn = document.querySelectorAll('.fadeOut');
  fadeIn.forEach(f => { observer.observe(f) });
}



function nameContainerDesign() {
  const foodBox = document.querySelectorAll(".menu-food-image-container");

  foodBox.forEach(box => {
    box.addEventListener('mouseover', () => {
      const nameContainer = box.previousElementSibling;
      nameContainer.classList.add("name-hover");
    });

    box.addEventListener('mouseout', () => {
      const nameContainer = box.previousElementSibling;
      nameContainer.classList.remove("name-hover");
    });
  });
}

document.querySelector(".back").addEventListener('click', () => {
  document.querySelector(".menuOpen").style.display = 'none';
  document.getElementById("viewMenu").style.display = 'flex';
  document.querySelector(".category-container").style.display = 'flex';
})



function directToFoods() {
  const readMore = document.querySelectorAll(".readMore");
  readMore.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const toShow = document.getElementById(anchor.getAttribute('href').substring(1));
      document.getElementById("viewMenu").style.display = 'none';
      document.querySelector('.category-container').style.display = 'none';
      document.querySelector(".menuOpen").style.display = 'block';
      readMore.forEach(anchor => {
        document.getElementById(anchor.getAttribute('href').substring(1)).style.display = 'none';
      })
      document.getElementById(anchor.getAttribute('href').substring(1)).style.display = 'block';
    })
  })
}

let isFirst = true;
function additionalContainer() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (isFirst) {
          entry.target.classList.add("additional-container-animation");
          isFirst = false;
        }
        else {
          entry.target.classList.remove("additional-container-animation");
          entry.target.classList.add("hidden");
          entry.target.classList.add("show");
        }
      }
      else {
        entry.target.classList.remove("show");
      }
    })
  })

  const addsText = document.querySelector(".additional-container div");
  observer.observe(addsText)
}

function navbar() {
  const nav = document.querySelectorAll(".navbar a");
  const navbar = document.querySelector(".navbar")

  nav.forEach(n => {
    n.addEventListener('click', () => {
      nav.forEach(n => { n.classList.remove('current-nav') })
      n.classList.add('current-nav');
      navbar.style.opacity = 1;
    })
  })
}

function navbarListener() {
  const navbar = document.querySelector('.navbar');
  const button = document.querySelector('.navbar-button');
  const header = document.querySelector("header");
  const close = document.querySelector('.navbar-close')
  const list = document.querySelectorAll(".navbar a");
  const nav = document.querySelector('nav')


  if (button) {
    button.addEventListener('click', () => {
      header.classList.add('navOpen')
      if(isScreenWidthBelow1000()){
        nav.classList.add('navOpen2');
      }
      close.style.display = 'block';
      navbar.style.display = 'flex';
      button.style.display = 'none';
    })
  }

  if(close){
    close.addEventListener('click', () =>{
      header.classList.remove('navOpen');
      nav.classList.remove('navOpen2');
      close.style.display = 'none'
      navbar.style.display = 'none'
      button.style.display = 'flex'
    })
  }

  if(isScreenWidthBelow1000()){
    list.forEach(a =>{
      a.addEventListener('click', () =>{
        header.classList.remove('navOpen');
         nav.classList.remove('navOpen2');
        close.style.display = 'none'
        navbar.style.display = 'none'
        button.style.display = 'flex'
      })
    })
  }
}

navbarListener();
homeObserver();
menuObserver();
contactObserver();
observer();
fadeObserver();
additionalContainer();
directToFoods();
nameContainerDesign();

if (!isScreenWidthBelow1000()) {
  scroll();
  navbar();
}