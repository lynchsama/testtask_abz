import './SecondSection.scss'
import image from '../assets/Image-387x340.svg';

function SecondSection(){
    return (
        <div className="container-3">
            <div className="second-section">
            <div className="pic">
            <img src={image} />
            </div>
            <div className="second-intro">
                <h1>Let's get acquainted</h1>
                <h2>I'm a good front-end developer</h2>
                <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <button type="submit">Sign up</button>
            </div>
        </div>
        </div>
    )

}

export default SecondSection;