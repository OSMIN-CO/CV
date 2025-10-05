const nav = document.getElementById('header-nav')
const ol = document.getElementById('header-ol')

nav.addEventListener('click',() =>{
    ol.classList.toggle('active')
})


const scrollVision = () =>{
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Para que solo ocurra una vez
      }
    });
  });
  document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

}

scrollVision()