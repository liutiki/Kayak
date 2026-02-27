import { Contacts } from "@/Components/Contacts/Contacts"
import { ContactsMobile } from "@/Components/ContactsMobile/ContactsMobile"
import { Footer } from "@/Footer/Footer"
import { BtnOnMain } from "@/ui/BtnOnMain/BtnOnMain"

export const Corporate =()=>{


    return(
        <div>
              <ContactsMobile />
                       <Contacts />
                       <BtnOnMain />
                       <Footer />
            <p>Corporate</p>
        </div>
    )
}