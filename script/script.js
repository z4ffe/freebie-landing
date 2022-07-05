/*
const card = document.querySelectorAll('.card')


card.forEach(function (card){
    card.addEventListener('click', function (){
        console.log('asd')
    })
})


*/
/*

const cardStyle = function () {

}*/


const modalWindow = document.querySelector('#modal')
const modalWrapper = document.querySelector('#modal__wrapper')
const modalExit = document.querySelector('#modal__exit')
const SignupButton = document.querySelector('#btn-signup')


modalExit.addEventListener('click', function () {
    modalWindow.classList.remove('modal--active')
    modalWrapper.classList.remove('modal-wrapper--active')
})

SignupButton.addEventListener('click', function (){
    modalWindow.classList.add('modal--active')
    modalWrapper.classList.add('modal-wrapper--active')
})


console.log(modalWindow.classList.value)

