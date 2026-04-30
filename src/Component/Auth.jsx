import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

function Auth({ mode = "login" }) {
  const isLogin = useMemo(() => mode === "login", [mode]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fullName = formData.fullName.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if (!email || !password || (!isLogin && !fullName)) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      return;
    }

    if (password.length < 6) {
      setStatus({
        type: "error",
        message: "Password must be at least 6 characters long.",
      });
      return;
    }

    if (password !== confirmPassword) {
      setStatus({ type: "error", message: "Passwords do not match." });
      return;
    }

    try {
      setIsSubmitting(true);
      const endpoint = isLogin ? "auth/login" : "auth/signup";
      const payload = isLogin
        ? { email, password }
        : { fullName, email, password };

      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.message || "Unable to process your request.",
        });
        return;
      }

      if (isLogin) {
        localStorage.setItem("otci-current-user", JSON.stringify(result.user));
        setStatus({
          type: "success",
          message: `${result.message} Redirecting...`,
        });
        setTimeout(() => navigate("/"), 800);
        return;
      }

      setStatus({
        type: "success",
        message: "Account created successfully. You can now log in.",
      });
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Cannot reach backend server. Please start backend on port 5000.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src="/auth-bg.png"
        alt="Authentication background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-xl backdrop-blur-md">
          <p className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Welcome
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            {isLogin ? "Welcome Back!" : "Create Your Account"}
          </h1>
          <p className="mt-4 max-w-md text-blue-50">
            Join Om Typing & Computer Institute to access courses, mock tests,
            digital library content, and student support.
          </p>
          <div className="mt-8 space-y-2 text-sm text-blue-50">
            <p>✓ Practical skill-based training</p>
            <p>✓ Flexible batches and support</p>
            <p>✓ Trusted learning environment</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md sm:p-8">
          <div className="inline-flex rounded-lg bg-white/20 p-1">
            <Link
              to="/login"
              className={`rounded-md px-5 py-2 text-sm font-semibold transition ${
                isLogin
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={`rounded-md px-5 py-2 text-sm font-semibold transition ${
                !isLogin
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Signup
            </Link>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white">
            {isLogin ? "Sign In" : "Sign Up"}
          </h2>
          <p className="mt-1 text-sm text-slate-200">
            {isLogin
              ? "Enter your details to continue learning."
              : "Fill in your details to start your journey."}
          </p>

          <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
            {!isLogin ? (
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="rounded-md border border-white/35 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-slate-200 outline-none transition focus:border-white"
              />
            ) : null}
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-md border border-white/35 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-slate-200 outline-none transition focus:border-white"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              required
              className="rounded-md border border-white/35 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-slate-200 outline-none transition focus:border-white"
            />
            {!isLogin ? (
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength={6}
                required
                className="rounded-md border border-white/35 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-slate-200 outline-none transition focus:border-white"
              />
            ) : null}

            {status.message ? (
              <p
                className={`rounded-md px-3 py-2 text-sm ${
                  status.type === "error"
                    ? "bg-red-100/90 text-red-700"
                    : "bg-green-100/90 text-green-700"
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {isSubmitting
                ? "Please wait..."
                : isLogin
                ? "Login Now →"
                : "Create Account →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Auth;
