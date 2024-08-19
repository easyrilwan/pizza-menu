import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {color: "crimson",fontSize: "40px",textTransform: "uppercase",};
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Restuarant and Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* TERNARY OPERATOR */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose All our stone
            oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzObj={pizza} key={pizza.name} />
              // <Pizza name={pizza.name} photoName={pizza.photoName} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're currently on our menu. Please come back later</p>
      )}

      {/* SHORT CIRCUITING */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzObj={pizza} key={pizza.name} />
            // <Pizza name={pizza.name} photoName={pizza.photoName} />
          ))}
        </ul>
      )} */}

      {/* MAP FUNCTION */}
      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzObj={pizza} key={pizza.name} />
          // <Pizza name={pizza.name} photoName={pizza.photoName} />
        ))}
      </ul> */}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
        photoName="pizzas/spinaci.jpg"
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella,  mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzObj }) {
  console.log(pizzObj);

  // if (pizzObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzObj.photoName} alt={pizzObj.name} />
      <div>
        <h3>{pizzObj.name}</h3>
        <p>{pizzObj.ingredients}</p>
        <span>{pizzObj.soldOut ? "SOLD OUT" : pizzObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(hour);
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {/* TERNARY OPERATOR */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}

      {/* SHORT CIRCUITING */}
      {/* {isOpen && (
        <div class="order">
          <p>
            We're open untill {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )} */}
      {/* {new Date().toLocaleTimeString()}. We're currently open */}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 untill {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
