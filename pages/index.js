import Layout from "../components/Layout"
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
      <Layout>
        <h1 className={styles.title}>Viktorns nya hemsida</h1>
        <p className={styles.description}>
          Hej och välkommen till min hemsida! Jag är en aspirerande webbutvecklare 
        </p>
      </Layout>
  );
}
