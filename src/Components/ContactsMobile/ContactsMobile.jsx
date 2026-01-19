import styles from './ContactsMobile.module.scss';
import { PhoneCall } from 'lucide-react';
import { PhoneCallMobile } from '@/ui/PhoneCallMobile/PhoneCallMobile';

export const ContactsMobile = () =>{

    return(
          
<div className={styles.prime}>
     <a className={styles.telephone} href="tel:+79097919104" title="Позвонить"><PhoneCall className={styles.phoneCall} />+79097919104</a>
<PhoneCallMobile />
</div>
           
        
    )
}