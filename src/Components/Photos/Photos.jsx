import photoKayak from '@/assets/photos/PhotoThree.jpg';
import photoTwo from '@/assets/photos/PhotoTwo.jpg';
import photoThree from '@/assets/photos/Soup.jpg';
import photoFour from '@/assets/photos/Sveta.jpg';
import photoFive from '@/assets/photos/Twodays.jpg';

import photoSeven from '../../assets/photos/PhotoSeven.jpg';
import photoNine from '@/assets/photos/vesla.jpg';


import styles from './Photos.module.scss';

export const Photos =()=>{


    return (
        <>
        <div className={styles.placeText} id="photo">
            <p className={styles.photoText}>Фото со сплавов</p>
        </div>
        <div className={styles.kayak}>
            <img src={photoKayak} className={styles.imgKayak} alt="Сплав на байдарках"/>
              <img src={photoTwo} className={styles.imgKayak} alt="Сплав на байдарках"/>
                <img src={photoFour} className={styles.imgKayak} alt="Сплав на байдарках"/>
                   <img src={photoThree} className={styles.imgKayak} alt="Сплав на байдарках"/>
                      <img src={photoFive} className={styles.imgKayak} alt="Сплав на байдарках"/>
                      
                          <img src={photoSeven} className={styles.imgOne} alt="Сплав на байдарках"/>
                                 <img src={photoNine} className={styles.imgOne} alt="Сплав на байдарках"/>
        </div>
        </>

    )
}