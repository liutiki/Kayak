import styles from './Testimonials.module.scss';
import { testdata } from './testdata';


export const Testimonials =() =>{

       return (
       <>
       <div className={styles.bag}>
         <p className={styles.answer}>Отзывы</p>
       </div>


       <div className={styles.marquee}>
           
            <div className={styles.marqueeContent}>
                {testdata.map(review => (
                    <div className={styles.review} key={review.id}>
                       <img src={review.image}  />
                        <span>{review.text}</span>
                    </div>
                ))}

                 {testdata.map(review => (
                        <div className={styles.review} key={review.id + testdata.length}>
                            <img src={review.image}  />
                            <span>{review.text}</span>
                        </div>
                    ))}
            </div>
        </div>
       </>
    )
}