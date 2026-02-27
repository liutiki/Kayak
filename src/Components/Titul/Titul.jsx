import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import kayak from '@/assets/o.jpg';
import styles from './Titul.module.scss';
import { Clock } from 'lucide-react';
import { MapPinPlus } from 'lucide-react';
import { Utensils } from 'lucide-react';

export const Titul = () =>{
const textRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Обработчик события загрузки изображения
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        if (imageLoaded) {
           
            const timer = setTimeout(() => {
                gsap.fromTo(
                    textRef.current,
                    { opacity: 0, }, 
                    { opacity: 1, y: 0, duration: 1.4 } 
                );
            }, 1000); // Задержка в 1 секунду

            return () => clearTimeout(timer); 
        }
    }, [imageLoaded]);

    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={kayak} 
                className={styles.kayak} 
                alt="Сплавы по реке Калининград" 
                onLoad={handleImageLoad} />
                <div className={styles.textOverlay}>
                
                    <p  className={styles.splav} ref={textRef}>Cплавы на байдарках</p>
                    <p className={styles.river} ref={textRef}>"Насладитесь спокойными сплавами по живописной реке и откройте для себя красоту природы!"</p>

                    <div className={styles.bag}>

                       <ul className={styles.box}>
                       <Clock className={styles.icon}/>
                       <li className={styles.textTop}>Продолжительность</li>
                       <li className={styles.textBox}>2-3 часа</li>
                       </ul>

                       <ul className={styles.box}>
                            <MapPinPlus className={styles.icon} />
                       <li className={styles.textTop}>Протяженность пути</li>
                       <li className={styles.textBox}>12 км </li>
                       </ul>
                       
                       <ul className={styles.box}>
                            <Utensils className={styles.icon} />
                       <li className={styles.textTop}>Обед+Ужин</li>
                       <li className={styles.textBox}>На костре</li>
                       </ul>


                    </div>
                </div>
            </div>
        </div>
    );
}