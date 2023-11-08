document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.querySelector('#user').value;
        const password = document.querySelector('#pssw').value;

        fetch('../data/users.json')
            .then(response => response.json())
            .then(data => {
                const user = data.users.find(user => user.email === email && user.password === password);

                if (user) {
                    // Guardar los datos del usuario en el sessionStorage
                    sessionStorage.setItem('currentUser', JSON.stringify(user));

                    // Redireccionar según el rol del usuario
                    if (user.role === 'admin') {
                        window.location.href = "admin.html";
                    } else if (user.role === 'user') {
                        window.location.href = "index.html";
                    }
                } else {
                    // Mensaje de error si las credenciales no coinciden
                    alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    });
});
