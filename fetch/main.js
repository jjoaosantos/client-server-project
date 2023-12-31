fetch('data.json')
 .then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
 })
 .then((json) => initialize(json))
 .catch((err) => console.error(`Fetch problems: ${err.message}`));

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initialize(dogs) {
    const btn = document.
querySelector("button");
    console.log(dogs)

    btn.addEventListener("click", () => {
    const dog = dogs[getRandom(0, 2)].src
    fecthBlob(dog)
    });
}

function fecthBlob(dog) {
    const url = `${dog}`;

    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error (`HTTP error: ${response.status}`);
        }
        return response.blob();
    })
    .then((blob) => showProduct(blob))
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
}

function showProduct(blob) {
    const objectURL = URL.createObjectURL(blob)
    const image = document.getElementById("div-dogs");

    image.style.backgroundImage = `url(${objectURL})`
}