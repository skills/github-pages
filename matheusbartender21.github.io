<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Matheus Bartender21 - Vendas de eBooks</title>
  <style>
    /* Reset e estilos básicos */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    body {
      background: #f9f9f9;
      color: #333;
      line-height: 1.6;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    header {
      background: #1a1a1a;
      color: #fff;
      padding: 1rem 2rem;
      text-align: center;
      font-size: 1.8rem;
      font-weight: bold;
      letter-spacing: 2px;
    }
    main {
      flex: 1;
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    h1 {
      margin-bottom: 1rem;
      color: #222;
      text-align: center;
    }
    section {
      margin-bottom: 2.5rem;
      background: #fff;
      padding: 1.5rem 2rem;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0,0,0,0.05);
    }
    .produtos {
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
      gap: 1.5rem;
    }
    .produto {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      background: #fff;
      transition: box-shadow 0.3s ease;
    }
    .produto:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .produto img {
      max-width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 6px;
      margin-bottom: 1rem;
    }
    .produto h3 {
      margin-bottom: 0.5rem;
      color: #111;
    }
    .produto p {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      color: #555;
      min-height: 60px;
    }
    .btn-comprar {
      background: #1a73e8;
      color: white;
      border: none;
      padding: 0.6rem 1.4rem;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      font-size: 1rem;
      transition: background 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }
    .btn-comprar:hover {
      background: #135ab9;
    }
    footer {
      background: #1a1a1a;
      color: #eee;
      text-align: center;
      padding: 1rem;
      font-size: 0.9rem;
      margin-top: auto;
    }
    /* Contato */
    form {
      max-width: 400px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
    form label {
      margin-bottom: 0.3rem;
      font-weight: 600;
      color: #222;
    }
    form input, form textarea {
      padding: 0.6rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      resize: vertical;
    }
    form button {
      background: #1a73e8;
      color: white;
      border: none;
      padding: 0.8rem;
      font-weight: 700;
      font-size: 1.1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    form button:hover {
      background: #135ab9;
    }
    @media (max-width: 500px) {
      header {
        font-size: 1.5rem;
      }
    }
  </style>
</head>
<body>
  <header>Matheus Bartender21 - eBooks de Marketing & Vendas</header>
  <main>
    <section>
      <h1>Bem-vindo(a) ao seu próximo sucesso!</h1>
      <p style="text-align:center; font-size:1.1rem; max-width:600px; margin: 0 auto 1rem auto; color:#444;">
        Aprenda estratégias de marketing e vendas para transformar seu conhecimento em lucro com meus eBooks exclusivos.
      </p>
    </section>

    <section>
      <h2>Meus eBooks</h2>
      <div class="produtos">
        <div class="produto">
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80" alt="eBook Marketing Digital" />
          <h3>Marketing Digital Essencial</h3>
          <p>Domine as técnicas básicas para vender mais e alcançar clientes online.</p>
          <a href="#" class="btn-comprar">Comprar R$49,90</a>
        </div>

        <div class="produto">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="eBook Vendas" />
          <h3>Vendas que Convertem</h3>
          <p>Aprenda a fechar negócios e aumentar sua receita com métodos comprovados.</p>
          <a href="#" class="btn-comprar">Comprar R$59,90</a>
        </div>

        <div class="produto">
          <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80" alt="eBook Estratégias" />
          <h3>Estratégias Avançadas</h3>
          <p>Eleve seu negócio com técnicas avançadas de marketing e persuasão.</p>
          <a href="#" class="btn-comprar">Comprar R$79,90</a>
        </div>
      </div>
    </section>

    <section>
      <h2>Contato</h2>
      <form action="mailto:seuemail@exemplo.com" method="post" enctype="text/plain">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
        
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>

  <footer>
    &copy; 2025 Matheus Bartender21 - Todos os direitos reservados.
  </footer>
</body>
</html>
