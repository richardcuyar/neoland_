  document.addEventListener("DOMContentLoaded", () => {
    initializeLoginForm();
  });
  

  function initializeLoginForm() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");
  
    const validUser = {
      username: "admin",
      password: "password123",
    };
  
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      validateLogin(username, password, validUser)
        ? handleLoginSuccess(username)
        : displayError(errorMessage, "Usuario o contraseña incorrectos.");
    });
  }
  
  /**
   * Valida el login del usuario comparando los datos ingresados con los datos correctos.
   * @param {string} username - Nombre de usuario ingresado.
   * @param {string} password - Contraseña ingresada.
   * @param {Object} validUser - Objeto con los datos de usuario y contraseña válidos.
   * @returns {boolean} - Retorna true si los datos coinciden, false en caso contrario.
   */
  function validateLogin(username, password, validUser) {
    return username === validUser.username && password === validUser.password;
  }
  
  /**
   * Muestra un mensaje de error.
   * @param {HTMLElement} errorElement - Elemento HTML donde se muestra el error.
   * @param {string} message - Mensaje a mostrar.
   */
  function displayError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = "block"; // Mostramos el mensaje de error solo cuando hay un error
  }
  /**
   * 
   * @param {string} username 
   */
  function handleLoginSuccess(username) {
   
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);

window.location.href = "../index.html"

  }