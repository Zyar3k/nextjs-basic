import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam repellat
        totam vero fugit. Quae porro neque, qui rerum, earum possimus incidunt
        nemo debitis ut minus, distinctio amet officiis deserunt. Voluptatem
        architecto eos, quisquam, nesciunt doloribus nisi, aspernatur sit
        sapiente delectus neque quam adipisci doloremque tenetur consequuntur
        labore ipsa omnis.
      </p>
      <Link href='/people'>
        <a>See People Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
