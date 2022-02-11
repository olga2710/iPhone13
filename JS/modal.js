const modal = () =>{
    const btn = document.querySelector('.card-details__button_delivery');
    const modal = document.querySelector('.modal');
    const cardTitle = document.querySelector('.card-details__title');
    const modalTitle = document.querySelector('.modal__title');
    const btnClose = document.querySelector('.modal__close'); 
    const modalForm = modal.querySelector('form');

    const clearModal = () =>{
        const labels = modal.querySelectorAll('.modal__label');
        sendMessage = {};
        labels.forEach(label =>{
        const input = label.querySelector('input');
        input.value='';
        });
        modal.style.display="none";
    }

    btn.addEventListener('click', () =>{
        modal.style.display = 'flex'; 
        modalTitle.textContent = cardTitle.textContent;
    });

    btnClose.addEventListener('click', () => {
        modal.style.display = 'none'; 
    })

    modalForm.addEventListener('submit', (event)=>{
        event.preventDefault();

        const labels = modal.querySelectorAll('.modal__label');

        const sendMessage = {};
        labels.forEach(label =>{
            const span = label.querySelector('span');
            const input = label.querySelector('input');
            sendMessage[span.textContent] = input.value;

        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({sendMessage }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then(()=>{
               setTimeout(clearModal, 20)
            })
            

    })

}


modal()
