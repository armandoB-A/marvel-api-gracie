import './App.css';
import {ListHeroes} from "./Componentes/ListHeroes";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {DescripcionHero} from "./Componentes/DescripcionHero";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><ListHeroes/></div>}>
                </Route>
                <Route path="/heroe/:claveh"
                       element={<div><DescripcionHero/></div>}/>
            </Routes>
        </Router>);
}

export default App;
