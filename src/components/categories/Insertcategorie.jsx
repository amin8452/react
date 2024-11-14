import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

const Insertcategorie = () => {
  const [categorie, setCategorie] = useState({});
  const navigate = useNavigate();
  const isTestMode = false;  // Assurez-vous que ce mode est désactivé pour tester

  const handleSave = async (e) => {
    e.preventDefault();
    console.log("handleSave called with categorie:", categorie);  // Ajouter un log pour le débogage
    if (!isTestMode) {
      try {
        await axios.post("https://backendecomgs1.vercel.app/api/api/categories", categorie);
        console.log("Data sent successfully");  // Confirmation d'envoi de données
        navigate("/categories");
      } catch (error) {
        console.log("Error while sending data:", error);  // Log de l'erreur
      }
    } else {
      console.log("Test mode active: Data not sent");
    }
  };

  return (
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
      <Form className="border p-3" onSubmit={handleSave}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nom Categorie</Form.Label>
          <Form.Control type="text" required placeholder="Nom categorie"
            value={categorie.nomcategorie || ''}
            onChange={(e) => setCategorie({ ...categorie, nomcategorie: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Image Categorie</Form.Label>
          <Form.Control type="text" required placeholder="Image categorie"
            value={categorie.imagecategorie || ''}
            onChange={(e) => setCategorie({ ...categorie, imagecategorie: e.target.value })}
          />
        </Form.Group>
        <div>
          <button className='btn btn-success btn-sm' type="submit">
            <i className="fa-solid fa-plus"></i> Enregistrer
          </button>
          &nbsp;
          <Link to="/categories">
            <button className='btn btn-danger btn-sm' type="button">
              <i className="fa-solid fa-trash"></i> Annuler
            </button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Insertcategorie;
