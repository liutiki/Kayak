import { Modal, Button } from 'react-bootstrap';
import styles from './ModalCall.module.scss'; 
import { useState } from 'react';


export const ModalCall = ({ show, handleClose }) => {

     const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState({});

        const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isChecked) {
            setErrors({ checkbox: 'Необходимо согласие на обработку данных' });
            return;
        }

       
        e.target.submit(); 
    };

    return (
        <Modal className={styles.modal} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Наш менеджер свяжется с вами в ближайшее время</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={styles.formcarryContainer}>
                    <form action="https://formcarry.com/s/leQX_lit6ht" method="POST" enctype="multipart/form-data">
                        
                        <div>
                        </div>
                        <div>
                            <h5>Имя:</h5>
                            <input  className={styles.text} type="text" name="firstName" placeholder="Введите ваше имя" required />
                        </div>
                        <div>
                            <h5>Телефон:</h5>
                            <input className={styles.tel} type="tel" name="phone" placeholder="Введите ваш телефон" required />
                        </div>
                      <div className="form-check">
    <input
        className="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        checked={isChecked}
        onChange={handleCheckboxChange}
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
        Я согласен на обработку персональных данных
    </label>
    {errors.checkbox && <span className="text-danger">{errors.checkbox}</span>}
  
</div>
                        <Modal.Footer>
                            <Button className={styles.btn} type="submit" disabled={!isChecked}>
                                Отправить
                            </Button>
                              
                        </Modal.Footer>
                    </form>
                    
                </div>
            </Modal.Body>
        </Modal>
       
    );
};

