import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Card } from 'react-bootstrap';

const SingleData = () => {
  const { toyId } = useParams();
  const [toyData, setToyData] = useState(null);

  useEffect(() => {
    // Fetch toy data from API
    fetch(`http://localhost:5000/cooks/${toyId}`)
      .then((response) => response.json())
      .then((data) => setToyData(data));
  }, [toyId]);

  if (!toyData) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const { picture, name, sellerName, sellerEmail, price, rating, quantity, description } = toyData;

  return (



<div className="container mt-5">
  <h1 className="text-center mb-5">Toy Details</h1>
  <div className="row justify-content-center mb-5">
    <div className="col-md-6">
      <Card className="text-center">
        <Card.Img src={picture} alt={name} className="img-fluid mb-3" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Seller: {sellerName}</Card.Text>
          <Card.Text>Email: {sellerEmail}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Rating: {rating}</Card.Text>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>Description: {description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>


  );
};

export default SingleData;
