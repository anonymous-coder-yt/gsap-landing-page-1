
let tl = new TimelineMax();

tl.to('.rightWrapper', 0.7, {
    height:'100vh',
    ease: Circ.easeOut
})
.from('.rightWrapper .box1', 1, {
    opacity:0,
    left: '30%',
    ease: Bounce.easeOut
})
.from('.rightWrapper .box2', 1, {
    opacity:0,
    left: '-30%',
    ease: Bounce.easeOut
})
.from('.rightBox', 0.5 ,{
    opacity: 0,
    marginTop: '-30',
    ease: Circ.easeOut
})
.to('.leftWrapper .tri', 0.4, {
    opacity:1,
    rotation: 0
})






