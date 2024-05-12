import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar className="max-w-screen-xl my-0 mx-auto" fluid rounded>
      <NavbarBrand href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dra Maria Baeza</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/">
          Rinoplastia
        </NavbarLink>
        <NavbarLink href="/tratamientos">Tratamientos</NavbarLink>
        <NavbarLink href="/preguntas">FAQ</NavbarLink>
        <NavbarLink href="/sobre-mi">Sobre mi</NavbarLink>
        <NavbarLink href="/contacto">Contactame</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export { NavBar };
