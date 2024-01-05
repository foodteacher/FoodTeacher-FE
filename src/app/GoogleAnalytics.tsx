"use client";
import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  return (
    <div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HBH9V3GMM7"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HBH9V3GMM7')`}
      </Script>
    </div>
  );
};

export default GoogleAnalytics;
