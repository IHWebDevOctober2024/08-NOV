# REACT ROUTER DOM

## Description

What react-router-dom does is that it allows us to create routes in our application.

The routes are what we see in the browser URL.

example: `https://www.google.com/` is a route, `https://www.google.com/search` is another route.

In our app we want to display different components based on the route the user is on. Like different pages in a website.

## Installation

```bash
npm install react-router-dom
```

## Configuration

In the `main.jsx` we wrap the `App` component with the `BrowserRouter` component.
This allows our app to use the routing functionality.

```jsx
import { BrowserRouter as Router } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
```

## Usage

In the `App.jsx` we import the `Routes` component from `react-router-dom`.
And we import also the `Route` component.

```jsx
import { Routes, Route } from "react-router-dom";

function App() {
  retur(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

The component ROUTES is where we are going to define all the routes of our application.
And the component ROUTE is where we define each route of our application.

## Links

The links are converted into anchor tags `<a>` in the browser.
But in the jsx code we use the `Link` component to navigate to other pages.

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

## We can also use dynamic routes

```jsx
<Route path="/product/:id/:type" element={<Product />} />
```

The part of the url that is after the `:` is the dynamic part.

This way we can look for the `id` in the array of products and display the product that matches the id.

### useParams

To get this information of the dynamic route we use the `useParams` hook.

```jsx
import { useParams } from "react-router-dom";

function Product() {
  // We can destructure it
  //const { id } = useParams();
  const params = useParams();
  console.log(params); // { id: 1, type: "card1" }
  // if the url is http://localhost:3000/product/1/card1
  // params.id will be 1

  return (
    <div>
      <h1>Product {params.id}</h1>
    </div>
  );
}
```
