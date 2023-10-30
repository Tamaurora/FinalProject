import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import skilesson from './skilesson.jpeg';
import boundary from './skiboundary.jpeg';
import carving from './carving.png';
function SkiingTips() {
  return (
    <Container>
      <h2>Skiing Tips</h2>
      <Row>
        <Col md={4}>
          {/* using cards to visually seperate skiing tips */}
          <Card>
          <img src={skilesson} alt="Image of skiers getting a lesson" style={{ width: '100%' }} height="200" />
            <Card.Body>
              <Card.Title>Skiing Basics</Card.Title>
              <Card.Text>Skiing is an exhilarating winter sport, but it's important to start with the basics. Begin with lessons if you're a beginner to learn proper techniques. Always wear appropriate gear, including a well-fitting helmet, layers of clothing for warmth, and ski-specific socks. Understanding the "pizza" (wedge) and "french fries" (parallel) stances for controlling speed and direction is crucial. Be sure to know the ski trail difficulty ratings (green for beginners, blue for intermediates, black for experts) and choose runs that match your skill level. Additionally, stay safe by respecting mountain rules, skiing in control, and being aware of others on the slopes.</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={4}>
          <Card>
          <img src={boundary} alt="Image of ski boundary sign" style={{ width: '100%' }} height="200" />
            <Card.Body>
              <Card.Title>Safety First</Card.Title>
              <Card.Text>Safety is paramount in skiing. Before hitting the slopes, ensure your bindings are properly adjusted by a professional to minimize injury risks. Pay attention to trail signage and closures, and always obey the rules of the mountain. Familiarize yourself with the skiing area's emergency procedures and have a basic understanding of avalanche safety if skiing in the backcountry. Consider investing in proper ski-specific insurance to cover any potential accidents. Finally, stay well-hydrated and protect your skin from the sun, as high-altitude skiing can lead to dehydration and sunburn.
</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={4}>
          <Card>
          <img src={carving} alt="Image of skier carving" style={{ width: '100%' }} height="200" />
            <Card.Body>
              <Card.Title>Improve your skills</Card.Title>
              <Card.Text>To enhance your skiing experience, practice regularly and seek opportunities to improve your skills. Take lessons if you're a beginner or hire a ski instructor for more advanced techniques. Focus on mastering your turns, especially carving, to navigate the slopes with precision. Don't be afraid to challenge yourself by gradually progressing to more difficult terrain. Staying in good physical shape during the off-season can also help your skiing performance, as strength and flexibility are key components of successful skiing. Lastly, embrace the joy of skiing, as a positive attitude can greatly enhance your experience on the slopes.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
}

export default SkiingTips;
