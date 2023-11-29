document.addEventListener("DOMContentLoaded", function () {
  const listaUsuarios = document.getElementById("listaUsuarios");

  // Obtener datos de usuarios desde la API JSONPlaceholder
  fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
          // Iterar sobre los usuarios
          data.forEach(usuario => {
              // Agregar edad aleatoria (asumiendo que la edad es un número)
              usuario.age = Math.floor(Math.random() * 50) + 18;

              // Construir la dirección utilizando Destructuring y spread operator
              const { street, suite, city } = usuario.address;
              usuario.fullAddress = `${street}, ${suite}, ${city}`;

              // Crear elemento de lista
              const listItem = document.createElement("li");

              // Mostrar detalles específicos en la lista
              listItem.innerHTML = `
                  <img src="assets/img/${usuario.id}.jpeg" alt="${usuario.name}">
                  <div>
                      <p><strong>Name:</strong> ${usuario.name}</p>
                      <p><strong>Age:</strong> ${usuario.age}</p>
                      <p><strong>Username:</strong> ${usuario.username}</p>
                      <p><strong>Phone:</strong> ${usuario.phone}</p>
                      <p><strong>Email:</strong> ${usuario.email}</p>
                      <p><strong>Company:</strong> ${usuario.company.name}</p>
                      <p><strong>Address:</strong> ${usuario.fullAddress}</p>
                  </div>
              `;

              // Agregar el elemento de lista a la lista principal
              listaUsuarios.appendChild(listItem);
          });
      })
      .catch(error => console.error("Error fetching data:", error));
});
