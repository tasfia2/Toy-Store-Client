import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await fetch("http://localhost:5000/myCooks");
      const data = await response.json();
      setToys(data);
    } catch (error) {
      console.log("Error fetching toys:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const limitedToys = filteredToys.slice(0, 20);

  const openModal = (toy) => {
    setSelectedToy(toy);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLoginRedirect = () => {
    navigate("/login", { state: { from: location } });
  };

  return (
    <div className="d-flex flex-column align-items-center">

      <div className="d-flex mb-5 w-25 mt-5">
        <input
          type="search"
          className="form-control me-3"
          aria-label="Search"
          placeholder="Search by Toy Name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-5">
        {limitedToys.map((toy) => (
          <Col key={toy._id}>
            <Card>
              <Card.Img variant="top" src={toy.pictureUrl} alt={toy.name} />
              <Card.Body>
                <Card.Title>{toy.name}</Card.Title>
                <Card.Text>Seller: {toy.sellerName || "-"}</Card.Text>
                <Card.Text>Price: {toy.price}</Card.Text>
                <Card.Text>Quantity: {toy.quantity}</Card.Text>
                <div className="text-center">
                  <Button
                    onClick={() => {
                      if (user) {
                        openModal(toy);
                      } else {
                        handleLoginRedirect();
                      }
                    }}
                    variant="outline-danger"
                    className="text-dark fw-bold border rounded-3"
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={closeModal} centered>
        {selectedToy && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedToy.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card className="text-center">
                <Card.Img
                  src={selectedToy.pictureUrl}
                  alt={selectedToy.name}
                  className="w-50 mb-3"
                />
                <Card.Body>
                  <Card.Text>Seller: {selectedToy.sellerName || "-"}</Card.Text>
                  <Card.Text>Seller Email: {selectedToy.sellerEmail || "-"}</Card.Text>
                  <Card.Text>Price: {selectedToy.price}</Card.Text>
                  <Card.Text>Rating: {selectedToy.rating}</Card.Text>
                  <Card.Text>Available Quantity: {selectedToy.quantity}</Card.Text>
                  <Card.Text>{selectedToy.detailDescription}</Card.Text>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={closeModal} variant="secondary">
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default AllToys;
