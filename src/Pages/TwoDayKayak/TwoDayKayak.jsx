import { Contacts } from "@/Components/Contacts/Contacts"
import { ContactsMobile } from "@/Components/ContactsMobile/ContactsMobile"
import { Footer } from "@/Footer/Footer"
import { BtnOnMain } from "@/ui/BtnOnMain/BtnOnMain"
import { BtnCallOrganizator } from "../../ui/BtnCallOrganizator/BtnCallOrganizator"
import photoBirth from '@/assets/Twoday/twoDay.png';
import styles from './TwoDayKayak.module.scss';
import { useEffect } from "react"
import { Cost } from "../../Components/Cost/Cost"

export const TwoDayKayak =()=>{

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
           <h1>Двухдневный сплав</h1>
           <p>Ищете уникальный способ отпраздновать день рождения? Мы предлагаем вам незабываемое
             приключение на сплаве по живописной реке!</p>

             <p>Группа от 7 человек: Соберите своих друзей и отправляйтесь в
             увлекательное путешествие по реке. Мы гарантируем, что каждый найдет что-то по душе!</p>  

             <p>• Организация питания: Плов на костре </p>
             <p>• Украшения для дня рождения и торт по запросу и оплачиваются отдельно</p>
             <BtnCallOrganizator />

          </div>


                    
    </div>
                      <Cost />
                       <Footer />
          
        </div>
    )
}