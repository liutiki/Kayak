import { Link } from "react-router-dom";
import styles from './BtnOnMain.module.scss';

export const BtnOnMain =() =>{
    return (
        <>
<div className={styles.btnposition}>
 <Link to="/">
        <button className={styles.btnMain} > На главную </button>
 </Link>  

</div>


        </>
    )
}