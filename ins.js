    // Toggle password visibility
        const togglePassword = document.getElementById('togglePassword');
        const password = document.getElementById('password');
        const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
        const confirmPassword = document.getElementById('confirm_password');

        if (togglePassword && password) {
            togglePassword.addEventListener('click', function() {
                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type);
                this.classList.toggle('fa-eye-slash');
            });
        }

        if (toggleConfirmPassword && confirmPassword) {
            toggleConfirmPassword.addEventListener('click', function() {
                const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
                confirmPassword.setAttribute('type', type);
                this.classList.toggle('fa-eye-slash');
            });
        }

        // Password strength indicator
        const strengthFill = document.getElementById('strength-fill');
        const strengthText = document.getElementById('strength-text');

        if (password && strengthFill && strengthText) {
            password.addEventListener('input', function() {
                const value = this.value;
                let strength = 0;
                
                // Check length
                if (value.length >= 8) strength += 25;
                if (value.length >= 12) strength += 15;
                
                // Check for lowercase
                if (/[a-z]/.test(value)) strength += 15;
                
                // Check for uppercase
                if (/[A-Z]/.test(value)) strength += 15;
                
                // Check for numbers
                if (/[0-9]/.test(value)) strength += 15;
                
                // Check for special characters
                if (/[^A-Za-z0-9]/.test(value)) strength += 15;
                
                // Cap at 100%
                strength = Math.min(strength, 100);
                
                // Update visual indicator
                strengthFill.style.width = strength + '%';
                
                // Update color and text
                if (strength < 40) {
                    strengthFill.className = 'strength-fill strength-weak';
                    strengthText.textContent = 'Weak';
                } else if (strength < 70) {
                    strengthFill.className = 'strength-fill strength-medium';
                    strengthText.textContent = 'Medium';
                } else {
                    strengthFill.className = 'strength-fill strength-strong';
                    strengthText.textContent = 'Strong';
                }
            });
        }

        // Form validation and submission
        const registerForm = document.querySelector('.register-form');
        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const firstName = this.querySelector('input[name="first_name"]').value;
                const lastName = this.querySelector('input[name="last_name"]').value;
                const email = this.querySelector('input[name="email"]').value;
                const shopName = this.querySelector('input[name="shop_name"]').value;
                const password = this.querySelector('input[name="password"]').value;
                const confirmPassword = this.querySelector('input[name="confirm_password"]').value;
                const businessType = this.querySelector('select[name="business_type"]').value;
                const terms = this.querySelector('input[name="terms"]').checked;
                
                // Validate password match
                if (password !== confirmPassword) {
                    alert('Passwords do not match.');
                    return;
                }
                
                // Validate terms acceptance
                if (!terms) {
                    alert('You must accept the Terms of Service.');
                    return;
                }
                
                // Loading animation
                const submitBtn = this.querySelector('.btn-primary');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
                submitBtn.disabled = true;
                
                // Simulating API request
                setTimeout(() => {
                    // In reality, you would send a request to your server
                    console.log('Registration attempt with:', { 
                        firstName, lastName, email, shopName, businessType 
                    });
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // Success message (to be replaced with real verification)
                    alert(`Congratulations ${firstName}! Your account has been successfully created.\n\nA confirmation email has been sent to ${email}.\n\nIn a real application, data would be sent to the server for processing.`);
                    
                    // Simulated redirection
                    // window.location.href = '/dashboard';
                    
                }, 2000);
            });
        }

        // Social login buttons
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const provider = this.classList.contains('google') ? 'Google' : 'Facebook';
                alert(`Sign up with ${provider} - To be implemented with OAuth`);
            });
        });

        // Feature cards hover effect
        document.querySelectorAll('.feature-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                icon.style.transform = '';
            });
        });