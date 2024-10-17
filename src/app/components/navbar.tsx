// app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">MyCompany</Link>
        <ul className="nav-links">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <style jsx>{`
        .navbar {
          background-color: #333;
          padding: 1rem;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          color: white;
          font-size: 1.5rem;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
