import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ReactLoading from 'react-loading';

const Listcategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getcategories = async () => {
    try {
      const res = await axios.get("https://laravel2end.vercel.app/api/api/categories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getcategories();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer?")) {
      try {
        await axios.delete(`https://laravel2end.vercel.app/api/api/categories/${id}`)
          .then(res => {
            setCategories(categories.filter(c => c.id !== id));
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Button variant="contained" style={{ backgroundColor: 'black' }}>
        <Link to="/categories/add" style={{ color: 'white', textDecoration: 'none' }}>
          <i className="fa-solid fa-plus-square"></i> Nouveau
        </Link>
      </Button>
      <center><h2>Liste des catégories</h2></center>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <ReactLoading type="bubbles" color="#000" />
        </div>
      ) : (
        <table className='table table-striped'>
          <thead>
            <tr>
              <td>Nom catégorie</td>
              <td>Image categorie</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {categories && categories.map((cat, index) => (
              <tr key={index}>
                <td>{cat.nomcategorie}</td>
                <td><img src={cat.imagecategorie} width={100} height={100} alt={cat.nomcategorie} /></td>
                
                <td><Link to= {'/categories/edit/${cat.id} '}><button className='btn btn-warning btn-sm'>Update</button></Link></td>
                
                <td><button className='btn btn-danger btn-sm' onClick={() => handleDelete(cat.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Listcategories;
