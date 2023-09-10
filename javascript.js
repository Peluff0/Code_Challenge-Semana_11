const url = "https://jsonplaceholder.typicode.com/users"
let formulario = document.getElementById("formularioLogin");

formulario.addEventListener("submit", function(event) {
  
  const nombre = document.getElementById('name').value;
  const apellido = document.getElementById('lastName').value;
  const fechaDeNacimiento = document.getElementById('birthday').value;

  event.preventDefault();

  const usuario = {
    name: nombre,
    lastName: apellido,
    birthday: fechaDeNacimiento
  };
  

  fetch(url, {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
        "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log('Respuesta del servidor:', data);
    alert('Registro exitoso. Consulta la consola para ver la respuesta del servidor.')
  })
  .catch(error => {
    console.error('Fetch error:', error);
  })
  
});  
