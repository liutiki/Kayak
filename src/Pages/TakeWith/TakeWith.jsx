import { Contacts } from "@/Components/Contacts/Contacts";
import { ContactsMobile } from "@/Components/ContactsMobile/ContactsMobile";
import { Footer } from '@/Footer/Footer.jsx';
import river from '@/assets/river.jpg';
import styles from './Takewith.module.scss';
import cat from '@/assets/cat.jpg';
import { Link } from "react-router-dom";



export const TakeWith =()=>{


    return (
        <div>
                  
          <ContactsMobile />
          <Contacts />

        

<div>
    <img className={styles.kayak} src={river} alt="сплавы в калининграде" />
</div>

<div className={styles.btnposition}>
 <Link to="/">
        <button className={styles.btnMain} > На главную </button>
 </Link>  

</div>


<div className={styles.container}>
<div>
<img src={cat} className={styles.cat} alt="сплавы в калининграде" />
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