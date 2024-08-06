"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";
import { clarity } from "react-microsoft-clarity";

const Tracking = () => {
  const initializeTracking = () => {
    if (process.env.NEXT_PUBLIC_ENV !== "production") {
      return;
    }

    ReactGA.initialize([{ trackingId: "G-84NHYJ10KR" }]);
    ReactGA.event;
    clarity.init("nj6mnc82ng");
  };

  useEffect(() => {
    initializeTracking();
  }, []);

  return null;
};

export default Tracking;
