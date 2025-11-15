/**
 * spa.js — Sistema de Single Page Application + Validação Acessível
 * Entrega IV — ONG Conecta
 * Autor: Lucas Silva de Oliveira
 */

document.addEventListener("DOMContentLoaded", () => {
  const conteudo = document.getElementById("conteudo");

  /* ---------------------------------------------
     PÁGINAS DA SPA
     --------------------------------------------- */
  const paginas = {

    index: `
      <section class="card">
        <h2>Bem-vindo à ONG Conecta 💙</h2>
        <p>
          A ONG Conecta é uma plataforma que conecta voluntários e projetos sociais,
          promovendo solidariedade e impacto positivo nas comunidades.
        </p>
        <img src="imagens/voluntario.png" alt="Voluntários sorrindo em ação comunitária">

        <div class="video-wrapper">
          <video controls style="width: 70%; max-width: 700px; border-radius: 12px;">
            <source src="imagens/video-institucional.mp4" type="video/mp4">
            Seu navegador não suporta vídeos.
          </video>
        </div>
      </section>

      <section class="card">
        <h3>Projeto de Educação Digital</h3>
        <img src="imagens/projeto1.png" alt="Aula de informática para idosos">
        <p>
          Promovendo a inclusão digital para idosos através de oficinas práticas e acompanhamento individualizado.
        </p>
        <div class="tag">📚 Educação ✨</div>
        <div class="tag">🧑‍💻 Inclusão 🌈</div>
      </section>

      <section class="card">
        <h3>Ação Comunitária</h3>
        <img src="imagens/projeto2.png" alt="Distribuição de alimentos">
        <p>
          Organizando campanhas de arrecadação e distribuição de alimentos, roupas e brinquedos
          para famílias em vulnerabilidade social.
        </p>
        <div class="tag">❤️ Solidariedade 🤗</div>
        <div class="tag">🏘️ Comunidade 💪</div>
      </section>

      <section class="card">
        <h3>Cadastro de Voluntário</h3>
        <form id="form-voluntario">
          <fieldset>
            <legend>Informações Pessoais</legend>

            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" required>

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" placeholder="(11)99999-9999" required>

            <label for="endereco">Endereço Completo:</label>
            <input type="text" id="endereco" required>
          </fieldset>

          <fieldset>
            <legend>Interesse de Voluntariado</legend>

            <label for="area">Área de Interesse:</label>
            <select id="area" required>
              <option value="">Selecione...</option>
              <option value="educacao">Educação</option>
              <option value="ambiental">Meio Ambiente</option>
              <option value="comunitario">Ação Comunitária</option>
            </select>

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" rows="4"></textarea>
          </fieldset>

          <button type="submit">Enviar Cadastro</button>
        </form>
      </section>

      <div class="alert sucesso" id="mensagem-sucesso" style="display:none;">
        ✅ Cadastro enviado com sucesso! Obrigado por se voluntariar.
      </div>
    `,

    /* === PÁGINA SOBRE === */
    sobre: `
      <section class="card">
        <h2>Quem Somos</h2>
        <p>
          A <strong>ONG Conecta</strong> nasceu para unir pessoas que desejam transformar o mundo
          por meio de ações solidárias, educativas e sustentáveis.
        </p>
        <img src="imagens/voluntario.png" alt="Voluntários em ação comunitária">
      </section>

      <section class="card">
        <h2>Nossa Missão</h2>
        <p>
          Promover conexões entre voluntários e instituições, gerando impacto social
          através da <strong>tecnologia, empatia e colaboração</strong>.
        </p>
        <div class="alert aviso">💡 Junte-se a nós e faça parte dessa transformação!</div>
      </section>
    `,

    /* === PÁGINA PROJETOS === */
    projetos: `
      <section class="card">
        <h2>Nossos Projetos</h2>
        <p>
          Conheça algumas das iniciativas da <strong>ONG Conecta</strong> que estão
          transformando vidas em todo o país 💙
        </p>
      </section>

      <section class="card">
        <h3>Projeto Alimenta Esperança</h3>
        <img src="imagens/projeto1.png" alt="Distribuição de alimentos">
        <p>Arrecadamos e distribuímos cestas básicas para famílias em vulnerabilidade social.</p>
        <div class="tag">❤️ Solidariedade</div>
        <div class="tag">🏘️ Comunidade</div>
      </section>

      <section class="card">
        <h3>Educação Digital</h3>
        <img src="imagens/projeto2.png" alt="Oficina de informática para idosos">
        <p>Oferecemos cursos gratuitos de informática para jovens e idosos.</p>
        <div class="tag">📚 Educação</div>
        <div class="tag">🧑‍💻 Inclusão</div>
      </section>

      <section class="card">
        <h3>Ação Comunitária</h3>
        <img src="imagens/projeto3.png" alt="Mutirão comunitário">
        <p>Realizamos oficinas, campanhas solidárias e eventos de integração.</p>
        <div class="tag">🤝 Voluntariado</div>
        <div class="tag">🌍 Impacto Social</div>
      </section>
    `,

    /* === PÁGINA CADASTRO === */
    cadastro: `
      <section class="card">
        <h2>Cadastro de Voluntário</h2>
        <p>Preencha o formulário abaixo para participar 💙</p>

        <form id="form-cadastro">
          <fieldset>
            <legend>Informações Pessoais</legend>

            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" required>

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" placeholder="(11)99999-9999" required>

            <label for="endereco">Endereço Completo:</label>
            <input type="text" id="endereco" required>
          </fieldset>

          <fieldset>
            <legend>Áreas de Interesse</legend>

            <label for="area">Selecione uma área:</label>
            <select id="area" required>
              <option value="">Selecione...</option>
              <option value="educacao">Educação</option>
              <option value="meioambiente">Meio Ambiente</option>
              <option value="comunitario">Ação Comunitária</option>
            </select>

            <label for="mensagem">Mensagem (opcional):</label>
            <textarea id="mensagem" rows="4"></textarea>
          </fieldset>

          <button type="submit">Enviar Cadastro</button>
        </form>

        <div class="alert sucesso" id="mensagem-sucesso" style="display:none;">
          ✅ Cadastro enviado com sucesso! Obrigado por se voluntariar 💙
        </div>
      </section>
    `
  };

  /* ---------------------------------------------
     CARREGAR PÁGINAS SPA
     --------------------------------------------- */
  function carregarPagina() {
    const hash = window.location.hash.substring(1) || "index";
    conteudo.innerHTML = paginas[hash] || "<h2>Página não encontrada 😢</h2>";

    conteudo.setAttribute("tabindex", "-1");
    conteudo.focus();

    const form = conteudo.querySelector("form");
    if (form) configurarValidacao(form);
  }

  window.addEventListener("hashchange", carregarPagina);
  carregarPagina();

  /* ---------------------------------------------
     VALIDAÇÃO ACESSÍVEL
     --------------------------------------------- */
  function configurarValidacao(form) {
    const campos = form.querySelectorAll("input[required], select[required]");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let valido = true;

      campos.forEach((campo) => {
        if (!campo.value.trim()) {
          valido = false; // CORRIGIDO!
          marcarErro(campo, "Preencha este campo.");
        } else {
          limparErro(campo);
        }
      });

      if (!valido) return;

      if (mensagemSucesso) {
        mensagemSucesso.style.display = "block";
        mensagemSucesso.setAttribute("role", "alert");
      }

      form.reset();
    });
  }

  /* ---------------------------------------------
     ERROS DE FORMULÁRIO
     --------------------------------------------- */
  function marcarErro(campo, mensagem) {
    campo.style.borderColor = "#b71c1c";

    let erro = campo.nextElementSibling;
    if (!erro || !erro.classList.contains("erro-msg")) {
      erro = document.createElement("div");
      erro.classList.add("erro-msg");
      erro.style.color = "#b71c1c";
      erro.style.fontWeight = "bold";
      erro.style.marginTop = "4px";
      campo.insertAdjacentElement("afterend", erro);
    }

    erro.textContent = mensagem;
  }

  function limparErro(campo) {
    campo.style.borderColor = "#ccc";

    const erro = campo.nextElementSibling;
    if (erro && erro.classList.contains("erro-msg")) {
      erro.remove();
    }
  }
});
