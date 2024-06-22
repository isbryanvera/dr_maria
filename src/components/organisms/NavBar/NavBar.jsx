import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar className="max-w-screen-xl my-0 mx-auto bg-transparent z-10 relative lg:py-14" fluid rounded>
      <NavbarBrand href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500 dark:text-white">Dra Ángeles Baeza</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/rinoplastia">
          Rinoplastía
        </NavbarLink>
        <NavbarLink href="./tratamientos">Tratamientos</NavbarLink>
        <NavbarLink href="./sobre-mi">Sobre mí</NavbarLink>
        <NavbarLink href="./preguntas">FAQ</NavbarLink>
        <NavbarLink href="./contacto">Contáctame</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export { NavBar };
