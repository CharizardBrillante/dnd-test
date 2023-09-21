const baseUrl = 'https://api.open5e.com/v1';

export const getSpells = (url = null) => 
    fetch(url ?? `${baseUrl}/spells/`).then(res => res.json());

export const searchSpell = (name) => 
    fetch(`${baseUrl}/spells/?search=${name}`).then(res => res.json());
