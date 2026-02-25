import { OrderPhoneCall } from '@/ui/PhoneCall/OrderPhoneCall';
import log from '../../assets/log.jpg';
import styles from './Contacts.module.scss';
import { PhoneCall } from 'lucide-react';
import tele from '@/assets/media/tele.png';
import insta from '@/assets/media/insta.png';

const handleIconClick = () => {
        window.open('https://t.me/kaliningrad_splav39', '_blank'); 
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
    
                    <img src={insta}  className={styles.insta} />
                    
                    </div>
     <PhoneCall className={styles.phoneCall} /><a className={styles.telephone} href="tel:+79097919104" title="Позвонить">+79097919104</a>
     <OrderPhoneCall />
</div>
           
        </div>
    )
}