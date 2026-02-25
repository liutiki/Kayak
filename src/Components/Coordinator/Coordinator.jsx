import orgphoto from '@/assets/orgphoto.jpg';
import styles from './Coordinator.module.scss';

 const handleButtonClick = () => {
        window.open('https://t.me/svetlana_k_94', '_blank'); 
    };

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
        <p className={styles.text}>Меня зовут Светлана, и мы организовываем сплавы с 2023 года. 
            Нашей главной целью является создание безопасного и увлекательного опыта для всех участников. 
            Мы тщательно подбираем маршруты,
             учитывая уровень подготовки и интересы группы, чтобы каждый мог 
             насладиться красотой природы и получить заряд положительных эмоций.</p>
            <div>

        <button className={styles.orgbtn} onClick={handleButtonClick}>
        Написать организатору
        </button>
        </div>
      </div>
     </div>

            
        </>
    )
}