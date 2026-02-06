import { CostData } from "./CostData";
import styles from './Cost.module.scss';

    const handleButtonClick = (item) => {
    // Здесь вы можете обработать событие нажатия на кнопку
    // Например, показать дополнительную информацию о товаре
    alert(`Вы нажали на кнопку "Подробнее" для ${item.name}`);
};


export const Cost =() =>{


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
                            <img src={image} className={styles.image} alt="vessel" />
                        </div>
                        <div>
                            <h3 className={styles.title}>{name}</h3>
                            <p className={styles.description}>{description}</p>
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