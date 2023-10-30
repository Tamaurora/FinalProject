import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import breck from './brecktown.jpeg';
import parkcity from './parkcity.jpeg';
import heavenly from './heavenlytahoe.jpeg';


function SkiingLocations() {
  return (
    <Container>
      <h2>Skiing Locations</h2>
      <Row>
        <Col md={4}>
          <Card>
          <img src={breck} alt="Downtown Breckenridge" style={{ width: '100%' }} height="200" />
            <Card.Body>
              <Card.Title>Breckenridge, Colorado</Card.Title>
              <Card.Text>Breckenridge is a skier's paradise with its renowned Breckenridge Ski Resort offering an expansive playground of over 2,900 skiable acres. This winter wonderland caters to all skill levels, from beginners to advanced enthusiasts, with a diverse range of slopes. Four distinct peaks provide a variety of terrains, from gentle, groomed runs for novices to challenging double-black diamond trails for the most experienced skiers. The ski season often stretches from November to April, ensuring ample time for visitors to carve down the pristine slopes and enjoy some of the best powder conditions in the Rocky Mountains. With its reliable snowfall, breathtaking alpine scenery, and a charming, historic town to explore, Breckenridge is a must-visit destination for any skiing enthusiast.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        <Col md={4}>
          <Card>
          <img src={parkcity} alt="Park City Ski Resort" style={{ width: '100%' }} height="200" />
            <Card.Body>
              <Card.Title>Park City, Utah</Card.Title>
              <Card.Text>Park City is a premier destination for skiing and winter sports enthusiasts. With its world-famous resorts, including Park City Mountain and Deer Valley, it offers a diverse range of terrains and exceptional amenities. Skiers and snowboarders can revel in over 7,300 acres of pristine slopes, making it one of the largest ski areas in the United States. From gentle groomed runs for beginners to challenging bowls and glades for advanced riders, there's something for everyone. What truly sets Park City apart is its proximity to the bustling Main Street, where you can experience a lively apres-ski scene, boutique shopping, and fine dining. The town seamlessly combines historic charm with modern luxury, making it a top choice for those seeking a perfect blend of outdoor adventure and vibrant urban experiences in the heart of Utah's picturesque mountains.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
          <img src={heavenly} alt="View from top of Heavely Ski Resort" style={{ width: '100%' }} height="200" />
            <Card.Body>
              <Card.Title>South Lake Tahoe, California</Card.Title>
              <Card.Text>Heavenly Mountain Resort, located in South Lake Tahoe, California, is a world-renowned skiing and snowboarding destination that lives up to its heavenly name. Situated on the border of California and Nevada, this resort offers an unparalleled winter experience. With over 4,800 skiable acres, visitors can carve down a wide variety of slopes, from meticulously groomed beginner runs to challenging expert terrain. What makes Heavenly truly unique is its stunning panoramic views of Lake Tahoe and the surrounding Sierra Nevada mountains. The resort's gondola ride provides breathtaking vistas, and on a clear day, you can witness the vast blue expanse of Lake Tahoe. The vibrant town of South Lake Tahoe offers a lively apres-ski scene, excellent dining, and a range of accommodations.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default SkiingLocations;
