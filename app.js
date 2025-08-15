// api rest - Variables de entorno 
const url = 'https://cukhmkzetdlufitzphrr.supabase.co/rest/v1/productos?select=*';
const headers = {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1a2hta3pldGRsdWZpdHpwaHJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNzkzNzksImV4cCI6MjA2OTY1NTM3OX0.2q-MB4IV0SnKjVMvpaW56bvbwaqsun0iZsVu_zcMIBc',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1a2hta3pldGRsdWZpdHpwaHJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNzkzNzksImV4cCI6MjA2OTY1NTM3OX0.2q-MB4IV0SnKjVMvpaW56bvbwaqsun0iZsVu_zcMIBc'
};

fetch(url, { headers })
    .then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach((project) => {
        const projectId = project.id;
        const projectName = project.name;
        const projectImage = project.imagen;
        const projectTech = project.precio;
        const projectImgAlt = project.Description;

        // Crear elemento de columna
        const col = document.createElement('div');
        col.className = 'col-md-4';

        // Crear tarjeta
        const card = document.createElement('div');
        card.className = 'card h-100';

        // Cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Título
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = projectName;

        // imagen 
        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = projectImage;

        // Descripción
        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = `Precio: $${projectTech}`;

        // Stock
        const stock = document.createElement('p');
        stock.className = 'card-text';
        stock.textContent = `Descripción: ${projectImgAlt}`;

        // Botón
        const button = document.createElement('button');
        button.className = 'btn btn-primary';
        button.textContent = 'Agrega al carrito';
        button.onclick = () => carrito.agregarProducto(project, 1);

        // Agregar elementos al cuerpo de la tarjeta
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(stock);
        cardBody.appendChild(button);

        // Armar la tarjeta
        card.appendChild(cardBody);
        col.appendChild(card);

        // Agregar columna al contenedor de productos
        document.getElementById('productos').appendChild(col);
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});

// Generar productos dinámicamente
const productos = [
    new Producto('Producto 1', 100, 10),
    new Producto('Producto 2', 200, 5),
    new Producto('Producto 3', 150, 8)
];

const productosContainer = document.getElementById('productos');

productos.forEach(producto => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = 'projectImage.jpg'; // Reemplaza con la ruta de tu imagen
    img.alt = producto.nombre;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = producto.nombre;

    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = `Precio: $${producto.precio}`;

    const stock = document.createElement('p');
    stock.className = 'card-text';
    stock.textContent = `Stock: ${producto.cantidadEnStock}`;

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Añadir al carrito';
    button.onclick = () => carrito.agregarProducto(producto, 1);

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(stock);
    cardBody.appendChild(button);

    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);

    productosContainer.appendChild(col);
});