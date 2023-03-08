// Navbar toggle to display links when on tablet and mobile screen sizes (at and below 768px)
const toggleButton = document.getElementsByClassName(`toggle-button`)[0]

const navbarLinks = document.getElementsByClassName(`navbar-links`)[0]

toggleButton.addEventListener(`click`, () => {
    navbarLinks.classList.toggle(`active`)
})