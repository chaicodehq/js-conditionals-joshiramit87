/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
   
  let criteria = 0;

    //console.log(typeof password);

    if(typeof password!=="string") criteria = 0;
    
    
    if(password===null) { criteria = 0; } else {

      if(password.length >=8) criteria = criteria + 1;

      if(hasUppercase(password))  criteria = criteria + 1;
      if(hasLowercase(password))  criteria = criteria + 1;
      if(hasNumber(password))  criteria = criteria + 1;
      if(hasSpecialChar(password))  criteria = criteria + 1;
    }  
    if(criteria <=1) return "weak";
    if(criteria <=3) return "medium";
    if(criteria <=4) return "strong";
    if(criteria <=5) return "very strong";

    
}

function hasUppercase(password) {
  return /[A-Z]/.test(password);
}

function hasLowercase(password) {
  return /[a-z]/.test(password);
}

function hasNumber(password) {
  return /[0-9]/.test(password);
}

function hasSpecialChar(password) {
  return /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password);
}