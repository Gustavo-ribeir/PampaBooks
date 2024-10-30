
const token = localStorage.getItem('accessToken');
console.log('Token enviado na requisição:', token);

fetch('/profile', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('Resposta do servidor:', data);
})
.catch(error => {
  console.error('Erro na requisição:', error);
});