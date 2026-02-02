const planets = [
  {
    planetEl: document.querySelector(".mercury-orbit-anim"),
    speed: 1,
    angle: 0,
  },
  {
    planetEl: document.querySelector(".venus-orbit-anim"),
    speed: 0.38,
    angle: 0,
  },
  {
    planetEl: document.querySelector(".earth-orbit-anim"),
    speed: 0.24,
    angle: 0,
  },
  {
    planetEl: document.querySelector(".mars-orbit-anim"),
    speed: 0.13,
    angle: 0,
  },
  {
    planetEl: document.querySelector(".jupiter-orbit-anim"),
    speed: 0.02,
    angle: 0,
  },
  {
    planetEl: document.querySelector(".saturn-orbit-anim"),
    speed: 0.009,
    angle: 0,
  },
  {
    planetEl: document.querySelector(".uranus-orbit-anim"),
    speed: 0.004,
    angle: 0,
  },
  {
    planetEl: document.querySelector(".neptune-orbit-anim"),
    speed: 0.002,
    angle: 0,
  },
];

function animatePlanets() {
  planets.forEach((planet) => {
    planet.angle += planet.speed;
    planet.planetEl.style.transform = `translate(-50%, -50%) rotate(${planet.angle}deg)`;
  });

  requestAnimationFrame(animatePlanets);
}

animatePlanets();
