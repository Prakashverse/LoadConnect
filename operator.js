// File upload handling
document.getElementById('fileUpload').addEventListener('change', function (e) {
    const files = e.target.files;
    const uploadArea = e.target.parentElement;
    if (files.length > 0) {
        uploadArea.innerHTML = `
                    <input type="file" id="fileUpload" name="documents" multiple accept=".pdf,.doc,.docx,.jpg,.png" style="display: none;">
                    <p>${files.length} file(s) selected</p>
                    <small>Click to change selection</small>
                `;
        uploadArea.onclick = () => document.getElementById('fileUpload').click();
    }
});
// Captcha generation
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captchaText').textContent = captcha;
}

//  this is for Form submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    //   for Validate captcha
    const enteredCaptcha = document.querySelector('input[name="captcha"]').value.toUpperCase();
    const actualCaptcha = document.getElementById('captchaText').textContent;

    if (enteredCaptcha !== actualCaptcha) {
        alert('Captcha does not match. Please try again.');
        generateCaptcha();
        return;
    }

    // for Validate required fields
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.border = '1px solid #e74c3c';
            isValid = false;
        } else {
            field.style.border = '1px solid #ddd';
        }
    });

    if (!document.getElementById('agreement').checked) {
        alert('Please agree to the Terms & Conditions');
        return;
    }

    if (isValid) {
        alert('Registration submitted successfully!');
    } else {
        alert('Please fill in all required fields');
    }
});

generateCaptcha();