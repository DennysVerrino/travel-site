import '../styles/styles.css';
import "lazysizes";
import MobileMenu from "./modules/MobileMenu.js";
import RevealOnScroll from "./modules/RevealOnScroll.js";
import StickyHeader from "./modules/StickyHeader.js";



let stickyHeader = new StickyHeader();
let revealOnScroll = new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
let revealOnScroll2 = new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let mobileMenu = new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault();
        if(typeof modal == "undefined"){
            import(/* webpackChunkName: "modal" */"./modules/Modal").then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log("There was a problem."))
        } else {
            modal.openTheModal();
        }
    })
})


if(module.hot){
    module.hot.accept();
}
