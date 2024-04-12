// In FlashcardDisplay.jsx
import "./flashcardDisplay.css"
import { useLocation } from 'react-router-dom';
import Navigations from '../navbar/Navbar';
function FlashcardDisplay() {
    const location = useLocation();
    const flashcards = JSON.parse(location.state.flashcards);


    return (
            <>
            <Navigations/>
        <div className='flashcard-container'>
            
            {flashcards.key_points_array.map((flashcard, index) => (
            <div key={index} className="flashcard">
                <p>Flashcard {index + 1}</p>
                <h2>{flashcard}</h2>
            </div>
    ))}
        </div>
        </>
    );
}

export default FlashcardDisplay;
