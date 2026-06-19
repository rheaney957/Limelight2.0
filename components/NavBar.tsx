import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';

export interface NavBarProps {
  onMenuToggle: () => void;
  isOpen?: boolean;
}

export default function NavBar({ onMenuToggle, isOpen = false }: NavBarProps) {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.mobileMenuButton}
        onClick={onMenuToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <i className={isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </button>      <div className={styles.navContainer}>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link
              href="/"
              className={router.pathname === '/' ? styles.active : ''}
            >
              Club Nights
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/venues"
              className={router.pathname === '/venues' ? styles.active : ''}
            >
              Venues
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/venue-hire"
              className={router.pathname === '/venue-hire' ? styles.active : ''}
            >
              Venue Hire
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/contact-us"
              className={router.pathname === '/contact-us' ? styles.active : ''}
            >
              Contact Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/help-and-FAQs"
              className={router.pathname === '/help-and-FAQs' ? styles.active : ''}
            >
              Help &amp; FAQs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
