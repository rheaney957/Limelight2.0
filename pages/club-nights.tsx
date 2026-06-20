
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export interface ClubNightsProps {
  onMenuToggle: () => void;
  mobileMenuOpen?: boolean;
  SSRdata: any;
}

export default function ClubNights({ onMenuToggle, mobileMenuOpen, SSRdata }: ClubNightsProps)
{
  return (
    <div className={styles.container}>
     <Header route='ClubNights'/>
      <NavBar onMenuToggle={onMenuToggle} isOpen={mobileMenuOpen}/>
      <Breadcrumbs />
      <main className={styles.main}>
        <Layout title="Club Nights" FAQs={true} BirthdayBookings>
          <section className={styles.clubSection}>
            <article className={styles.clubCard}>
              <div className={styles.clubMedia}>
                <Image
                  src="/images/UFO25.jpg"
                  alt="UFO Wednesdays at Limelight"
                  width={640}
                  height={360}
                  className={styles.clubImage}
                />
              </div>
              <div className={styles.clubContent}>
                <span className={styles.badge}>Wednesdays</span>
                <h2>UFO Wednesdays</h2>
                <p className={styles.clubIntro}>
                  Belfast’s biggest Wednesday student party is back across 3 club rooms, with a fresh new music policy and brand-new visuals.
                </p>
                <ul className={styles.clubHighlights}>
                  <li>Guest & resident DJs across Limelight 1, 2 and the Party Lounge</li>
                  <li>£3 drinks promos, 2 beer gardens and immersive lighting shows</li>
                  <li>Themed nights, special effects and the best student party atmosphere</li>
                </ul>
                <div className={styles.roomGrid}>
                  <span>Limelight 1: Dance Anthems / Disco / House / Bangers</span>
                  <span>Limelight 2: Pop / Hip Hop / Party</span>
                  <span>Party Lounge: Cheese / Indie / Requests</span>
                </div>
              </div>
            </article>

            <article className={styles.clubCard}>
              <div className={styles.clubMedia}>
                <Image
                  src="/images/babba25.jpg"
                  alt="Babba Thursdays at Limelight"
                  width={640}
                  height={360}
                  className={styles.clubImage}
                />
              </div>
              <div className={styles.clubContent}>
                <span className={styles.badge}>Thursdays</span>
                <h2>Babba Thursdays</h2>
                <p className={styles.clubIntro}>
                  Limelight’s Thursday night BABBA brings the biggest cheesy pop anthems from the last 4 decades, perfect for a fun singalong night out.
                </p>
                <ul className={styles.clubHighlights}>
                  <li>All your favourite guilty-pleasure hits served with high-energy lighting</li>
                  <li>£2.50 drinks promos and a lively crowd ready to sing along</li>
                  <li>A party built for everyone who loves a night of cheese and nostalgia</li>
                </ul>
              </div>
            </article>
          </section>
        </Layout>
        </main>
        <Footer />
    </div>
  )
}
