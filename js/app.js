
const openPopUp = document.querySelectorAll('.open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

for (let i = 0; i < openPopUp.length; i++) {
    openPopUp[i].addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})
}

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

const cardData = [
    {
        heading:'card 1',
        body:'this is card body 1'
    },
    {
        heading:'card 2',
        body:'this is card body 2'
    },
    {
        heading:'card 3',
        body:'this is card body 3'
    },
    {
        heading:'card 4',
        body:'this is card body 4'
    },
    {
        heading:'card 5',
        body:'this is card body 5'
    },
    {
        heading:'card 6',
        body:'this is card body 6'
    },
    {
        heading:'card 7',
        body:'this is card body 7'
    },
    {
        heading:'card 8',
        body:'this is card body 8'
    },
    {
        heading:'card 9',
        body:'this is card body 9'
    },
    {
        heading:'card 10',
        body:'this is card body 10'
    }
]



const postContainer = document.querySelector('.img_and_name_workshop_container');

function generate() {
this.cardData.forEach(element => {
    
    const postElement = document.createElement('div');
    postElement.classList.add('box_composition');
    postElement.innerHTML = `<div class="box_composition">

<div class="box_composition_img">
    <img src="/img/${element.coverurl}" alt="" class="ws_view">
    <img src="/img/${element.leaderavatarurl}" alt="" class="presenter">
</div>
    
<div class="box_composition_buttom">
    <span class="nameWS">${element.name}</span>
    <a href="" class="button_click open_pop_up"><button class="button_click" >приєднатись</button></a>
</div>
    
</div>`;



});



}

generate();

const postMethods = ()=>{
    cardData.map((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('box_composition');
        postElement.innerHTML = `
        <div class="pop_up" id="pop_up">
                <div class="pop_up_container">
                    <div class="pop_up_body" id="pop_up_body">
                        <p>Зареєструватись</p>
                        <form action="">
                            <input type="text" placeholder="Ім'я">
                            <input type="text" placeholder="Телефон">
                            <button>Надіслати</button>
                        </form>
                        <div class="pop_up_close" id="pop_up_close">&#10005</div>
                    </div>
                </div>
            </div>
            `
            postContainer.appendChild(postElement)
    })
}
postMethods()
