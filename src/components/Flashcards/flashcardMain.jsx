// In FlashcardMain.jsx

import { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import "./flashcardMain.css"
import img1 from "../../assets/img/main2.png"

function FlashcardMain() {
    const [input1, setInput1] = useState(""); 
    const [input2, setInput2] = useState(0); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
  
        const formData = new FormData();
        formData.append('content', input1); 
        formData.append('count', input2); 
        formData.append('content_type', 'text');
        formData.append('request','flashcard');
        
        try {
            const response = await axios.post('http://localhost:8000/api/generate_flashcard', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data); 
            navigate('/flashcardDisplay', { state: { flashcards: response.data.response.candidates[0].content.parts[0].text } });

        } catch (error) {
            console.error('Error generating flashcards:', error);
        }
    };

    return (
        <>
            <h1>
                <img src={img1} alt="Logo"/>
            </h1>
            <div className="container">
                <form onSubmit={handleSubmit}> 
                    <div className="row mt-5">
                        <div className="col-md-12" style={{"textAlign":"center","marginBottom":"4%"}}>
                            <div className="input1-row">
                                <input type="text" className="form-control" placeholder="Enter input 1" value={input1} onChange={(e) => setInput1(e.target.value)} required />
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="number" className="form-control" placeholder="Enter input 2" value={input2} onChange={(e) => setInput2(e.target.value)} required />
                                </div>
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-primary btn-block">Generate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FlashcardMain;




{/*import { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import "./flashcardMain.css"
import img1 from "../../assets/img/main2.png"
import useHistory from 'react-router-dom';
import FlashcardDisplay from './flashcardDisplay';
function FlashcardMain() {
    const {useHistory} = useHistory();
    const [input1, setInput1] = useState(""); // State to store input1 value
    const [input2, setInput2] = useState(0); // State to store input2 value

    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior
  
      // Create a FormData object to construct the multipart/form-data request
      const formData = new FormData();
      formData.append('content', input1); // Add input1 value to FormData
      formData.append('count', input2); // Add input2 value to FormData
      formData.append('content_type', 'text');
      formData.append('request','flashcard');
      // Send POST request to backend endpoint with FormData
      try {
          const response = await axios.post('http://localhost:8000/api/generate_flashcard', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data', // Set Content-Type header to multipart/form-data
              },
          });
  
          // Handle response from backend if needed
          console.log(response.data); // For example, log response data to console
      } catch (error) {
          console.error('Error generating flashcards:', error);
          // Handle error if needed
      }
      history.push('/flashcard/display')
      const flashcards = await generateFlashcards(); // Function to fetch generated flashcards
        history.push({
            pathname: '/flashcard/display',
            state: { flashcards: flashcards }
        });
  };
  

    return (
        <>
            <h1>
                <img src={img1} alt="Logo"/>
            </h1>
            <div className="container">
                <form onSubmit={handleSubmit}>  
                    <div className="row mt-5">
                        <div className="col-md-12" style={{"textAlign":"center","marginBottom":"4%"}}>
                            <div className="input1-row">
                                <input type="text" className="form-control" placeholder="Enter input 1" value={input1} onChange={(e) => setInput1(e.target.value)} required />
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="number" className="form-control" placeholder="Enter input 2" value={input2} onChange={(e) => setInput2(e.target.value)} required />
                                </div>
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-primary btn-block">Generate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FlashcardMain;
*/}