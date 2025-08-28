document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const signupBtn = document.getElementById("signupBtn");

  // Live password strength check
  passwordInput.addEventListener("input", function () {
    const value = passwordInput.value;

    document.getElementById("length").classList.toggle("valid", value.length >= 8);
    document.getElementById("uppercase").classList.toggle("valid", /[A-Z]/.test(value));
    document.getElementById("lowercase").classList.toggle("valid", /[a-z]/.test(value));
    document.getElementById("number").classList.toggle("valid", /\d/.test(value));

    validateForm(); // re-check on password change
  });

  // Show/hide password toggle
  const toggleBtn = document.querySelector('.toggle-password');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const input = document.getElementById('password');
      input.type = input.type === 'password' ? 'text' : 'password';
      this.classList.toggle('fa-eye-slash');
    });
  }

  // Google button click tracking (placeholder)
  const googleBtn = document.querySelector('.google-btn');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      console.log("Google sign-in clicked");
    });
  }

  // Prevent form submission if password is invalid
  const form = document.getElementById("signupForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      const value = passwordInput.value;
      const isValid =
        value.length >= 8 &&
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /\d/.test(value);

      if (!isValid) {
        e.preventDefault();
        alert("Please ensure your password meets all the required rules.");
      }
    });
  }

  // Real-time form validation to enable button
  function validateForm() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const validName = name.length > 0;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPassword =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password);

    signupBtn.disabled = !(validName && validEmail && validPassword);
  }

  // Attach input listeners
  [nameInput, emailInput, passwordInput].forEach((input) =>
    input.addEventListener("input", validateForm)
  );
});
