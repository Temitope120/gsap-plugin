// animate logo
// gsap.to(".logo", {duration: 2, x:300});

// control background color of images
// gsap.to(".logo", {duration: 2, x:300, backgroundColor: 'purple', borderRadius: '5%', border: "5px solid white", ease:"steps(12)"});

// Exploring differrent types of eases
// gsap.to(".logo", {duration: 2, x:300, backgroundColor: 'purple', borderRadius: '5%', border: "5px solid white", ease:"circ.inOut"});


// gsap.to(".logo, .astronaut", {duration: 2, rotation: 360});


// use it on objects

// var myObject = {rotation: 0};
// gsap.to(myObject, {duration: 20, rotation:360, onUpdate: ()=>{
//     console.log(myObject.rotation)
// }})


// call back functions too : onStart, onUpdate, etc

// gsap.to(".logo", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"})

// .from can be used too
var logoTl = gsap.timeline({repeat: 4, yoyo: true});
// with using yoyo, the repeat value is subtracted by 1
logoTl.from(".logo", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});

// gsap.from(".")

// animate the circles

// gsap.from(".circle", {duration: 1, opacity: 0, y:150, stagger: .25})

// animate using a function

// gsap.from(".circle", {duration: 1, opacity: 0, y: ()=> Math.random() * 400 - 200, stagger: .25})

// gasp random value: "random(-200, 200)", eg: y: "random(-200, 200)"

// gsap timeline
// var tl = gsap.timeline();
// tl.from(".logo2", {duration: 2.5, opacity: 0, scale: 0.3, ease:"back"});

// tl.from(".circle", {duration: 1, delay:1.5, opacity: 0, y: 150, stagger: .25})

// animations get added to the end of the timeline
// if the delay is removed from the circles, the second tweeen goes after the first timeline, they have this sequence


// the Repeat. Timelines can also repeat

// var tl = gsap.timeline({repeat: 2}); // this will run the animation, once first, the repect 2 more tmes.

// to repeat infinitely, -1 will be used
// another value of repeat is yoyo

var tl = gsap.timeline({repeat: 2, yoyo: true}) //will run the aniamtion and return it backwards again

// var tl = gsap.timeline();
tl.from(".logo2", {duration: 2.5, opacity: 0, scale: 0.3, ease:"back"});


tl.from(".logo2", {duration: 1, rotate: 360});


tl.from(".circle", {duration: 1, opacity: 0, y: 150, stagger: .25,})

// boucy circles
// var bouncyCircles = gsap.timeline({repeat: 2, })
// gsap.to(".circle2", {duration: 1, opacity: 0, ease: bounce})

gsap.from(".circle2", { duration: 5, ease: "bounce.inOut", y:-30 });

// Instead of delay, The position paramter can b used, it comes after he object{}, it tells the timeline where to put the animation.....eg +=2 means 2 seconds after..... to adjust the sequence, if u want the 2nd to start before the 1st tween ends, add +=1, or -=0.5 .


// u can also add timelines, to timelines.

// not sure stagger and ease goes togeter


// addLabel method

tl.addLabel("circleOutro", "+=1")
