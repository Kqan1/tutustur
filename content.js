const Texts = document.querySelectorAll('p, span, a, pre, li, ol, h1, h2, h3, h4, h5, h6');
const img = document.querySelectorAll("img");
const div = document.querySelectorAll("div");
const words = ["hurr", "oşh", "tutuş", "garra", "ırrşş", "gırrr", "mutuş", "tutuşullah", "şutum", "qral"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function onPageLoad() {
    setInterval(()=>{
        div.forEach(div => div.style.backgroundImage = "url('https://i.ytimg.com/vi/dun23sVIIt8/sddefault.jpg')")
        img.forEach(img => img.src = "https://i.ytimg.com/vi/dun23sVIIt8/sddefault.jpg");
        Texts.forEach(function(element) {
            const textLength = element.textContent.split(" ").length;
            const newText = [];
            for (let i = 0; i < textLength; i++) {
                newText.push(words[getRandomInt(words.length)]);
            }
            element.textContent = newText.join(" ");
            element.style.color = "white";
        });
    }, 100);
};

window.onload = onPageLoad;
