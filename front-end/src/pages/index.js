import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Section from '../components/section/Section';

export default function Home() {
  return (
    <Layout title="Guide to International Money Transfers">
      <Header title="Guide to International Money Transfers" />

      <Section title="Using Banks for International Transfers">
        Banks are the traditional method of sending money overseas...
      </Section>

      <Section title="Using Wise (formerly Transferwise) for International Transfers">
        Wise is a popular service for international money transfers...
      </Section>

      <Section title="Other Money Transfer Services">
        There are many other services that offer international money transfers...
      </Section>

      <Section title="Conclusion">
        When sending money internationally, it's important to consider the fees...
      </Section>

    </Layout>
  );
}