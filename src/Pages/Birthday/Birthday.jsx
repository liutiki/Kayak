import { Contacts } from "@/Components/Contacts/Contacts"
import { ContactsMobile } from "@/Components/ContactsMobile/ContactsMobile"
import { Footer } from "@/Footer/Footer"
import { BtnOnMain } from "@/ui/BtnOnMain/BtnOnMain";
import photoBirth from '@/assets/birthday/birthday.jpg';
import styles from './Birthday.module.scss';
import { useEffect } from "react";
import { BtnCallOrganizator } from "@/ui/BtnCallOrganizator/BtnCallOrganizator";
import { Cost } from "../../Components/Cost/Cost";

export const Birthday =()=>{

   useEffect(() => {
            window.scrollTo(0, 0);
        }, []);


    return(
        <div>
           <ContactsMobile />
           <Contacts />
           <BtnOnMain />

           <div className={styles.position}>
           <img src={photoBirth} className={styles.photoBirth} alt="Сплавы в Калининграде"/>
          <div className={styles.container}>
           <h1 className={styles.text}>Организация дня рождения на сплаве по реке</h1>
           <p className={styles.text}>Ищете уникальный способ отпраздновать день рождения? Мы предлагаем вам незабываемое
             приключение на сплаве по живописной реке!</p>
            <h4 className={styles.text}>Условия</h4>
             <p className={styles.text}>Группа от 7 человек: Соберите своих друзей и отправляйтесь в
             увлекательное путешествие по реке. Мы гарантируем, что каждый найдет что-то по душе!</p>  
            
             <p className={styles.text}>• Организация питания: Плов на костре.</p>
             <p className={styles.text}>• Баня</p>
             <p className={styles.text}>• Украшения для дня рождения и торт по запросу и оплачиваются отдельно</p>
             <BtnCallOrganizator />

          </div>
    
       
           </div>
      <Cost />

       <Footer />
        </div>
    )
}