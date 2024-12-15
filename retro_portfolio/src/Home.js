import React from "react"
import "nes.css/css/nes.min.css";
import "./App.css"; // for custom styles

const Home = () => (
  <div className="nes-container is-dark with-title">
    <header className="header">
      <h1 className="nes-text is-primary">Welcome to My Portfolio!</h1>
    </header>
    <main className="main-content">
      <section className="nes-container with-title">
        <h2 className="title">About Me</h2>
        <p>I am a software engineer specializing in creating unique, nostalgic experiences with modern tech!</p>
      </section>
      <section className="nes-container with-title">
        <h2 className="title">Portfolio</h2>
        <p>Check out my latest projects on <a href="https://github.com">GitHub</a>!</p>
      </section>
      <section className="nes-container with-title">
        <h2 className="title">Contact</h2>
        <p>Feel free to <a href="20">contact</a> with me for collaborations or job opportunities!</p>
      </section>
    </main>
    <footer className="footer nes-container is-rounded">
      <p className="nes-text">© 2024 My Portfolio - All Rights Reserved</p>
    </footer>
  </div>
);

export default Home;

