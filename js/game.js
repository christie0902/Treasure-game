
const hero = document.querySelector('.hero');
hero.style.top = '500px';
hero.style.left = '100px';

const ghost = document.querySelector('.ghost');
ghost.style.top = '200px';
ghost.style.left = '600px';

const treasure = document.querySelector('.treasure');
treasure.style.top = '0px';
treasure.style.left = '400px';

const heroPosition = {x:100,y:500};


document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
        case 39:
        case 68:
        heroPosition.x += 100;
        break;

        case 37:
        case 65:
        heroPosition.x -= 100;
        break;

        case 38:
        case 87:
        heroPosition.y -= 100;
        break;

        case 40: 
        case 83:
        heroPosition.y += 100;
        break;
    }
    if (heroPosition.x > 700) heroPosition.x = 700;
    if (heroPosition.x < 0 ) heroPosition.x = 0;
    if (heroPosition.y > 500) heroPosition.y = 500;
    if (heroPosition.y < 0) heroPosition.y = 0;

    

    hero.style.top = heroPosition.y + "px";
    hero.style.left = heroPosition.x + "px";
    console.log("position: ", heroPosition.y, heroPosition.x);
})



// The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered.