
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BirthdayBookingsForm from '../components/BirthdayBookingsForm'
export interface BirthdayBookingsProps {
  onMenuToggle: () => void;
  mobileMenuOpen?: boolean;
  SSRdata: any;
}

export default function BirthdayBookings({ onMenuToggle, mobileMenuOpen, SSRdata }: BirthdayBookingsProps)
{
  return (
    <div className={styles.container}>
     <Header route='BirthdayBookings'/>
      <NavBar onMenuToggle={onMenuToggle} isOpen={mobileMenuOpen}/>
      <Breadcrumbs />
      <main className={styles.main}>
        <Layout title="Birthday Bookings" FAQs={true}>
          <section className={styles.contact}>
            <BirthdayBookingsForm/>
          </section>
        </Layout>
        </main>
        <Footer />
    </div>
  )
}
