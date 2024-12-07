function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center p-6">
        <a href="" className="font-semibold">
          Eleazar
        </a>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a href="">
                <span className="num">01.</span> About
              </a>
            </li>
            <li>
              <a href="">
                <span className="num">02.</span> Projects
              </a>
            </li>
            <li>
              <a href="">
                <span className="num">03.</span> Contact
              </a>
            </li>
            <li>
              <a href="" className="btn border-accent border p-3">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
