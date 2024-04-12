import { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import "./QuizMain.css"
import img1 from "../../assets/img/main.png"

function QuizMain() {
    const [input1, setInput1] = useState(""); 
    const [input2, setInput2] = useState(0); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
  
        const formData = new FormData();
        formData.append('content', input1); 
        formData.append('count', input2); 
        formData.append('content_type', 'text');
        formData.append('request','quiz');
        
        try {
            const response = await axios.post('http://localhost:8000/api/generate_quiz', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data); 
            navigate('/quizDisplay', { state: { quizData: response.data.response.candidates[0].content.parts[0].text } });

        } catch (error) {
            console.error('Error generating quiz:', error);
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

export default QuizMain;
