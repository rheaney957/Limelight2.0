import React from 'react';
import styles from '../styles/Form.module.css';
import button from '../styles/Button.module.css';

export default function BirthdayBookingsForm()
{
  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [submit, setSubmit] = React.useState(false);

  const handleChange = (att: string, value: string) =>
  {
    att === "name" && setContact({ ...contact, name: value })
    att === "email" && setContact({ ...contact, email: value });
    att === "phone" && setContact({ ...contact, phone: value });
    att === "comments" && setContact({ ...contact, comments: value });
  };

  return (
    <form action="location.php" method="post" className={styles.form}>
      {!submit ?
        <>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Birthday Bookings</h2>
            <p className={styles.formDescription}>
              If you have any questions regarding Birthday bookings please use the form below. We will be
              in touch with you as soon as we can.
            </p>
          </div>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="birthday-name">Full Name *</label>
              <input
                id="birthday-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
                onChange={(e) => handleChange('name', (e.target.value).toString())}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="birthday-email">Email Address *</label>
              <input
                id="birthday-email"
                type="email"
                placeholder="Enter your email address"
                required
                onChange={(e) => handleChange('email', (e.target.value).toString())}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="birthday-phone">Contact Phone Number *</label>
            <input
              id="birthday-phone"
              name="contactnum"
              type="text"
              placeholder="Enter your phone number"
              required
              onChange={(e) => handleChange('phone', (e.target.value).toString())}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="birthday-comments">Additional Comments</label>
            <textarea
              id="birthday-comments"
              name="comments"
              placeholder="Tell us about your birthday event — number of guests, preferred date, any special requests..."
              onChange={(e) => handleChange('comments', (e.target.value).toString())}
            ></textarea>
          </div>
          <div className={styles.submit}>
            <input className={button.primary} type="submit" name="Submit" value="Submit" onClick={() => setSubmit(true)} />
          </div>
        </>
        :
        <div className={styles.successMessage}>
          <h2>🎉 Request Sent!</h2>
          <p>Thank you for contacting us. We will be in touch with you shortly with your enquiry.</p>
        </div>
      }
    </form>
  )
}