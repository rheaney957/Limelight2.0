
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VenueHireForm from '../components/venueHireForm'
export interface VenueHireProps {
  onMenuToggle: () => void;
  mobileMenuOpen?: boolean;
  SSRdata: any;
}

export default function VenueHire({ onMenuToggle, mobileMenuOpen, SSRdata }: VenueHireProps)
{
  return (
    <div className={styles.container}>
     <Header route='Venue Hire'/>
      <NavBar onMenuToggle={onMenuToggle} isOpen={mobileMenuOpen}/>
      <Breadcrumbs />
      <main className={styles.main}>
        <Layout title="Venue Hire" FAQs={true}>
          <section className={styles.contact}>
            <VenueHireForm/>
          </section>
        </Layout>
        </main>
        <Footer />
    </div>
  )
}

