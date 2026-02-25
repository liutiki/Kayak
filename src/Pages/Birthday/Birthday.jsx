import { Contacts } from "@/Components/Contacts/Contacts"
import { ContactsMobile } from "@/Components/ContactsMobile/ContactsMobile"
import { Footer } from "@/Footer/Footer"
import { BtnOnMain } from "../../ui/BtnOnMain/BtnOnMain";
import styles from './Birthday.module.scss';

export const Birthday =()=>{


    return(
        <div>
           <ContactsMobile />
           <Contacts />
           <BtnOnMain />
           <Footer />
        </div>
    )
}