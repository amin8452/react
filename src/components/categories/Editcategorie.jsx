
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
const Editcategorie = () => {
    const Navigate=useNavigate()
    const [categorie, setCategorie] = useState({})
    return (
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <Form className="border p-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom Categorie</Form.Label>
              <Form.Control type="text" required placeholder="Nom categorie"
                value={categorie.nomcategorie}
                onChange={(e) => setCategorie({ ...categorie, nomcategorie: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Image Categorie</Form.Label>
              <Form.Control type="text" required placeholder="Image categorie"
                value={categorie.imagecategorie}
                onChange={(e) => setCategorie({ ...categorie, imagecategorie: e.target.value })}
              />
            </Form.Group>
            <div>
              <button className='btn btn-success btn-sm'><i className="fa-solid fa-plus"></i> Enregistrer</button>
              &nbsp;
              <Link to="/categories">
                <button className='btn btn-danger btn-sm'><i className="fa-solid fa-trash"></i> Annuler</button>
              </Link>
            </div>
          </Form>
        </div>

)
}
export default Editcategorie