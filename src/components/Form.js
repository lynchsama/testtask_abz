import './Form.scss';
import paws from '../assets/Footprint-467x177.svg'
function Form() {
    return (
        <div className="form-section">
            <div className="form-header">
                <h1>Register to get a work</h1>
                <h2>Your personal data is stored according to the Privacy Policy</h2>
            </div>
            <div className="form-block">
                <form>
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone" />
                <div className="radiobuttons"> 
                <p className="radio-header">Select your position</p>
    
                    <label for="front" className="label-radio">
                    <input id="front" type="radio" />
                    <div className="custom-radio"></div>
                    <p>Frontend developer</p>
                    </label>
                   
                    <label for="back" className="label-radio">
                    <input id="back" type="radio" />
                    <div className="custom-radio"></div>
                    <p>Backend developer</p>
                    </label>

                    <label for="design" className="label-radio">
                    <input id="design" type="radio" />
                    <div className="custom-radio"></div>
                    <p>Designer</p>
                    </label>

                    <label for="qa" className="label-radio">
                    <input id="qa" type="radio" />
                    <div className="custom-radio"></div>
                    <p>QA</p>
                    </label>
                    
                   
                </div>
                <div className="upload-field">
                    <button type="button" className="upload-button">Upload</button>
                    <input placeholder="something" type="file" id="photo" name="myfile" className="upload-box" ></input>
                </div>
                    <button type="submit">Sign up</button>
                </form>
            </div>

            <img src={paws} className="foot-print" />
        </div>
    )
}

export default Form;