import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Recipe() {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  if (!user) return <p style={{ padding: 16 }}>Please log in to use the recipe generator.</p>;

  async function onGenerate(e) {
    e.preventDefault();
    // Placeholder: Replace with your AI call
    setOutput(`Recipe suggestion for: ${prompt}`);
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Recipe Generator</h2>
        <form onSubmit={onGenerate}>
          <textarea placeholder="e.g., chicken, spinach, rice" value={prompt} onChange={e => setPrompt(e.target.value)} rows={4} />
          <button type="submit">Generate</button>
        </form>
        {output && (<>
          <hr />
          <pre>{output}</pre>
        </>)}
      </div>
    </div>
  );
}
