
const initialPageAnimation = () => { 
let tl = gsap.timeline()
tl.fromTo(
  ".logo",
  {
    x: -200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.3,
  }
)
  .fromTo(
    ".menu",
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: 0.5,
      duration: 1.3,
    },
    ">-1.8"
  )
  .fromTo(
    ".info-section h1",
    {
      x: 0,
      y: 100,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.3,
    }
  )
  .addLabel("h1Show")
  .fromTo(
    ".girl",
    {
      height: 0,
    },
    {
      height: 600,
      duration: 1.4,
      ease: "power2.inOut",
    },
    ">-.5"
  )
  .fromTo(
    ".boy",
    {
      height: 0,
    },
    {
      height: 600,
      duration: 1.4,
      ease: "power2.inOut",
    },
    ">-1"
  )
  .fromTo(
    ".shape1",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.inOut",
    },
    ">-1"
  )
  .fromTo(
    ".shape3",
    {
      opacity: 0,
    },
    {
      opacity: 0.6,
      ease: "power2.inOut",
      duration: 1,
    },
    ">-.2"
  )
  .fromTo(
    ".shape3",
    {
      x: -50,
      y: 500,
    },
    {
      y: 465,
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
    }
  )
  .fromTo(
    ".shape2",
    {
      opacity: 0,
    },
    {
      opacity: 0.3,
      ease: "power2.inOut",
      duration: 1,
    },
    ">-2"
  )
  .fromTo(
    ".shape2",
    {
      x: 550,
      y: -150,
    },
    {
      y: -185,
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
    }
  )
  .fromTo(
    ".info-section h4",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    "h1Show"
  )
  .fromTo(
    ".call-actions",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    "h1Show+=1"
  );
};


const delay = (n) => { 
  return new Promise((done) => { 
    setTimeout(() => { 
      done();
    }, n)
  })
}

barba.init({ 
  sync: true,
  transitions: [ 
    { 
      name: "page-wipe", 
      async leave(data){ 
        console.log("Leaving Page Animation");
      }, 
      async enter(data){ 
        console.log("Entering Page Animation");
      }
    }
  ]
})