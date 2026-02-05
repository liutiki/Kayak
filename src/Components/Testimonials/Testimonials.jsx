import styles from './Testimonials.module.scss';
import back from '@/assets/back.jpg';


export const Testimonials =() =>{

   const reviews = [
    {
        id: 1,
        text: "Отличный сервис!",
        image:{back}
    },
    {
        id: 2,
        text: "Очень доволен работой!",
        image:{back}
    },
    {
        id: 3,
        text: "Рекомендую всем!",
        image:{back}
    }
];
    return (
       <>
       <div className={styles.marquee}>
            <p>Отзывы</p>
            <div className={styles.marqueeContent}>
                {reviews.map(review => (
                    <div className={styles.review} key={review.id}>
                       <img src={review.image.back}  />
                        <span>{review.text}</span>
                    </div>
                ))}
            </div>
        </div>
       </>
    )
}