import { NavbarTop } from "./Navbar/NavbarTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Titul } from "./Titul/Titul";
import { Contacts } from "./Contacts/Contacts";
import { Way } from "./Way/Way";
import { ContactsMobile } from "./ContactsMobile/ContactsMobile";

export const App = ()=>{


  return (
    <div>
    <ContactsMobile /> 
    <Contacts />
    <NavbarTop />
    <Titul />
    <Way />
    </div>
  )
}
