import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { searchSpell } from '../../Services/service';

const SpellSearch = ({setSpells}) => {
    const [input, setInput] = useState('');

    const search = async () => {
        try {
            await searchSpell(input).then(res => setSpells(res.results));
        } catch (err) {

        }
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Search</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Fireball"
                    value={input}
                    onChange={(e) => {console.log(e); setInput(e.target.value)}}
                />
            </Form.Group>
            <Button onClick={search}>Search</Button>
        </Form>
    )
};

export default SpellSearch;