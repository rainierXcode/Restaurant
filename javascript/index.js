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

const homeObserver = new IntersectionObserver(entries =>{
  const shape = document.getElementById("mainShape");

  entries.forEach(entry =>{
   if(entry.isIntersecting){
      shape.classList.add("mainShapeIX")
   }

   else{
     shape.classList.remove("mainShapeIX")
   }
 })
})

homeObserver.observe(document.querySelector('.home-container'))


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {threshol: 1})

const hidden = document.querySelectorAll(".hidden");
hidden.forEach(el => observer.observe(el));



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

  document.querySelector(".back").addEventListener('click',() =>{
    document.querySelector(".menuOpen").style.display = 'none';
    document.getElementById("viewMenu").style.display = 'flex';
    document.querySelector(".category-container").style.display = 'flex';
  })



function directToFoods(){
  const readMore = document.querySelectorAll(".readMore");
    readMore.forEach(anchor =>{
      anchor.addEventListener('click', (event)=>{
        event.preventDefault();
        const toShow = document.getElementById(anchor.getAttribute('href').substring(1));
        document.getElementById("viewMenu").style.display = 'none';
        document.querySelector('.category-container').style.display = 'none';
        document.querySelector(".menuOpen").style.display = 'block';
        readMore.forEach(anchor =>{
          document.getElementById(anchor.getAttribute('href').substring(1)).style.display = 'none';
        })
        document.getElementById(anchor.getAttribute('href').substring(1)).style.display = 'block';
      })
    })
}

directToFoods();
nameContainerDesign();
scroll();