import { useState } from 'react';
import styles from './Testimonials.module.scss';
import { testdata } from './testdata';


export const Testimonials =() =>{

      const [isPaused, setIsPaused] = useState(false);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const handleTouchStart = () => {
        setIsPaused(true);
    };

    const handleTouchEnd = () => {
        setIsPaused(false);
    };

       return (
       <>
       <div className={styles.bag} id="testimonials">
         <p className={styles.answer}>Отзывы</p>
       </div>
 <div 
              className={`${styles.marquee} ${isPaused ? styles.paused : ''}`}
               
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                onTouchStart={handleTouchStart} 
                onTouchEnd={handleTouchEnd}
            >

      
           
            <div className={styles.marqueeContent}>
                {[...testdata, ...testdata].map(review => (
                    <div className={styles.review} key={review.id}>
                       <img src={review.image} alt="Отзыв"  />
                        <span>{review.text}</span>
                    </div>
                ))}

                 
            </div>
        </div>
       
       </>
       
    )
}
