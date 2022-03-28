var MenuItems = document.getElementById("nav-list");

function myBurger() {
    console.log('test-----------', MenuItems.classList);

    if (MenuItems.classList.length === 1) {
        MenuItems.classList.add("nav-list--xs");

    } else {
        MenuItems.classList.remove("nav-list--xs");
        MenuItems.style.display = "none";
    }
}

window.addEventListener('scroll', function () {
    let nav = document.getElementById("nav")
    let windowscroll = window.scrollY > 420;
    if (windowscroll) {
        nav.classList.toggle('navbar-scroll', windowscroll);
    } else {
        nav.classList.remove("navbar-scroll");
    }
})