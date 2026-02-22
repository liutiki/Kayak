import { ContactsMobile } from '@/Components/ContactsMobile/ContactsMobile.jsx';
import {Contacts } from '@/Components/Contacts/Contacts.jsx';
import { Titul} from '@/Components/Titul/Titul.jsx';
import { Angrapa} from '@/Components/Angrapa/Angrapa.jsx';
import { Way } from '@/Components/Way/Way.jsx';
import { CostOneDay } from '@/Components/CostOneday/CostOneDay.jsx';
import {Cost } from '@/Components/Cost/Cost.jsx';
import {Coordinator } from '@/Components/Coordinator/Coordinator.jsx';
import {Testimonials} from '@/Components/Testimonials/Testimonials.jsx';
import {Footer} from "@/Footer/Footer.jsx";
import { NavbarTop } from '@/Navbar/NavbarTop';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


gsap.registerPlugin(ScrollTrigger);

export const Home = () => {

    useEffect(() => {
 
        const sections = document.querySelectorAll('.animate-section');

        sections.forEach(section => {
            gsap.fromTo(section, 
                { y: 100, opacity: 0 }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%", 
                        toggleActions: "play none none reverse", 
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
        };
    }, []);



  return (
    <div>
    <ContactsMobile />
      <Contacts />
      <NavbarTop /> 

      <Titul />
      <div className="animate-section">
      <Angrapa />
        <div className="animate-section">
      <Way />
      </div>
        <div className="animate-section">
      <CostOneDay />
      </div>
        <div className="animate-section">
      <Cost />
      </div>
      <Coordinator />
      <Testimonials />
      <Footer />
</div>

    </div>
  );
};