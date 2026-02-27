import { Contacts } from "../../Components/Contacts/Contacts"
import { ContactsMobile } from "../../Components/ContactsMobile/ContactsMobile"
import { Footer } from "../../Footer/Footer"
import { BtnOnMain } from "../../ui/BtnOnMain/BtnOnMain"

export const TwoDayKayak =()=>{


    return(
        <div>
              <ContactsMobile />
                       <Contacts />
                       <BtnOnMain />
                       <Footer />
            <p>TestTwo</p>
        </div>
    )
}