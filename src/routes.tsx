/** @format */

import { Routes as Router, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import BecomeCustomerPage from "./pages/BecomeCustomerPage/BecomeCustomerPage";
import TermsConditionsPage from "./pages/TermsConditionsPage/TermsConditionsPage";
import NotfoundPage from "./submodule/pages/NotFoundPage/NotfoundPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="*" element={<NotfoundPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<LandingPage />} />
        </Route>
        <Route path="/become-customer" element={<BecomeCustomerPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
