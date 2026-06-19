
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsForm from '../components/ContactUsForm'
export interface ContactUsProps {
  onMenuToggle: () => void;
  mobileMenuOpen?: boolean;
  SSRdata: any;
}

export default function ContactUs({ onMenuToggle, mobileMenuOpen, SSRdata }: ContactUsProps)
{
  return (
    <div className={styles.container}>
     <Header route='Contact Us'/>
      <NavBar onMenuToggle={onMenuToggle} isOpen={mobileMenuOpen}/>
      <Breadcrumbs />
      <main className={styles.main}>
        <Layout title="Contact Us" FAQs={true}>
          <section className={styles.contact}>
            <ContactUsForm/>
          </section>
        </Layout>
        </main>
        <Footer />
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://www.shine.net/newShineSite/out/JSON/featuredGigs.json', { cache: 'no-store' })
  const data = await res.json()
  return {props: {SSRdata: data}, revalidate: 60}
}
