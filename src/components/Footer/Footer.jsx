import React from "react";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <h4>Copyright {year} Brandan Isaacs</h4>
    </div>
  );
}
