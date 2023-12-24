const image = document.getElementById("div-dogs");
const btn = document.
querySelector("button");
let dogs;

const url = "data.json";
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = () => {
    if (xhr.status !== 200) {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log(xhr.response);
        dogs = xhr.response.length;
    }
}

xhr.onerror = () => console.log('There was a network error. Check you internet connection and try again.');

xhr.send();

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener("click", () => {
    image.style.backgroundImage = `url(${xhr.response[getRandom(1, dogs)].src})`
});