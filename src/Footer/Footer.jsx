import styles from './Footer.module.scss';
import { PhoneCall } from 'lucide-react';
import { PencilLine } from 'lucide-react';
import tele from '@/assets/media/tele.png';
import insta from '@/assets/media/insta.jpg';
import vk from '@/assets/media/vk.jpg';

 export const Footer = () => {
       return (
           <footer >
                <div>
                <hr className={styles.style}/>
                <div className={styles.container}>

                <div className={styles.bag}>
                    <PhoneCall className={styles.icon} />
                <p className={styles.ring}>Позвонить</p>
                <a className={styles.nounderline} href="tel:+79097771712" aria-label="Позвонить сплав байдарки"> +79097771712</a>
                <a className={styles.nounderline} href="tel:+79097771712" aria-label="Позвонить сплав байдарки"> +79097771712</a>
                </div>
               
             
                <div>
                  <PencilLine className={styles.pencil} />  
                <p className={styles.mail}>Написать</p>
                <a className={styles.nounderline} href="mailto:info@mlship.ru " aria-label="Написать на почту"> info@mlship.ru </a>
                </div>

                <div>
                <img src={tele} width="80px"/>
                <img src={insta} width="80px"/>
                <img src={vk} width="80px"/>
                </div>

                </div>
                </div>
          <p>© "Байдарки_kaliningrad39", 2026</p>
           </footer>
       );
   };

