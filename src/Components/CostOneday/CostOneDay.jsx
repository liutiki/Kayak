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
            <li>Прокат двух,трехместных байдарок</li>
              <li>Спас жилет и гермомешок по желанию</li>
                <li>Обед (овощной суп на курином бульоне)</li>
                  <li>Сопровождение на маршруте</li>
                  <li>Ужин (плов на костре)</li>
        </ul>

         <ul className={styles.textContainer}>
            <li className={styles.text}>  <Megaphone className={styles.megaphone}/>Важно:</li>
            <li>Бронь мест в группе только по 100 % предоплате</li>
              <li> При отказе от сплава, менее чем за трое суток, предоплата не возвращается.
                 <br/>Просьба относиться с пониманием, такие правила.</li>
                <li>Размер группы от 10 до 20 человек</li>
                  <li className={styles.children} >Есть скидки для детей: младше 10 лет — 20%, старше 10 лет 10%</li>        
        </ul>
    </div>

    
    </div>
)

}