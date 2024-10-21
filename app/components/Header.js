import Link from "next/link";

const Header = () => {
  return <header>
    <strong>Yuronn</strong>
    <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/complex-dashboard">Dashboard</Link>
    </nav>
    </header>;
};

export default Header;
