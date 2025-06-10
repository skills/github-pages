from flask import Flask, render_template_string, request, redirect, flash
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

app.secret_key = 'AdityaL1'


class Student(db.Model):
    id     = db.Column(db.Integer, primary_key=True)
    name   = db.Column(db.String(100), nullable=False)
    email  = db.Column(db.String(120), nullable=False)
    phone  = db.Column(db.String(15), nullable=False)
    course = db.Column(db.String(100), nullable=False)

with app.app_context():
    db.create_all()






page = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Modern Coaching Center</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Coaching Centre</a>

    <!-- Menu dropdown on the right -->
    <div class="dropdown ms-auto">
      <button class="btn btn-outline-light dropdown-toggle" type="button" id="menuDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        Menu
      </button>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="menuDropdown">
        <li><a class="dropdown-item" href="#teacher">Our Teachers</a></li>
        <li><a class="dropdown-item" href="#about">About</a></li>
        <li><a class="dropdown-item" href="#contact">Contact Us</a></li>
      </ul>
    </div>
  </div>
</nav>


    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f8f9fa;
        }
        .hero {
            background: linear-gradient(to right, #6a11cb, #2575fc);
            color: white;
            padding: 80px 20px;
            text-align: center;
        }
        .section {
            padding: 60px 20px;
        }
        
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Coaching Centre</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 40px;
      background-color: #f4f4f4;
    }

    /* About button in upper-right corner */
    .about-button {
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #007bff;
      color: #fff;
      padding: 10px 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
    }

    form {
      max-width: 600px;
      margin: 100px auto;
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
        .footer {
            background-color: #343a40;
            color: white;
            padding: 20px 10px;
            text-align: center;
        }
        .card:hover {
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transform: scale(1.02);
            transition: 0.3s;
        }
    </style>
</head>
<body>


<div class="hero">
    <h1>Let's Learn Together With Experience</h1>
    <p>Expert coaching for school, college, and board exams.</p>
    <a href="#courses" class="btn btn-light btn-lg mt-3">Explore Courses</a>
</div>

<div id="courses" class="section text-center">
    <h2 class="mb-5">Our Popular Courses</h2>
    <div class="container">
        <div class="row g-4">

            <!-- Mathematics -->
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Mathematics (5–10 Class)</h5>
                        <p class="card-text">Covers Algebra, Geometry, Calculus, and more.</p>
                        <p><strong>Timing:</strong> 6:00 p.m – 8:00 p.m</p>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mathModal">Join Now</button>
                    </div>
                </div>
            </div>

            <!-- Geography -->
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Geography (Class 5–10)</h5>
                            <p class="card-text">Detailed modules on physical, human, and environmental geography to enhance understanding and exam performance.</p>
                            <p><strong>Timing:</strong> 6:00 p.m. – 8:00 p.m.</p>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#geoModal">Join Now</button>
                        </div>
                    </div>
                </div>

                <!-- Science -->
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Science Foundation (Class 5–10)</h5>
                            <p class="card-text">Interactive sessions in Physics, Chemistry, and Biology focusing on fundamentals and practical understanding.</p>
                            <p><strong>Timing:</strong> 6:00 p.m. – 8:00 p.m.</p>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#scienceModal">Join Now</button>
                        </div>
                    </div>
                </div>

                <!-- Arts Foundation -->
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Arts Foundation (Class 5–10)</h5>
                            <p class="card-text">Learn Bengali, History, and Environmental Studies with a strong focus on critical thinking and creativity.</p>
                            <p><strong>Timing:</strong> 6:00 p.m. – 8:00 p.m.</p>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#artsModal">Join Now</button>
                        </div>
                    </div>
                </div>

                <!-- English -->
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">English (Class 5–10)</h5>
                            <p class="card-text">Develop grammar, vocabulary, writing, and comprehension skills with our specialized English curriculum.</p>
                            <p><strong>Timing:</strong> 6:00 p.m. – 8:00 p.m.</p>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#engModal">Join Now</button>
                        </div>
                    </div>
                </div>

            <!-- Spoken English -->
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Spoken English & Personality</h5>
                        <p class="card-text">Improve your communication and confidence.</p>
                        <p><strong>Timing:</strong> 8:00 a.m – 10:00 a.m</p>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#spokenModal">Join Now</button>
                    </div>
                </div>
            </div>

            <!-- Computer Course -->
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Basic Computer Course</h5>
                        <p class="card-text">MS Office, Internet, basics with certification.</p>
                        <p><strong>Timing:</strong> 8:00 a.m – 10:00 a.m</p>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#computerModal">Join Now</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<!-- Modals -->

<!-- Math Modal -->
<div class="modal fade" id="mathModal" tabindex="-1" aria-labelledby="mathModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mathModalLabel">Join Mathematics (5–10 Class)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><strong>Timing:</strong> 6:00 p.m – 8:00 p.m</p>
        <p><strong>Fees:</strong> ₹1500/month</p>
        <p><strong>Instructor:</strong> Mr. Aditya Mandal</p>
        <p><strong>Contact:</strong> +91 7583981057</p>
      </div>
      <div class="modal-footer">
        <a href="tel:+917583981057" class="btn btn-success">Call to Register</a>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Geography Modal -->
<div class="modal fade" id="geoModal" tabindex="-1" aria-labelledby="geoModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="geoModalLabel">Join Geography (5–10 Class)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><strong>Timing:</strong> 6:00 p.m – 8:00 p.m</p>
        <p><strong>Fees:</strong> ₹1500/month</p>
        <p><strong>Instructor:</strong> Mr. Aditya Mandal</p>
        <p><strong>Contact:</strong> +91 7583981057</p>
      </div>
      <div class="modal-footer">
        <a href="tel:+917583981057" class="btn btn-success">Call to Register</a>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Science Modal -->
<div class="modal fade" id="scienceModal" tabindex="-1" aria-labelledby="scienceModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="scienceModalLabel">Join Science Foundation (5–10 Class)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><strong>Timing:</strong> 6:00 p.m – 8:00 p.m</p>
        <p><strong>Fees:</strong> ₹1600/month</p>
        <p><strong>Instructor:</strong> Mr. Aditya Mandal</p>
        <p><strong>Contact:</strong> +91 7583981057</p>
      </div>
      <div class="modal-footer">
        <a href="tel:+917583981057" class="btn btn-success">Call to Register</a>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Arts Modal -->
<div class="modal fade" id="artsModal" tabindex="-1" aria-labelledby="artsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="artsModalLabel">Join Arts Foundation (5–10 Class)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><strong>Timing:</strong> 6:00 p.m – 8:00 p.m</p>
        <p><strong>Fees:</strong> ₹1400/month</p>
        <p><strong>Instructor:</strong> Mr. Saikat Jana</p>
        <p><strong>Contact:</strong> +91 8167671216</p>
      </div>
      <div class="modal-footer">
        <a href="tel:+8167671216" class="btn btn-success">Call to Register</a>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- English Modal -->
<div class="modal fade" id="engModal" tabindex="-1" aria-labelledby="engModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="engModalLabel">Join English (5–10 Class)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><strong>Timing:</strong> 6:00 p.m – 8:00 p.m</p>
        <p><strong>Fees:</strong> ₹1500/month</p>
        <p><strong>Instructor:</strong> Ms. Saikat Jana</p>
        <p><strong>Contact:</strong> +91 8167671216</p>
      </div>
      <div class="modal-footer">
        <a href="tel:+918167671216" class="btn btn-success">Call to Register</a>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Spoken Modal -->
<div class="modal fade" id="spokenModal" tabindex="-1" aria-labelledby="spokenModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="spokenModalLabel">Join Spoken English & Personality</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><strong>Timing:</strong> 8:00 a.m – 10:00 a.m</p>
        <p><strong>Fees:</strong> ₹1200/month</p>
        <p><strong>Instructor:</strong> Ms. Saikat Jana</p>
        <p><strong>Contact:</strong> +91 8167671216</p>
      </div>
      <div class="modal-footer">
        <a href="tel:+918167671216" class="btn btn-success">Call to Register</a>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Computer Modal -->
<div class="modal fade" id="computerModal" tabindex="-1" aria-labelledby="computerModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="computerModalLabel">Join Basic Computer Course</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><strong>Timing:</strong> 8:00 a.m – 10:00 a.m</p>
        <p><strong>Fees:</strong> ₹1000/month</p>
        <p><strong>Certification:</strong> Govt. Verified</p>
        <p><strong>Instructor:</strong> Mr. Aditya Mandal</p>
        <p><strong>Contact:</strong> +91 7583981057</p>
      </div>
      <div class="modal-footer">
        <a href="tel:+917583981057" class="btn btn-success">Call to Register</a>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Teachers Section -->
<div id="#teacher" class="section bg-white">
  <div class="container">
    <h2 class="text-center mb-5">Our Teachers</h2>
    <div class="row text-center g-3">
      
      <!-- Teacher 1 -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="https://www.bing.com/images" class="card-img-top" alt="Teacher Photo">
          <div class="card-body">
            <h5 class="card-title">Mr. Aditya Mandal</h5>
            <p class="card-text">Mathematics & Geography Expert<br>3+ years experience in Secondary Board.</p>
          </div>
        </div>
      </div>    

      <!-- Teacher 2 -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Teacher Photo">
          <div class="card-body">
            <h5 class="card-title">Mr. Saikat Jana</h5>
            <p class="card-text">English Litereture<br>3+ years of experience with Secondary Board.</p>
          </div>
        </div>
      </div>

      <!-- Teacher 3 -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Teacher Photo">
          <div class="card-body">
            <h5 class="card-title">Mrs. Neha Sharma</h5>
            <p class="card-text">Spoken English & Computer<br>12+ years of teaching in Computer Training.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


<form method="POST" action="/register">
  <input type="hidden" name="course" value="">
  <div class="mb-3">
    <label for="name" class="form-label">Your Name</label>
    <input type="text" class="form-control" id="name" name="name" required>
  </div>
  <div class="mb-3">
    <label for="phone" class="form-label">Phone Number</label>
    <input type="tel" class="form-control" id="phone" name="phone" required>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">E-mail ID</label>
    <input type="tel" class="form-control" id="email" name="email" required>
  </div>
  
  </label>
  
    <div class="mb-3">
      <label class="form-label">Which course you want to join:</label>
      <select name="course" class="form-control" required>
        <option value="">Select a course</option>
        <option value="math">Math</option>
        <option value="geography">Geography</option>
        <option value="science">Science</option>
        <option value="arts">Arts</option>
        <option value="english">English</option>
        <option value="spoken">Spoken English</option>
        <option value="computer">Basic Computer</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

</body>
</html>

{% with messages = get_flashed_messages(with_categories=true) %}
  {% if messages %}
    {% for category, message in messages %}
      <div class="alert alert-{{ category }} alert-dismissible fade show" role="alert">
        {{ message }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    {% endfor %}
  {% endif %}
{% endwith %}



<!-- Contact Us Section -->
<div id="contact" class="section bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Contact Us</h2>
    <div class="row">

      <!-- Contact Details -->
      <div class="col-md-6">
        <h5>Coaching Center Address</h5>
        <p>Chhaya Didimonir Mess, Dakhin Ghoshpara<br>Rajpur, Sonarpur, Kol- 700150</p>

        <h5>Call Us</h5>
        <p>+91 75839 81057<br>+91 81676 71216</p>

        <h5>Email</h5>
        <p>adityamandal9472@gmail.com<br>saikatjana5690@gmail.com</p>

        <!-- Optional: Embedded Google Map -->
        <div class="mt-3">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3685.1574072951044!2d88.430072!3d22.438759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1717917100000!5m2!1sen!2sin"
  width="100%"
  height="200"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

        </div>
      </div>

    </div>
  </div>
</div>


<div class="footer">
    <p>&copy; 2025 Coaching Center. All rights reserved.</p>
</div>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>




"""



@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template_string(page)

@app.route('/register', methods=['POST'])
def add_student():
    name   = request.form['name']
    email  = request.form['email']
    phone  = request.form['phone']
    course = request.form['course']
    new_student = Student(name=name, email=email, phone=phone, course=course)
    db.session.add(new_student)
    db.session.commit()
    flash('Student added successfully!', 'success')
    return redirect('/')



@app.route('/interested')
def view_interested():
    users = Student.query.all()
    return render_template_string('''
        <h2>Interested Students</h2>
        <table border="1" cellpadding="5">
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Course</th></tr>
          {% for u in users %}
            <tr>
              <td>{{ u.id }}</td><td>{{ u.name }}</td>
              <td>{{ u.email }}</td><td>{{ u.phone }}</td>
              <td>{{ u.course }}</td>
            </tr>
          {% endfor %}
        </table>
        <br><a href="/">Back</a>
    ''', users=users)

@app.route('/', methods=['GET', 'POST'])
def index():
    show_hero = True
    if request.method == 'POST':
        # your form handling logic
        show_hero = False
    return render_template_string("index.html", show_hero=show_hero)


if __name__ == '__main__':
    app.run(debug=True)
