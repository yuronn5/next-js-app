import Link from "next/link";

const Header = () => {
  return <header>
    <strong>Yuronn</strong>
    <nav>
    <Link href="/">Home</Link>
    <Link href="/client">Client</Link>
    <Link href="/about">About</Link>
    <Link href="/client/show">Show</Link>
    </nav>
    </header>;
};

export default Header;
