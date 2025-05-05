// main.js

const images = JSON.parse(localStorage.getItem('images')) || [];

const createHeader = () => {
  const header = document.createElement('header');
  header.textContent = "Galería de Imágenes";
  header.style.background = "#4CAF50";
  header.style.color = "white";
  header.style.padding = "1em";
  header.style.textAlign = "center";
  document.body.appendChild(header);
};

const createSidebar = () => {
  const sidebar = document.createElement('aside');
  sidebar.style.width = "200px";
  sidebar.style.background = "#f0f0f0";
  sidebar.style.padding = "1em";
  sidebar.style.float = "left";
  sidebar.style.height = "100vh";

  const link = document.createElement('button');
  link.textContent = "Registrar nueva imagen";
  link.onclick = () => location.href = "registro.html";
  link.style.padding = "10px";
  link.style.cursor = "pointer";

  sidebar.appendChild(link);
  document.body.appendChild(sidebar);
};

const renderGallery = (images) => {
  const main = document.createElement('main');
  main.style.marginLeft = "220px";
  main.style.padding = "1em";
  main.style.display = "flex";
  main.style.flexWrap = "wrap";
  main.style.gap = "1em";

  images.forEach(({ url, descripcion }) => {
    const container = document.createElement('div');
    container.classList.add("gallery-item");
    container.style.border = "1px solid #ccc";
    container.style.padding = "10px";
    container.style.width = "200px";
    container.style.textAlign = "center";

    const img = document.createElement('img');
    img.src = url;
    img.alt = descripcion;
    img.style.width = "100%";
    img.style.cursor = "pointer";

    img.onclick = () => alert("Imagen: " + descripcion);

    const desc = document.createElement('p');
    desc.textContent = descripcion;

    container.appendChild(img);
    container.appendChild(desc);
    main.appendChild(container);
  });

  document.body.appendChild(main);
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.textContent = "© 2025 - Galería dinámica con JavaScript";
  footer.style.background = "#ddd";
  footer.style.textAlign = "center";
  footer.style.padding = "1em";
  footer.style.position = "fixed";
  footer.style.bottom = "0";
  footer.style.width = "100%";
  document.body.appendChild(footer);
};

const init = () => {
  createHeader();
  createSidebar();
  renderGallery(images);
  createFooter();
};

init();
