import { CostData } from "./CostData";
import styles from './Cost.module.scss';
import { useNavigate } from "react-router-dom";

   


export const Cost =() =>{

 const navigate = useNavigate(); 
    
    const handleButtonClick = (item) => {
        navigate(item.path); 
    };

    return (

        <>
        <div className={styles.service}>
            <p>Услуги и цены</p>
        </div>
            <div className={styles.cardPosition}>
            {CostData.map(item => {
                const { image, name, description, button, serviceOne, serviceTwo  } = item;
                return (
                    <article className={styles.card} key={item.id}>
                        <div className={styles.imageContainer}>
                            <img src={image} className={styles.image} alt="Сплавы на байдарках. Калининград" />
                        </div>
                        <div>
                          
                            <p className={styles.description}>{description}</p>
                              <h3 className={styles.title}>{name}</h3>
                             <p className={styles.serviceOne}>{serviceOne}</p>
                              <p className={styles.serviceTwo}>{serviceTwo}</p>
                            <button className={styles.button} onClick={() => handleButtonClick(item)}>
                                    {button}
                                </button>
                        </div>
                    </article>
                );
            })}
        </div>
        </>
    );
};