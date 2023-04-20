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
// const titulo = document.getElementById('titulo');

// //con getelementByTagName

// // const itemsLi = document.getElementsByTagName('li')
// const itemsLi = document.getElementsByTagName('li')[2]

// //con getElementByClassName

// const byClass = document.getElementsByClassName('byClass')

// // con querySelector

// const qSelector = document.querySelector('div');

// // con querySelectorAll

// const qSelectorAll = document.querySelectorAll("a[href*='https://escalab.tech/']")

// //////////////////////////////////////////////////////////

// // EVENTOS

// const set = document.getElementById('set');
// const getItem = document.getElementById('get');
// const del = document.getElementById('delete');

// const cuadrado = document.getElementById('changeColor')

// const test = document.getElementById('test')

// const escaladores = ['Ivan','Luis','Daniel','Emiliano']
// const year = 2023

// set.addEventListener('click', () => {
//     // cuadrado.style.backgroundColor = 'blue';
//     // cuadrado.style.width = '100px'

//     // cuadrado.classList.add('dark')
//     // cuadrado.classList.remove('green')
//     // cuadrado.classList.toggle('dark')

//     // const titleSquare = document.createElement('h3')

//     // titleSquare.textContent = 'Titulo Cuadrado'

//     // cuadrado.appendChild(titleSquare);

//     // cuadrado.removeChild(test)

//     // cuadrado.replaceChild(titleSquare,test)
//     // console.log(window.location.href)

//     // location.reload()

//     localStorage.setItem('user',JSON.stringify(escaladores))
//     localStorage.setItem('year',JSON.stringify(year))

// })

// getItem.addEventListener('click',() =>{
//     const getUser = localStorage.getItem('user')
//     const getYear = localStorage.getItem('year')
//     console.log(JSON.parse(getUser))

// })

// del.addEventListener('click',() =>{
//    localStorage.clear()
// })





////////////////////////////////////////////////////////////////////////////////////
// CLASE 10 Funciones
////////////////////////////////////////////////////////////////////////////////////

// funcion normal

// function sumar (num1,num2){
//     // return 'El resultado de la suma es : ' + (num1 + num2);
//     return `El resultado es: ${num1 + num2}`;
// }

// const resultado = sumar(10,20);
// /////////////////////////////////////////////////////////////////////////

// // Funcion anonima

// const anonim = function(color){
//     var miObjeto ={
//         color: color
//     }

//     return miObjeto;
// }

// ////////////////////////////////////////////////////////////////////////////

// // funcion de flecha

// const mesage = (nombre) => {
//     return `Hola soy ${nombre}`
// }

// const response = mesage('Diego');

// //oneLine

// const saludar = nombre => ('Hola Escalador: ' + nombre);


// const respuesta = saludar('Ivan');

// const sumar2 = (num1,num2) =>{
//     const value = 20123;
//     return num1 + num2;
    
// }

// const resultado2 = sumar2(2,3);

// console.log(resultado2);

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// RECORREDORES DE ARRAYS
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const names = ['Ivan','Emiliano','Richard','Diego'];

const words = ['Bievenmidos','al','curso','de','Web development'];

const numbers = [23,4,12,3,43,13];

const car = {
    color: 'red',
    marca: 'Mazda',
    modelo: 2023
}

//MAP
const mapFunction = names.map((names) => {
    return 'Estudiantes que perteneces al curso de Web Development: ' + names;
})

//FILTER

const filterFunction = names.filter((names) => {
    return names.includes('a');
})

//REDUCE

const reduceFunction = words.reduce((acc,item) => {
    return (acc = acc + ' ' + item);
})

//FIND

const findFunction = names.find((names) => {
    return names.includes('a');
})

//FIND INDEX

const findIndexFunction = numbers.findIndex((number) =>{
    return number === 43;
})

//EVERY

const everyFunction = numbers.every((num) =>{
    return num < 100;
});

//SOME

const someFunction = names.some((names) =>{
    return names === 'Luis';
});

//OBJET KEYS

const key = Object.keys(car);

//OBJET VALUES

const value = Object.values(car);

//OBJECT ENTRIES

const entrie = Object.entries(car);
console.log(entrie);