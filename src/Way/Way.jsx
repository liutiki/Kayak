import styles from './Way.module.scss';
import { UserCheck } from 'lucide-react';

export const Way = () =>{


    return(
        <div className={styles.container}>
            <div>
                 <UserCheck />
                 <h1>Полноценный отдых за день</h1>
                 <p>Полноценный отдых за день</p>
            </div>

                
        
        </div>
    )
}