// PRODUCTS
app.get("/api/products", (req, res) => {}); // fetch all products
app.get("/api/products/:id", (req, res) => {}); // fetch a single product
app.post("/api/products", (req, res) => {}); // create product
app.put("/api/products/:id", (req, res) => {}); // update product
app.delete("/api/products/:id", (req, res) => {}); // delete product
app.get("/api/products/search", (req, res) => {}); // search/filter products

// CATEGORIES
app.get("/api/categories", (req, res) => {}); // fetch all categories
app.post("/api/categories", (req, res) => {}); // create category
app.put("/api/categories/:id", (req, res) => {}); // update category
app.delete("/api/categories/:id", (req, res) => {}); // delete category

// AUTH / USERS
app.post("/api/auth/register", (req, res) => {}); // register
app.post("/api/auth/login", (req, res) => {}); // login
app.post("/api/auth/logout", (req, res) => {}); // logout
app.get("/api/users/me", (req, res) => {}); // get current user
app.put("/api/users/me", (req, res) => {}); // update user profile
app.put("/api/users/password", (req, res) => {}); // change password
app.get("/api/users/:id", (req, res) => {}); // get user by ID
app.delete("/api/users/:id", (req, res) => {}); // delete user

// CART
app.get("/api/cart", (req, res) => {}); // get cart
app.post("/api/cart", (req, res) => {}); // add item to cart
app.put("/api/cart/:itemId", (req, res) => {}); // update item quantity
app.delete("/api/cart/:itemId", (req, res) => {}); // remove item
app.delete("/api/cart", (req, res) => {}); // clear cart

// ORDERS
app.get("/api/orders", (req, res) => {}); // get all orders
app.get("/api/orders/:id", (req, res) => {}); // get single order
app.post("/api/orders", (req, res) => {}); // create order
app.put("/api/orders/:id/status", (req, res) => {}); // update status
app.delete("/api/orders/:id", (req, res) => {}); // cancel order

// PAYMENTS
app.post("/api/payments", (req, res) => {}); // initiate payment
app.get("/api/payments/status/:orderId", (req, res) => {}); // check status
app.post("/api/webhooks/payment", (req, res) => {}); // payment webhook

// ADDRESSES
app.get("/api/addresses", (req, res) => {}); // get addresses
app.post("/api/addresses", (req, res) => {}); // add address
app.put("/api/addresses/:id", (req, res) => {}); // update address
app.delete("/api/addresses/:id", (req, res) => {}); // delete address

// REVIEWS
app.post("/api/products/:id/reviews", (req, res) => {}); // add review
app.get("/api/products/:id/reviews", (req, res) => {}); // get reviews
app.put("/api/reviews/:id", (req, res) => {}); // edit review
app.delete("/api/reviews/:id", (req, res) => {}); // delete review

// COUPONS
app.get("/api/coupons", (req, res) => {}); // get coupons
app.post("/api/coupons", (req, res) => {}); // create coupon
app.post("/api/coupons/apply", (req, res) => {}); // apply coupon
app.delete("/api/coupons/:id", (req, res) => {}); // delete coupon

// ADMIN / DASHBOARD
app.get("/api/dashboard/summary", (req, res) => {}); // get dashboard summary
app.get("/api/dashboard/revenue", (req, res) => {}); // get revenue data
app.get("/api/dashboard/top-products", (req, res) => {}); // get top products
