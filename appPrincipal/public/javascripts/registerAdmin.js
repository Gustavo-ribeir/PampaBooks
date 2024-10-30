require('dotenv').config;
const port = process.env.PORT_USER;
async function registerUser(name, email, password) {
    try {
      const response = await fetch(`http://localhost:${port}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Usuário registrado com sucesso:', data);
      } else {
        console.error('Erro no registro:', data.message);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }
  
  