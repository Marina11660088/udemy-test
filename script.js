//  const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

//  const personaMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
//  };

//  const a = prompt ("Один из последних просмотренных фильмов?", ""),
//        b = prompt ("На сколько оцените его?"),
//        c = prompt ("Один из последних просмотренных фильмов?", ""),
//        d = prompt ("На сколько оцените его?");

// personaMovieDB.movies[a] = b;
// personaMovieDB.movies[c] = d;

// console.log (personaMovieDB);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// console.log(hamburger && cola || fries === 3 && nuggets)


// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }
// let i=2
//  while (i<=16){
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++
//  }   
// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask()


// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i=5; i<11; i++){
//         arr[i-5]=i;
//     }

//     return arrayOfNumbers;
// }

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i=0; i<arr.length; i++){
//         result[i]=arr[i];
//     }

//     // Пишем решение вот тут
    
//     console.log(result)
//     // Не трогаем
//     return result;
// }
// firstTask()

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i=0; i<data.length; i++){
//         if (typeof(data[i])==='number'){
//             data[i]=data[i]*2
//         } else if (typeof(data[i])==='string') {
//             data[i]=`${data[i]}+ -done`
//         }
//     }
//     console.log(data)
    
//     // Не трогаем
//     return data;
// }
// secondTask()

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i=1; i<=data.length; i++){
//                result[i-1]=data[data.length-i];
//         }
//         console.log(result)
//     // Не трогаем
//     return result;
// }
// thirdTask()


// let result='';
// const lines = 5;

// for (let i=0; i<=lines; i++){
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }

//     result +='\n'
    
// }
// console.log(result)
 
'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

// function calculateVolumeAndArea(a) {
// if (typeof(a)=='number' && a>0 && Number.isInteger(a)) {
//     const volume = a*a*a;
// const area = 6*a*a;
// console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`)
// return `Объем куба: ${volume}, площадь всей поверхности: ${area}`
// } else{
// console.log('При вычислении произошла ошибка')
// }
// }
// calculateVolumeAndArea(2)


// function getCoupeNumber(ticket) {
//     if (typeof(ticket)=='number' && ticket<37 && Number.isInteger(ticket)&& ticket!=0) {
//         if(ticket>0 && ticket<=4){
//             return 1
//         } else if (ticket>=5 && ticket<=8){
//             return 2
//         } else if (ticket>=9 && ticket<=12){
//             return 3
//         }
//         else if (ticket>=13 && ticket<=16){
//             return 4
//         }
//         else if (ticket>=17 && ticket<=20){
//             return 5
//         }
//         else if (ticket>=21 && ticket<=24){
//             return 6
//         }
//         else if (ticket>=25 && ticket<=28){
//             return 7
//         }
//         else if (ticket>=29 && ticket<=32){
//             return 8
//         }
//         else {
//             return 9
//         }
       
//     } else if (ticket>=37 || ticket==0 ){
//     console.log("Таких мест в вагоне не существует")
//     } else{
//     console.log("Ошибка. Проверьте правильность введенного номера места")
//     }
//     }
//     let n = getCoupeNumber(50);
//     console.log(n)

    // function getTimeFromMinutes(minutes) {
    //     if (minutes<0 || minutes>600 || typeof(minutes)!=='number' || !Number.isInteger(minutes)){
    //         console.log("Ошибка, проверьте данные");
    //     }
    //     const hours = Math.floor(minutes/60);
    //     const min = minutes%60;
    //     let hoursStr= '';

    //     switch (hours) {
    //         case 0:
    //             hoursStr='часов';
    //             break;
    //         case 1:
    //             hoursStr='час';
    //             break;
    //         case 2:
    //         case 3:
    //         case 4:
    //             hoursStr='часa';
    //             break;
    //         default:
    //             hoursStr='часов';
    //     }
    //     return `Это ${hours} ${hoursStr} и ${min} минут`;

    // }
    // console.log(getTimeFromMinutes(255))

    // function findMaxNumber(a, b, c, d) {
    //     if (typeof(a)!=='number' || typeof(b)!=='number' || typeof(c)!=='number'|| typeof(d)!=='number'){
    //         return 0
    //     }
    //     return Math.max(a, b, c, d)

    // }
    
    // console.log(findMaxNumber(6, 8,-6, 2))

    // function fib(num) {
    //     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
    //         return "";
    //     }
    
    //     let result = '';
    //     let first = 0;
    //     let second = 1;
    
    //     for (let i = 0; i < num; i++) {
    //         if (i + 1 === num) {
    //             result += `${first}`;
    //             // Без пробела в конце
    //         } else {
    //             result += `${first} `;
    //         }
    
    //         let third = first + second;
    //         first = second;
    //         second = third;
    //     }
    
    //     return result;
    // }
    
    // fib(5)

    // function copy(mainObj) {
    //     let objCopy={};

    //     let key;
    //     for (key in mainObj){
    //         objCopy[key]=mainObj[key];
    //     }
    //     return objCopy;
    // }

    // const numbers = {
    //     a: 2,
    //     b: 5,
    //     c:{
    //         x: 7,
    //         y: 4
    //     }
    // };
    // const newNumbers = copy(numbers);

    // const newO = {
    //     v:8,
    //     p:9
    // }
    
    // newNumbers.a=10;
    // console.log(newNumbers);
    // console.log(Object.assign(numbers,newO))
    // const clone = Object.assign({}, newO)
    // console.log(newO)
    
    // const oldArray = ['a', 'b', 'c'];
    // const newArray = oldArray.slice();

    // newArray[2]='llllllll'

    // console.log(newArray);
    // console.log(oldArray);
    // const internet = [...oldArray, ...newArray]
    // console.log(internet);

    // const personalPlanPeter = {
    //     name: "Peter",
    //     age: "29",
    //     skills: {
    //         languages: ['ru', 'eng'],
    //         programmingLangs: {
    //             js: '20%',
    //             php: '10%'
    //         },
    //         exp: '1 month'
    //     },
    //     showAgeLangs: function(plan) {
    //         const {age} =plan;
    //         const {languages} = plan.skills;
    //         let str = `мне ${age} и я владею языками: `;
    //         languages.forEach(lang => {
    //             str+= `${lang.toUpperCase()} `
    //         });
    //         return str
    //     }

    // };
    // console.log(personalPlanPeter.showAgeLangs(personalPlanPeter))
    
    // function showExperience(plan) {
    //     const {exp} = plan.skills
    //     return exp
    
    // }
    // console.log(showExperience(personalPlanPeter))

    // function showProgrammingLangs(plan) {
    //     let str='';
    //     const {programmingLangs} = plan.skills;
    //     for (let key in programmingLangs){
    //         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    //     }
    //     return str
    
    // }
    // console.log(showProgrammingLangs(personalPlanPeter))

//     const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = ``;

//     arr.length === 0 ? str = 'Семья пуста' : str ='Семья состоит из: ';
//     arr.forEach(member =>{
//         str+=`${member} `
//     });
//     return str;
// }
// console.log(showFamily(family))

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//    arr.forEach(city => {
//     console.log(city.toLowerCase())
//    });
// }
// standardizeStrings(favoriteCities)


// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str)!=='string'){
//         return 'ошибка';
//     } 
//     let newStr ='';
//     for (let i=str.length-1; i>=0; i--){
//         newStr+=str[i];
//     }
//     return newStr;

// }
// console.log(reverse(someString))

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     // Самый оптимальный вариант решения
//     // return str.split('').reverse().join('');

//     // Решение при помощи цикла
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr
// }

// console.log(reverse(someString))

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')