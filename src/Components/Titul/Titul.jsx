import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import kayak from '@/assets/kayak.jpg';
import styles from './Titul.module.scss';

export const Titul = () =>{
const textRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Обработчик события загрузки изображения
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        if (imageLoaded) {
            // Запускаем анимацию через 1 секунду после загрузки изображения
            const timer = setTimeout(() => {
                gsap.fromTo(
                    textRef.current,
                    { opacity: 0, }, // Начальные стили
                    { opacity: 1, y: 0, duration: 1.4 } // Конечные стили
                );
            }, 1000); // Задержка в 1 секунду

            return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
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
                     <p className={styles.river} ref={textRef}>Анграпа.Преголь.Еще река</p>

                    <div className={styles.bag}>
                        <p>Протяженность маршрута</p>
                    </div>
                </div>
            </div>
        </div>
    );
}