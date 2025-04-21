<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soporte Técnico Informático Barcelona</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com/3.4.16"></script>
    <script>tailwind.config={theme:{extend:{colors:{primary:'#2563eb',secondary:'#64748b'},borderRadius:{'none':'0px','sm':'4px',DEFAULT:'8px','md':'12px','lg':'16px','xl':'20px','2xl':'24px','3xl':'32px','full':'9999px','button':'8px'}}}}</script>
    <style>
        :where([class^="ri-"])::before { content: "\f3c2"; }
        
        .hero-section {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.9) 40%, rgba(255, 255, 255, 0.1) 100%), url('https://readdy.ai/api/search-image?query=A%20professional%20IT%20support%20specialist%20working%20on%20computer%20hardware%20with%20tools%2C%20clean%20modern%20workspace%20with%20multiple%20monitors%2C%20tech%20environment%2C%20soft%20lighting%2C%20professional%20setting%2C%20organized%20desk%20with%20technical%20equipment&width=1920&height=1080&seq=123456&orientation=landscape');
            background-size: cover;
            background-position: center right;
        }
        
        input:focus, textarea:focus {
            outline: none;
            border-color: #2563eb;
        }
        
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        .custom-checkbox {
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        
        .custom-checkbox input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }
        
        .checkmark {
            height: 20px;
            width: 20px;
            background-color: #fff;
            border: 2px solid #d1d5db;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .custom-checkbox input:checked ~ .checkmark {
            background-color: #2563eb;
            border-color: #2563eb;
        }
        
        .checkmark:after {
            content: "";
            display: none;
        }
        
        .custom-checkbox input:checked ~ .checkmark:after {
            display: block;
            width: 6px;
            height: 10px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
    </style>
</head>
<body class="font-sans text-gray-800 bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-['Pacifico'] text-primary">TechSupport</a>
            
            <nav class="hidden md:flex space-x-8">
                <a href="#inicio" class="font-medium hover:text-primary transition-colors">Inicio</a>
                <a href="#servicios" class="font-medium hover:text-primary transition-colors">Servicios</a>
                <a href="#sobre-mi" class="font-medium hover:text-primary transition-colors">Sobre Mí</a>
                <a href="#contacto" class="font-medium hover:text-primary transition-colors">Contacto</a>
            </nav>
            
            <div class="md:hidden w-10 h-10 flex items-center justify-center">
                <i class="ri-menu-line text-xl"></i>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="inicio" class="hero-section min-h-[600px] flex items-center">
        <div class="container mx-auto px-4 py-16 w-full">
            <div class="max-w-2xl">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Soporte Técnico Profesional en Barcelona</h1>
                <p class="text-xl mb-8 text-gray-700">Soluciones informáticas rápidas y eficientes para empresas y particulares. Servicio personalizado con más de 10 años de experiencia.</p>
                <div class="flex flex-wrap gap-4">
                    <button class="bg-primary hover:bg-blue-700 text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap transition-colors flex items-center">
                        <span>Solicitar Servicio</span>
                        <div class="w-5 h-5 ml-2 flex items-center justify-center">
                            <i class="ri-arrow-right-line"></i>
                        </div>
                    </button>
                    <button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 font-medium !rounded-button whitespace-nowrap transition-colors flex items-center">
                        <div class="w-5 h-5 mr-2 flex items-center justify-center">
                            <i class="ri-phone-line"></i>
                        </div>
                        <span>Llamar Ahora</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="servicios" class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Nuestros Servicios</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Ofrecemos una amplia gama de servicios informáticos para mantener tu tecnología funcionando sin problemas.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Service 1 -->
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <i class="ri-computer-line text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-center">Reparación de Ordenadores</h3>
                    <p class="text-gray-600 text-center">Diagnóstico y reparación de problemas de hardware y software en ordenadores de sobremesa y portátiles.</p>
                </div>
                
                <!-- Service 2 -->
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <i class="ri-settings-line text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-center">Mantenimiento de Sistemas</h3>
                    <p class="text-gray-600 text-center">Servicio preventivo para mantener tus equipos en óptimas condiciones, evitando problemas futuros.</p>
                </div>
                
                <!-- Service 3 -->
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <i class="ri-bug-line text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-center">Resolución de Problemas</h3>
                    <p class="text-gray-600 text-center">Solución rápida a problemas de software, virus, malware y optimización del rendimiento del sistema.</p>
                </div>
                
                <!-- Service 4 -->
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <i class="ri-wifi-line text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-center">Redes y Conectividad</h3>
                    <p class="text-gray-600 text-center">Instalación, configuración y solución de problemas en redes domésticas y empresariales.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Me Section -->
    <section id="sobre-mi" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="lg:w-1/2">
                    <img src="https://readdy.ai/api/search-image?query=Professional%20IT%20technician%20in%20casual%20business%20attire%20smiling%20at%20camera%2C%20holding%20laptop%2C%20modern%20office%20environment%2C%20tech%20workspace%20in%20background%2C%20professional%20lighting%2C%20confident%20posture%2C%20Barcelona%20tech%20scene&width=600&height=600&seq=789012&orientation=squarish" alt="Técnico informático profesional" class="rounded-lg shadow-lg w-full object-cover h-[500px] object-top">
                </div>
                
                <div class="lg:w-1/2">
                    <h2 class="text-3xl font-bold mb-6">¿Por Qué Elegirme?</h2>
                    
                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <i class="ri-medal-line text-primary"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">Experiencia Profesional</h3>
                                <p class="text-gray-600">Más de 10 años de experiencia en el sector informático, trabajando con todo tipo de sistemas y tecnologías.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <i class="ri-time-line text-primary"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">Respuesta Rápida</h3>
                                <p class="text-gray-600">Servicio de respuesta rápida, con disponibilidad para emergencias y soluciones en el menor tiempo posible.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <i class="ri-map-pin-line text-primary"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">Servicio Local en Barcelona</h3>
                                <p class="text-gray-600">Atención personalizada en toda el área metropolitana de Barcelona, con desplazamiento incluido.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <i class="ri-price-tag-3-line text-primary"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">Precios Transparentes</h3>
                                <p class="text-gray-600">Sin sorpresas ni costes ocultos. Presupuesto detallado antes de iniciar cualquier trabajo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Lo Que Dicen Mis Clientes</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">La satisfacción de mis clientes es mi mejor carta de presentación.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div class="flex mb-4">
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                    </div>
                    <p class="text-gray-600 mb-6">"Excelente servicio. Resolvió el problema de mi ordenador en tiempo récord y a un precio muy razonable. Totalmente recomendable."</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                        <div>
                            <h4 class="font-semibold">Carlos Martínez</h4>
                            <p class="text-gray-500 text-sm">Autónomo, Barcelona</p>
                        </div>
                    </div>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div class="flex mb-4">
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                    </div>
                    <p class="text-gray-600 mb-6">"Llevo años confiando en sus servicios para el mantenimiento de los equipos de mi empresa. Profesionalidad y eficiencia garantizadas."</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                        <div>
                            <h4 class="font-semibold">Elena Rodríguez</h4>
                            <p class="text-gray-500 text-sm">Directora, Agencia de Marketing</p>
                        </div>
                    </div>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div class="flex mb-4">
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                        <i class="ri-star-fill text-yellow-400"></i>
                    </div>
                    <p class="text-gray-600 mb-6">"Servicio rápido y eficiente. Me ayudó con un problema crítico en mi portátil cuando más lo necesitaba. Muy recomendable."</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                        <div>
                            <h4 class="font-semibold">Miguel Fernández</h4>
                            <p class="text-gray-500 text-sm">Estudiante, Universidad de Barcelona</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section -->
    <section id="contacto" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Contacto</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">¿Necesitas ayuda con tus equipos informáticos? Ponte en contacto conmigo y te responderé lo antes posible.</p>
            </div>
            
            <div class="flex flex-col lg:flex-row gap-12">
                <div class="lg:w-1/2">
                    <div class="bg-white p-8 rounded-lg shadow-md">
                        <h3 class="text-2xl font-semibold mb-6">Envíame un mensaje</h3>
                        
                        <form>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label for="name" class="block text-gray-700 mb-2">Nombre</label>
                                    <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary text-sm" placeholder="Tu nombre">
                                </div>
                                <div>
                                    <label for="email" class="block text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary text-sm" placeholder="Tu email">
                                </div>
                            </div>
                            
                            <div class="mb-6">
                                <label for="subject" class="block text-gray-700 mb-2">Asunto</label>
                                <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary text-sm" placeholder="Asunto del mensaje">
                            </div>
                            
                            <div class="mb-6">
                                <label for="message" class="block text-gray-700 mb-2">Mensaje</label>
                                <textarea id="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary text-sm" placeholder="Describe tu problema o consulta"></textarea>
                            </div>
                            
                            <label class="custom-checkbox flex items-start mb-6">
                                <input type="checkbox" class="mr-2">
                                <span class="checkmark mr-3"></span>
                                <span class="text-gray-600 text-sm">Acepto la política de privacidad y el tratamiento de mis datos para gestionar mi solicitud.</span>
                            </label>
                            
                            <button type="submit" class="bg-primary hover:bg-blue-700 text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap transition-colors w-full">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
                
                <div class="lg:w-1/2">
                    <div class="bg-white p-8 rounded-lg shadow-md mb-8">
                        <h3 class="text-2xl font-semibold mb-6">Información de Contacto</h3>
                        
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="ri-map-pin-line text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold mb-1">Ubicación</h4>
                                    <p class="text-gray-600">Barcelona, España</p>
                                    <p class="text-gray-600">Servicio a domicilio en toda el área metropolitana</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="ri-phone-line text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold mb-1">Teléfono</h4>
                                    <p class="text-gray-600">+34 612 345 678</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="ri-mail-line text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold mb-1">Email</h4>
                                    <p class="text-gray-600">soporte@techinformatico.es</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="ri-time-line text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold mb-1">Horario</h4>
                                    <p class="text-gray-600">Lunes a Viernes: 9:00 - 20:00</p>
                                    <p class="text-gray-600">Sábados: 10:00 - 14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white p-8 rounded-lg shadow-md h-[300px] relative overflow-hidden">
                        <div style="background-image: url('https://public.readdy.ai/gen_page/map_placeholder_1280x720.png'); background-size: cover; background-position: center; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 class="text-xl font-semibold mb-4 font-['Pacifico']">TechSupport</h3>
                    <p class="text-gray-300 mb-4">Soluciones informáticas profesionales en Barcelona. Servicio técnico de confianza para particulares y empresas.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                            <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                            <i class="ri-twitter-x-fill"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                            <i class="ri-instagram-line"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                            <i class="ri-linkedin-fill"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
                    <ul class="space-y-2">
                        <li><a href="#inicio" class="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
                        <li><a href="#servicios" class="text-gray-300 hover:text-white transition-colors">Servicios</a></li>
                        <li><a href="#sobre-mi" class="text-gray-300 hover:text-white transition-colors">Sobre Mí</a></li>
                        <li><a href="#contacto" class="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-xl font-semibold mb-4">Servicios</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Reparación de Ordenadores</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Mantenimiento de Sistemas</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Resolución de Problemas</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Redes y Conectividad</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-xl font-semibold mb-4">Contacto</h3>
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <div class="w-5 h-5 mr-2 flex items-center justify-center mt-1">
                                <i class="ri-map-pin-line text-gray-300"></i>
                            </div>
                            <span class="text-gray-300">Barcelona, España</span>
                        </li>
                        <li class="flex items-start">
                            <div class="w-5 h-5 mr-2 flex items-center justify-center mt-1">
                                <i class="ri-phone-line text-gray-300"></i>
                            </div>
                            <span class="text-gray-300">+34 612 345 678</span>
                        </li>
                        <li class="flex items-start">
                            <div class="w-5 h-5 mr-2 flex items-center justify-center mt-1">
                                <i class="ri-mail-line text-gray-300"></i>
                            </div>
                            <span class="text-gray-300">soporte@techinformatico.es</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-700 pt-8 mt-8 text-center">
                <p class="text-gray-400">&copy; 2025 TechSupport. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Custom checkbox functionality
            const checkboxes = document.querySelectorAll('.custom-checkbox input');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    // This is handled by CSS, but we could add additional logic here if needed
                });
            });
        });
    </script>
</body>
</html>
