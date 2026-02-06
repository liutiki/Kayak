import orgphoto from '@/assets/orgphoto.jpg';
import styles from './Coordinator.module.scss';

export const Coordinator =() =>{
    return (
        <>
        <div className={styles.containerall}>
           <p className={styles.all}>Вы можете задать все вопросы по сплаву организатору </p>  
        </div>
       


        <div className={styles.container} >
      
        <div>
            <img src={orgphoto} className={styles.orgphoto} />  
        </div>
        
        
      <div className={styles.textorg} >
        <p className={styles.text}>Меня зовут Светлана, и я организую сплавы с 2023 года. Моей главной целью является создание безопасного
             и увлекательного опыта для всех участников. Я тщательно подбираю маршруты, 
            учитывая уровень подготовки и интересы группы, чтобы каждый мог насладиться красотой
             природы и получить заряд положительных эмоций.</p>
             <div>
            <button className={styles.orgbtn}>Написать организатору</button>
             </div>
      </div>
     </div>

            
        </>
    )
}