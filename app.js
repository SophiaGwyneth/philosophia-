window.onscroll = () => {

    document.querySelector(".Home h1").style.marginTop = scrollY / 1.2 + "px";

    document.querySelector(".Home h1").style.opacity = (350 - scrollY) / 350;
}