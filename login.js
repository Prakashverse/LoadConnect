function togglePassword() {
            const passwordInput = document.querySelector('.password-input');
            const toggleBtn = document.querySelector('.password-toggle');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleBtn.textContent = '👁️';
            } else {
                passwordInput.type = 'password';
                toggleBtn.textContent = '👁';
            }
        }

        function forgotPassword() {
            alert('Forgot Password functionality would redirect to password reset page');
        }

        function signUp() {
            alert('Sign up functionality would redirect to registration page');
        }

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const mobile = document.querySelector('.mobile-input').value;
            const password = document.querySelector('.password-input').value;
            
            if (mobile && password) {
                alert(`Login attempt with mobile: ${mobile}`);
                // Here you would typically send the data to your server
            } else {
                alert('Please fill in all required fields');
            }
        });