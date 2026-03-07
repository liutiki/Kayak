import { Contacts } from "@/Components/Contacts/Contacts"
import { ContactsMobile } from "@/Components/ContactsMobile/ContactsMobile"
import { Footer } from "@/Footer/Footer"
import { BtnOnMain } from "@/ui/BtnOnMain/BtnOnMain"
import { BtnCallOrganizator } from "@/ui/BtnCallOrganizator/BtnCallOrganizator"
import photoTwoDay from '@/assets/TwoDay/twoDay.jpg';
import styles from './TwoDayKayak.module.scss';
import { useEffect } from "react"
import { Cost } from "@/Components/Cost/Cost"

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
            <p>
            <img src={photoTwoDay} className={styles.photoBirth} alt="Сплавы в Калининграде"/>       
            </p>
           
          
          
          <div className={styles.container}>
           <h1>Двухдневный сплав</h1>
          
           <p> Предлагаем вам незабываемое приключение на сплаве по живописной реке!</p>

             <p>Группа от 10 человек: Соберите своих друзей и отправляйтесь в
             увлекательное путешествие по реке. </p>  
              <p> Мы гарантируем, что каждый найдет что-то по душе!</p> 


              <p>• -трансфер от точки сбора до места сплава;</p>
                <p>• -аренда байдарок/сапбордов, спасательных жилетов, весел;</p>
               
                    <p>• Инструктаж.</p>
             <p>• -трехразовое питание:</p>
                <p>•завтрак, сытный обед и ужин будут приготовлены на костре;</p>
             <p>• Место под палатки</p>
              <p>• Дополнительно оплачивается место в гостинице.</p>
                <p>• -баня на берегу реки Анграпа (3 часа, по желанию);</p>
                    <p>• -Отдых в беседке;</p>
                      <p>• Вечером костер.</p>
               <p>• Санитарный сбор.</p>

               
             <BtnCallOrganizator />

          </div>


                    
    </div>
                      <Cost />
                       <Footer />
          
        </div>
    )
}