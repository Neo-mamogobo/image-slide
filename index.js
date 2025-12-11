let images = [`Superman_Man_of_Steel.jpg`, 
    `nosfareta.jpg`,
     `kong.webp`, 
     `Bardeen_Shockley_Brattain_1948.jpg`]

let index = 0;
document.getElementById(`b1`).addEventListener(`click`, () => {
    index = (index - 1 + images.length) % images.length
    document.getElementById(`picture`).src = images[index]
})

document.getElementById(`b2`).addEventListener(`click`, () => {
    index = (index + 1) % images.length
    document.getElementById(`picture`).src = images[index]
})

setInterval(() => {index = (index + 1) % images.length;
    picture.src = images[index];
}, 4000);
    




