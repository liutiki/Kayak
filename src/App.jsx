import { NavbarTop } from "./Navbar/NavbarTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Titul } from "./Components/Titul/Titul";
import { Contacts } from "./Components/Contacts/Contacts";
import { ContactsMobile } from "./Components/ContactsMobile/ContactsMobile";
import { Angrapa } from "./Components/Angrapa/Angrapa";
import { Way } from "./Components/Way/Way";

export const App = ()=>{


  return (
    <div>
    <ContactsMobile /> 
    <Contacts />
    <NavbarTop />
    <Titul />
    <Angrapa />
    <Way/>
    </div>
  )
}
