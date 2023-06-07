import {useState, useEffect} from 'react';
import './listastyles.css';
import {Link} from "react-router-dom";

export const ListHeroes = () => {
    const [characters, setCharacters] = useState([]);

    const headers = "ts=1&apikey=351119be61e4a9fdcd26ed5e3f1bc39f&hash=a41dc3825a18e3de3f0b28e5c28d5edc";
    const URL_BASE = `https://gateway.marvel.com/v1/public/characters?${headers}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL_BASE);
                const data = await response.json();
                console.log(data);
                setCharacters(data.data.results);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, [URL_BASE]);

    return (
        <>
            <h1>PRACTICA API KEY CON MARVEL API</h1>
            <div className="content">
                <input type="checkbox" id="grid"/>
                <label htmlFor="grid"></label>
                <ul>
                    {characters.map((character) => (
                        <li key={character.id}>
                            <div className="thumbnail">
                                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                     alt={character.name}/>
                            </div>
                            <div className="caption">
                                <h2>{character.name}</h2>
                                <p>{
                                    character.description ? (
                                        <p>{character.description}</p>
                                    ) : (
                                        <p>No hay descripción disponible.</p>
                                    )
                                }</p>

                                <Link to={`heroe/${character.id}`}>
                                    ver mas info
                                </Link>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
