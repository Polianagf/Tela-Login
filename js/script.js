function toggleForms() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    loginForm.style.display = loginForm.style.display === "none" ? "flex" : "none";
    registerForm.style.display = registerForm.style.display === "none" ? "flex" : "none";
    document.getElementById("message").textContent = "";
  }
  
  function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
  
    if (username && password) {
      localStorage.setItem(username, password);
      document.getElementById("message").textContent = "Cadastro realizado com sucesso!";
      toggleForms();
    } else {
      document.getElementById("message").textContent = "Por favor, preencha todos os campos!";
    }
  }
  
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    if (localStorage.getItem(username) === password) {
      document.getElementById("message").textContent = `Bem-vindo, ${username}!`;
    } else {
      document.getElementById("message").textContent = "Usuário ou senha incorretos!";
    }
  }
  