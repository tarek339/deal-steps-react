import { Route, Routes } from "react-router-dom";
import {
  ProductListing,
  Auth,
  VerifyEmail,
  UserProfile,
  EditUserProfile,
  ChangeUserEmail,
  ChangeUserPassword,
} from "./views";
import { LoadingSpinner, NavBar } from "./components";
import { useEffect } from "react";
import { useRequests, useSelectors } from "./hooks";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const { userLoading } = useSelectors();
  const { fetchUserProfile } = useRequests();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (userLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/edit-user-profile" element={<EditUserProfile />} />
          <Route path="/edit-user-email" element={<ChangeUserEmail />} />
          <Route path="/edit-user-password" element={<ChangeUserPassword />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
