import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <HelmetProvider>
      {isRefreshing ? (
        <p>Loading...</p>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/register" 
              element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />} 
            />
            <Route 
              path="/login" 
              element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} 
            />
            <Route 
              path="/contacts" 
              element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} 
            />
          </Routes>
        </Layout>
      )}
    </HelmetProvider>
  );
}

export default App;
