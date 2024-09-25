import { useState, useEffect } from "react";

export default function Consulta() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://test-deploy-12.onrender.com/cursos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <h2 className="post-title">{post.nombre}</h2>
            <p className="post-body">{post.creditos}</p>
            <h2 className="post-title">{post.descripcion}</h2>
          </div>
        );
      })}
    </div>
  );
}