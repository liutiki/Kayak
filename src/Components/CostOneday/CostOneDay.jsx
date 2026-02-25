import styles from './CostOneDay.module.scss';
import { Megaphone } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { LayersPlus } from 'lucide-react';

export const CostOneDay = ()=>{

return (
    <div>
        <div className={styles.oneday}>
         <p className={styles.textone}> <Wallet className={styles.wallet} />Стоимость однодневного сплава<span className={styles.summ} >3800 рублей.</span></p>    
        </div>
       
    <div className={styles.container}>
           <ul className={styles.textContainer}>
            <li className={styles.text}>   <LayersPlus  className={styles.layer} />Встоимость включено:</li>
            <li>аренда байдарок (двухместных и трёхместных);</li>
              <li>спасательные жилеты и гермомешки <br/>(предоставляются по желанию в аренду );</li>
                <li>питание: обед и ужин <br/>(приготовленный на костре);</li>
                  <li>услуги инструктора <br/>(предоставляются по желанию за отдельную плату);</li>
              
        </ul>

         <ul className={styles.textContainer}>
            <li className={styles.text}>  <Megaphone className={styles.megaphone}/>Важно:</li>
            <li>Бронь мест в группе только по 50 % предоплате</li>
              <li> При отказе от сплава, менее чем за трое суток, предоплата не возвращается.
                 <br/>Просьба относиться с пониманием, такие правила.</li>
                <li>Размер группы от 10 до 20 человек</li>
                  <li className={styles.children} >Есть скидки для детей: 3-6 лет — бесплатно, 6-12 лет - 30%</li>        
        </ul>
    </div>

    
    </div>
)

}