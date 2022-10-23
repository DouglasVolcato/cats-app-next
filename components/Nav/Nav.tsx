import Link from "next/link";

export function Nav() {
  return (
    <div>
      <nav className="navbar bg-light bg-gradient">
        <div className="container-fluid bg-light bg-gradient">
          <Link href="/" className="navbar-brand mb-0 h1 bg-light bg-gradient">
            Navbar
          </Link>
        </div>
      </nav>
    </div>
  );
}
