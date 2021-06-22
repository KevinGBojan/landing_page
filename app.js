// Scroll

const scroll = document.querySelector('.scroll');

scroll.addEventListener('click', () => {
    window.scrollTo({
        top: 10000,
        left: 0,
        behavior: "smooth"
    })
})

// Email Validation

function validateEmail () {
    const form = document.querySelector('.form');
    const email = document.querySelector('.email').value;
    const pattern = "/^[^ ]+@[^ ]+\.[a-z]{2,3}$/";
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid")
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid")
    }
}