import Layout from '../layout/Layout';
import Header from '../header/Header';
import Section from '../section/Section';
import Introduction from '@/components/introduction/Introduction';

export default function Home() {
    return (
        <>
            <Layout />
            <Header />
            <Introduction />
            <Section
                title='3 Best Ways to Send Money'
                content='While there are many ways to send money, we narrowed it down to three top-performing companies that offer useful features for different needs.'
            />
            <Section
                title='PayPal'
                content='If you’re sending money within the U.S., PayPal is a flexible option, allowing you to transfer money to your bank account or spend money directly from the app. However, international transfers come with high fees, so PayPal is better suited for domestic transfers.'
            />
            <Section
                title='WorldRemit'
                content='For budget-friendly international transfers, WorldRemit delivers. WorldRemit offers competitive fees on cash transfers to more than 130 countries.'
            />
            <Section
                title='Wise'
                content='Wise is a free borderless bank account that holds more than 50 currencies. With a dedicated debit card, you can convert currency across balances, making it easy to manage money when traveling between countries.'
            />
        </>
    )
}

