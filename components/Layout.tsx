/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../styles/Layout.module.css";
import {
  FC,
  ReactNode,
  HTMLAttributes,
  useState,
  useEffect,
  HTMLInputTypeAttribute,
} from "react";
import FeaturedCard from "./FeaturedCard";
import React from "react";
import Card from "./Card";
import Button from "./Button";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

export type LayoutPropTypes = HTMLAttributes<HTMLElement> & {
  title: string;
  FAQs?: boolean;
  children?: ReactNode | undefined;
  data?: any;
};

const Layout: FC<LayoutPropTypes> = ({
  title,
  FAQs = false,
  children,
  data,
}) => {
  const [dateField, setDateField] = useState<Date>();
  const [searchField, setSearchField] = useState("");
  const [stateDate, setstateDate] = useState("");
  const [monthField, setMonthField] = useState<number | null>(null);
  const currDate = new Date();
  const [featuredGigsData, setfeaturedGigsData] = useState<any[]>();
  const [searchShow, setSearchShow] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const imagePerRow = 5;

  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  React.useEffect(() => {
    setLoading(true);
    const ms = Date.now();
    fetch("/JSON/featuredGigs.json?dummy=" + ms, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setfeaturedGigsData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const el = document.getElementById("dateSearch") as HTMLInputElement;

    setDateField(undefined);
    if (el) {
      el.value = "";
    } else {
      new Error("No date field found");
    }

    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const handleDateChange = (date: Date | React.SetStateAction<Date> | null) => {
    setSearchField("");
    const el = document.getElementById("search") as HTMLInputElement;
    if (el) {
      el.value = "";
    } else {
      new Error("No search field found");
    }

    // @ts-ignore
    date && setDateField(date);
    date && setstateDate(format(date as Date, "yyyy-MM-dd"));
    if (date === null) {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = e.target.value ? parseInt(e.target.value) : null;
    setMonthField(selectedMonth);

    // Clear other filters when month is selected
    if (selectedMonth !== null) {
      setSearchField("");
      setDateField(undefined);
      const searchEl = document.getElementById("search") as HTMLInputElement;
      const dateEl = document.getElementById("dateSearch") as HTMLInputElement;
      if (searchEl) searchEl.value = "";
      if (dateEl) dateEl.value = "";
      setSearchShow(true);
    } else {
      setSearchShow(false);
    }
  };

  const filteredData = data?.filter(
    (gig: {
      id: number;
      title: string;
      venue: string;
      subTitle?: string;
      startDate: {
        date: Date;
      };
      pricing?: string;
      isSoldOut?: boolean;
      doors?: string;
      websiteImage?: string;
      ticketsUrl: string;
    }) => {
      return (
        gig?.title?.toLowerCase()?.includes(searchField.toLowerCase()) ||
        gig?.venue?.toLowerCase()?.includes(searchField.toLowerCase()) ||
        gig?.subTitle?.toLowerCase().includes(searchField.toLowerCase())
      );
    }
  );

  const filteredDateData = data?.filter(
    (gig: {
      id: number;
      title: string;
      venue: string;
      subTitle?: string;
      startDate: {
        date: Date;
      };
      pricing?: string;
      isSoldOut?: boolean;
      doors?: string;
      websiteImage?: string;
      ticketsUrl: string;
    }) => {
      return (
        stateDate &&
        gig.startDate.date.toString().split(" ")[0].match(stateDate.toString())
      );
    }
  );

  const filteredMonthData = data?.filter(
    (gig: {
      id: number;
      title: string;
      venue: string;
      subTitle?: string;
      startDate: {
        date: Date;
      };
      pricing?: string;
      isSoldOut?: boolean;
      doors?: string;
      websiteImage?: string;
      ticketsUrl: string;
    }) => {
      if (monthField === null) return true;
      const gigDate = new Date(gig.startDate.date);
      return gigDate.getMonth() === monthField;
    }
  );

  const filtered = filteredData?.map((gig: any) => {
    return (
      <Card
        key={gig.id}
        gig={{
          time: gig?.doors,
          startDate: gig?.startDate,
          name: gig?.title,
          support: gig?.subTitle,
          location: gig?.venue,
          websiteImage: gig?.websiteImage,
          ticketsUrl: gig?.ticketsUrl,
          status: gig?.isSoldOut,
        }}
      />
    );
  });

  const filteredDate = filteredDateData?.map((gig: any) => (
    <Card
      key={gig?.id}
      gig={{
        time: gig?.doors,
        startDate: gig?.startDate,
        name: gig?.title,
        support: gig?.subTitle,
        location: gig?.venue,
        websiteImage: gig?.websiteImage,
        ticketsUrl: gig?.ticketsUrl,
        status: gig?.isSoldOut,
      }}
    />
  ));

  const filteredMonth = filteredMonthData?.map((gig: any) => (
    <Card
      key={gig?.id}
      gig={{
        time: gig?.doors,
        startDate: gig?.startDate,
        name: gig?.title,
        support: gig?.subTitle,
        location: gig?.venue,
        websiteImage: gig?.websiteImage,
        ticketsUrl: gig?.ticketsUrl,
        status: gig?.isSoldOut,
      }}
    />
  ));

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mailingListContainer}>
          <h3 className={styles.mailingListTitle}>
            Stay Updated with Limelight
          </h3>
          <form
            id="subscribe-form"
            className={styles.mailingListForm}
            action="//www.venuecloud.net/s/f/21/17"
            method="POST"
          >
            <div className={styles.mailingListRow}>
              <div className={styles.mailingListField}>
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className={styles.mailingListField}>
                <input type="email" placeholder="Email Address" required />
              </div>
            </div>
            <button type="submit" className={styles.mailingListButton}>
              Subscribe
            </button>
          </form>
        </div>
        {!FAQs ? (
          <div className={styles.searchContainer}>
            <div className={styles.searchDate}>
              <input
                id="dateSearch"
                placeholder="Search By Date"
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={(e) => {
                  const value = e.target.value;
                  handleDateChange(value ? new Date(value) : null);
                }}
              />
            </div>
            <div
              className={`${styles.searchText} ${
                FAQs && styles.searchTextNone
              }`}
            >
              {!FAQs && (
                <input
                  type="search"
                  id="search"
                  placeholder="Search by Venue, Artist or Event"
                  onChange={handleChange}
                />
              )}
            </div>
            <div className={styles.searchMonth}>
              {!FAQs && (
                <select
                  onChange={handleMonthChange}
                  value={monthField !== null ? monthField : ""}
                >
                  <option value="">Select Months</option>
                  {[...Array(12)].map((_, month) => (
                    <option key={month} value={month}>
                      {new Date(0, month).toLocaleString("default", {
                        month: "long",
                      })}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        ) : undefined}
        <div className={styles.header}>{title}</div>
        <div
          className={`${styles.cardsGigs} ${
            FAQs ? styles.gridLayoutFAQs : styles.gridLayout
          }`}
        >
          {searchShow ? (
            searchField ? (
              <>{filtered}</>
            ) : monthField !== null ? (
              <>{filteredMonth}</>
            ) : (
              dateField && <>{filteredDate}</>
            )
          ) : (
            children
          )}
        </div>
      </div>
    </main>
  );
};

export default Layout;
