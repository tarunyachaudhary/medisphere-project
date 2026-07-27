import { useEffect, useRef, useState } from "react";
import { ArrowLeft, CheckCircle2, Mail, Phone, X } from "lucide-react";
import {
  GoogleAuthProvider,
  OAuthProvider,
  RecaptchaVerifier,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase/auth";

function GoogleIcon() {
  return (
    <span className="text-2xl font-black tracking-[-5px]">
      <span className="text-[#4285F4]">G</span>
    </span>
  );
}

export default function Login({ onClose = () => window.history.back() }) {
  const [mode, setMode] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const recaptchaRef = useRef(null);

  const finishLogin = (user) => {
    console.log("Logged in user:", user);
    window.location.assign("/dashboard");
  };

  // Completes passwordless email-link sign-in after the user opens the email.
  useEffect(() => {
    const completeEmailLogin = async () => {
      if (!isSignInWithEmailLink(auth, window.location.href)) return;

      const savedEmail = window.localStorage.getItem("emailForSignIn");
      const loginEmail =
        savedEmail || window.prompt("Enter your email address");

      if (!loginEmail) return;

      try {
        const result = await signInWithEmailLink(
          auth,
          loginEmail,
          window.location.href,
        );

        window.localStorage.removeItem("emailForSignIn");
        finishLogin(result.user);
      } catch {
        setError(
          "This sign-in link is invalid or has expired. Please request a new one.",
        );
      }
    };

    completeEmailLogin();
  }, []);

  const handleGoogle = async () => {
    setError("");
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      finishLogin(result.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleEmail = async (event) => {
    event.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);

    try {
      await sendSignInLinkToEmail(auth, email, {
        url: `${window.location.origin}/login`,
        handleCodeInApp: true,
      });

      window.localStorage.setItem("emailForSignIn", email);
      setMessage("Sign-in link sent. Check your email to continue.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 const handlePhone = async (event) => {
   event.preventDefault();
   setError("");

   // Remove spaces and dashes
   const cleanedPhone = phone.replace(/[\s-]/g, "");

   let formattedPhone = "";

   // Accept 10-digit Indian number
   if (/^[6-9]\d{9}$/.test(cleanedPhone)) {
     formattedPhone = `+91${cleanedPhone}`;
   }
   // Accept +91XXXXXXXXXX
   else if (/^\+91[6-9]\d{9}$/.test(cleanedPhone)) {
     formattedPhone = cleanedPhone;
   } else {
     setError("Please enter a valid 10-digit Indian mobile number.");
     return;
   }

   setLoading(true);

   try {
     if (!recaptchaRef.current) {
       recaptchaRef.current = new RecaptchaVerifier(
         auth,
         "recaptcha-container",
         {
           size: "invisible",
         },
       );
     }

     const result = await signInWithPhoneNumber(
       auth,
       formattedPhone,
       recaptchaRef.current,
     );

     setConfirmation(result);
     setMessage(`Verification code sent to ${formattedPhone}.`);
   } catch (err) {
     setError(err.message);
     recaptchaRef.current?.clear();
     recaptchaRef.current = null;
   } finally {
     setLoading(false);
   }
 };

  const verifyOtp = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await confirmation.confirm(otp);
      finishLogin(result.user);
    } catch {
      setError("That verification code is invalid or expired.");
    } finally {
      setLoading(false);
    }
  };

  const isPhoneMode = mode === "phone";

return (
  <main className="fixed inset-x-0 bottom-0 top-20 z-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#17142d] via-[#322568] to-[#111827] p-3 font-sans">
    {/* Background glow effects */}
    <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-500/35 blur-3xl" />
    <div className="absolute -bottom-20 -right-16 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl" />
    <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/10 blur-3xl" />

    <section className="relative z-10 mx-auto w-full max-w-[590px] scale-90 rounded-3xl border border-white/30 bg-white/15 px-7 py-8 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-12 sm:py-9">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close login"
        className="absolute right-6 top-6 rounded-lg p-2 text-white/90 transition hover:bg-white/15"
      >
        <X size={25} />
      </button>

      <header className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-[32px]">
          Log in or sign up
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[17px] leading-7 text-white/70">
          We were eagerly waiting for you.
          <br className="hidden sm:block" /> Become the member of our team
        </p>
      </header>

      {message && (
        <div className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-4 py-3 text-sm text-emerald-100 backdrop-blur-md">
          <CheckCircle2 size={18} />
          {message}
        </div>
      )}

      {error && (
        <p className="mt-6 rounded-xl border border-red-300/30 bg-red-400/15 px-4 py-3 text-sm text-red-100 backdrop-blur-md">
          {error}
        </p>
      )}

      <div className="mt-10 space-y-4">
        {!isPhoneMode && (
          <>
            <button
              type="button"
              onClick={handleGoogle}
              disabled={loading}
              className="flex h-16 w-full items-center justify-center gap-5 rounded-full border border-white/30 bg-white/10 text-[18px] font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-md transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("phone");
                setMessage("");
                setError("");
              }}
              className="flex h-16 w-full items-center justify-center gap-5 rounded-full border border-white/30 bg-white/10 text-[18px] font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-md transition hover:bg-white/20"
            >
              <Phone size={27} />
              Continue with phone
            </button>

            <div className="flex items-center gap-7 py-2 text-sm text-white/60">
              <span className="h-px flex-1 bg-white/25" />
              OR
              <span className="h-px flex-1 bg-white/25" />
            </div>
          </>
        )}

        {isPhoneMode ? (
          <form
            onSubmit={confirmation ? verifyOtp : handlePhone}
            className="space-y-4"
          >
            <button
              type="button"
              onClick={() => {
                setMode("email");
                setConfirmation(null);
                setMessage("");
                setError("");
              }}
              className="flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to sign-in options
            </button>

            {!confirmation ? (
              <>
                <div className="flex h-16 overflow-hidden rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition focus-within:border-white/70 focus-within:bg-white/15">
                  <div className="flex items-center border-r border-white/20 px-5 text-lg font-semibold text-white">
                    🇮🇳 +91
                  </div>

                  <input
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(event) =>
                      setPhone(
                        event.target.value.replace(/\D/g, "").slice(0, 10),
                      )
                    }
                    placeholder="9876543210"
                    maxLength={10}
                    className="h-full w-full bg-transparent px-5 text-[17px] text-white outline-none placeholder:text-white/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="h-16 w-full rounded-full border border-violet-300/50 bg-gradient-to-r from-violet-600 to-indigo-600 text-[18px] font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:from-violet-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending code..." : "Send verification code"}
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  inputMode="numeric"
                  value={otp}
                  onChange={(event) => setOtp(event.target.value)}
                  placeholder="Enter 6-digit verification code"
                  className="h-16 w-full rounded-full border border-white/30 bg-white/10 px-5 text-[17px] text-white outline-none backdrop-blur-md transition placeholder:text-white/50 focus:border-white/70 focus:bg-white/15"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="h-16 w-full rounded-full border border-violet-300/50 bg-gradient-to-r from-violet-600 to-indigo-600 text-[18px] font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:from-violet-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Verifying..." : "Verify and continue"}
                </button>
              </>
            )}
          </form>
        ) : (
          <form onSubmit={handleEmail}>
            <label className="sr-only" htmlFor="email">
              Email address
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50"
              />

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="h-16 w-full rounded-full border border-white/30 bg-white/10 py-3 pl-12 pr-5 text-[17px] text-white outline-none backdrop-blur-md transition placeholder:text-white/50 focus:border-white/70 focus:bg-white/15"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 h-16 w-full rounded-full border border-violet-300/50 bg-gradient-to-r from-violet-600 to-indigo-600 text-[18px] font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:from-violet-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Continue"}
            </button>
          </form>
        )}

        <div id="recaptcha-container" />
      </div>
    </section>
  </main>
);
}
