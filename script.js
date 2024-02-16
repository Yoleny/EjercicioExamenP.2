fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.getElementById('products');

    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');

      const image = document.createElement('img');
      image.src = product.image;
      image.classList.add('card-img-top');
      image.alt = product.title;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = product.title;

      const price = document.createElement('p');
      price.classList.add('card-text');
      price.textContent = `Price: $${product.price}`;

      const description = document.createElement('p');
      description.classList.add('card-text');
      description.textContent = product.description;

      const category = document.createElement('p');
      category.classList.add('card-text');
      category.textContent = `Category: ${product.category}`;

      cardBody.appendChild(title);
      cardBody.appendChild(price);
      cardBody.appendChild(description);
      cardBody.appendChild(category);

      card.appendChild(image);
      card.appendChild(cardBody);

      productsContainer.appendChild(card);
    });
  });
