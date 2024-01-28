// Coefficients

const forStars = 50
const forPlanets = 10
const forMoon = 30

// Animation speed

const speed = 0.15;

window.onload = function () {
    const parallax: HTMLDivElement = document.querySelector('.home');
    const content: HTMLDivElement = document.querySelector('.home__container');
    const stars: HTMLDivElement = document.querySelector('.images-parallax__stars');
    const planets: HTMLDivElement = document.querySelector('.images-parallax__planets');
    const moon: HTMLDivElement = document.querySelector('.images-parallax__moon');


    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParallaxStyle() {
        const disX = coordXprocent - positionX;
        const disY = coordYprocent - positionY;

        positionX = positionX + (disX * speed)
        positionY = positionY + (disY * speed)

        stars.style.transform = `translate(${positionX / forStars}%, ${positionY / forStars}%), rotate(180deg);`;
        planets.style.transform = `translate(${positionX / forPlanets}%, ${positionY / forPlanets}%)`;
        moon.style.transform = `translate(${positionX / forMoon}%, ${positionY / forMoon}%)`;

        requestAnimationFrame(setMouseParallaxStyle)
    }

    setMouseParallaxStyle()

    parallax.addEventListener('mousemove', function (e) {
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
    })

    // Parallax при скролле

    const thresholdSets = [];
    for (let i = 0; i < 1.0; i += 0.005) {
        thresholdSets.push(i)
    }

    const callback = function () {
        const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
        setParallaxItemStyle(scrollTopProcent);
    }

    const observer = new IntersectionObserver(callback, {
        threshold: thresholdSets
    })

    observer.observe(document.querySelector('.content'))

    function setParallaxItemStyle(scrollTopProcent) {
        const translateYContent = `translate(0%, -${scrollTopProcent / 4}%)`;
        const translateYPlanets = `translate(0%, -${scrollTopProcent / 3}%)`;
        const translateYMoon = `translate(0%, -${scrollTopProcent / 1.5}%)`;

        content.style.transform = translateYContent;
        planets.parentElement.style.transform = translateYPlanets;
        moon.parentElement.style.transform = translateYMoon;

        // Adjust the translation for the background images
        const translateYStars = `translate(${positionX / forStars}%, ${positionY / forStars}%) scale(150%)`;
        const translateYPlanetsBg = `translate(${positionX / forPlanets}%, ${positionY / forPlanets}%)`;
        const translateYMoonBg = `translate(${positionX / forMoon}%, ${positionY / forMoon}%)`;

        stars.style.transform = translateYStars;
        planets.style.transform = translateYPlanetsBg;
        moon.style.transform = translateYMoonBg;

        requestAnimationFrame(setMouseParallaxStyle);
    }
}