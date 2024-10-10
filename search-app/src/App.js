import React, { useState } from 'react';

// Sample articles
const articles = [
  { id: 1, title: "React Basics", content: "Learn the basics of React." },
  { id: 2, title: "JavaScript Tips", content: "Enhance your JavaScript skills." },
  { id: 3, title: "CSS Tricks", content: "Explore some cool CSS tricks." },
  { id: 4, title: "Advanced React", content: "Dive into advanced React concepts." },
  { id: 5, title: "Web Development", content: "Get started with web development." },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
    );
  };

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Article Search</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleSearchChange} 
        style={{ marginBottom: '20px', width: '300px', padding: '10px' }}
      />
      <ul>
        {filteredArticles.map(article => (
          <li key={article.id}>
            <h2>{highlightText(article.title)}</h2>
            <p>{highlightText(article.content)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
