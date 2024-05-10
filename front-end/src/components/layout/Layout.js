import Head from 'next/head';
import styles from './Layout.module.css';

export default function Layout({ title, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
}