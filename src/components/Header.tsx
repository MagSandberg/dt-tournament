function Header() {
  return (
    <>
      <h3 className="float-md-start mb-0">Den episka DT turneringen!</h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <a
          className="nav-link fw-bold py-1 px-0 active"
          aria-current="page"
          href="#"
        >
          Home
        </a>
        <a className="nav-link fw-bold py-1 px-0" href="#">
          Features
        </a>
        <a className="nav-link fw-bold py-1 px-0" href="#">
          Contact
        </a>
      </nav>
    </>
  );
}

export default Header;
