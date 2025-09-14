// Init AOS animations
AOS.init({ duration: 800, once: true });

// Hero Parallax Effect
document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector("#hero");
  if(hero){
    let x = (e.clientX / window.innerWidth - 0.5) * 10;
    let y = (e.clientY / window.innerHeight - 0.5) * 10;
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  }
});
