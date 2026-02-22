import { OrderPhoneCall } from '@/ui/PhoneCall/OrderPhoneCall';
import logo from '@/assets/logo.jpg'

import styles from './Contacts.module.scss';
import { PhoneCall } from 'lucide-react';



export const Contacts = () =>{


    return(
           <div className={styles.busket}>
            <div className={styles.container}>
            <img src={logo} alt="сплав по реке Анграпа" width="170px"/>
            <p className={styles.text}>Сплав_Калининград39</p>
            <p className={styles.river}>Сплавы по рекам Калининграда. </p>
            </div>

<div className={styles.prime}>
     <a className={styles.telephone} href="tel:+79097919104" title="Позвонить"><PhoneCall className={styles.phoneCall} />+79097919104</a>
     <OrderPhoneCall />
</div>
           
        </div>
    )
}