const scrollfunc = () =>{
    const links = document.querySelectorAll('.header-menu__item a');
const linkCard = document.querySelector('.card-details__link-characteristics');


const newArray = [...links, linkCard]

seamless.polyfill();



newArray.forEach(elem => {
    elem.addEventListener('click', ev => {
        ev.preventDefault();

        const id = elem.getAttribute('href').substring(1);

        const section = document.getElementById(id);

        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        } 
     
    })
    

})

}
scrollfunc();
