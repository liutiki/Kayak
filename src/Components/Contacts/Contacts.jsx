import { OrderPhoneCall } from '@/ui/PhoneCall/OrderPhoneCall';
import log from '@/assets/log.jpg';
import styles from './Contacts.module.scss';
import { PhoneCall } from 'lucide-react';
import tele from '@/assets/media/tele.png';
import insta from '@/assets/media/insta.png';
import max from '@/assets/media/max.png';



const handleIconClick = () => {
        window.open('https://t.me/kaliningrad_splav39', '_blank'); 
    };

const handleInstaClick = () => {
        window.open('https://t.me/kaliningrad_splav39', '_blank'); 
    };

const handleMaxClick = () => {
    window.open('https://max.ru/join/lOzQwBfOcdpq2q52-YAcKbWhfl89e5j8OoDN3eIxyrc', '_blank'); 
};



export const Contacts = () =>{


    return(
           <div className={styles.busket}>
            <div className={styles.container}>
            <img src={log} alt="сплав по реке Анграпа" width="170px"/>
            <div className={styles.riverCont}>
                 <p className={styles.text}>Сплав_Калининград39</p>
            <p className={styles.river}>Сплавы по реке Анграпа. </p> 
            </div>
          

            </div>

                   <div className={styles.prime}>
                    <div className={styles.media}>
                    <img src={tele}
                     className={styles.tele}
                     alt="Telegram" 
                     onClick={handleIconClick} 
                     style={{ cursor: 'pointer' }}
                    />
    
                    <img src={insta}  className={styles.insta} alt="Instagram" 
                     onClick={handleInstaClick} 
                     style={{ cursor: 'pointer' }} />

                    <img src={max}  className={styles.max} alt="Max"
                    onClick={handleMaxClick} 
                    style={{ cursor: 'pointer' }}/>
                    
                    </div>
    <a className={styles.telephone} href="tel:+79097919104" title="Позвонить">+79097919104</a>
     <OrderPhoneCall />
</div>
           
        </div>
    )
}