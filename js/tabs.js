const tabsfunc = () =>{
    const btnCardChange = document.querySelectorAll('.card-detail__change');
const tabsTitle = document.querySelector('.card-details__title');
const tabsPrice = document.querySelector('.card-details__price');
const tabsImg = document.querySelector('.card__image_item');
const tabsOptions = [
    {
       name:"Graphite",
       memory: '128',
        price: '70000',
        img: 'img/iPhone-graphite.webp',
    },
    {
        name:"Silver",
        memory: '256',
        price: '75000',
        img: 'img/iPhone-silver.webp',
     },
     {
        name:"Sierra Blue",
        memory: '512',
        price: '90000',
        img: 'img/iPhone-sierra_blue.webp',
     }

];

const changeContent = (index) =>{
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
    tabsPrice.textContent = `${tabsOptions[index].price}₽`;
    tabsImg.setAttribute('src', tabsOptions[index].img);
    document.title = `${tabsOptions[index].name}`;
}

const changeActiveTabs = (indexClickTab) =>{
    btnCardChange.forEach((tab, index) => {
        
        tab.classList.remove('active');
        if (index === indexClickTab){
            tab.classList.add('active');
        }
    })

}


btnCardChange.forEach((tab, index) =>{
    tab.addEventListener('click', (ev) =>{
        changeActiveTabs(index);  
        changeContent(index);
    })
})


changeContent(0);
}

tabsfunc();