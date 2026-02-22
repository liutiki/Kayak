import { useState } from 'react';
import { ModalCall } from '@/shared/ModalCallOredr/ModalCall';
import styles from './PhoneCallMobile.module.scss';


export const PhoneCallMobile = () =>{

  const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return(
        <div >
           
       <button className={styles.btn} onClick={handleShow}>Заказать звонок</button>
             <ModalCall show={showModal} handleClose={handleClose} />          
        </div>

        
    )
}