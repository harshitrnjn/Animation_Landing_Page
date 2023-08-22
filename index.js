gsap.to("#image",{
width:"100%",
ease:Expo.easeInOut,
duration:2,
stagger:2
})

gsap.to("#text h1",{
    ease:Expo.easeInOut,
    top:"0%",
    duration:2,
    stagger:2
})
gsap.to("#text h1",{
    ease:Expo.easeInOut,
    top:"-100%",
    delay:2,
    duration:2,
    stagger:2
})