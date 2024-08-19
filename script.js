const lenis = new Lenis();
// lenis is library use for smooth scroll
lenis.on('scroll', (e) => {
    console.log(e);
    handleNavbarVisibility();
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function handleNavbarVisibility() {
    const header = document.querySelector('header');
    if (window.scrollY > window.innerHeight) {
        header.classList.add('show');
    } else {
        header.classList.remove('show');
    }
}

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-1",
        start: "50% 50%",
        end: "250% 50%",
        scrub: true,
        // markers:true,
        pin: true,
    }
});

tl.to(".rotate-div", {
    rotate: -15,
    scale: 0.8,
}, 'a');
tl.to("#row-div-2", {
    marginTop: "5%"
}, 'a');
tl.to("#row-div-3", {
    marginTop: "-2%"
}, 'a');
tl.to("#row-div-4", {
    marginTop: "-8%"
}, 'a');
tl.to("#row-div-5", {
    marginTop: "-10%"
}, 'a');
tl.to(".overlay-div h1", {
    opacity: "1",
    delay: 0.2,
}, 'a');
tl.to(".overlay-div", {
    backgroundColor: "#000000b4",
}, 'a');
tl.to(".scrolling", {
    width: "100%",
}, 'a');

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-2",
        start: "0% 70%",
        end: "50% 50%",
        scrub: true,
        // markers:true,
    }
});

tl2.to(".rounded-div-wrapper", {
    height: 0,
    marginTop: 0
});


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".content-2",
        start: "20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },
});
tl3.to(".content-2 .text-area-hover h1", {
    width: "100%",
});
tl3.to(".content-2 .text-area-hover h2", {
    delay: -0.4,
    width: "100%",
});


let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-4",
        start: "50% 50%",
        end: "200% 50%",
        pin: true,
        // markers: true,
        scrub: 1,
    },
});
tl4.to(".c-one", {
    marginTop: "-25%",
    opacity: "1",
}, 'sct-1');
tl4.to(".c-two", {
    opacity: "1",
}, 'sct-2');
tl4.to(".c-one", {
    marginTop: "-100",
    opacity: "0",
}, 'sct-2');
tl4.to(".c-three", {
    opacity: "1",
}, 'sct-3');
tl4.to(".c-two", {
    opacity: "0",
}, 'sct-3');
tl4.to(".c-one", {
    marginTop: "-180%",
}, 'sct-3');
tl4.to(".c-one", {
    marginTop: "-230%",
}, 'sct-4');
tl4.to(".c-three", {
    opacity: "0",
}, 'sct-4');
tl4.to(".cir-part-4", {
    marginLeft: "100%",
    rotate: 360
}, 'sct-4');


let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-5",
        start: "20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },
});
tl5.to(".part-5 .text-area-hover h1", {
    width: "100%",
});
tl5.to(".part-5 .text-area-hover h2", {
    delay: -0.4,
    width: "100%",
});


let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-6",
        start: "0% 70%",
        end: "15% 50%",
        // markers: true,
        scrub: 1,
    },
});
tl6.to(".rounded-div-wrapper-6", {
    height: "0%",
    marginTop: 0,
});

let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-7",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        // markers: true,
        scrub: 1,
    },
});
tl7.to("#demo", {
    bottom: "7%",
});
tl7.to(".our-work-txt-div", {
    height: "60vh",
}, 'height');
tl7.to(".our-work-txt", {
    height: "60vh",
}, 'height');
tl7.to("#our", {
    left: "0%",
}, 'height');
tl7.to("#work", {
    right: "0%",
}, 'height');
tl7.to(".scroll-img", {
    marginTop: "-300%",
});

document.querySelector('.know-more').addEventListener('click', function() {
    const text = document.querySelector('.text');
    if (text.style.display === 'none' || text.style.display === '') {
        text.style.display = 'block';
        setTimeout(() => {
            text.style.opacity = '1';
        }, 10); // Small delay to allow transition effect

        // Hide text after 5 seconds
        setTimeout(() => {
            text.style.opacity = '0';
            text.addEventListener('transitionend', () => {
                text.style.display = 'none';
            }, { once: true });
        }, 5010); // 5 seconds + 10ms delay
    }
});
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', function() {
        alert(`You clicked on ${this.querySelector('h3').innerText}`);
    });
});
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', function() {
        alert(`You clicked on ${this.querySelector('h3').innerText}`);
    });
});
//  google sheet
const scriptURL = www.xyz.com; //link of the google sheet

const form = document.forms['submit-to-google-sheet1'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    msg.innerHTML = "Sending...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully..!!";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => {
            msg.innerHTML = "Error! Please try again.";
            console.error('Error!', error.message);
        });
});
window.onscroll = function() {
    const header = document.querySelector("nav");
    if (window.pageYOffset > 50) {
        header.classList.add("show");
    } else {
        header.classList.remove("show");
    }
};