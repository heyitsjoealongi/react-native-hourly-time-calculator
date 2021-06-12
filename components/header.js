import React from "react";

import Head from "next/head";

function Header() {
  return (
    <div>
      <Head>
        <title>React Hourly Time Calculator</title>
        <meta name="title" content="React Hourly Time Calculator" />
        <meta
          name="description"
          content="Calculate the duration of time that occured between two times."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://react-hourly-time-calculator.vercel.app/"
        />
        <meta property="og:title" content="React Hourly Time Calculator" />
        <meta
          property="og:description"
          content="Calculate the duration of time that occured between two times."
        />
        <meta
          property="og:image"
          content="https://react-hourly-time-calculator.vercel.app/preview-image.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://react-hourly-time-calculator.vercel.app/"
        />
        <meta property="twitter:title" content="React Hourly Time Calculator" />
        <meta
          property="twitter:description"
          content="Calculate the duration of time that occured between two times."
        />
        <meta
          property="twitter:image"
          content="https://react-hourly-time-calculator.vercel.app/preview-image.png"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
    </div>
  );
}

export default Header;
