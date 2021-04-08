import Head from "next/head";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam repellat
        totam vero fugit. Quae porro neque, qui rerum, earum possimus incidunt
        nemo debitis ut minus, distinctio amet officiis deserunt. Voluptatem
        architecto eos, quisquam, nesciunt doloribus nisi, aspernatur sit
        sapiente delectus neque quam adipisci doloremque tenetur consequuntur
        labore ipsa omnis.
      </p>
      <Link href='/people'>
        <a className={styles.btn}>See People Listing</a>
      </Link>
    </div>
  );
}
