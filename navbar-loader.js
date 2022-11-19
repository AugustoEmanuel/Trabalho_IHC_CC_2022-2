const navbarSection = document.getElementById("navbar-section");

if(navbarSection){
    fetch("/header.html")
    .then(e => e.text())
    .then(d => {
        navbarSection.insertAdjacentElement('beforeend', d);
    });
}