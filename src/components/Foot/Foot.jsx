import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import imgProfile from '../../assets/svg/Profile.svg';  

const Foot = () => {
  return (
    <Footer className="mt-14" container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src={imgProfile}
            alt="Dra Ángeles Baeza"
            name="Dra Ángeles Baeza"
          />
          <FooterLinkGroup className="justify-center">
            <FooterLink href="/tratamientos">Tratamientos</FooterLink>
            <FooterLink href="/preguntas">FAQ</FooterLink>
            <FooterLink href="/sobre-mi">Sobre mi</FooterLink>
            <FooterLink href="/contacto">Contactame</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Bisturi Agency" year={2024} />
      </div>
    </Footer>
  );
};

export { Foot };
