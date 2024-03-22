import "./flashcardMain.css"
import img1 from "../../assets/img/main2.png"

function FlashcardMain () {

    return (

        <>
        <h1>
            <img src={img1}/>
        </h1>
        <div className="container">
    <div className="row mt-5">
      <div className="col-md-12" style={{"textAlign":"center","margin-bottom":"4%"}}>
        <div className="input1-row">
          <input type="text" className="form-control" placeholder="Enter input 1"/>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Enter input 2"/>
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary btn-block">Generate</button>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}

export default FlashcardMain;