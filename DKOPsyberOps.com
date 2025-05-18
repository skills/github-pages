<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DKOPsyberOps - IT Support Services</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f6f9;
      color: #333;
    }
    header {
      background-color: #003366;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      background-color: #002244;
    }
    nav ul li {
      margin: 0 15px;
    }
    nav ul li a {
      color: #fff;
      text-decoration: none;
      padding: 14px 20px;
      display: block;
    }
    section {
      padding: 40px;
      max-width: 1000px;
      margin: auto;
    }
    .cta {
      background-color: #0055aa;
      color: #fff;
      padding: 20px;
      text-align: center;
      margin-top: 20px;
    }
    footer {
      background-color: #003366;
      color: #fff;
      text-align: center;
      padding: 10px;
    }
    .services ul {
      list-style-type: square;
      padding-left: 20px;
    }
    form {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    form label {
      display: block;
      margin-top: 10px;
    }
    form input, form textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    form button {
      margin-top: 15px;
      padding: 10px 20px;
      background-color: #003366;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    form button:hover {
      background-color: #0055aa;
    }
  </style>
</head>
<body>
  <header>
    <h1>DKOPsyberOps.com</h1>
    <p>Professional IT Support Services | Cybersecurity | Psychology-Informed Support</p>
  </header>

  <nav>
    <ul>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#certifications">Certifications</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <section id="services" class="services">
    <h2>Our Services</h2>
    <ul>
      <li>Remote & On-Site IT Support</li>
      <li>System & Software Installation and Configuration</li>
      <li>Cybersecurity Consulting and User Awareness Training</li>
      <li>Network Configuration and Troubleshooting</li>
      <li>Workstation Setup and Endpoint Deployment</li>
      <li>Internal Documentation and IT Policy Development</li>
      <li>IT Support for Small Businesses and Individuals</li>
    </ul>
  </section>

  <section id="about">
    <h2>About DKOPsyberOps</h2>
    <p><strong>IT Support & Cybersecurity, Engineered for the Human Element</strong></p>
    <p>DKOPsyberOps delivers corporate-grade IT solutions fortified by cybersecurity best practices and cognitive psychology principles. We specialize in:</p>
    <ul>
      <li><strong>Proactive IT Support:</strong> Seamless workstation management (MacOS/Ubuntu/Windows), cloud integration (Google Workspace, Slack), and 24/7 helpdesk services.</li>
      <li><strong>Behavior-Aware Security:</strong> Vulnerability assessments, zero-trust architecture, and security training designed around how teams actually work.</li>
      <li><strong>Psychology-Optimized Systems:</strong> Reducing technical friction by auditing workflows for cognitive bottlenecks.</li>
    </ul>
    <p><strong>Our Difference:</strong><br>
    Unlike traditional IT providers, we merge NITDA/Cisco-certified cybersecurity with user behavior insights to create systems that are secure, intuitive, and stress-resistant.</p>
    <blockquote>"Technology should adapt to people—not the other way around."<br>
    — David K. Oluwatusin, Founder & CEO | Certified Cybersecurity Specialist (NITDA, Cisco), also Founder & CEO of PsyConnectNow</blockquote>
  </section>

  <section id="certifications">
    <h2>Certifications & Education</h2>
    <ul>
      <li>Cybersecurity Certification – NITDA</li>
      <li>Cisco Cyber Threat Management – Cisco Academy</li>
      <li>Microsoft Power Platform Fundamentals</li>
      <li>B.Sc. in Psychology – University of Lagos</li>
      <li>Diploma in Psychology – University of Lagos</li>
    </ul>
  </section>

  <section id="contact">
    <h2>Contact & Hire</h2>
    <form action="mailto:oluwatusin.korede@gmail.com" method="post" enctype="text/plain">
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Your Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Send Message</button>
    </form>
    <p>📧 Email: <a href="mailto:oluwatusin.korede@gmail.com">oluwatusin.korede@gmail.com</a></p>
    <p>📞 Phone: 647-809-5859</p>
    <p>📍 Toronto, Canada</p>
    <p>🔗 LinkedIn: <a href="#">Korede Oluwatusin</a></p>
  </section>

  <div class="cta">
    <h3>Ready for secure, human-centered IT support?</h3>
    <p>Get in touch today and let's keep your systems running smoothly.</p>
  </div>

  <footer>
    <p>&copy; 2025 DKOPsyberOps.com | All Rights Reserved</p>
  </footer>
</body>
</html>
