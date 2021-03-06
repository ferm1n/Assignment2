const products = [
    {
        id: 1,
        name: 'lenovo Phone',
        price: 10400,
    },
    {
        id: 2,
        name: 'iphone X',
        price: 74300,
    },
    {
        id: 3,
        name: 'Mouse',
        price: 800,
    },
    {
        id: 4,
        name: 'Keyboard',
        price: 1800,
    },
    {
        id: 5,
        name: 'Sony Headset',
        price: 19500,
    },
    {
        id: 6,
        name:'Acer Laptop',
        price: 25400,
    },
  ];
  const reservedProducts = [
    {
        id: 2,
        name: 'iphone X',
        price: 74300,
    },
    {
        id: 5,
        name: 'Sony Headset',
        price: 19500,
    },
  ];
  const reservedProductIds = reservedProducts.map((product) => product.id);

  const availableProducts = products.filter((product) => !reservedProductIds.includes(product.id), 
  );
  
  console.log(availableProducts);