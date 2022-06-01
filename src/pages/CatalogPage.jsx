import React from "react";
import Catalog from "../components/Catalog/Catalog";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function CatalogPage() {
  return (
    <div>
      <Navigation />
      <Catalog />
      <Footer />
    </div>
  );
}
