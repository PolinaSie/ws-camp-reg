
// const openPopUp = document.querySelectorAll('.open_pop_up');
// const closePopUp = document.getElementById('pop_up_close');
// const popUp = document.getElementById('pop_up');

// for (let i = 0; i < openPopUp.length; i++) {
//     openPopUp[i].addEventListener('click', function(e) {
//     e.preventDefault();
//     popUp.classList.add('active');
// })
// }

// closePopUp.addEventListener('click', () => {
//     popUp.classList.remove('active');
// })

const workshopsListContainer = document.querySelector("#workshops-list");

const test = document.querySelector("#workshops-list");
test.innerHTML = 'TEST TEST';

renderWorkshopsList();

async function renderWorkshopsList() {
    const workshopsList = await getWorkshopsList();
    console.log(workshopsList);
    
    workshopsList.forEach(element => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<div>

            

            <span>${element.name}</span>
            
    </div>`;
    workshopsListContainer.appendChild(postElement);
    })
}



// function generate() {
// this.cardData.forEach(element => {
    
//     const postElement = document.createElement('div');
//     postElement.innerHTML = `<div class="box_composition">
//     <div class="box_composition_img">
//         <img src="/img/${element.coverurl}" alt="" class="ws_view">
//         <img src="/img/${element.leaderavatarurl}" alt="" class="presenter">
//     </div>
        
//     <div class="box_composition_buttom">
//         <span class="nameWS">${element.name}</span>
//         <a href="" class="button_click open_pop_up"><button class="button_click" >приєднатись</button></a>
//     </div>
// </div>`;
//     postContainer.appendChild(postElement);


// });



// }

// generate();

// const postMethods = ()=>{
//     cardData.map((postData)=>{
//         const postElement = document.createElement('div');
//         postElement.classList.add('box_composition');
//         postElement.innerHTML = `
//         <div class="pop_up" id="pop_up">
//                 <div class="pop_up_container">
//                     <div class="pop_up_body" id="pop_up_body">
//                         <p>Зареєструватись</p>
//                         <form action="">
//                             <input type="text" placeholder="Ім'я">
//                             <input type="text" placeholder="Телефон">
//                             <button>Надіслати</button>
//                         </form>
//                         <div class="pop_up_close" id="pop_up_close">&#10005</div>
//                     </div>
//                 </div>
//             </div>
//             `
//             postContainer.appendChild(postElement)
//     })
// }
// postMethods()




async function getWorkshopsList() {
    try {
      const response = await fetch("http://localhost:8080/workshops");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }