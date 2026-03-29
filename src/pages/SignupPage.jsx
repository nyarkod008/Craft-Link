import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_dark.png";
import "../styles/login.css";
import { authApi } from "../lib/supabase.js";

const SignupPage = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("customer");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    const { error: authError } = await authApi.signUp({
      email: formData.email,
      password: formData.password,
      username: formData.username,
      role: accountType,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    // Supabase sends a confirmation email — redirect to login with message
    navigate("/login", { state: { message: "Check your email to confirm your account, then log in!" } });
  };

  return (
    <div className="cl-login-page">
      <div className="cl-auth-wrapper">
        {/* Left Side: Image Sidebar (No text features as requested) */}
        <div className="cl-auth-side-panel">
          <div className="cl-auth-side-content">
            <h2 className="cl-auth-side-title">Crafting the Future.</h2>
            <p className="cl-auth-side-subtitle">Where vision meets master expertise.</p>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="cl-auth-form-panel">
          <div className="cl-login-card">
            <div className="cl-login-header">
              <div className="cl-login-logo-wrapper">
                <img src={logo} alt="CraftLink Logo" className="cl-login-header-logo" />
                <div className="cl-login-logo">CraftLink</div>
              </div>
              <h1 className="cl-login-title">Create Account</h1>
              <p className="cl-login-subtitle">Join CraftLink and find the best artisans</p>
            </div>

            <div className="cl-login-toggle" style={{ marginBottom: "24px" }}>
              <button
                type="button"
                className={`cl-login-toggle__option ${accountType === "customer" ? "cl-login-toggle__option--active" : ""}`}
                onClick={() => setAccountType("customer")}
              >
                Customer
              </button>
              <button
                type="button"
                className={`cl-login-toggle__option ${accountType === "provider" ? "cl-login-toggle__option--active" : ""}`}
                onClick={() => setAccountType("provider")}
              >
                Service Provider
              </button>
            </div>

            <form onSubmit={handleSubmit} className="cl-login-form">
              {error && (
                <div className="cl-auth-error">
                  {error}
                </div>
              )}

              <label className="cl-login-label">
                Username
                <input
                  type="text"
                  name="username"
                  className="cl-login-input"
                  placeholder="johndoe123"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="cl-login-label">
                Email Address
                <input
                  type="email"
                  name="email"
                  className="cl-login-input"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="cl-login-label">
                Password
                <div className="cl-password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="cl-login-input"
                    placeholder="Min. 6 characters"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="cl-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex="-1"
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    )}
                  </button>
                </div>
              </label>

              <label className="cl-login-label">
                Confirm Password
                <div className="cl-password-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="cl-login-input"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="cl-password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    tabIndex="-1"
                  >
                    {showConfirmPassword ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    )}
                  </button>
                </div>
              </label>

              <button
                type="submit"
                className="cl-login-button"
                style={{ marginTop: "20px", opacity: loading ? 0.7 : 1 }}
                disabled={loading}
              >
                {loading ? "Creating Account…" : "Create Account"}
              </button>

              <p style={{ textAlign: "center", marginTop: "24px", color: "var(--color-text-dim)", fontSize: "0.95rem" }}>
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  style={{ color: "var(--color-gold)", cursor: "pointer", fontWeight: "600", marginLeft: "4px" }}
                >
                  Log In
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
