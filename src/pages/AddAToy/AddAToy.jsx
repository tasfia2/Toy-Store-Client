import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    pictureUrl: "",
    name: "",
    sellerName: user?.displayName || "",
    sellerEmail: user?.email || "",
    subCategory: "",
    price: "",
    rating: "",
    quantity: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddToy = (event) => {
    event.preventDefault();

    const newToy = { ...formData };

    console.log(newToy);

    // Send data to the server
    fetch("http://localhost:5000/myCooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          setFormData({ price: "", quantity: "", description: "", subCategory: "", name: "", rating: "", pictureUrl: "" });
        }
      });
  };

  return (
<div className="container bg-light p-4 mb-5">
  <h2 className="text-3xl text-center font-extrabold">Add a Cooking Toy</h2>
  <div className="d-flex justify-content-center">
    <Form onSubmit={handleAddToy} className="w-50">
      <Form.Group controlId="pictureUrl">
        <Form.Label>Picture URL</Form.Label>
          <Form.Control
            type="text"
            name="pictureUrl"
            placeholder="Picture URL"
            value={formData.pictureUrl}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="sellerName">
          <Form.Label>Seller Name</Form.Label>
          <Form.Control
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            value={user?.displayName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="sellerEmail">
          <Form.Label>Seller Email</Form.Label>
          <Form.Control
            type="email"
            name="sellerEmail"
            placeholder="Seller Email"
            value={user?.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subCategory">
          <Form.Label>Sub-category</Form.Label>
          <Form.Control
            type="text"
            name="subCategory"
            placeholder="Sub-category"
            value={formData.subCategory}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="text"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            placeholder="Available Quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Detail Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Detail Description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="danger"
                    className="mt-3 text-light fw-bold border rounded-3" type="submit">
          Add Toy
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default AddAToy;
