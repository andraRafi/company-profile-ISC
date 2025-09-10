import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import MediaCard from "./components/MediaCard.jsx";
import NewsCard from "./components/NewsCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <div className='container mx-auto '>
      <Hero />
      <App />
    </div>
    <ServiceCard />
    <MediaCard />
    <NewsCard />
  </StrictMode>
);
