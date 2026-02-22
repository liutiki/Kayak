import styles from './Way.module.scss';
import kayakTwo from '@/assets/kayakTwo.png';
import kayakThree from '@/assets/KayakThree.png';
import kayakFour from '@/assets/kayakFour.png';
import soup from '@/assets/supper.jpg';
import banya from '@/assets/banya.jpg';
import swim from '@/assets/swim.jpg';
import chun from '@/assets/chun.jpg';
import plov from '@/assets/Plov.jpg';
 import { Link } from 'react-router-dom';
import { SquareCheckBig } from 'lucide-react';
import { BadgeQuestionMark } from 'lucide-react';



export const Way = () =>{

    return(
          <div>

        
    <div className={styles.container}>
    <h2 className={styles.textHow}>Как проходит мероприятие:</h2>

    
   <p className={styles.textStyle}>
    <SquareCheckBig className={styles.check} />Сбор гостей в точке сбора в Черняховском районе
                                               (20 минут от Черняховска) в установленное время;</p>

   <p className={styles.textStyle}>
    <SquareCheckBig className={styles.check} />Организованный трансфер от точки сбора до места сплава;</p>

   <p className={styles.textStyle}>
    <SquareCheckBig className={styles.check}/>Инструктаж, подбор спасательных жилетов, распределение 
                                              по Байдаркам (есть двухместные и трехместные байдарки, сапборды);</p>

  </div>                                 

<div className={styles.piccontainer} >
<img src={kayakTwo} className={styles.picture} alt="Сплав по реке Анграпа Калининград" />   
<img src={kayakThree} className={styles.picture} alt="Сплав по реке Анграпа Калининград" />   
<img src={kayakFour} className={styles.picture} alt="Сплав по реке Анграпа Калининград" /> 
</div>

 <div className={styles.container}>
 <p className={styles.textStyle}>
    <SquareCheckBig className={styles.check}/>Прибытие к точке сбора, где ожидает приготовленный обед;</p>

< p className={styles.textStyle}>
    <SquareCheckBig className={styles.check}/>Баня на берегу реки, продолжительность 3 часа</p>

    <p className={styles.textStyle}>
    <SquareCheckBig className={styles.check}/>В этот период также можно загорать, купаться в реке, играть в волейбол или более спокойные игры, в зависимости от интересов собравшейся компании, погулять;
</p>

<p className={styles.textStyle}>
    <SquareCheckBig className={styles.check}/>Завершается программа подачей ужина, приготовленного на костре;

 <Link to="/TakeWith">
        <button className={styles.btnTake}>  <BadgeQuestionMark className={styles.icon}/>Что взять с собой</button>
 </Link>    
</p>

   

</div>


<div className={styles.piccontainer} >

<img src={plov} className={styles.picture} alt="Сплав по реке Анграпа Калининград" />  
<img src={banya} className={styles.banya} alt="Сплав по реке Анграпа Калининград" />   
<img src={swim} className={styles.picture} alt="Сплав по реке Анграпа Калининград" /> 

</div>


             </div>
    )
}