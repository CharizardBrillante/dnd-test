import Card from 'react-bootstrap/Card';

function SpellCard({name, school, level, desc}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {level} - {school}
                </Card.Subtitle>
                <Card.Text>
                    {desc}
                </Card.Text>    
            </Card.Body>
        </Card>
    );
}

export default SpellCard;