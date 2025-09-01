import React from "react";
import { useAuth } from "../context/AuthContext";

export default function MyRecipes() {
  const { user } = useAuth();
  if (!user) return <p style={{ padding: 16 }}>Please log in to view saved recipes.</p>;
  return (
    <div className="container">
      <div className="card">
        <h2>My Recipes</h2>
        <p>Coming soon: list of saved recipes from Firestore or local JSON.</p>
      </div>
    </div>
  );
}
