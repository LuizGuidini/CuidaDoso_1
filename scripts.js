document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const userType = document.getElementById('user-type').value;
  
  // Aqui você pode adicionar a lógica para autenticar o usuário
  console.log(`Usuário: ${username}, Senha: ${password}, Tipo: ${userType}`);
  
  // Redirecionar para a página principal após o login
  window.location.href = 'main.html';
});

document.getElementById('cadastro-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  
  // Aqui você pode adicionar a lógica para salvar os dados do usuário
  console.log(`Nome: ${name}, Telefone: ${phone}, Email: ${email}`);
  
  // Redirecionar para a página de login após o cadastro
  window.location.href = 'login.html';
});

document.getElementById('panic-button').addEventListener('click', function() {
  // Aqui você pode adicionar a lógica para o botão de pânico
  alert('Botão de Pânico acionado!');
});