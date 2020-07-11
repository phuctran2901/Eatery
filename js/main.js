var widthSlide = document.getElementsByClassName('slider')[0].clientWidth;
var index = 0;
var nextSlide = document.getElementsByClassName('container-slider')[0];
var img = nextSlide.getElementsByTagName('img');
var max = widthSlide * img.length;
max = max - widthSlide;
function next() {
    var arrImg = Array.from(img);
    for (let i = 0; i < img.length; i++) {
        arrImg[i].style.width = widthSlide + 'px';
    }
    if(index < max) 
       index += widthSlide;
    else
        index=0;
    nextSlide.style.marginLeft = '-' + index + 'px';
};
function back() {
    var arrImg = Array.from(img);
    for (let i = 0; i < img.length; i++) {
        arrImg[i].style.width = widthSlide + 'px';
    }
    if(index == 0)
        index = max;
    else
    index -= widthSlide;
    nextSlide.style.marginLeft = '-' + index + 'px';
};

setInterval(function() {
    next();
},4000)


window.onscroll = function() { scrollNavbar() };

function scrollNavbar() {
    var navbar = document.getElementsByClassName('navbar')[0];
    var navbarLogo = Array.from(document.querySelectorAll('.navbar__logo a span'));
    var navbarFirst = document.querySelectorAll('.navbar__first li a');
    var navbarContent = document.querySelectorAll('.navbar__right span');
    var heghtNavbar = navbar.offsetTop;
    if(window.pageYOffset > heghtNavbar){
        navbar.classList.add('fixed-top');
        for (let index = 0; index < navbarContent.length; index++) {
            navbarContent[index].style.color = '#575757';
        }
        for (let index = 0; index < navbarLogo.length; index++) {
            navbarLogo[index].style.color = '#575757';
        }
        for (let index = 0; index < navbarFirst.length; index++) {
            navbarFirst[index].style.color = '#575757';
        }
    }
    else {
        navbar.classList.remove('fixed-top');
        for (let index = 0; index < navbarContent.length; index++) {
            navbarContent[index].style.color = '#fff';
        }
        for (let index = 0; index < navbarLogo.length; index++) {
            navbarLogo[index].style.color = '#fff';
        }
        for (let index = 0; index < navbarFirst.length; index++) {
            navbarFirst[index].style.color = '#fff';
        }
    }
};


document.addEventListener("DOMContentLoaded", function() {
    let about = document.getElementsByClassName('about')[0];
    window.addEventListener('scroll',function() {
            var vtScroll = 'top';
            var vtPt = about.offsetTop - 400;
            if(window.pageYOffset > vtPt) {
                if(vtScroll == 'bot')
                    vtScroll == 'top'
                    about.classList.add('load');
            }            
            else 
                if(vtPt == 'bot') {
                    vtPt == 'top';
                    about.classList.remove('load');
                }
    })
})
document.addEventListener("DOMContentLoaded", function() {
    let team = document.getElementsByClassName('team')[0];
    window.addEventListener('scroll',function() {
            var vtScroll = 'bot';
            var vtPt = team.offsetTop - 500;
            if(window.pageYOffset > vtPt) {
                if(vtScroll == 'bot')
                    vtScroll == 'top'
                    team.classList.add('load')
            }            
            else 
                if(vtPt == 'top') {
                    vtPt == 'bot';
                    team.classList.remove('load');
                }
    })
})

var test = 0;
function slideTestimonal(index) {
    var testimonal = document.querySelectorAll('.wrapper-introduct');
    var circletesti = document.querySelectorAll('.circle-testi span');
    for (let i = 0; i < testimonal.length; i++) {
         testimonal[i].classList.remove('hide');
    }
    for (let i = 0; i < circletesti.length; i++) {
        circletesti[i].classList.remove('active');
   }
    test++;
    if(test > 2)
        test = 0;
    circletesti[test].classList.add('active');
    testimonal[test].classList.add('hide');
}
setInterval(function() {
    slideTestimonal(index);
},4000);
document.addEventListener("DOMContentLoaded", function() {
    let footer = document.getElementsByClassName('footer')[0];
    let menuTitle = document.getElementsByClassName('menu-title')[0];
    window.addEventListener('scroll',function() {
            var vtScroll = 'bot';
            var vtPt = footer.offsetTop - 400;
            if(window.pageYOffset > vtPt) {
                if(vtScroll == 'bot')
                    vtScroll == 'top'
                    footer.classList.add('load');
                    menuTitle.classList.add('load');
            }            
            else 
                if(vtPt == 'top') {
                    vtPt == 'bot';
                    footer.classList.remove('load');
                    menuTitle.classList.remove('load');
                }
    })
})

document.addEventListener("DOMContentLoaded", function() {
    let menuTitle = document.getElementsByClassName('menu')[0];
    console.log(menuTitle)
    window.addEventListener('scroll',function() {
            var vtScroll = 'bot';
            var vtPt = menuTitle.offsetTop - 600;
            if(window.pageYOffset > vtPt) {
                if(vtScroll == 'bot')
                    vtScroll == 'top'
                    menuTitle.classList.add('load');
            }            
            else 
                if(vtPt == 'top') {
                    vtPt == 'bot';
                    menuTitle.classList.remove('load');
                }
    })
})
var isClick = true;
function show() {
    let control = document.getElementsByClassName('control-moblie')[0];
    let moblie = document.getElementsByClassName('wrapper-moblie')[0];
    if(isClick == true) {
        isClick = false;
        moblie.classList.add('slipdown');
    }
    else {
        isClick = true;
        moblie.classList.remove('slipdown');
    }
}



$(document).ready(function () {
    $('.navbar__first li a').click(function (e) { 
        e.preventDefault();
        $('body').animate({scrollTop:1500},1000);
    });
});