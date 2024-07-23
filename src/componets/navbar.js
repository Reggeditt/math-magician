import '../styles/Navbar.css';

function Navbar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Quote', path: '/quote' },
  ];

  return (
    <div className="navbar">
      <div className="navbar-brand"><h1>Math Magicians</h1></div>
      <div className="navbar-items">
        {links.map((link) => <a key={link.name} className="navbar-item" href={link.path}>{link.name}</a>)}
      </div>
    </div>
  );
}

export default Navbar;
