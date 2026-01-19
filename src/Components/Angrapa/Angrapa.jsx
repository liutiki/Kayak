import styles from './Angrapa.module.scss';
import back from '@/assets/back.jpg';

export const Angrapa = () =>{


    return(
         <div className={styles.container}>
    
          <div className={styles.text}>             
          <h3 className={styles.angrapa} >Река<span className={styles.river}> Анграпа</span> славится своими красивыми пейзажами, 
           разнообразием флоры и фауны, а также спокойным течением, 
           что делает её идеальным местом для однодневных и многодневных сплавов.</h3>          
          </div>

          <div>
          <img src={back} className={styles.back} />   
          </div>
     
          </div>
    )
}