import { NavbarTop } from "./Navbar/NavbarTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Titul } from "./Components/Titul/Titul";
import { Contacts } from "./Components/Contacts/Contacts";

import { ContactsMobile } from "./Components/ContactsMobile/ContactsMobile";
import { Angrapa } from "./Components/Angrapa/Angrapa";

export const App = ()=>{


  return (
    <div>
    <ContactsMobile /> 
    <Contacts />
    <NavbarTop />
    <Titul />
    <Angrapa />
    </div>
  )
}
