import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/MobileMenu.module.css';
import Footer from './Footer';
import Logo from '/public/images/LLlogo.png';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const router = useRouter();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.menuContainer}>
        <div className={styles.menuHeader}>
          <div className={styles.menuLogo}>
            <Link href="/">
              <Image src={Logo} alt="Limelight Logo" width={200} height={60} />
            </Link>
          </div>
          <div className={styles.menuSocials}>
            <ul>
              <li><a href="https://www.tiktok.com/@limelightbelfast" target="_blank" rel="noreferrer">
                <i style={{content:'f082'}} className="fa-brands fa-tiktok"></i></a>
              </li>
              <li><a href="https://twitter.com/LimelightNI" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.facebook.com/limelightbelfast/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/limelight.belfast/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
                Club Nights
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/venues" className={router.pathname === '/venues' ? styles.active : ''}>
                Venues
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/contact-us" className={router.pathname === '/contact-us' ? styles.active : ''}>
                Contact Us
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/help-and-FAQs" className={router.pathname === '/help-and-FAQs' ? styles.active : ''}>
                Help &amp; FAQs
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
