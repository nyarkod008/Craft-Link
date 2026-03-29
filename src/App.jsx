import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/global.css";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import ServiceRequestPage from "./pages/ServiceRequestPage.jsx";
import ArtisanProfilePage from "./pages/ArtisanProfilePage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CategorySearchResultsPage from "./pages/CategorySearchResultsPage.jsx";
import MyRequestsPage from "./pages/MyRequestsPage.jsx";
import AccountSettingsPage from "./pages/AccountSettingsPage.jsx";
import ComplaintsPage from "./pages/ComplaintsPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import FlexMatchPage from "./pages/FlexMatchPage.jsx";
import FlexRequestFormPage from "./pages/FlexRequestFormPage.jsx";
import ArtisanDashboard from "./pages/ArtisanDashboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<AccountSettingsPage />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path="/chat/:chatId" element={<ChatPage />} />
        <Route path="/flex-request" element={<FlexRequestFormPage />} />
        <Route path="/flex-match" element={<FlexMatchPage />} />
        <Route path="/my-requests" element={<MyRequestsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/search" element={<CategorySearchResultsPage />} />
        <Route path="/service-request" element={<ServiceRequestPage />} />
        <Route path="/artisans/:artisanId" element={<ArtisanProfilePage />} />
        <Route path="/review/:artisanId" element={<ReviewPage />} />
        <Route path="/provider-dashboard" element={<ArtisanDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

