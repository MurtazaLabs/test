/* Murtaza Labs — contact page behaviour */
(() => {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");

  /* ---------- Mobile menu ---------- */
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("is-open") && !header.contains(e.target)) setMenu(false);
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 900) setMenu(false); });

  /* ---------- Inquiry form ---------- */
  const form = document.getElementById("inquiryForm");
  const submitBtn = document.getElementById("submitBtn");
  const statusEl = document.getElementById("formStatus");
  const ENDPOINT = form.dataset.endpoint || "/api/inquiry";

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const setError = (name, message) => {
    const err = document.getElementById(`err-${name}`);
    if (err) err.textContent = message || "";
    const field = form.elements[name];
    if (field && field.setAttribute) {
      if (message) field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
    }
  };

  const selectedClasses = () =>
    [...form.querySelectorAll('input[name="classification"]:checked')].map((c) => c.value);

  const validate = () => {
    const errors = [];
    const value = (n) => (form.elements[n].value || "").trim();

    // record: applies the message to the field (aria-invalid + inline copy) and tracks it
    const record = (name, message) => {
      setError(name, message);
      errors.push([name, message]);
    };

    const name = value("fullName");
    if (!name) record("fullName", "Full name is required.");
    else if (name.length > 120) record("fullName", "Please keep the name under 120 characters.");
    else setError("fullName", "");

    const email = value("email");
    if (!email) record("email", "Email address is required.");
    else if (!EMAIL_RE.test(email)) record("email", "Enter a valid email address.");
    else if (email.length > 254) record("email", "Email address is too long.");
    else setError("email", "");

    if (selectedClasses().length === 0) record("classification", "Select at least one project classification.");
    else setError("classification", "");

    if (!value("budget")) record("budget", "Select a budget range.");
    else setError("budget", "");

    if (!value("timeline")) record("timeline", "Select a delivery window.");
    else setError("timeline", "");

    const brief = value("brief");
    if (!brief) record("brief", "A project brief is required.");
    else if (brief.length < 20) record("brief", "Please add a little more detail (at least 20 characters).");
    else if (brief.length > 5000) record("brief", "Please keep the brief under 5,000 characters.");
    else setError("brief", "");

    return errors;
  };

  const setStatus = (kind, text) => {
    statusEl.className = "form-status" + (kind ? ` is-${kind}` : "");
    statusEl.textContent = text || "";
  };

  const setLoading = (loading) => {
    submitBtn.classList.toggle("is-loading", loading);
    submitBtn.disabled = loading;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("", "");

    const errors = validate();
    if (errors.length) {
      setStatus("error", `VALIDATION FAILED — ${errors.length} field${errors.length > 1 ? "s" : ""} need attention.`);
      const first = form.elements[errors[0][0]];
      if (first && first.focus) first.focus();
      return;
    }

    const payload = {
      fullName: form.elements.fullName.value.trim(),
      email: form.elements.email.value.trim(),
      company: form.elements.company.value.trim(),
      classification: selectedClasses(),
      budget: form.elements.budget.value,
      timeline: form.elements.timeline.value,
      brief: form.elements.brief.value.trim(),
    };

    setLoading(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success", "INQUIRY RECEIVED — an architectural breakdown will reach you within 24 hours.");
      form.reset();
      form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute("aria-invalid"));
    } catch (err) {
      // Values are intentionally preserved so the user can retry.
      setStatus("error", "TRANSMISSION FAILED — your details were kept. Please retry in a moment or dispatch directly by email.");
    } finally {
      setLoading(false);
    }
  });

  /* Clear an individual field's error as soon as the user edits it */
  form.addEventListener("input", (e) => {
    const name = e.target.name;
    if (!name) return;
    if (name === "classification") setError("classification", "");
    else setError(name, "");
  });
})();
