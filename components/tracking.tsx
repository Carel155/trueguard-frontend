"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";
import { clarity } from "react-microsoft-clarity";
// @ts-ignore
import RedditPixel from "react-reddit-pixel";

const Tracking = () => {
  const initializeTracking = () => {
    if (process.env.NEXT_PUBLIC_ENV !== "production" || typeof window === "undefined") {
      return;
    }

    ReactGA.initialize([{ trackingId: "G-84NHYJ10KR" }]);
    ReactGA.event;
    clarity.init("nj6mnc82ng");

    RedditPixel.init("a2_ffz9z2hbrd9k");
    RedditPixel.pageVisit();
  };

  useEffect(() => {
    initializeTracking();
  }, []);

  return null;
};

export default Tracking;
