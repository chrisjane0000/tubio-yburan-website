    import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../css/RecipesPage.css';
import Afritada from '../img/Afritada.webp';
import Balbacua from '../img/Balbacua.jpg';
import Empanada from '../img/Empanada.webp';
import Escabeche from '../img/Escabeche.webp';
import Hamonado from '../img/Hamonado.webp';
import Kaldereta from '../img/Kaldereta.webp';
import Lumpia from '../img/Lumpia.webp';
import Menudo from '../img/Menudo.webp';
import Monggo from '../img/Monggo.webp';
import Pinakbet from '../img/Pinakbet.webp';
import Sinigang from '../img/Sinigang.webp';
import Adobo from '../img/adobochicken.jpg';
import Dinuguan from '../img/dinuguan.webp';
import Humba from '../img/humba.webp';
import Pancit from '../img/pancit.webp';
import Sisig from '../img/sisig.webp';

    const dishes = [
    { name: 'Adobo', image: Adobo, description: 'Adobo Chicken is a popular Filipino dish made with chicken, soy sauce, vinegar, and garlic.', ingredients: ['Chicken', 'Soy sauce', 'White vinegar', 'Onion', 'Garlic', 'Sugar', 'Bay leaves'] },
    { name: 'Sinigang', image: Sinigang, description: 'Sinigang is a Filipino soup characterized by its sour and savory taste, often made with pork and tamarind.', ingredients: ['Pork', 'Tamarind', 'Water spinach', 'Radish', 'Tomatoes', 'Onions', 'Green beans'] },
    { name: 'Pancit', image: Pancit, description: 'Pancit is a Filipino noodle dish that is often served during celebrations and family gatherings.', ingredients: ['Noodles', 'Chicken', 'Carrots', 'Cabbage', 'Soy sauce', 'Garlic', 'Onion'] },
    { name: 'Humba', image: Humba, description: 'Humba is a Filipino braised pork dish cooked with soy sauce, sugar, and spices.', ingredients: ['Pork belly', 'Soy sauce', 'Vinegar', 'Garlic', 'Black beans', 'Bay leaves', 'Brown sugar'] },
    { name: 'Dinuguan', image: Dinuguan, description: "Dinuguan is a savory Filipino stew made with pork, vinegar, and pig's blood.", ingredients: ['Pork', "Pig's blood", 'Vinegar', 'Garlic', 'Onions', 'Chili peppers', 'Bay leaves'] },
    { name: 'Sisig', image: Sisig, description: 'Sisig is a Filipino dish made from parts of pig head and liver, seasoned with calamansi, onions, and chili peppers.', ingredients: ['Pig head', 'Liver', 'Calamansi', 'Onions', 'Chili peppers', 'Garlic', 'Mayonnaise (optional)'] },
    { name: 'Menudo', image: Menudo, description: 'Menudo is a popular Filipino stew made with pork, liver, and vegetables, simmered in a savory tomato-based sauce.', ingredients: ['Pork shoulder', 'Soy sauce', 'Calamansi juice', 'Tomato sauce', 'Potato', 'Carrot', 'Bell pepper', 'Mayonnaise (optional)'] },
    { name: 'Lumpia', image: Lumpia, description: 'Lumpia is a popular Filipino snack or appetizer that is similar to spring rolls.', ingredients: ['Ground pork', 'Chopped carrots', 'Chopped onions', '1 egg', 'Soy sauce', 'Lumpia wrappers', 'Cooking oil'] },
    { name: 'Pinakbet', image: Pinakbet, description: 'Pinakbet, also known as pakbet, is a popular Filipino vegetable dish that originates from the Ilocos region.', ingredients: ['Pork shoulder', 'Chopped onions', 'Chopped tomato', 'Garlic minced', 'Squash cube', 'Eggplant sliced', 'Cooking oil', 'Ampalaya sliced', 'String beans', 'Cup bagoong'] },
    { name: 'Kaldereta', image: Kaldereta, description: 'Kaldereta is a popular Filipino stew made with meat (usually beef, but sometimes goat or chicken).', ingredients: ['1kg Beef', 'Chopped onions', 'Tomato sauce', 'Large potato', 'Large carrot', 'Bell pepper', 'Salt', 'Bay leaves'] },
    { name: 'Empanada', image: Empanada, description: 'Empanada is a classic Filipino dish made with chicken, potatoes, carrots, and bell peppers simmered in a savory tomato sauce.', ingredients: ['Ground Meat', 'Chopped onions', 'Chopped garlic', 'Potato', 'Carrot', 'Boiled eggs', 'Pepper', 'Soy sauce', 'Flour'] },
    { name: 'Balbacua', image: Balbacua, description: 'Balbacua is a traditional Filipino stew that originates from the southern regions of the Philippines, particularly in Visayas and Mindanao.', ingredients: ['Beef shank', 'Large onion', 'Tomato sauce', 'Vegetable oil', 'Large carrot', 'Bell pepper', 'Salt and pepper', 'Soy sauce'] },
    { name: 'Monggo', image: Monggo, description: 'Monggo is a popular Filipino dish made with mung beans, typically cooked with various vegetables and either meat or seafood.', ingredients: ['Mung beans', 'Chopped onion', 'Garlic minced', 'Vegetable oil', 'Chopped potato', 'Fish sauce', 'Pork cube', 'Shrimp', 'Medium tomato'] },
    { name: 'Escabeche', image: Escabeche, description: 'Escabeche is a popular dish in the Philippines known for its tangy and sweet sauce, typically paired with fried fish.', ingredients: ['Whole fish', 'Black pepper', 'Garlic sliced', 'Vegetable oil', 'Onion sliced', 'Soy sauce', 'Bell pepper', 'Water', 'Sugar'] },
    { name: 'Afritada', image: Afritada, description: 'Afritada is a beloved Filipino dish that is characterized by its rich, flavorful tomato-based sauce and a medley of vegetables.', ingredients: ['Chicken legs', 'Vegetable oil', 'Medium onion', 'Large tomato', 'Tomato sauce', 'Medium potato', 'Medium carrots', 'Bell pepper', 'Soy sauce', 'Green peas'] },
    { name: 'Hamonado', image: Hamonado, description: 'Hamonado is a Filipino sweet and savory dish featuring marinated pork cooked until tender and caramelized with pineapple juice and spices.', ingredients: ['Pork belly', 'Pineapple juice', 'Soy sauce', 'Brown sugar', 'Pineapple chunks', 'Garlic', 'Medium onion', 'Vegetable oil', 'Cup water', 'Bay leaves'] },
    ];

    function RecipesPage() {
    const [selectedDish, setSelectedDish] = useState(null);

    const toggleMoreInfo = (dish) => {
        setSelectedDish(selectedDish === dish ? null : dish);
    };

    return (
        <div>
        <section id="section2" className="section-bg2">
            <h2>RECIPES</h2>
            <div className="menu-container">
            {dishes.map((dish) => (
                <div className="card" key={dish.name}>
                <img src={dish.image} alt={dish.name} />
                <div className="card-content">
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                    <button onClick={() => toggleMoreInfo(dish.name)}>More Info</button>
                    {selectedDish === dish.name && (
                    <div className="more-info-container">
                        <div className="more-info">
                        <ul>
                            {dish.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <button onClick={() => setSelectedDish(null)}>Close</button>
                        </div>
                    </div>
                    )}
                </div>
                </div>
            ))}
            </div>
        </section>
        <Link to="/tubio-yburan" className="custom-link">Back</Link>
        </div>
    );
    }

    export default RecipesPage;
