require('dotenv').config();
const port = process.env.PORT_USER;
async function loginUser(email, password) {
    try {
      const response = await fetch(`http://localhost:${port}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Login bem-sucedido:', data);
        localStorage.setItem('accessToken', data.token);

      } else {
        console.error('Erro no login:', data.message);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }
  