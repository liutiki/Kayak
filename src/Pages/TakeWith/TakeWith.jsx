import { Contacts } from "@/Components/Contacts/Contacts";
import { ContactsMobile } from "@/Components/ContactsMobile/ContactsMobile";
import { Footer } from '@/Footer/Footer.jsx';
import river from '@/assets/river.jpg';
import styles from './Takewith.module.scss';
import boy from '@/assets/takeWith/boyPhoto.jpg';
import { BtnOnMain } from "@/ui/BtnOnMain/BtnOnMain";



export const TakeWith =()=>{


    return (
        <div>
                  
          <ContactsMobile />
          <Contacts />

        

<div>
    <img className={styles.kayak} src={river} alt="Cплавы в калининграде" />
</div>

<BtnOnMain />


<div className={styles.container}>
<div>
<img src={boy} className={styles.cat} alt="Cплавы в калининграде" />
</div>


<ul className={styles.list}>
    <li className={styles.textTop}> Что взять с собой:</li>
       <li className={styles.text}>тапочки для сплава </li>
          <li className={styles.text}> Перчатки Хб</li>
             <li className={styles.text}> Крем от загара</li>
                <li className={styles.text}> Головной убор:</li>
                 <li className={styles.text}>  Бутылка питьевой воды 1,5 литра.</li>

</ul>

</div>



          <Footer />
        </div>
    )
}