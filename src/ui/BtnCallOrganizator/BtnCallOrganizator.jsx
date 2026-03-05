import styles from './BtnCallOrganizator.module.scss';

export const BtnCallOrganizator =()=>{
  
   const handleButtonClick = () => {
        window.open('https://t.me/svetlana_k_94', '_blank'); 
    };
    return(
        <div>
            <button className={styles.orgbtn} onClick={handleButtonClick}> Написать организатору</button>
        </div>
    )
}