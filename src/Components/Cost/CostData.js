import check from '@/assets/cost/check.jpg';
import birthday from '@/assets/cost/birthday.jpg';
import kayakFour from '@/assets/cost/kayakFour.jpg';
import kayak from '@/assets/cost/kayak.jpg';


export const CostData = [


    {
    image: kayak,
    name: '3800 рублей',
    description: 'Однодневный сплав ',  
    service: 'Аренда байдарок',
    serviceOne: 'Обед + Ужин на костре',
    serviceTwo: 'Баня',
    button: 'Подробнее',
     path: '/two-days'
},

{
    image:kayakFour,
    name: 'от 5000 рублей ',
    description: 'Двухдневный сплав ',  
    service: 'Аренда байдарок',
    serviceOne: 'Обед + Ужин на костре',
    serviceTwo: 'Номер в гостинице "Ангел"',
    button: 'Подробнее',
     path: '/two-days'
},

{
    image:check,
    name: 'от 5000 рублей ',
    description: 'Корпоративы ',
    serviceOne: 'Прокат трехместных байдарок',
    serviceTwo: 'Прокат трехместных байдарок',
    button: 'Подробнее',
   path: '/corporate',
},

{
    image:birthday,
    name: 'от 5000 рублей',
    description: 'Дни рождения', 
    serviceOne: 'Прокат трехместных байдарок',
    serviceTwo: 'Прокат трехместных байдарок', 
    button: 'Подробнее',
    path: '/birthday'
},


]
