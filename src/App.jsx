// import { useEffect } from "react";
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/contactsOps"; 
// import { selectLoading, selectError } from "./redux/contactsSlice";
// import ContactForm from "./components/contactForm/ContactForm";
// import SearchBox from "./components/searchBox/SearchBox";
// import ContactList from "./components/contactList/ContactList";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
