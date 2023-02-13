import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [address, setAddress] = useState("");

  const airdrop = async () => {
    const response = await fetch("/api/airdrop", {
      method: "POST",
      body: JSON.stringify({ address }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) return alert("Request failed!");
    
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>Claim Token</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ITYU.png" />
      </Head>

      <div>
        <img className={styles.image} src="./ITYU.png" />
      </div>

      <input
        className={styles.input}
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Wallet Address"
      />

      <button onClick={airdrop} className={styles.button}>
        Claim 5 ITYU Tokens to your wallet
      </button>
    </div>
  );
}
