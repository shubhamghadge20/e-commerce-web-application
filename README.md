
# E-commerce Web Application
This project is a simple e-commerce web application built with React. It allows users to view featured products, filter and search products, and add them to the cart. It utilizes React Router for navigation and Axios to fetch product data from a mock API.

## Features
**Navbar:** A responsive navigation bar with links to Home, Products, About, and Contact pages.  
**Product Carousel:** A carousel of exclusive product offers.  
**Product Catalog:**  Displays products with filters for category, price, and ratings.  
**Product Details:** Displays detailed information about a product, with options to add to the cart or buy now.  
**Cart Context:** A context provider to manage the cart state, allowing products to be added, removed, and their quantities updated.  
**Responsive Design:** Mobile-friendly with a collapsible menu and smooth transitions.  

## Technologies Used
-**React** 
-**React Router** 
-**Axios** 
-**Tailwind CSS (for styling)** 
-**Context API for state management** 

## Installation 

To get started with the project, follow the steps below: 

### 1. Clone the Repository 
``` bash
https://github.com/shubhamghadge20/e-commerce-web-application.git
```
### 2. Navigate to the Project Directory 
```bash
cd e-commerce-web-application
``` 
### 3. Install Dependencies 
Make sure you have Node.js installed. Then, install the required dependencies using npm or yarn: 

```bash
npm install
```
### 4. Run the Project 
After the dependencies are installed, you can run the development server using the following command: 

```bash
npm start
```
This will start the application at http://localhost:3000 in your browser.

### Usage 

Once the application is running, you can: 

Navigate through different pages using the Navbar.  
View the product carousel with exclusive offers.  
Filter products by category, price, or ratings in the Product Catalog.  
Click on any product to view its details and add it to your cart.  
Use the cart context to manage your cart state across different pages.  

### File Structure
```bash

/src
  /components
    Navbar.js          # The navigation bar component
    ProductCard.js     # Displays a product card
    ProductCarousel.js # A carousel of featured products
    ProductFilters.js  # Filters for the product catalog
  /context
    CartContext.js     # Context provider for cart state management
  /pages
    Home.js            # Home page with carousel and featured products
    ProductCatalog.js  # Page to display and filter all products
    ProductDetails.js  # Detailed page for a single product
  /assets
    /images            # Folder to store images
  App.js               # Main application component
  index.js             # Entry point for the React app
```

