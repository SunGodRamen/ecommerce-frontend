const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Keep this if you have other data in db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add custom routes before JSON Server router
server.post('/api/login', (req, res) => {
  // Here you can check req.body for login credentials if needed
  // and return appropriate response
  // Mock response for successful login
  res.jsonp({
    id: 1,
    username: "user",
    token: "fake-jwt-token"
  });
});

// Mock products data
const productslist = [
  { id: 1, name: "Amazing Widget", price: 9.99 },
  { id: 2, name: "Incredible Gadget", price: 12.99 },
  { id: 3, name: "Fantastic Thingamabob", price: 7.99 },
  { id: 4, name: "Superb Doodad", price: 5.49 }
  // Add more products as needed
];

server.get('/api/products', (req, res) => {
  res.jsonp(productslist);
});

server.get('/api/products/:productId', (req, res) => {
  const productId = parseInt(req.params.productId, 10); // Convert to integer
  const product = productslist.find(p => p.id === productId); // Find the product by id
  if (product) {
    res.jsonp(product);
  } else {
    res.status(404).jsonp({ error: "Product not found" });
  }
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});
