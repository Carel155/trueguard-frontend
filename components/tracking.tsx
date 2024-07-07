"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";

const Tracking = () => {
  const initializeTracking = () => {
    if (process.env.NEXT_PUBLIC_ENV !== "production") {
      return;
    }

    ReactGA.initialize([{ trackingId: "G-84NHYJ10KR" }]);
  };

  useEffect(() => {
    initializeTracking();
  }, []);

  return null;
};

export default Tracking;
