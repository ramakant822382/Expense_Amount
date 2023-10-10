import React from "react";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Add Your Expense Here</h2>
          <p>Explore our world-class services and products.</p>
          <a href="/expense" className="cta-button">
            Add Expense
          </a>
        </section>
      </main>

      <section className="features">
        <div className="feature">
          <h3>Feature 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
