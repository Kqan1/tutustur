// Tarayıcı sayfa yüklendiğinde tetiklenecek olan fonksiyon
function onPageLoad() {
    const willDelete = document.querySelectorAll('p, span, a, pre, li, ol, h1, h2, h3, h4, h5, h6');
    console.log(willDelete);

    willDelete.forEach(function(element) {

        
        const random = Math.random() * 100;

        element.textContent = random > 10 ? "oşşhhh" : "hurrr"
        console.log(element.textContent);
    });
};

window.onload = onPageLoad;