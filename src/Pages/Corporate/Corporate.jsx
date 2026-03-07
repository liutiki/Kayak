import { Contacts } from "@/Components/Contacts/Contacts";
import { ContactsMobile } from "@/Components/ContactsMobile/ContactsMobile";
import { Footer } from "@/Footer/Footer";
import { BtnOnMain } from "@/ui/BtnOnMain/BtnOnMain";
import { BtnCallOrganizator } from "@/ui/BtnCallOrganizator/BtnCallOrganizator";
import photoBirth from '@/assets/corporate/comp.png';
import { useEffect } from "react";
import styles from './Corporate.module.scss';
import { Cost } from "@/Components/Cost/Cost"



export const Corporate =()=>{

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
           <h1 className={styles.text}>Корпоративы для компаний</h1>
           <p className={styles.text}>Ищете уникальный способ отпраздновать день рождения? Мы предлагаем вам незабываемое
             приключение на сплаве по живописной реке!</p>

             <p className={styles.text}>Группа от 12 человек: Соберите своих друзей и отправляйтесь в
             увлекательное путешествие по реке. Мы гарантируем, что каждый найдет что-то по душе!</p>  

             <p className={styles.text}>• -трансфер от точки сбора до места сплава. </p>

            <p>• -аренда байдарок, спасательных жилетов, весел;</p>
               <p>• Инструктаж по технике безопасности. </p>
             <p>• -двухразовое питание: сытный обед и ужин будут приготовлены на костре;</p>
             
                    <p>• -баня на берегу реки (3 часа);</p>
                    <p>• -Отдых в беседке;</p>
                      <p>• -Развлекательная программа.</p>
              <p>• Встоимость не входит.</p>
               <p className={styles.text}>Трансфер из Калининграда до Черняховска</p>
                      <p className={styles.text}>Дополнительные напитки и еда.</p>
             <BtnCallOrganizator />

          </div>


                    
    </div>

     <Cost />
   <Footer />

        </div>
    )
}