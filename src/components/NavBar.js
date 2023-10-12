function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <div>
      <nav>
        <a href={`#${links[0]}`}>{links[0]}</a>
      </nav>
      <nav>
        <a href={`#${links[1]}`}>{links[1]}</a>
      </nav>
      <nav>
        <a href={`#${links[2]}`}>{links[2]}</a>
      </nav>
    </div>
  );
}

export default NavBar;
