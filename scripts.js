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

--------
// Configuração do Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('cadastro-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const userType = document.getElementById('user-type').value;
  
  // Criar usuário no Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`Usuário criado: ${user.uid}`);
      
      // Enviar mensagem via WhatsApp para o segundo usuário
      if (userType === 'principal') {
        const message = `Olá, ${name} te convidou para usar o aplicativo Cuidadoso. Baixe o app e use o código: ${user.uid}`;
        sendWhatsAppMessage(phone, message);
      }
      
      // Redirecionar para a página de login após o cadastro
      window.location.href = 'login.html';
    })
    .catch((error) => {
      console.error('Erro ao criar usuário:', error);
    });
});

const sendWhatsAppMessage = (phoneNumber, message) => {
  const url = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  window.open(url, '_blank');
};
----------
// Configuração do Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const userType = document.getElementById('user-type').value;
  
  // Autenticar usuário no Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`Usuário autenticado: ${user.uid}`);
      
      // Redirecionar para a página principal após o login
      window.location.href = 'main.html';
    })
    .catch((error) => {
      console.error('Erro ao autenticar usuário:', error);
    });
});

document.getElementById('google-login').addEventListener('click', function() {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log(`Usuário autenticado com Google: ${user.uid}`);
      
      // Redirecionar para a página principal após o login
      window.location.href = 'main.html';
    })
    .catch((error) => {
      console.error('Erro ao autenticar com Google:', error);
    });
});