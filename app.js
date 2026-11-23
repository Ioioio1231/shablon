// console.log(document.doctype);

// console.log(document.documentElement)

// console.log(document.getElementById('project-section'))


// let papa = document.querySelectorAll('.card');
// let papaArray = [...papa]

// let papaText=papaArray.map(text=>text.textContent)

// console.log(papaText)

// let cards = document.getElementsByClassName('card');
// // Возвращает HTMLCollection (живую)

// // Нет forEach! Только for или for...of
// for (let card of cards) {
//     console.log(card);
// }

// // Преобразование в массив
// let cardsArray = Array.from(cards);


// // Задача 1 - 1 блока
// let cards = document.querySelectorAll(".card")

// for(let card of cards) {
//     console.log(card.id)
// }







// // Задача 2 - блока 1
// let buttons = document.getElementById("click-btn")
// let parent = buttons.parentElement
// console.log(parent)



// // Задача 3 - блок 1
// let lis = document.querySelectorAll("#dynamic-list li")

// lis.forEach((li,index)=> {
//     li.setAttribute('data-index', index)
// })

// console.log(lis[0])






// // Задача 4 блока 1
// function findByData(dataName, value) {
//     return document.querySelectorAll(`[data-${dataName}="${value}"]`)
// }


// console.log(findByData('id','123'))




// // Задача 5 блока 1
// let items = document.getElementsByClassName('item');

// let itemsArray=[...items]
// itemsArray.forEach(item => {
//     item.style.color = 'red';
// });




// //Задача 6 блока 1
// function GetSelector(selector) {
//     let selectorGet = document.querySelectorAll(selector)
//     return selectorGet.length
// }



// // Задача 7 блока 1
// let searchSection = document.querySelector('#search-section')
// let searchSectionClassCard = searchSection.querySelectorAll('.card')


// searchSectionClassCard.forEach(card=>console.log(card))


// //задача 8 блока 1
// for(let i=0;i<1000;i++){
//     let cards=document.createElement('div')
//     cards.className='card';
//     document.body.appendChild(cards)
// }

// console.time('querySelectorAll')
// document.querySelectorAll('.card')
// console.timeEnd('querySelectorAll')

// console.time('getElementsByClassName')
// document.getElementsByClassName('card')
// console.timeEnd('getElementsByClassName')


// // Work 1
// let items = document.querySelectorAll('.item')
// console.log(items.length)


// //Work 2
// let mainTitle=document.querySelector('#main-title')

// let mainTitleText=mainTitle.textContent;

// mainTitle.setAttribute('data-status','active')

// console.log(mainTitleText, mainTitle)


// //Work 3
// let sectionSeacrh=document.querySelector('#search-section')

// let sectionSearchCard = sectionSeacrh.querySelectorAll('.card')

// for(card of sectionSearchCard) {
//     card.style.color='blue'
// }


// //Work 4
// let allNav = document.querySelectorAll('.nav-link')
// for(let nav of allNav) {
//     if(nav.className==='nav-link active'){
//         nav.style.color='green'
//     } else {
//         nav.style.color='red'
//     }

// }


// //Work 5 
// let taskAll = document.querySelectorAll('.task')
// for(let wordTask of taskAll) {
//     if(wordTask.textContent.includes('уроки')) {
//        wordTask.remove();
//     } 
//     console.log(wordTask)
// }


// //Work 6
// let buttonColor=document.querySelector('#btn-save');
// buttonColor.textContent = "Успешно!"

// buttonColor.addEventListener('click',()=> {
//     buttonColor.style.backgroundColor="green"
// })


// console.log(buttonColor)








// //work 1
// function countLink(selector) {
//     let papa = document.getElementsByTagName(selector)
//     return papa.length
// }

// console.log(countLink('a'))


// //work 2 
// let titleNew=document.querySelector('#title')
// titleNew.className = "highlight"
// titleNew.textContent = 'Новый заголовок'

// console.log(titleNew)


// //work 3

// let doit= document.querySelectorAll('.task')
// for(let elements of doit) {
//     if(elements.textContent.toLowerCase().includes('сделать')) {
//         elements.style.color ='red'
//     } else {
//         elements.style.color ='grey'
//     }
   
// }




// //Блок 3 задача 1
// let contentTarget = document.querySelector('#content-target')
// console.log(`1) ${contentTarget.textContent} \n2) ${contentTarget.innerHTML} \n3)${contentTarget.innerText}`)


// //Блок 3 задача 2 смотрел в подсказки решения, самому тяжко, я не понимаю как он на этом блоке, просит чтобы я сделал createElement + addEvent сделать. когда я ток 2 блока прошел где get query все, хз хз

// // let btn = document.createElement('button')
// // btn.textContent= 'Изменить текст'
// // document.querySelector('#content-section .flex-row').appendChild(btn)
// // btn.addEventListener('click', () => {
// //     contentTarget.textContent = 'Новый текст из JS'
// // })


// // let btn= document.createElement('button')
// // btn.textContent ='мама'
// // document.querySelector('#content-target').appendChild(btn)
// // btn.addEventListener('click', ()=> {
// //     contentTarget.textContent ="привет"    
// // })

// // let btn = document.createElement('button')
// // btn.textContent ="Лох"
// // document.querySelector('#content-target').appendChild(btn)
// // btn.addEventListener('click', ()=> {
// //     contentTarget.textContent = "сам ты лох"
// // })

// //Блок 3 задача 3
// //откуда я знаю на данный момент учебы опасные сирмволы


// //блок 3 задача 4
// let textDynamicList=document.getElementById('dynamic-list')
// textDynamicList.insertAdjacentHTML('beforebegin',`

//     <li>новый пункт 1</li>
//     <li>новый пункт 2</li>
//     <li>новый пункт 3</li>
        
//     `
//     )


// //блок 3 задача 5
// let firstEl = document.getElementById('content-target')

// let secondEl = document.querySelector('.card')


// firstEl.innerHTML = secondEl.innerHTML

//ЗАКРЕПЛЕНИЕ БЛОКА 3 задача 1
// let textBoxFirst = document.getElementById('box-1')
// textBoxFirst.textContent = 'Привет, DOM!'



// // задача 2 
// let textBoxSecond = document.getElementById('box-2')
// textBoxSecond.innerHTML = '<b>Я жирный</b>'

// //задача 3
// let textBoxThird = document.getElementById('box-3')
// let textBoxFour = document.getElementById('box-4')

// textBoxFour.innerHTML = textBoxThird.innerHTML

// console.log(textBoxFour)



// let box1 = document.getElementById('box-1')
// box1.textContent ='Новый текст'

// let box2 =document.getElementById('box-2')
// box2.innerHTML = '<h2>Второй уровень</h2><p>Это параграф</p>'

// let box3 = document.getElementById('box-3')

// let box4 = document.getElementById('box-4')

// box4.innerHTML = box3.innerHTML





// let newText = document.querySelector('.mama')
// let newTextbutton = document.createElement('button')
// newTextbutton.textContent ="Нажми ты уже!"

// newText.appendChild(newTextbutton)

// newTextbutton.addEventListener('click', () => {
//     newText.textContent ="Но ты купишь её!"
// })




// let newText2=document.querySelector('.mama')
// let buttonChangeText = document.querySelector('.buttonBmw')

// buttonChangeText.addEventListener('click', () => {
//     let newText2H2 = document.querySelector('h2')
//     newText2H2.textContent = "Ты сможешь купить ее родной!"
// })


// //1
// let textTask1 = document.getElementById('task-1')

// let buttonTask1 = document.querySelector('#btn-change')


// buttonTask1.addEventListener('click', () => {
    
//     textTask1.textContent = 'Текст изменен!'
// })



// //2
// let list = document.querySelector('#my-list')
// list.innerHTML = '<li>Пункт 1</li> <li>Пункт 2</li> <li>Пункт 3</li>'

// //2-2
// let listLi = document.createElement('li')
// listLi.textContent = 'Пункт 1' 
// list.appendChild(listLi)

// let listLi2 = document.createElement('li')
// listLi2.textContent = 'Пункт 2' 
// list.appendChild(listLi2)

// let listLi3 = document.createElement('li')
// listLi3.textContent = 'Пункт 3' 
// list.appendChild(listLi3)


// //2-3

// for(let i = 1; i<=3;i++) {
//     let listLii = document.createElement('li')
//     listLii.textContent = `Пункт ${i}` 
//     list.appendChild(listLii)   
// }



// //3
// let task3 = document.getElementById('task-3')

// task3.addEventListener('mouseover', () => {
//     task3.style.backgroundColor = "lightblue"
// })

// task3.addEventListener('mouseout', () => {
//     task3.style.backgroundColor = "white"
// })



// //1
// let changebtn = document.querySelector('#change-btn')
// let box = document.querySelector('#box')
// changebtn.addEventListener('click', () => {
//     box.textContent ='Пока';
// })

// //2
// let taks2 = document.querySelector('#task-2')

// taks2.addEventListener('mouseover', () => {
//     taks2.style.backgroundColor = "yellow"
// })

// taks2.addEventListener('mouseout', () => {
//     taks2.style.backgroundColor = "white"
// })

// //3
// let list = document.querySelector('#list')
// let massive = ['A','Б','В']


// for(let i =0;i<3;i++) {
//     let listLi = document.createElement('li')
//     listLi.textContent = massive[i]
//     list.appendChild(listLi)
// }




// //Блок 4 задача 1
// let changeImageBtn = document.getElementById('change-image-btn')
// let ImageUrlChange = document.getElementById('image-url')
// let DemoImg = document.getElementById('demo-image')

// DemoImg.getAttribute('src')

// changeImageBtn.addEventListener('click',()=>{
//     DemoImg.src = ImageUrlChange.value
// })



// //блок 4 задача 2

// changeImageBtn.setAttribute('data-id', '123')
// changeImageBtn.setAttribute('data-role', 'admin')
// console.log(changeImageBtn)

// //блок 4 задача 3
// let flexRowButton = document.createElement('button')
// let flexRow = document.querySelector('.flex-row')

// let buttonClick = document.getElementById('click-btn')

// flexRowButton.textContent = 'Нажми'
// flexRowButton.className = 'mama'
// flexRow.appendChild(flexRowButton)

// flexRowButton.addEventListener('click',()=> {
//     if(buttonClick.disabled) {
//         buttonClick.disabled =false
//     } else {
//         buttonClick.disabled =true
//     }
//     console.log(buttonClick)    
// })



// //Блок 4 задача 4

// let dataInfo = document.querySelectorAll('[data-info]')
// dataInfo.forEach(element => {
//     console.log(element.dataset.info)
// });

// for(let info of dataInfo) {
//     console.log(info.dataset.info)
// }


// //блок 5 задача 5
// let imgDemo = document.getElementById('demo-image')



// imgDemo.addEventListener('click', () => {
//     let widthImg = imgDemo.getAttribute('width')
//     if(widthImg==='150') {
//         imgDemo.setAttribute('width','300')   
//     } else {
//          imgDemo.setAttribute('width','150')  
//     }
//     console.log(imgDemo)
// })
// console.log(imgDemo)



//ЗАКРЕПЛЕНИЕ БЛОКА 4

// //задача 1
// let userName = document.querySelector('#user-name')
// let output = document.querySelector('#output')


// let saveButton = document.querySelector('#save-btn')

// saveButton.addEventListener('click', () => {
//     output.textContent = userName.value
// })



// //задача 2
// let boxAttr = document.querySelector('#box-attr')
// boxAttr.setAttribute('data-role','admin')

// console.log(boxAttr.dataset.role)


// // //задача 3 не понял условие правильно или нет хз

// // let toggleBox = document.querySelector('#toggle-box')
// // toggleBox.classList.add('highlight')

// // let buttonToggle = document.querySelector('#toggle-btn')

// // buttonToggle.addEventListener('click',()=> {
// //     if(toggleBox.className === 'highlight') {
// //         toggleBox.style.backgroundColor ="red"
// //         toggleBox.className = 'redlight'
// //     } else 
// //     {
// //         toggleBox.style.backgroundColor ='yellow'
// //         toggleBox.className ='highlight'
// //     }
// // })


// let toggleBox = document.querySelector('#toggle-box');
// let buttonToggle = document.querySelector('#toggle-btn');

// buttonToggle.addEventListener('click', () => {
//     toggleBox.classList.toggle('highlight'); // ← вся магия тут
// });


// //задача 1
// let colorInput = document.querySelector('#color-input')
// let buttonApply = document.querySelector('#apply-btn')
// let colorBox = document.querySelector('#color-box')


// buttonApply.addEventListener('click', () => {
//     colorBox.style.backgroundColor = colorInput.value
// })



// //задача 2 
// let addClassButton = document.querySelector('#add-class-btn')
// let myBox = document.querySelector('#my-box')

// addClassButton.addEventListener('click', () => {
//     myBox.classList.add('active')
//     console.log(myBox)
// })



// //задача 3
// let pic = document.querySelector('#pic')

// let picBtn = document.querySelector('#change-pic-btn')

// picBtn.addEventListener('click',() => {
//     pic.src = "https://via.placeholder.com/300"
    
// })



// //задача 4 

// let showDataButton = document.querySelector('#show-data-btn')

// let targetInfo = document.querySelector('#target')

// showDataButton.addEventListener('click', ()=> {
//     console.log(targetInfo.dataset.name)
//     console.log(targetInfo.dataset.age)
// })

// //задача 5
// let toggleButton = document.querySelector('#toggle-btn')
// let disableBtn = document.querySelector('#disable-me')

// toggleButton.addEventListener('click',()=> {
//     if(disableBtn.disabled) {
//         disableBtn.disabled = false
//     } else {
//             disableBtn.disabled = true

//     }
//     console.log(disableBtn)
// })




// //Задача 1 
// let btn = document.querySelector('#btn-1')
// let mainBox = document.querySelector('#main-box')



// btn.addEventListener('click', () => {
//     mainBox.style.backgroundColor = 'red'
// })



// //Задача 2
// let tasks = document.querySelector('#tasks')


// for(let i = 1; i<=3;i++){
//     let li = document.createElement("li")
//     li.textContent = `Пункт ${i}`
//     tasks.appendChild(li)
// }



// //Задача 3 не пойму чего не берется текст из инпута
// let copyBtn = document.querySelector('#copy-btn')
// let userInput = document.querySelector('#user-input')




// copyBtn.addEventListener('click',()=> {
//     let textUserInput = userInput.value
//     let lii = document.createElement('li')
//     lii.textContent = textUserInput

//     tasks.appendChild(lii)
// })


// //ЗАДАЧА 4
// let magicBox = document.querySelector('#magic-box')

// magicBox.addEventListener('mouseover',()=>{
//     magicBox.textContent = 'Я изменился!'
// })

// magicBox.addEventListener('mouseout',()=>{
//     magicBox.textContent = 'Наведи на меня'
// })

// //Задача 5 - не меняется почему то
// let toggleMe = document.querySelector('#toggle-me')

// toggleMe.addEventListener('click',()=> {
//     if(toggleMe.disabled) {
//         toggleMe.disabled = false
//     } else {
//         toggleMe.disabled = true
    
//     }
//     console.log(toggleMe)
// })






// //Задача 1
// let makeDanger = document.querySelector('#make-danger')
// let alertBox = document.querySelector('#alert-box')

// makeDanger.addEventListener('click',()=>{
//     alertBox.classList.add('danger')
// })


// //задача 2
// let changeTextBtn = document.querySelector('#change-text-btn')

// let newText = document.querySelector('#new-text')

// let textChanger = document.querySelector('#text-changer')

// changeTextBtn.addEventListener('click',()=> {
//     let text = newText.value
//     textChanger.textContent = text
// })


// //задача 3
// let addItemBtn = document.querySelector('#add-item-btn')

// let myList = document.querySelector('#my-list')

// addItemBtn.addEventListener('click', ()=> {
//     let li = document.createElement('li')
//     li.textContent = 'Мама Папа'
//     myList.appendChild(li)
// })


// //задача 4
// let applyColorBtn = document.querySelector('#apply-color-btn')

// let colorSelect = document.querySelector('#color-select')

// let boxColor = document.querySelector('#box-color')

// applyColorBtn.addEventListener('click',()=> {
//     let color = colorSelect.value
//     boxColor.style.backgroundColor = color
// })



// //задача 5

// let countBtn = document.querySelector('#count-btn')

// let click = document.querySelector('#click-counter')

// let count = 0;
// countBtn.addEventListener('click',()=>{
//     count +=1;
//     click.textContent =`Кликов: ${count}`
    
// })




// //БЛОК 5 Задача 1
// let clickBtn = document.querySelector('#click-btn')
// let eventLog = document.querySelector('#event-log')

// clickBtn.addEventListener('click',()=> {
//     eventLog.innerHTML = `клик: ${new Date().toLocaleDateString()}`
// })


// //БЛОК 5 ЗАДАЧА 2

// let colorBox=document.querySelector('#color-box')
// colorBox.addEventListener('mousemove',(el)=> {
//     eventLog.textContent = `X:${el.clientX}\nY:${el.clientY}` 
// })


// //БЛОК 5 ЗАДАЧА 3
// let inputField = document.querySelector('#input-field')

// inputField.addEventListener('keydown',(el)=>{
//     console.log(el.key)
//     console.log(el.code)
// })

// //БЛОК 5 ЗАДАЧА 4 вазе хз, обкуренная задача
// let removeBtn = document.createElement('button')
// removeBtn.addEventListener('click',()=>{

// })


// // // 5
// // let form = document.getElementById('test-form');
// // let formDataDiv = document.getElementById('form-data');
// // form.addEventListener('submit', (event) => {
// //     event.preventDefault();
// //     let data = {
// //         username: document.getElementById('username').value,
// //         email: document.getElementById('email').value,
// //         city: document.getElementById('city').value,
// //         agree: document.getElementById('agree').checked
// //     };
// //     formDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
// // });


// //5 сам подсматривая чуть
// let form = document.querySelector('#test-form')
// let formDataDiv = document.querySelector('#form-data')

// form.addEventListener('submit',()=>{
//     event.preventDefault()
//     let data = {
//         username: document.getElementById('username').value,
//         email: document.getElementById('email').value,
//         city: document.getElementById('city').value,
//         agree: document.getElementById('agree').checked
//     };
//     formDataDiv.innerHTML = `${data.username}\n${data.email}\n${data.city}\n${data.agree}`
// })



// let liveInput = document.querySelector('#live-input')
// let statusText = document.querySelector('#status-text')


// liveInput.addEventListener('input',()=> {
//     valueLive = liveInput.value;
//     statusText.textContent = valueLive
// })


// let changeInput = document.querySelector('#change-input')
// changeInput.addEventListener('change',()=>{
//     console.log(`Изменение завершено! ${changeInput.value}`)
// })


// let myLink = document.querySelector('#my-link')
// myLink.addEventListener('click',(el)=>{
//     el.preventDefault();
//     console.log('Отменка братик')
// })


// let superBtn = document.querySelector('#super-btn')
// superBtn.addEventListener('click',(event)=>{
//     if(event.target.id ==='inner-text') {
//         console.log('Клик по тексту')
//     } else {
//         console.log('Клик по кнопке')
//     }
// })


// let btnOne = document.querySelector('#btn-one')
// let btnTwo = document.querySelector('#btn-two')


// function sayhello() { alert('Привет!');}

// btnOne.addEventListener('click', sayhello)
// btnTwo.addEventListener('click',()=>{
//     btnOne.removeEventListener('click',sayhello)
//     console.log('обработчик снят')
// })


// //задача 1
// let textInput = document.querySelector('#text-input')
// let textMirror = document.querySelector('#text-mirror')

// textInput.addEventListener('input', () => {
//     textMirror.textContent = textInput.value
// })

// //задача 2
// let hoverZone = document.querySelector('#hover-zone')
// let hoverInfo = document.querySelector('#hover-info')

// hoverZone.addEventListener('mouseover',()=>{
//     hoverInfo.textContent = "Мышь внутри!"
//     console.log(hoverInfo)
// })

// hoverZone.addEventListener('mouseout',()=>{
//     hoverInfo.textContent = "Мышь ушла..."
// })




// //задача 3
// let loginForm = document.querySelector('#login-form')
// let loginName = document.querySelector('#login-name')
// let loginResult = document.querySelector('#login-result')


// loginForm.addEventListener('submit',(el)=>{
//     el.preventDefault();

//     loginResult.textContent = `Привет, ${loginName.value}`
//     loginName.value = ''
// })


// //задача 4
// let targetInfo = document.querySelector('#target-info')
// let parentBox = document.querySelector('#parent-box')
// parentBox.addEventListener('click',(el)=>{
//     if(el.target.id === 'child-btn') {
//         targetInfo.textContent = "Клик по кнопке"
//     } else {
//         targetInfo.textContent = "клик по родителю"
//     }
// })



// //задача 5
// function BOOM() {
//     alert('БУМ!')
// }
// let dangerBtn = document.querySelector('#danger-btn')

// dangerBtn.addEventListener('click',BOOM)

// let startBtn = document.querySelector('#start-btn')

// startBtn.addEventListener('click',()=> {
//     dangerBtn.removeEventListener('click',BOOM)
//     startBtn.textContent = 'Включить опасную кнопку(нажми 2 раза)'
// })


// startBtn.addEventListener('dblclick',()=> {
//     dangerBtn.addEventListener('click',BOOM)
//         startBtn.textContent = 'Выключить опасную кнопку'

// })




// //БЛОК 6 ЗАДАЧА 1 саи
// let addItemBtn = document.querySelector('#add-item-btn')

// let newItemText = document.querySelector('#new-item-text')

// let dynamicList = document.querySelector('#dynamic-list')


// addItemBtn.addEventListener('click',()=>{
//     let li = document.createElement('li')
//     li.textContent = newItemText.value
//     dynamicList.append(li)
//     newItemText.value = ''
// })

// //БЛОК 6 ЗАДАЧА 2 сам
// let flexRow = document.querySelector('.flex-row')

// let btn = document.createElement('button')
// btn.textContent = 'Удалить последний'
// flexRow.append(btn)


// btn.addEventListener('click',()=>{
//     let last = dynamicList.lastElementChild
//     if(last) {
//         last.remove();
//     }
// })



// let crudSection = document.querySelector('#crud-section')
// //БЛОК 6 задача 3 сам
// function createCard(title,card){
//     let div = document.createElement('div')
//     div.classList.add('card')
//     div.innerHTML = `<h3>${title}</h3> <p>${card}</p>`
//     crudSection.appendChild(div)
// }

// console.log(createCard('ff','fff'))



// //БЛОК 6 Задача 4 подсмотрел про клонноде
// let gallery = document.querySelector('.gallery')

// if(gallery) {
//     gallery.addEventListener('click',(el)=>{
//         if(el.target.tagName === 'IMG') {
//             let clone = el.target.cloneNode(true)
//             gallery.appendChild(clone)
//         }
//     })
// }


// //БЛОК 6 задача 5 подсмотрел чуть
// let fragment = document.createDocumentFragment();
// for(let i = 0;i<100;i++) {
//     let li = document.createElement('li')
//     li.textContent = `Элемент ${i}`
//     fragment.appendChild(li)
// }

// dynamicList.appendChild(fragment)





// //задача 1
// let makeBox = document.querySelector('#make-box')

// let playGround = document.querySelector('#playground')


// makeBox.addEventListener('click',()=>{
//     let div = document.createElement('div')
//     div.textContent = 'Я коробка'
//     div.style.backgroundColor = 'lightblue'
//     playGround.append(div)
// })


// //задача 2
// let clearList = document.querySelector('#clear-list')

// let myList = document.querySelector('#my-list')

// clearList.addEventListener('click',()=>{
//     myList.innerHTML = ''
// })

// let buttonCreate = document.createElement('button')
// buttonCreate.textContent = 'Создать пункт'
// myList.appendChild(buttonCreate)

// let count = 1;
// buttonCreate.addEventListener('click',()=>{
//     let li = document.createElement('li')
//     li.textContent = `Новый пункт ${count}`
//     myList.append(li)
//     count +=1;
// })


// //задача 3
// let cloneBtn = document.querySelector('#clone-btn')
// let originalText = document.querySelector('#original-text')
// let cloneZone = document.querySelector('#clone-zone')

// cloneBtn.addEventListener('click', ()=> {
//     let copyText = originalText.cloneNode(true)
//     cloneZone.append(copyText)
// })


// //задача 4
// let btnRemove = document.createElement('button')
// btnRemove.textContent = 'Удалить меня'
// playGround.append(btnRemove)

// btnRemove.addEventListener('click',()=> {
//     btnRemove.remove();
//     playGround.textContent = 'Спасибо, я думал мы друзья'
// })

// //задача 5
// let fragment = document.createDocumentFragment();

// let fragmentTarget = document.querySelector('#fragment-target')

// let addBtn = document.querySelector('#add-50-btn')



// addBtn.addEventListener('click',()=>{
//     for(let i = 1; i<51;i++) {
//     let p = document.createElement('p')
//     p.textContent = `Пункт ${i}`
//     fragment.append(p)
// }
// fragmentTarget.append(fragment)
// })



// function solution(str){
//   let massiveStr = str.split('')
//   let newMassive = []
//   for(let i = massiveStr.length-1;i>=0;i--) {
//     newMassive.push(massiveStr[i])
//   } 
//   return newMassive.join('')
// }


// console.log(solution('world'))



// let text = '8 years old'
// function getAge(inputString){
//     let papa = inputString.split(' ').filter((el)=> !isNaN(el) === true).join('')
//     return papa
// }

// console.log(getAge(text))


// function isUpperCase(string) {
//     if(string===string.toUpperCase()) {
//         return true
// } else {
//     return false
// }
// }


// console.log(isUpperCase('HDLSSP'))





// // //задача 1
// // function positiveSum(arr) {
// //     return arr.filter((num)=>num>0).reduce((el,num)=>el+num,0)
// // }

// // console.log(positiveSum([1,-1,2,3,-4,7,-10]))


// // //задача 2
// // function solution(str) {
// //     return str.split('').reverse().join('')
// // }


// //задача 3
// function getCount(str) {
//     let papa = str.match((/[aeiou]/g))
//     return papa.length
// }


// console.log(getCount('adfghjkbvcxwedfg'))



// //БЛОК 7 задача 1
// let hideBtn = document.querySelector('#hide-btn')

// let colorBox = document.querySelector('#color-box')


// hideBtn.addEventListener('click',()=>{
//     colorBox.style.display = 'none'
// })

// //БЛОК 7 задача 2
// let showBtn = document.querySelector('#show-btn')

// showBtn.addEventListener('click',()=> {
//     colorBox.style.display = 'block'
// })


// //Блок 7 задача 3
// let toggleHighlightBtn = document.querySelector('#toggle-highlight-btn')

// toggleHighlightBtn.addEventListener('click',()=>{
//     colorBox.classList.toggle('highlight')
//     console.log(colorBox)
// })


// //блок 7 задача 4
// function getComputedStyleValue(el,property) {
//     let cssEl = getComputedStyle(el)[property]
//     return cssEl
// }

// //блок 5 задача 5
// let flexDiv = document.querySelector('.flex-row')
// let randomBtn = document.createElement('button')
// flexDiv.append(randomBtn)


// randomBtn.style.width = '100px'
// randomBtn.textContent = 'рандом цвет'


// randomBtn.addEventListener('click',()=> {
//     let r = Math.floor(Math.random() * 255)
//     let g = Math.floor(Math.random() * 255)
//     let b = Math.floor(Math.random() * 255)
//     colorBox.style.backgroundColor = `rgb(${r},${g},${b})`
// })



// //задача 1
// let addClassBtn = document.querySelector('#add-class-btn')
// let testBox = document.querySelector('#test-box')

// addClassBtn.addEventListener('click',()=>{
//     testBox.classList.add('highlight')
//     console.log(testBox)
// })

// //задача 2
// let removeClassBtn = document.querySelector('#remove-class-btn')

// removeClassBtn.addEventListener('click',()=>{
//     testBox.classList.remove('highlight')
// })


// //задача 3
// let toggleClassBtn = document.querySelector('#toggle-class-btn')

// toggleClassBtn.addEventListener('click',()=>{
//     testBox.classList.toggle('highlight')
// })

// //задача 4
// let checkStyleBtn = document.querySelector('#check-style-btn')

// let styleBox = document.querySelector('#style-box')

// checkStyleBtn.addEventListener('click',()=>{
//     console.log(getComputedStyle(styleBox).width)
// })

// //задача 5
// let applyColorBtn = document.querySelector('#apply-color-btn')
// let colorInput = document.querySelector('#color-input')

// applyColorBtn.addEventListener('click',()=>{
//     let backColorInputValue = colorInput.value

//     styleBox.style.backgroundColor = `${backColorInputValue}`
// })



// //задача 1
// let btn1 = document.querySelector('#btn-1')


// let targetBox = document.querySelector('#target-box')

// btn1.addEventListener('click',()=>{
//     targetBox.style.backgroundColor = 'blue'
// })


// //задача 2

// let btn2 = document.querySelector('#btn-2')
// let nameInput = document.querySelector('#name-input')
// let greeting = document.querySelector('#greeting')

// btn2.addEventListener('click',()=>{
//     let textNameInput = nameInput.value;

//     greeting.textContent = `Привет, ${textNameInput}`
// })


// //задача 3
// let btn3 = document.querySelector('#btn-3')
// let myList = document.querySelector('#my-list')


// btn3.addEventListener('click',()=>{
//     for(let i = 1;i<4;i++) {
//         let li = document.createElement('li')
//         li.textContent = `Пункт ${i}`
//         myList.append(li)
//         counterText.textContent = `Пунктов: ${myList.children.length}`

//     }
// })


//  //задача 4


//  let  btn4 = document.querySelector('#btn-4')
//  let counterText = document.querySelector('#counter-text')

//  btn4.addEventListener('click',()=>{
//     myList.lastElementChild.remove()
//     counterText.textContent = `Пунктов: ${myList.children.length}`

//  })


//  //задача 5
//  let btn5 = document.querySelector('#btn-5')

//  let styleBox = document.querySelector('#style-box')

//  btn5.addEventListener('click',()=>{
//     styleBox.classList.toggle('active')
//  })



// //БЛОК 8 задача 1
// let targetChild = document.querySelector('#target-child')
// console.log(targetChild.parentElement)
// console.log(targetChild.children)

// //БЛОК 8 задача 2
// let navParent = document.querySelector('#nav-parent')
// for(let child of navParent.children) {
//     child.classList.add('nav-item')
//     console.log(child)
// }

// //БЛОК 8 задача 3
// let next = targetChild.nextElementSibling
// let previus  = targetChild.previousElementSibling
// console.log(next)
// console.log(previus)


// //БЛОК 8 задача 4
// function getAllDescendants(el) {
//     let massive = []
//     for(let child of el.children) {
//         massive.push(child)
//     }
//     return massive
// }

// console.log(getAllDescendants(navParent))


// //БЛОК 8 задача 5 не знаю как до body искть

// let predki = targetChild.parentElement
// console.log(document. === predki)


// let result = document.querySelector('#result')

// let btnNext = document.querySelector('#btn-next')
// btnNext.addEventListener('click',()=>{
//     let firstChild = document.querySelector('#first-child')
//     let nextElementFirstChilda = firstChild.nextElementSibling.textContent
//     result.append(nextElementFirstChilda)
// })

// let btnParent = document.querySelector('#btn-parent')

// btnParent.addEventListener('click',()=>{
//     let secondChild = document.querySelector('#second-child')
//     let idParentSecondChild = secondChild.parentElement.id
//     result.append(idParentSecondChild)
// })


// //Закрп 8 блока задача 1

// let result = document.querySelector('#result')

// let btn1 = document.querySelector('#btn-1')

// btn1.addEventListener('click',()=>{
//     let appNav = document.querySelector('#app-nav')

//     result.innerHTML =`Количество детей: ${appNav.children.length}<br>Первый ребенок: ${appNav.firstElementChild.textContent}<br>Второй ребенок: ${appNav.lastElementChild.textContent}`
// })


// //задача 2
// let btn2 = document.querySelector('#btn-2')

// btn2.addEventListener('click',()=>{
//     let appTitle = document.querySelector('#app-title')

//     let preAppTitleSibling = appTitle.previousElementSibling
//     let preAppTitleTAg = preAppTitleSibling ? preAppTitleSibling.tagName : 'нет'  
//     result.textContent = `Тег соседний: ${appTitle.nextElementSibling.tagName}, Тег предыдущий: ${preAppTitleTAg}`
// })//ошибка вылезла такая app.js:1356 Uncaught TypeError: Cannot read properties of null (reading 'tagName')
//    // at HTMLButtonElement.<anonymous> (app.js:1356:131)


// //задача 3
// let btn3 = document.querySelector('#btn-3')

// btn3.addEventListener('click',()=>{
//     let appHeader = document.querySelector('#app-header')
//     for(let child of appHeader.children){
//         console.log(child)
//     }
// })

// //задача 4
// let btn4 = document.querySelector('#btn-4')

// btn4.addEventListener('click',()=>{
//     let appCopy = document.querySelector('#app-copy')
//     result.textContent = `${appCopy.parentElement.id}`
// })

// //задача 5
// let btn5 = document.querySelector('#btn-5')

// btn5.addEventListener('click',()=>{
//     let appFooter = document.querySelector('#app-footer')

//     let nextTextAppFooter = appFooter.nextElementSibling

//     if(nextTextAppFooter) {
//         appFooter.textContent = nextTextAppFooter.textContent
//     } else {
//         appFooter.textContent = 'нет брата'
//     }

    
// })



// //Блок 9 ЗАДАЧА1 
// let testForm = document.querySelector('#test-form')

// let formData = document.querySelector('#form-data')

// testForm.addEventListener('submit',(el)=>{
//     el.preventDefault();
    

//     let username = testForm.querySelector('#username').value

//     let email  = testForm.querySelector('#email').value

//     let city = testForm.querySelector('#city').options[testForm.querySelector('#city').selectedIndex]?.text

//     let cheakedAgree  = testForm.querySelector('#agree').checked
    

//     if(username && email) formData.innerHTML = `Имя: ${username}<br>Email: ${email}<br>Город: ${city}<br>Согласен: ${cheakedAgree === true ? 'согласен' : "не согласен"}`

    

// })

// //БЛОК 9 задача 4

// let btnReset = document.querySelector('#reset-form')

// btnReset.addEventListener('click',()=>{
//     testForm.reset();
//     formData.innerHTML ='';
// })



// //БЛОК 9 задача 2
// testForm.addEventListener('submit',(el)=>{
//     let username = testForm.querySelector('#username').value

//     let email  = testForm.querySelector('#email').value

//     let city = testForm.querySelector('#city').value

//     let cheakedAgree  = testForm.querySelector('#agree').checked
    
//     let errors = [];


//         if(username.length < 3) errors.push('Имя должно содержать больше 3-х символов')
//         if(!email.includes('@')) errors.push('Email должен содержать символ - "@"')
//         if(!city) errors.push('Выберете город')
//         if(!cheakedAgree) errors.push('Отметьте чекбокс')
        
            
//     if(errors.length > 0) {
//         el.preventDefault();
//         alert(errors.join('\n'))
//     }

// })


// //Блок 9 задача 3
// let city = document.querySelector('#city')
// city.addEventListener('change',()=>{
//     console.log(city.options[city.selectedIndex]?.text + '\n' + city.value)
// })


// //БЛОК 9 задача 5 хз херня какая то

// testForm.addEventListener('submit',(el)=>{
//     el.preventDefault();
//     let dataForm = new FormData(testForm)

//     let username = dataForm.get('username')

//     for (let [name, value] of dataForm) {
//         console.log(name, value);
//     }
// })



// //задача 1 закрп блока 9
// let profileForm = document.querySelector('#profile-form')

// let profileResult = document.querySelector('#profile-result')

// profileForm.addEventListener('submit',(el)=>{
//     el.preventDefault();

//     let nick = profileForm.querySelector('#nickname').value.trim();
//     let subscribe = profileForm.querySelector('#subscribe').checked;
//     let countryText = profileForm.querySelector('#country').options[profileForm.querySelector('#country').selectedIndex].text



//    profileResult.innerHTML = `Ник: ${nick}, Рассылка: ${subscribe}, Страна: ${countryText}`
// })



// let resetBtn = document.querySelector('#reset-btn')


// resetBtn.addEventListener('click',()=>{
//     profileForm.reset();
//     profileResult.innerHTML =''
// })


// profileForm.addEventListener('submit',(el)=> {
//     let nickname = document.querySelector('#nickname').value
//     let checked = document.querySelector('#subscribe').checked
//     let country = document.querySelector('#country').value

//     let error = []

//     if(nickname.trim().length < 1) {
//         error.push('Введи ник олух')
//     }
//     if(!checked){
//         error.push('Нажми галочку олух')
//     }
//     if(!country) {
//         error.push('Выбери страну олух')
//     }


//     if(error.length > 0) {
//         el.preventDefault();
//         alert(error.join('\n'))
//         profileResult.innerHTML =''
//     }
// })



// let feedbackForm = document.querySelector('#feedback-form')


// let feesbackResult = document.querySelector('#feedback-result')


// feedbackForm.addEventListener('submit',(el)=>{
//     el.preventDefault();

//     let textMessage = feedbackForm.querySelector('#message').value

//     let marksRating = feedbackForm.querySelector('#rating').options[feedbackForm.querySelector('#rating').selectedIndex].text
            
//     let checked = feedbackForm.querySelector('#agree').checked
    

//     let error = [];

//     if(textMessage.trim().length < 1) {
//         error.push('Напиши сообщение!')
//     }
//     if(!checked) {
//         error.push('Подтверди согласие!')
//     }

//     if(error.length > 0) {
//         el.preventDefault();
//         alert(error.join('\n'))
//         feesbackResult.innerHTML = ''
//     } else {
//         feesbackResult.innerHTML = `${textMessage} --- ${marksRating}`
//     }

    


// })





// //задача 1 БЛОК 10
// let dynamicList = document.querySelector('#dynamic-list')
// let removeBtn = document.querySelector('.remove-btn')

// dynamicList.addEventListener('click',(el)=>{
//     if(el.target.classList.contains('remove-btn')){
//         el.target.parentElement.remove();
//     } 

// })



// //задача 2 БЛОК 10
// let container  = document.querySelector('#delegation-container')
// let log = document.querySelector('#delegation-log')


// container.addEventListener('click',(el)=>{
//     let action = el.target.dataset.action
//     log.textContent = action
// })



// //задача 3
// let addActionBtn = document.querySelector('#add-action-btn')
// let actions = ['save','delete','edit']
// addActionBtn.addEventListener('click',(el)=>{
//     let btn = document.createElement('button')
//     let actionRandom = actions[Math.floor(Math.random()*actions.length)]

//     btn.dataset.action = actionRandom;
//     btn.textContent = actionRandom;
//     btn.classList.add = 'action-btn'


//     addActionBtn.append(btn)
    
// })


// //задача 4 - не понял смысла вооьще, подсматривал решение

// function delegate(parent, selector, eventType, callback) {
//     parent.addEventListener(eventType,(el)=>{
//         let target = el.target.closest(selector)
//         if(target && parent.contains(target)){
//             callback(el, target)
//         }
//     })
// }

// delegate(dynamicList, '.remove-btn', 'click', (e, btn) => {
//     btn.parentElement.remove();
// });

// //5

// document.addEventListener('click',(el)=>{
//     if(el.target.tagName === 'BUTTON') {
//         console.log(el.target.textContent)
//     }
// })



// //задача 1
// let todoList = document.querySelector('#todo-list')

// todoList.addEventListener('click',(el)=>{
//     if(el.target.classList.contains('delete-btn')) {
//         el.target.parentElement.remove();
//     }
// })


// //задача 2
// let addTask = document.querySelector('#add-task')

// addTask.addEventListener('click',(el)=>{
//     let deleteBtn = document.createElement('button')
//     deleteBtn.textContent = 'Удалить'
//     deleteBtn.classList.add('delete-btn')
//     let li = document.createElement('li')
//     li.textContent = 'Новая задача'

//     li.append(' ',deleteBtn)

//     todoList.append(li)
    
    
// })


// //задача 3

// let btnContainer = document.querySelector('#buttons-container')

// let actionLog = document.querySelector('#action-log')

// btnContainer.addEventListener('click',(el)=>{
//     if(el.target.dataset.action) {
//         actionLog.textContent = el.target.dataset.action
//     }
// })



// //задача 4
// let addBtn = document.querySelector('#add-button')

// addBtn.addEventListener('click',(el)=>{
//     let btn = document.createElement('button')
//     btn.dataset.action = 'edit'
//     btn.textContent = 'Редактировать'

//     btnContainer.append(btn)
// })


// //задача 5
// function delegate(parent, selector, eventType,callback) {
//     parent.addEventListener(eventType,(el)=>{
//         if(el.target.closest(selector)) {
//             callback(el, target)
//         }
//     })
// }











// ТРЕНИРОВКА ПОТВОРЕНИЯ

let btnChangeFone = document.querySelector('#btn-change-fone')

btnChangeFone.addEventListener('click',()=>{
    btnChangeFone.classList.toggle('active')
    if(btnChangeFone.classList.contains('active')){
        document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        btnChangeFone.textContent = 'Вернуть'
    } else {
        document.body.style.backgroundColor = 'white';
        btnChangeFone.textContent = 'Фокус'
    }
    
})



let btnPHidden = document.querySelector('#btn-p-hidden')
let pText = document.querySelector('#text-picture')



btnPHidden.addEventListener('click',()=>{
    pText.classList.toggle('active-p')
    if(pText.classList.contains('active-p')) {
        pText.style.display = 'flex'
         btnPHidden.textContent='Скрыть'
         btnPHidden.style.backgroundColor = `rgb(244, 93, 156)`
    } else {
        pText.style.display = 'none'
        btnPHidden.textContent='Показать'
        btnPHidden.style.backgroundColor = `rgb(250,250,250)`
    }
})


let formBtn = document.querySelector('#form-btn')
let form = document.querySelector('.form')
let inputName = document.querySelector('#form-name')
let inputEmail = document.querySelector('#form-email')
let textArea = document.querySelector('#form-textarea') 

formBtn.addEventListener('click',(el=>{
    el.preventDefault();
    alert(`Данные отправлены: \n${inputName.value}\n${inputEmail.value}\n${textArea.value}`)
    form.reset();
}))


let productsGrid = document.querySelector('.products-card-grid')


productsGrid.addEventListener('click', (el) => {
    if (el.target.classList.contains('delete-card-1')) {
        el.target.parentElement.remove();
    }
});


let addCard = document.querySelector('.add-card')

addCard.addEventListener('click',()=>{
    let div = document.createElement('div')
    div.classList.add('card')

    let img = document.createElement('img')
    img.src = 'https://via.placeholder.com/150'

    let p = document.createElement('p')
    p.textContent = 'Цена: 100BYN'
    
    let button = document.createElement('button')
    button.classList.add('delete-card-1')
    button.textContent = 'Удалить'


    div.append(img)
    div.append(p)
    div.append(button)

    productsGrid.append(div)
})



let btnOpenModal = document.querySelector('.btn-modal')
let modal = document.querySelector('.modal')
let btnExitModal = document.querySelector('.btn-modal-exit')


btnOpenModal.addEventListener('click',()=>{
    modal.classList.add('active')
})


btnExitModal.addEventListener('click',()=>{
    modal.classList.remove('active')
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) { 
        modal.classList.remove('active');
    }
});




let faqContainer = document.querySelector('.faq-container');

faqContainer.addEventListener('click', (event) => {
    
    let questionBtn = event.target.closest('[class^="faq-question"]'); 

    if (!questionBtn) return; 

    
    let answer = questionBtn.nextElementSibling; 

    // 3. Переключаем классы
    if (answer) {
        answer.classList.toggle('open');
        questionBtn.classList.toggle('active');
    }
});