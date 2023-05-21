import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
  const galleryItems = [
    {
      image: 'https://hamleysgumlet.gumlet.io/product/492364309/665/492364309-1.jpg',
      title: 'Image 1',
      description: 'Description for Image 1',
    },
    {
      image: 'https://cdn.trendhunterstatic.com/thumbs/cooking-toy-for-kids.jpeg?auto=webp',
      title: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      image: 'https://m.media-amazon.com/images/I/71bVydOa1nL.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/051698/1.jpg?9488',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      image: 'https://i.ebayimg.com/images/g/9HQAAOSwMapgWZ14/s-l1600.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      image: 'https://static-01.daraz.com.bd/p/b2ce95f3461b7a238c11edda6721332a.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      image: 'https://ph-live-01.slatic.net/p/356b3c5fab42e97e4bfd27b8b0822fe5.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      image: 'https://m.media-amazon.com/images/I/51kWjz4VbvS._AC_.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    // Add more gallery items as needed
  ];

  return (
<section className="gallery-section my-5 mb-5">
      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 my-3 ">
          {galleryItems.map((item, index) => (
            <Col key={index}>
              <Card className="gallery-item">
                <div className="ratio ratio-4x3">
                  <Card.Img data-aos="fade-right" variant="top" className='onHover' src={item.image} alt={item.title} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;


