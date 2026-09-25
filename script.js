// ---------- Tela de Login (index.html) ----------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  const usuario = document.getElementById("usuario");
  const senha = document.getElementById("senha");
  const mensagem = document.getElementById("mensagem");

  function buscarUsuarioCadastrado(email) {
    const usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados") || "[]");
    return usuarios.find((u) => u.email.toLowerCase() === email.toLowerCase());
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o recarregamento da página

    const usuarioInformado = usuario.value.trim();
    const senhaInformada = senha.value;

    if (usuarioInformado === "" || senhaInformada === "") {
      mensagem.style.color = "#ff5252";
      mensagem.textContent = "Preencha todos os campos!";
      return;
    }

    const cadastrado = buscarUsuarioCadastrado(usuarioInformado);

    if (cadastrado) {
      // Usuário veio da tela de cadastro (identificado pelo e-mail).
      localStorage.setItem("usuarioLogado", JSON.stringify({ nome: cadastrado.nome }));
      localStorage.setItem("ultimoAcesso", new Date().toLocaleString("pt-BR"));
      mensagem.style.color = "#03dac6";
      mensagem.textContent = "Login realizado com sucesso!";
      setTimeout(() => { window.location.href = "dashboard.html"; }, 800);
    } else if (usuarioInformado === "adm" && senhaInformada === "123") {
      // Usuário de demonstração, mantido para testes rápidos.
      localStorage.setItem("usuarioLogado", JSON.stringify({ nome: "Administrador" }));
      localStorage.setItem("ultimoAcesso", new Date().toLocaleString("pt-BR"));
      mensagem.style.color = "#03dac6";
      mensagem.textContent = "Login realizado com sucesso!";
      setTimeout(() => { window.location.href = "dashboard.html"; }, 800);
    } else {
      mensagem.style.color = "#ff5252";
      mensagem.textContent = "Usuário ou senha incorretos.";
    }
  });
}

// ---------- Dashboard (dashboard.html) ----------
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

  // Protege a rota: sem login, volta para a tela inicial.
  if (!usuarioLogado) {
    window.location.href = "index.html";
  } else {
    const welcomeMsg = document.getElementById("welcomeMsg");
    const userAvatar = document.getElementById("userAvatar");
    const userNameLabel = document.getElementById("userNameLabel");
    const lastAccess = document.getElementById("lastAccess");

    if (welcomeMsg) welcomeMsg.textContent = `Bem-vindo(a), ${usuarioLogado.nome}!`;
    if (userNameLabel) userNameLabel.textContent = usuarioLogado.nome;
    if (userAvatar) userAvatar.textContent = usuarioLogado.nome.charAt(0).toUpperCase();
    if (lastAccess) lastAccess.textContent = localStorage.getItem("ultimoAcesso") || "--";
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
  });

  // Marca o item de menu clicado como ativo.
  document.querySelectorAll(".sidebar nav a[data-page]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".sidebar nav a[data-page]").forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}