import { useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { FaSeedling, FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import "./AuthPage.css";

const perks = [
  "100% natural, cruelty-free products",
  "Track your orders in one place",
  "Exclusive offers for members",
];

function AuthPage({ mode }) {
  const isSignup = mode === "signup";
  const { user, signup, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/";

  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // already logged in -> home
  if (user) return <Navigate to="/" replace />;

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      if (form.name.trim().length < 2) return setError("Please enter your full name.");
      if (form.password.length < 6) return setError("Password must be at least 6 characters.");
      if (form.password !== form.confirm) return setError("Passwords do not match.");
    }

    setLoading(true);
    const result = isSignup ? await signup(form) : await login(form);
    setLoading(false);

    if (!result.ok) return setError(result.error);
    navigate(redirectTo, { replace: true });
  };

  return (
    <section className="auth">
      <div className="auth-shell">
        {/* Left brand panel */}
        <aside className="auth-brand">
          <FaSeedling className="auth-brand-icon" aria-hidden="true" />
          <h2>Naturally pure.<br />Beautifully you.</h2>
          <p>Join Ateeq Herbal and bring nature's care into your daily routine.</p>
          <ul>
            {perks.map((perk) => (
              <li key={perk}>
                <FaCheckCircle aria-hidden="true" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Form */}
        <form className="auth-form" onSubmit={onSubmit} noValidate>
          <h1>{isSignup ? "Create your account" : "Welcome back"}</h1>
          <p className="auth-sub">
            {isSignup
              ? "Sign up to place orders and save your details."
              : "Log in to continue to your account."}
          </p>

          {isSignup && (
            <div className="auth-field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                autoComplete="name"
                placeholder="Your full name"
              />
            </div>
          )}

          <div className="auth-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <div className="auth-pass">
              <input
                id="password"
                type={showPass ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={onChange}
                autoComplete={isSignup ? "new-password" : "current-password"}
                placeholder={isSignup ? "At least 6 characters" : "Your password"}
              />
              <button
                type="button"
                className="auth-eye"
                onClick={() => setShowPass((v) => !v)}
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {isSignup && (
            <div className="auth-field">
              <label htmlFor="confirm">Confirm password</label>
              <input
                id="confirm"
                type={showPass ? "text" : "password"}
                name="confirm"
                value={form.confirm}
                onChange={onChange}
                autoComplete="new-password"
                placeholder="Re-enter your password"
              />
            </div>
          )}

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? "Please wait..." : isSignup ? "Create account" : "Log in"}
          </button>

          <p className="auth-switch">
            {isSignup ? (
              <>
                Already have an account? <Link to="/login">Log in</Link>
              </>
            ) : (
              <>
                New to Ateeq Herbal? <Link to="/signup">Create an account</Link>
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}

export default AuthPage;