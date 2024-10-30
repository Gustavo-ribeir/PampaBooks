document.addEventListener('DOMContentLoaded', function() {
  const errorMessage = document.getElementById('errorMessage');

document.getElementById('loginForm').addEventListener("submit",async(e)=>{
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try{
      const response = await fetch('/auth/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      
      if(response.ok){
        localStorage.setItem('accessToken', data.accessToken);
        console.log('Token armazenado:', data.accessToken); 
        setTimeout(()=>{
          window.location.href = '/profile';
        },1000);
      }else {
          errorMessage.textContent = data.message || 'Erro ao fazer login';
          errorMessage.style.display = 'block';
        }
    }catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      errorMessage.textContent = 'Erro ao conectar com o servidor';
      errorMessage.style.display = 'block';
    }
  });
  async function fetchUserProfile() {
    const token = localStorage.getItem('accessToken');
    try {
      const response = await fetch('/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Perfil do usuário:', data.user);
      } else {
        console.error('Erro ao obter perfil:', data.message);
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  }

  if (window.location.pathname === '/profile') {
    fetchUserProfile();
  }
});