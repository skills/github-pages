<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cartón de Bingo para don MISA</title>
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      background-color: #f4faff;
      padding: 20px;
    }

    table {
      border-collapse: collapse;
      margin: 20px auto;
    }

    th, td {
      border: 2px solid #000;
      width: 60px;
      height: 60px;
      font-size: 20px;
    }

    th {
      background-color: #add8e6;
    }

    .free {
      background-color: #d0ffd0;
      font-weight: bold;
    }

    #carton {
      margin-top: 20px;
    }

    button {
      margin: 10px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }

    #vendedor, #pago, #comprador {
      margin-bottom: 20px;
    }

    #pago input, #comprador input {
      width: 150px;
    }

    #consulta {
      margin-top: 40px;
    }

    table#consultaCartones {
      margin: 20px auto;
      width: 80%;
    }

    table#consultaCartones th, table#consultaCartones td {
      text-align: left;
    }

    #consultaCartones td {
      padding: 10px;
    }

  </style>
</head>
<body>

  <h1>🎟️ Generador de cartones de BINGO por MISA</h1>

  <!-- Casilla para el nombre del vendedor -->
  <div id="vendedor">
    <label for="nombreVendedor">Nombre del Vendedor: </label>
    <input type="text" id="nombreVendedor" placeholder="Ingresa el nombre del vendedor">
  </div>

  <!-- Casilla para el nombre del comprador -->
  <div id="comprador">
    <label for="nombreComprador">Nombre del Comprador: </label>
    <input type="text" id="nombreComprador" placeholder="Ingresa el nombre del comprador">
  </div>

  <!-- Casilla para el monto del pago -->
  <div id="pago">
    <label for="pagoMonto">Monto del Pago: </label>
    <input type="number" id="pagoMonto" placeholder="Ingresa el monto del pago" step="0.01">
  </div>

  <!-- Botones de acción -->
  <button onclick="generarCartonUnico()">Generar nuevo cartón</button>
  <button onclick="descargarComoImagen()">Descargar como Imagen</button>
  <button onclick="descargarComoPDF()">Descargar como PDF</button>
  <button onclick="descargarComoExcel()">Descargar cartones como Excel</button>

  <div id="carton"></div>

  <!-- Módulo de consulta de cartones generados -->
  <div id="consulta">
    <h2>Consulta de Cartones Generados</h2>
    <button onclick="mostrarCartonesGenerados()">Mostrar Cartones Generados</button>
    <table id="consultaCartones">
      <thead>
        <tr>
          <th>Consecutivo</th>
          <th>Vendedor</th>
          <th>Comprador</th>
          <th>Monto de Pago</th>
        </tr>
      </thead>
      <tbody>
        <!-- Los datos de los cartones generados se agregarán aquí -->
      </tbody>
    </table>
  </div>

  <!-- Cargar librerías para exportar -->
  <script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.1/xlsx.full.min.js"></script>

  <script>
    const rangos = {
      B: [1, 15],
      I: [16, 30],
      N: [31, 45],
      G: [46, 60],
      O: [61, 75]
    };

    let cartonesVendidos = []; // Guardar cartones generados
    let contadorCartones = 1;  // Contador para los cartones, empieza en 1

    // Función para obtener el nombre del vendedor
    function obtenerNombreVendedor() {
      const vendedorInput = document.getElementById("nombreVendedor");
      return vendedorInput.value.trim() || "Desconocido"; // Si no hay nombre, se usa "Desconocido"
    }

    // Función para obtener el nombre del comprador
    function obtenerNombreComprador() {
      const compradorInput = document.getElementById("nombreComprador");
      return compradorInput.value.trim() || "Desconocido"; // Si no hay nombre, se usa "Desconocido"
    }

    // Función para obtener el monto del pago
    function obtenerPago() {
      const pagoInput = document.getElementById("pagoMonto");
      return parseFloat(pagoInput.value) || 0; // Si no hay monto, se usa 0
    }

    // Función para generar un cartón
    function generarCarton() {
      const carton = {};
      for (let letra in rangos) {
        const [inicio, fin] = rangos[letra];
        const numeros = new Set();
        while (numeros.size < 5) {
          const num = Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
          numeros.add(num);
        }
        carton[letra] = Array.from(numeros);
      }
      carton['N'][2] = 'FREE';  // Espacio central libre
      return carton;
    }

    // Función para crear la tabla del cartón
    function crearTabla(carton, vendedor, comprador, consecutivo, pago) {
      let html = `<h2>Cartón de Bingo - Vendedor: ${vendedor} | Comprador: ${comprador} | Consecutivo: ${consecutivo} | Pago: $${pago}</h2><table><tr>`;
      for (let letra of 'BINGO') {
        html += `<th>${letra}</th>`;
      }
      html += '</tr>';

      for (let i = 0; i < 5; i++) {
        html += '<tr>';
        for (let letra of 'BINGO') {
          const val = carton[letra][i];
          const clase = (val === 'FREE') ? ' class="free"' : '';
          html += `<td${clase}>${val}</td>`;
        }
        html += '</tr>';
      }

      html += '</table>';
      return html;
    }

    // Función para generar un cartón único
    function generarCartonUnico() {
      if (contadorCartones <= 600) { // Solo permite generar hasta 600 cartones
        const div = document.getElementById("carton");
        const vendedor = obtenerNombreVendedor();
        const comprador = obtenerNombreComprador();
        const pago = obtenerPago();
        const carton = generarCarton();
        div.innerHTML = crearTabla(carton, vendedor, comprador, contadorCartones, pago);
        carton["Vendedor"] = vendedor;  // Agregar el nombre del vendedor al cartón
        carton["Comprador"] = comprador; // Agregar el nombre del comprador al cartón
        carton["Consecutivo"] = contadorCartones; // Agregar el número consecutivo
        carton["Pago"] = pago;  // Agregar el pago
        cartonesVendidos.push(carton); // Guardamos el cartón vendido
        contadorCartones++; // Incrementamos el contador
      } else {
        alert("¡Se ha alcanzado el límite de 600 cartones!");
        document.querySelector("button").disabled = true; // Deshabilitar el botón
      }
    }

    // Función para mostrar los cartones generados en la tabla de consulta
    function mostrarCartonesGenerados() {
      const tbody = document.querySelector("#consultaCartones tbody");
      tbody.innerHTML = ''; // Limpiar la tabla antes de agregar los datos

      cartonesVendidos.forEach(carton => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${carton["Consecutivo"]}</td>
          <td>${carton["Vendedor"]}</td>
          <td>${carton["Comprador"]}</td>
          <td>${carton["Pago"]}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    // Función para descargar los cartones como imagen
    function descargarComoImagen() {
      html2canvas(document.getElementById("carton")).then(canvas => {
        const enlace = document.createElement("a");
        enlace.download = "carton_bingo.png";
        enlace.href = canvas.toDataURL("image/png");
        enlace.click();
      });
    }

    // Función para descargar los cartones como PDF
    async function descargarComoPDF() {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF("p", "mm", "a4");
      const canvas = await html2canvas(document.getElementById("carton"));
      const imgData = canvas.toDataURL("image/png");

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = 190;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 10, 10, pdfWidth, pdfHeight);
      pdf.save("carton_bingo.pdf");
    }

    // Función para descargar los cartones como archivo Excel
    function descargarComoExcel() {
      // Crear una hoja de trabajo con los cartones vendidos
      const data = cartonesVendidos.map(carton => {
        return [
          carton["Consecutivo"], 
          carton["Vendedor"], 
          carton["Comprador"],
          ...Object.keys(rangos).map(letra => carton[letra].join(',')),
          carton["Pago"]  // Agregar el pago
        ];
      });

      const headers = ["Consecutivo", "Vendedor", "Comprador", "B", "I", "N", "G", "O", "Pago"];
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);
      XLSX.utils.book_append_sheet(wb, ws, "Cartones de Bingo");
      XLSX.writeFile(wb, "cartones_bingo.xlsx");
    }

  </script>

</body>
</html>
