//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида (... это просто для сокращения здесь. Вы выводите все числа от 1 до 50. Все. Три точки мы не выводим!!!!!):
//     1_2_3_4_5_6_7_8_9_ ... 49_50_
// от 1 до 50 включительно. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.

let i = 0;
let out = document.querySelector('.out-1');
let o = '';
function t1() {
    while (i < 50) {
        i++;
        o += i + '_';
    }
    out.innerHTML = o;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида (вы выводите все числа с шагом 2 без пропуска. Три точки не выводите! Пропуска чисел с 6 по 44 нет. ):
//     2_4_6_ ... 44_46_
// от 2 до 46 c шагом 2. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.


let k = 0;
let out2 = document.querySelector('.out-2');
let o2 = '';
function t2() {
    while (k < 46) {
        k += 2;
        o2 += k + '_';
    }
    out2.innerHTML = o2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// от 25 до 7 c шагом 1. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.
let k2 = 26;
let out3 = document.querySelector('.out-3');
let o3 = '';
function t3() {
    while (k2 > 7) {
        k2--;
        o3 += k2 + '_';
    }
    out3.innerHTML = o3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
// 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// от 77 до 35 c шагом 3. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.

let k4 = 80;
let out4 = document.querySelector('.out-4');
let o4 = '';
function t4() {
    while (k4 > 35) {
        k4 -= 3;
        o += k4 + '_';
    }
    out4.innerHTML = o;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и одна звездочка если число нечетное, и две звездочки если четное. Задача решается с помощью цикла  while.
let k5 = 0;
let out5 = document.querySelector('.out-5');
let o5 = '';
function t5() {
    while (k5 < 17) {
        k5++;
        if (k5 % 2 == 0) {
            o5 += k5 + '_' + '**';
        }
        else {
            o5 += k5 + '_' + '*';
        }
    }
    out5.innerHTML = o5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в .i-6.

let k6 = 0;

let out6 = document.querySelector('.out-6');
let o6 = '';

function t6() {
    let inner = +document.querySelector('.i-6').value;
    while (k6 < inner) {
        k6++;
        o6 += '******<br>';
    }
    out6.innerHTML = o6;
}
document.querySelector('.b-6').onclick = t6;

//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция f7, которая выводит в .out-7 числа от введенного пользователем включительно до нуля включительно.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4_3_2_1_0_
// Задача решается с помощью цикла  while.


let k7 = 0;
let out7 = document.querySelector('.out-7');
let o7 = '';

function t7() {
    let innera = +document.querySelector('.i-7').value;
    while (k7 < innera) {
        o7 += innera + '_';
        innera--;
    }
    out7.innerHTML = o7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция f8, которая выводит в .out-8 числа от первого введенного включительно до второго включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// Задача решается с помощью цикла  while.

let k8 = 0;
let out8 = document.querySelector('.out-8');
let o8 = '';

function t8() {
    let ione = +document.querySelector('.i-81').value;
    let itwo = +document.querySelector('.i-82').value;
    while (ione <= itwo) {
        o8 += ione + '_';
        ione++;
    }
    out8.innerHTML = o8;


}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция f9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку и при необходимости поменять местами значения в переменных местами, а потом запускаем цикл  while.

let o9 = '';
let out9 = document.querySelector('.out-9');
function t9() {
    let ione = +document.querySelector('.i-91').value;
    let itwo = +document.querySelector('.i-92').value;

    if (ione >= itwo) {
        let t = ione;
        ione = itwo;
        itwo = t;
    }
    while (ione <= itwo) {
        o9 += ione + '_';
        ione++;
    }
    out9.innerHTML = o9;
}
document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1966 включительно.
// Разделитель знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).
let o10 = '';
let out10 = document.querySelector('.out-10');
let a = 1950;
let b = 1966;
function t10() {
    while (a <= b) {
        o10 += a + '_';
        a += 2;
    }
    out10.innerHTML = o10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так ваша_переменная[i]
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_


function t11() {
    let o11 = '';
    let out11 = document.querySelector('.out-11');
    let divs = document.querySelectorAll('.div-11');
    let i1 = 0;
    while (i1 < divs.length) {

        o11 += divs[i1].innerHTML + '_';
        i1++;
    }
    out11.innerHTML = o11;

}

document.querySelector('.b-11').onclick = t11;





//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = 'orange'


function t12() {
    let o12 = '';
    let out12 = document.querySelector('.out-12');
    let divs = document.querySelectorAll('.div-12');
    let i = 0;

    while (i < divs.length) {

        divs[i].style.background = 'orange';

        i++;
    }

}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка .b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
    let o13 = '';
    // let out13 = document.querySelector('.out-13');
    let inner = document.querySelectorAll('.i-13');
    let i = 0;

    while (i < inner.length) {
        inner[i].value = i + 1;
        i++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
    let o14 = '';
    let out14 = document.querySelector('.out-14');
    let radio = document.querySelectorAll('.i-14');
    let i = 0;

    while (i < radio.length) {
        if (radio[i].checked) {
            o14 += radio[i].value;
        }
        i++;




    }
    out14.innerHTML = o14;
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 77_88_99_77_88_99_77_88_99_
// Для вывода использовать цикл  while. Разделитель подчеркивание.

function t15() {
    let o15 = '';
    let out15 = document.querySelector('.out-15');

    // Почему переменную i мы должны засунуть в сам цикл а не вынести наружу как другие (иначе работать не будет)?

    let a = 99;
    let b = 0;
    while (b < 3) {
        let i = 77;
        while (i <= a) {
            o15 += i + '_';
            i += 11;
        }
        b++;
    }
    out15.innerHTML = o15;
}

document.querySelector('.b-15').onclick = t15;
