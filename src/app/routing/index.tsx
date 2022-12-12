/** @format */

import React, { lazy, Suspense } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

const Landing = lazy(() => import("../pages/Landing/Landing"));
const Notfound = lazy(() => import("../pages/NotFound/Notfound"));
const PrivacyPolicy = lazy(() => import("../pages/Archive/PrivacyPolicy"));
const PublicLayout = lazy(() => import("../layout/PublicLayout/PublicLayout"));
const TermsandConditions = lazy(() => import("../pages/Archive/TermsandConditions"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/not-found" element={<Notfound />} />
      <Route path="" element={<PublicLayout />}>
        <Route path="" element={<Landing />} />
      </Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsandConditions />} />
     
      <Route
        path="*"
        element={<Landing />}
      />
    </Routes>
  );
};

export default Routing;
