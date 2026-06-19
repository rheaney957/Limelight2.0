/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
export interface VenuesProps {
  onMenuToggle: () => void;
  mobileMenuOpen?: boolean;
}


export default function Venues({ onMenuToggle, mobileMenuOpen }: VenuesProps)
{
  return (
    <div className={styles.container}>
     <Header route='Venue'/>

      <NavBar onMenuToggle={onMenuToggle} isOpen={mobileMenuOpen}/>
      <Breadcrumbs />

      <main className={styles.main}>
        <Layout title="Venue" FAQs={true}>
           <section className={styles.venueCard}>

            <h3>Limelight 1</h3>
            <p>1 Ormeau Avenue, Belfast, BT2 8HD</p>
            <p>Limelight 1 is the newest addition to The Limelight complex, a brand live/club venue. The venue has recently hosted live shows from acts including SLAYER, TWO DOOR CINEMA CLUB, TH BREEDERS, DISCLOSURE, STEVE EARLE and PRIMAL SCREAM.</p>
             <br/>
            <h3>Limelight 2</h3>
            <p>1 Ormeau Avenue, Belfast, BT2 8HD</p>
            <p>The Limelight 2 first opened in 1984, and has hosted a veritable "who's who" of live acts, including THE STROKES, MANIC STREET PREACHERS, JOE STRUMMER, BLUR and countless others. The venue regularly hosts live & club events.</p>
             <br/>
            <h3>The Rock Garden</h3>
            <p>1 Ormeau Avenue, Belfast, BT2 8HD</p>
            <p>Our rooftop terrace, The Rock Garden is open everyday until late as part of Katy's Bar and is also open as part our weekly clubnights and live shows.</p>
             <br/>
             </section>
          </Layout>
        </main>

      <Footer />
    </div>
  )
}
