import './HomeMain.css'
import img1 from '../../assets/img/cover.jpg'
import { Link } from 'react-router-dom';

function HomeMain() {

    return (
        <>
        <div className="grid-container">
            <div className="grid-item">
                <img src={img1  } alt="Image"/>
        </div>
        <div className="grid-item text">
            <p className="text-design">Simplify Your Learning</p>
            <p className="text-design">with AI</p><br/>
            <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
        <div className="grid-item vision">
        <div className='message'>
            <p className='line1'> Here`s why teachers and students use LearnLink</p>
            <ul>
                <li>Interactive and fun learning.</li>
                <li>Enhanced Learning Experience</li>
                <li>100% free of Cost </li>
                <li>High detailed preparation helper.</li>
            </ul>
        </div>
        <br/>
        <hr></hr>
        <p className="content">
            <Link to= "/quiz"><button className='btn btn-outline-success btn-lg'>Quiz</button></Link>
            
        </p>
        <p className="content">
            <Link to= "/flashcard"><button className='btn btn-outline-primary btn-lg'>Flash cards</button></Link>
        </p>
        </div>
        </div>
        </>
    )
}

export default  HomeMain;