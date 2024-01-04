const navbar = document.querySelector(".navbar");

const navbarObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (!entry.isIntersecting) {
         navbar.style.width = '100vw';
      }
      else{
        navbar.style.width = '80vw';
      }
  });
}, {
  threshold: 0.1
});


navbarObserver.observe(document.querySelector('.home-container'));

function cantScrollForASecond(){
  document.body.style.overflow = 'hidden';
  setTimeout(function(){
    document.body.style.overflow = '';
  },1500)
}

const viewMore = document.getElementById('viewMore');
setTimeout(()=>{
  viewMore.classList.remove("viewMoreAnim");
}, 4000)

cantScrollForASecond();
