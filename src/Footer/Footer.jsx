import styles from './Footer.module.scss';
import { PhoneCall } from 'lucide-react';
import { PencilLine } from 'lucide-react';
import tele from '@/assets/media/tele.png';
import insta from '@/assets/media/insta.png';
import photoorg from '@/assets/photoorg.png';

const handleIconClick = () => {
        window.open('https://t.me/kaliningrad_splav39', '_blank'); 
    };


 export const Footer = () => {
       return (
           <footer >

            <>

                <div>
                <hr className={styles.style}/>
                <div className={styles.container}>

             <div>
            <img src={photoorg} className={styles.photoorg}/>
            </div>

            <div>
                <ul >
                    <li className={styles.orgsveta}>Светлана</li>
                      <li className={styles.splav}>Организатор сплавов, экскурсий</li>
                      </ul></div>

                <div className={styles.bag}>
                <PhoneCall className={styles.icon} />
                <p className={styles.ring}>Позвонить</p>
                <a className={styles.nounderline} href="tel:+79097919104" aria-label="Позвонить сплав байдарки"> +7-909-791-91-04</a>
                </div>
               
             
                <div className={styles.write}>
                <PencilLine className={styles.pencil} />  
                <p className={styles.mail}>Написать</p>
                <a className={styles.nounderline} href="mailto:info@mlship.ru " aria-label="Написать на почту"> XXXX@XXXXXX.ru </a>              
                </div>

                <div>
                <img src={tele}
                 className={styles.tele}
                 alt="Telegram" 
                 onClick={handleIconClick} 
                 style={{ cursor: 'pointer' }}
                />

                <img src={insta} width="80px"/>
                
                </div>

                </div>
                </div>
               
                <div className={styles.bag} >
                <p>© "Сплав_kaliningrad39", 2026</p>
                </div>
          </>
           </footer>
       );
   };

