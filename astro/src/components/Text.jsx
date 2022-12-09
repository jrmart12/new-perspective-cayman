import React, { useEffect, useState, useCallback } from "react";
import "../styles/text.scss";

const names = [
  "Cayman Islands (Grand Cayman, Little Cayman, Cayman Brac)",
  "Roatan (Islas de la Bahia)",
  "La Ceiba (Atlantida, Honduras)",
  "San Pedro Sula (Cortes, Honduras)",
];

export default function Text() {
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return <h2>{newName}</h2>;
}
