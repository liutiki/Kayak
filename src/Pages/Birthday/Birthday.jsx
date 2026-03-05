import { Contacts } from "@/Components/Contacts/Contacts"
import { ContactsMobile } from "@/Components/ContactsMobile/ContactsMobile"
import { Footer } from "@/Footer/Footer"
import { BtnOnMain } from "@/ui/BtnOnMain/BtnOnMain";
import photoBirth from '@/assets/birthday/birthday.jpg';
import styles from './Birthday.module.scss';
import { useEffect } from "react";
import { BtnCallOrganizator } from "@/ui/BtnCallOrganizator/BtnCallOrganizator";

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
           <h1>Организация дня рождения на сплаве по реке</h1>
           <p>Ищете уникальный способ отпраздновать день рождения? Мы предлагаем вам незабываемое
             приключение на сплаве по живописной реке!</p>

             <p>Группа от 7 человек: Соберите своих друзей и отправляйтесь в
             увлекательное путешествие по реке. Мы гарантируем, что каждый найдет что-то по душе!</p>  

             <p>• Организация питания: Плов на костре </p>
             <p>• Украшения для дня рождения и торт по запросу и оплачиваются отдельно</p>
             <BtnCallOrganizator />

          </div>
       
           </div>
       <Footer />
        </div>
    )
}