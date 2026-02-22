import { useState } from 'react';
import styles from './OrderPhoneCall.module.scss';
import { ModalCall } from '@/shared/ModalCallOredr/ModalCall';



export const OrderPhoneCall = () =>{


   const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return(

        <div>
              
     <button className={styles.order} onClick={handleShow}>Заказать звонок </button>
  <ModalCall show={showModal} handleClose={handleClose} />

</div>
    )
};