
import styles from '../styles/Home.module.css'
import buttonStyles from '../styles/Button.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Footer()
{
  const router = useRouter();
  return (
    <footer className={styles.footer} >
      <div className={styles.footerDetails}>
        <div className={styles.footerLinks}>
          <ul className={styles.footerRoutes}>
            <li>
              <Link
                href="./"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Live Shows
              </Link>
            </li>            
            <li>
              <Link
                href="./club-nights"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Club Nights
              </Link>
            </li>
             <li>
              <Link
                href="./venues"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Venues
              </Link>
            </li>
            <li>
              <Link
                href="./venue-hire"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Venue Hire
              </Link>
            </li>
            <li>
              <Link
                href="./help-and-FAQs"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                {`Help & FAQ\'s`}
              </Link>
            </li>
            <li>
              <Link
                href="./contact-us"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className={styles.footerSocialsList}>
              <li><a href="https://www.tiktok.com/@limelightbelfast" target="_blank" rel="noreferrer">
                <i style={{content:'f082'}} className="fa-brands fa-tiktok"></i></a>
              </li>
              <li><a href="https://twitter.com/LimelightNI" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.facebook.com/limelightbelfast/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/limelight.belfast/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
            <li>
              <Link
                href="./privacy-policy"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Privacy Policy
              </Link>
            </li>

          </ul>
          <div className={styles.footerCopyright}>The Limelight - {new Date().getFullYear()} -
            <Link
                href="./privacy-policy"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                 Privacy Policy
              </Link>
          </div>

        </div>
        <div className={styles.footerMailing}>

          <form id="subscribe-form" action="//www.venuecloud.net/s/f/21/17" method="POST" className={styles.footerForm}>
	          <input type="hidden" name="contact_permission" value="yes"/>
            <input className={styles.formName} type="text" name="firstname" placeholder="First Name" required />
            <input className={styles.formEmail} type="text" name="surname" placeholder="Surname" required />
            <input className={styles.formPhone} type="text" name="email" placeholder="Email" required />
            <input type="hidden" id="source" name="source" value="website"/>
            <input className={buttonStyles.primary} value='Join Mailing List' type="submit" name="btnSubmit" />
            <input
                type="button"
                name="submit"
                className={styles.unsubscribe}
                value='Unsubscribe'
              />
          </form>
        </div>
      </div>
      <div className={styles.footerFeat}> </div>
    </footer>
  )
}
