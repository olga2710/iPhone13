const accordeon = () =>{
    const chTitle = document.querySelectorAll('.characteristics__item');
    const buttons = document.querySelectorAll('.characteristics__title');
    const contents = document.querySelectorAll('.characteristics__description');

    const clearItems = () =>{
        chTitle.forEach((item)=>{
            const chButton = item.querySelector('.characteristics__title');
            const chContent = item.querySelector('.characteristics__description'); 
            chButton.classList.remove('active');
            chContent.classList.remove('open');
            chContent.classList.remove('open');   
        })
    }


    chTitle.forEach((item) => {
        const chButton = item.querySelector('.characteristics__title');
        const chContent = item.querySelector('.characteristics__description');
        chButton.addEventListener('click', (ev) =>{
            
            buttons.forEach((button) =>{
                if (button !== chButton )
                {
                    button.classList.remove('active')
                }
                
            });

            contents.forEach((content) =>{
                if (content !==chContent){
                    content.classList.remove('open');
                    content.style.height = 0 + 'px';
                }
               
            })

               
            
            if (chContent.classList.contains('open')) {
                chContent.style.height = 0 + 'px';
            } else {
                chContent.style.height = chContent.scrollHeight + 'px';
                
            }
            chButton.classList.toggle("active");
            chContent.classList.toggle('open');

        })
    })


    
    clearItems();
}

accordeon();