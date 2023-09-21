import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getSpells } from "../../Services/service";
import SpellCard from "./SpellCard";
import SpellSearch from "./SpellSearch";

const SpellsGallery = () => {
    const [spells, setSpells] = useState([]);
    const [previousPage, setPreviousPage] = useState('');
    const [nextPage, setNextPage] = useState('');

    const fetchSpells = async () => {
        try {
            await getSpells().then(res => {
                setSpells(res.results);
                setPreviousPage(res.previous);
                setNextPage(res.next);
            })
        } catch (e) {

        }
    };

    useEffect(() => {
        fetchSpells();
    }, []);

    
    return (
        <Container className="pt-5">
            <Row>
                <SpellSearch setSpells={setSpells}/>
            </Row>
            <Row className="flex-wrap" style={{alignItems: 'stretch'}} >
                {spells.map(spell => (
                    <Col xs={12} md={6} lg={4}>
                        <SpellCard
                            name={spell.name}
                            level={spell.level}
                            school={spell.school}
                            desc={spell.desc}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default SpellsGallery;