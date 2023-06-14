const home = document.querySelector('.home')
const project = document.querySelector('.project')
const projectIcon = document.querySelector('.project-icon')
const homeIcon = document.querySelector('.home-icon')
const product = document.querySelector('.product-slide')

const project0 = [
    {
        url: 'assets/image/project/CatMonster/CatMonster0.jpg'
    },
    {
        url: 'assets/image/project/CatMonster/CatMonster1.jpg'
    },
    {
        url: 'assets/image/project/CatMonster/CatMonster2_1.jpg'
    },
    {
        url: 'assets/image/project/CatMonster/CatMonster2_2.jpg'
    },
    {
        url: 'assets/image/project/CatMonster/CatMonster3.jpg'
    },
    {
        url: 'assets/image/project/CatMonster/CatMonster4.jpg'
    },
    {
        url: 'assets/image/project/CatMonster/CatMonster5.jpg'
    },
    {
        url: 'assets/image/project/CatMonster/CatMonster6.jpg'
    },
    {
        url: 'assets/image/project/CatMonster/CatMonster7.jpg'
    },
    {
        url: 'assets/image/project/CatMonster/CatMonster8.jpg'
    },
]

const project1 = [
    {
        url: 'assets/image/project/Human/Human0.jpg'
    },
    {
        url: 'assets/image/project/Human/Human1.jpg'
    },
    {
        url: 'assets/image/project/Human/Human2_1.jpg'
    },
    {
        url: 'assets/image/project/Human/Human2_2.jpg'
    },
    {
        url: 'assets/image/project/Human/Human3.jpg'
    },
    {
        url: 'assets/image/project/Human/Human4.jpg'
    },
    {
        url: 'assets/image/project/Human/Human5.jpg'
    }
]

const project2 = [
    {
        url: 'assets/image/project/Monster/Monster0.png'
    },
    {
        url: 'assets/image/project/Monster/Monster1.png'
    },
    {
        url: 'assets/image/project/Monster/Monster2.png'
    },
    {
        url: 'assets/image/project/Monster/Monster3.png'
    },
]

const project3 = [
    {
        url: 'assets/image/project/Pig/Pig1.jpg'
    },
    {
        url: 'assets/image/project/Pig/Pig2.jpg'
    },
    {
        url: 'assets/image/project/Pig/Pig3.jpg'
    }
]

const project4 = [
    {
        url: 'assets/image/project/Robot/Robot0.jpg'
    },
    {
        url: 'assets/image/project/Robot/Robot1.jpg'
    },
    {
        url: 'assets/image/project/Robot/Robot2_1.jpg'
    },
    {
        url: 'assets/image/project/Robot/Robot2_2.jpg'
    },
    {
        url: 'assets/image/project/Robot/Robot3.jpg'
    },
    {
        url: 'assets/image/project/Robot/Robot4.jpg'
    },
    {
        url: 'assets/image/project/Robot/Robot5.jpg'
    },
    {
        url: 'assets/image/project/Robot/Robot6.jpg'
    },
    {
        url: 'assets/image/project/Robot/Robot7.jpg'
    }
]

let slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    renderSlide(n)
}

function showSlides(n) {
    let i = 0;
    let slides = document.getElementsByClassName("product-item");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    else if (n < 0) {
        slideIndex = slides.length - 1;

    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}



function renderSlide(n) {
    if (n === 0) {
        let htmls = project4.map(item => {
            return `
            <div class="product-item fade">
                <img src="${item.url}" alt="">
            </div>
            `
        })
        product.innerHTML = htmls.join('')
    }
    if (n === 1) {
        let htmls = project2.map(item => {
            return `
            <div class="product-item fade">
                <img src="${item.url}" alt="">
            </div>
            `
        })
        product.innerHTML = htmls.join('')
    }
    if (n === 2) {
        let htmls = project3.map(item => {
            return `
            <div class="product-item fade">
                <img src="${item.url}" alt="">
            </div>
            `
        })
        product.innerHTML = htmls.join('')
    }
    if (n === 3) {
        let htmls = project1.map(item => {
            return `
            <div class="product-item fade">
                <img src="${item.url}" alt="">
            </div>
            `
        })
        product.innerHTML = htmls.join('')
    }
    if (n === 4) {
        let htmls = project0.map(item => {
            return `
            <div class="product-item fade">
                <img src="${item.url}" alt="">
            </div>
            `
        })
        product.innerHTML = htmls.join('')
    }
}

function clickProject() {
    home.classList.add('show')
    project.classList.remove('show')
    projectIcon.classList.add('active')
    homeIcon.classList.remove('active')
    currentSlide(0)
}

function clickHome() {
    project.classList.add('show')
    home.classList.remove('show')
    homeIcon.classList.add('active')
    projectIcon.classList.remove('active')
}
