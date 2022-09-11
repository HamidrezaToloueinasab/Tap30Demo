const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
    navbar.classList.toggle("nav__expanded");
});
 
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);
        // remove previous active classes
        tabs.forEach((tab) => tab.classList.remove("active"));
        tabContents.forEach((tabContent) =>
            tabContent.classList.remove("active"));
        // add new active classes
        tab.classList.add("active");
        targeTabContent.classList.add("active");
    });
});