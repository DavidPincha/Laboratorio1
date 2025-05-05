// registro.js

const createForm = () => {
    const main = document.createElement('main');
    main.style.margin = "2em";
  
    const form = document.createElement('form');
  
    const labelUrl = document.createElement('label');
    labelUrl.textContent = "URL de la imagen:";
    const inputUrl = document.createElement('input');
    inputUrl.type = "url";
    inputUrl.required = true;
    inputUrl.style.display = "block";
    inputUrl.style.marginBottom = "1em";
  
    const labelDesc = document.createElement('label');
    labelDesc.textContent = "Descripción:";
    const inputDesc = document.createElement('input');
    inputDesc.type = "text";
    inputDesc.required = true;
    inputDesc.minLength = 3;
    inputDesc.style.display = "block";
    inputDesc.style.marginBottom = "1em";
  
    const submit = document.createElement('button');
    submit.type = "submit";
    submit.textContent = "Agregar imagen";
    submit.style.padding = "10px";
  
    form.appendChild(labelUrl);
    form.appendChild(inputUrl);
    form.appendChild(labelDesc);
    form.appendChild(inputDesc);
    form.appendChild(submit);
  
    form.onsubmit = (e) => {
      e.preventDefault();
      const url = inputUrl.value.trim();
      const descripcion = inputDesc.value.trim();
  
      if (!url || descripcion.length < 3) {
        alert("Por favor ingrese datos válidos.");
        return;
      }
  
      const images = JSON.parse(localStorage.getItem('images')) || [];
      images.push({ url, descripcion });
      localStorage.setItem('images', JSON.stringify(images));
  
      location.href = "index.html";
    };
  
    main.appendChild(form);
    document.body.appendChild(main);
  };
  
  const createHeader = () => {
    const h = document.createElement("h2");
    h.textContent = "Registrar nueva imagen";
    h.style.margin = "1em";
    document.body.appendChild(h);
  };
  
  const init = () => {
    createHeader();
    createForm();
  };
  
  init();
  