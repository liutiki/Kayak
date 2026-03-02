import back from '@/assets/cost/kayak.jpg';
import girl from '@/assets/cost/girl.jpg';
import houseBanya from '@/assets/cost/Twodays.jpg';
import kayak from '@/assets/cost/corporate.jpg';


export const CostData = [


    {
    image: kayak,
    name: '3800 рублей',
    description: 'Однодневный сплав ',  
    service: 'Прокат трехместных байдарок',
    serviceOne: 'Прокат трехместных байдарок',
    serviceTwo: 'Прокат трехместных байдарок',
    button: 'Подробнее',
     path: '/two-days'
},

{
    image:houseBanya,
    name: 'от 5000 рублей ',
    description: 'Двухдневный сплав ',  
    service: 'Прокат трехместных байдарок',
    serviceOne: 'Прокат трехместных байдарок',
    serviceTwo: 'Прокат трехместных байдарок',
    button: 'Подробнее',
     path: '/two-days'
},

{
    image:back,
    name: 'от 5000 рублей ',
    description: 'Корпоративы ',
    serviceOne: 'Прокат трехместных байдарок',
    serviceTwo: 'Прокат трехместных байдарок',
    button: 'Подробнее',
   path: '/corporate',
},

{
    image:girl,
    name: 'от 5000 рублей',
    description: 'Дни рождения', 
    serviceOne: 'Прокат трехместных байдарок',
    serviceTwo: 'Прокат трехместных байдарок', 
    button: 'Подробнее',
    path: '/birthday'
},


]
