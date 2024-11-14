import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ReactLoading from 'react-loading';

const ListScategories = () => {
  const [scategories, setScategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getScategories = async () => {
    try {
      const res = await axios.get("https://laravel2end.vercel.app/api/api/scategories");
      setScategories(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getScategories();
  }, []);

  return (
    <div>
      <Button variant="contained" style={{ backgroundColor: 'black' }}>
        <Link to="/scategories/add" style={{ color: 'white', textDecoration: 'none' }}>
          <i className="fa-solid fa-plus-square"></i> Nouveau
        </Link>
      </Button>
      <h2>Liste des sous-catégories</h2>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <ReactLoading type="bubbles" color="#000" />
        </div>
      ) : (
        <table className='table table-striped'>
          <thead>
            <tr>
              <td>Nom sous-catégorie</td>
              <td>Image sous-catégorie</td>
              <td>Nom catégorie</td>
              <td>Image catégorie</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {scategories && scategories.map((scat, index) => (
              <tr key={index}>
                <td>{scat.nomscategorie}</td>
                <td><img src={scat.imagescategorie} width={100} height={100} alt={scat.nomscategorie} /></td>
                <td>{scat.categorie.nomcategorie}</td>
                <td><img src={scat.categorie.imagecategorie} width={100} height={100} alt={scat.categorie.nomcategorie} /></td>
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

export default ListScategories;
