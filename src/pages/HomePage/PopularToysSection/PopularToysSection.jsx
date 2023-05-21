import { Card, Button, Row, Col } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const PopularToysSection = () => {
  const popularToys = [
    {
      id: 1,
      name: "We All Scream for Ice Cream 25 Piece Set",
      image:
        "https://lh3.googleusercontent.com/UYFN0c-EScfJCEJ__PeEvbevzH_dv36ibGrA_QmnwXT_5qddPDYZ3cY9E-4JNG800cB8NXfrfoB2o1pVoxMT897dwkUYPww1ETY8Wy4K",
      price: "$24.99",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Let's Have a Tea Party",
      image:
        "https://lh3.googleusercontent.com/remyypv957NTHX4KcmMHxnwxMCyFG69eFxceWMa1Wcpb01y5MkZGADuddpRrQ7OP1JCCbmiJzekorXPEojBT8wtNFgOlkNbWAm6x1IzaPw",
      price: "$24.99",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Pizza Oven Set",
      image:
        "https://lh3.googleusercontent.com/9HbzN1S2TAPjDAJD9DiMQ-6pzA_BGsJ_fbItrsDMpRGsDHMBWX0Id8Iaw2RDVxmQw4uDlKSUX4GLLyi2R0pyXLSoZY-RMmv7Sn4i5PrCcg",
      price: "$14.99",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Bakery Set",
      image:
        "https://lh3.googleusercontent.com/LH3aTEA1ZbtA8atzFPJ7blMeD9vygIEkAhsxdMKHd4G5I8vs8O_hBNeNn_rV4FBBUo_44-LBGzXutDuFEELmlwzXMaC_KjvoT09I0-g",
      price: "$29.99",
      rating: 4.8,
    },
  ];

  return (
    <div className="popular-toys-section">
      <h2 className="text-center mb-4 fw-bold">Food & Cooking Toys</h2>
      <Row className="justify-content-center m-3">
        {popularToys.map((toy) => (
          <Col key={toy.id} md={6} lg={3} className="mb-4">
            <Card className="h-100">
              <div className="aspect-ratio aspect-ratio-1x1 d-flex justify-content-center align-items-center">
                <Card.Img
                  variant="top"
                  src={toy.image}
                  className="aspect-ratio-object mt-3"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{toy.name}</Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-between mt-3 ">
                    <div className="fs-5">{toy.price}</div>
                    <div >
                      <div className="d-flex">
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStarHalfAlt className="text-warning" />
                      </div>
                      <p className="text-secondary">customer rated 4.9</p>
                    </div>
                  </div>
                </Card.Text>
                <div className="d-flex align-items-center gap-1">
                <Button variant="outline-danger">More Info</Button>
                <Button variant="outline-danger">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularToysSection;
