import TopMenu from "./TopMenu.js";
import contact from "./contactus.js";
import logo from "./logo.js";
import bHero from "./bHero.js";
import HowWeWork from "./HowWeWork.js";
import ToggleMenu from "./togglemenu.js";
import OurProject from "./OurProject.js";
import Slider from "./slider.js";
import Faq from "./faq.js";
import Conction from "./conection.js";
import OurProject1 from "./ourprojectheader.js";
import HowWe from "./how_we.js";
import Features from "./featuresh.js";
import Features1 from "./features.js";
import Client from "./clients.js";
import Contactf from "./contactform.js";
import Form from "./form.js";
import OurBlog from "./ourBlog.js";
import Faqq from "./faq1.js";
import FooterDark from "./footerDark.js";
import FooterLight from "./footerLight.js";
import Footer from "./footer.js";

import AboutHero from "./jsAbout/abouthero.js";
import WeR from "./jsAbout/whoWeare.js";
import Process from "./jsAbout/process.js";
import Inspire from "./jsAbout/inspire.js";
import Benefit from "./jsAbout/benfit.js";
import Cardben from "./jsAbout/cardben.js";
import Benlogon from "./jsAbout/benlogo.js";
import Team from "./jsAbout/team.js";
Team()
Benlogon()
Cardben()
Benefit()
Inspire()
WeR()
AboutHero()
Process()



Footer()
FooterLight()
FooterDark()
Faqq()
OurBlog()
Form()
Contactf()
Client()
Features1()
Features()
HowWe()
OurProject1()
Conction()
Faq()
Slider()
OurProject()
ToggleMenu()
HowWeWork()
bHero()
logo()
TopMenu()
contact()




document.addEventListener("DOMContentLoaded",function(){
    setTimeout(()=>{
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        

    }),1000;
});
