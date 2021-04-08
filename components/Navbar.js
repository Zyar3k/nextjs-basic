import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo.png' alt='' width={128} height={128} />
        <h1>People List</h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/people'>
        <a>People Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
