// // Variables

// var jugador = 'Emiliano'

// //tipos de datos

// var string = 'Cadena de texto'

// var number = 2023

// var boolean = true // true o false

// var isUndefined = undefined

// var isNull = null

// //Case Sensitive

// var ceoEscalab = 'Cesar'

// var ceoescalab = 'Claudio'

// //estilos de escritura

// var userClickCount = 'camelCase'

// var UserClickCount = 'PascalCase'

// var user_click_count = 'snake_case'

// //objetos y arrays

// //objeto ejemplo
// var myCar = {
//     color: 'rojo',
//     marca: 'bmw',
//     modelo: 2019
// }

//array ejemplo

// var estudiantes = ['Ivan','Daniel','Luis','Karen','Omar']


//redefinir variables

// var ganador = 'Daniel'


// ganador = 007

//no usar var, explicacion de hoisting



// const numeroOne = 3123123

// console.log(numeroOne)

// numeroOne = 'uno'

// console.log(numeroOne)


////////////////////////////////////////////////
// Window function

// window.open('https://escalab.tech/')

// window.close()

// window.confirm('Te esta gustado este curso?')

// window.alert('Te esta gustado este curso?')

/////////////////////////////////////////////////////

// Seleccionando el DOM

// con getElementById
const titulo = document.getElementById('titulo');

//con getelementByTagName

// const itemsLi = document.getElementsByTagName('li')
const itemsLi = document.getElementsByTagName('li')[2]

//con getElementByClassName

const byClass = document.getElementsByClassName('byClass')

// con querySelector

const qSelector = document.querySelector('div');

// con querySelectorAll

const qSelectorAll = document.querySelectorAll("a[href*='https://escalab.tech/']")

//////////////////////////////////////////////////////////

// EVENTOS

const set = document.getElementById('set');
const getItem = document.getElementById('get');
const del = document.getElementById('delete');

const cuadrado = document.getElementById('changeColor')

const test = document.getElementById('test')

const escaladores = ['Ivan','Luis','Daniel','Emiliano']
const year = 2023

set.addEventListener('click', () => {
    // cuadrado.style.backgroundColor = 'blue';
    // cuadrado.style.width = '100px'

    // cuadrado.classList.add('dark')
    // cuadrado.classList.remove('green')
    // cuadrado.classList.toggle('dark')

    // const titleSquare = document.createElement('h3')

    // titleSquare.textContent = 'Titulo Cuadrado'

    // cuadrado.appendChild(titleSquare);

    // cuadrado.removeChild(test)

    // cuadrado.replaceChild(titleSquare,test)
    // console.log(window.location.href)

    // location.reload()

    localStorage.setItem('user',JSON.stringify(escaladores))
    localStorage.setItem('year',JSON.stringify(year))

})

getItem.addEventListener('click',() =>{
    const getUser = localStorage.getItem('user')
    const getYear = localStorage.getItem('year')
    console.log(JSON.parse(getUser))

})

del.addEventListener('click',() =>{
   localStorage.clear()
})

