import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ReactLoading from 'react-loading';

const Listarticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    try {
      const res = await axios.get("https://laravel2end.vercel.app/api/api/articles");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <Button variant="contained" style={{ backgroundColor: 'black' }}>
        <Link to="/articles/add" style={{ color: 'white', textDecoration: 'none' }}>
          <i className="fa-solid fa-plus-square"></i> Nouveau
        </Link>
      </Button>
      <h2>Liste des articles</h2>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <ReactLoading type="bubbles" color="#000" />
        </div>
      ) : (
        <table className='table table-striped'>
          <thead>
            <tr>
              <td>Désignation</td>
              <td>Marque</td>
              <td>Référence</td>
              <td>Quantité en stock</td>
              <td>Prix</td>
              <td>Image article</td>
              <td>Sous-catégorie</td>
              <td>Image sous-catégorie</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {articles && articles.map((article, index) => (
              <tr key={index}>
                <td>{article.designation}</td>
                <td>{article.marque}</td>
                <td>{article.reference}</td>
                <td>{article.qtestock}</td>
                <td>{article.prix}</td>
                <td><img src={article.imageart} width={100} height={100} alt={article.designation} /></td>
                <td>{article.scategorie.nomscategorie}</td>
                <td><img src={article.scategorie.imagescategorie} width={100} height={100} alt={article.scategorie.nomscategorie} /></td>
                <td><button className='btn btn-warning btn-sm'>Update</button></td>
                <td><button className='btn btn-danger btn-sm'>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Listarticles;
