import styles from "./page.module.css";
import ExampleClient from "@/components/ExampleClient";
// import ExampleServer from "@/components/ExampleServer";

export default function Home() {
  console.log("Where do I render?");
  return (
    <main className={styles.main}>
      <h1 className="h1-bold">Hello World! 👋🏻</h1>
      <h2 className="h2-bold">Shiva is coming!! 🚀</h2>
      <ExampleClient />
      {/* <ExampleServer /> */}
    </main>
  );
}
