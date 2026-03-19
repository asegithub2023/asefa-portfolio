// src/sections/Contact.tsx
import React, { useEffect, useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mqedvqan"; 

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (status !== "success") return;
    const timer = window.setTimeout(() => setStatus("idle"), 6000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const dismissBanner = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORM_ENDPOINT || FORM_ENDPOINT.includes("yourFormId")) {
      // Prevent a fake success if the endpoint is not configured
      setErrorMessage(
        "Contact form is not configured yet. Replace `yourFormId` in the Formspree endpoint."
      );
      setStatus("error");
      return;
    }

    try {
      setErrorMessage("");
      setStatus("submitting");

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        let message = "Something went wrong. Please try again in a moment.";
        try {
          const data: unknown = await response.json();
          if (
            typeof data === "object" &&
            data !== null &&
            "error" in data &&
            typeof (data as { error?: unknown }).error === "string"
          ) {
            message = (data as { error: string }).error;
          }
        } catch {
          // ignore JSON parse errors
        }
        setErrorMessage(message);
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-light contact-section">
      <div className="container">
        <h2 className="mb-4 text-center">Contact Me</h2>
        {status === "success" && (
          <div
            className="alert alert-success alert-dismissible fade show position-relative"
            role="alert"
            aria-live="polite"
          >
            <div className="text-center">Thank you! Your message has been sent successfully.</div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={dismissBanner}
            />
          </div>
        )}
        {status === "error" && (
          <div
            className="alert alert-danger alert-dismissible fade show position-relative"
            role="alert"
            aria-live="polite"
          >
            <div className="text-center">
              {errorMessage || "Something went wrong. Please try again in a moment."}
            </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={dismissBanner}
            />
          </div>
        )}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
