import './Grid.scss';
import first_img from '../assets/461c9a527c2a8a44b3862dbb5937a2d2.png';
import second_img from '../assets/612c9fbdcf9fcc7992fb821dccf35fc2.jpg'
import third_img from '../assets/cbe9b4280f390636e4d9432a02159528.jpg'

function Grid() {
    return (
        <div>
            <div className="grid-header">
                <h1>Our cheerful users</h1>
                <h2>The best specialists are shown below</h2>
            </div>
            <div className="grid">
        <div class="element">
        <img className="img" src={first_img} alt="" />
        <div class="element-container" >
        <h2 class="name">Salvador Stewart Flynn Thomas Salva...</h2>
        <p class="job">
          Leading specialist of the department of control over
        </p>
        <p class="email">JeromeKlarkaJeromeKlarka@...</p>
        <p class="phone">+38 (098) 278 76 24</p>
        </div>
      </div>
      <div class="element">
        <img className="img"   src={second_img} alt="" />
        <h2 class="name">Takamaru Ayako Jurrien</h2>
        <p class="job move">Lead Independent Director</p>
        <p class="email">Takamuru@gmail.com</p>
        <p class="phone">+38 (098) 278 90 24</p>
      </div>
      <div class="element">
        <img className="img"  src={third_img} alt="" />
        <h2 class="name">Ilya</h2>
        <p class="job">Co-Founder and CEO</p>
        <p class="email">Ilya_founder@gmail.com</p>
        <p class="phone">+38 (098) 235 44 24</p>
      </div>
      <div class="element">
        <img className="img"  src={first_img} alt="" />
        <div class="element-container" >
        <h2 class="name">Alexandre</h2>
        <p class="job">
          Lead Independent Director
        </p>
        <p class="email">Alexandr_develop@gmail.com</p>
        <p class="phone">+38 (098) 198 44 24</p>
        </div>
      </div>
      <div class="element">
        <img className="img"  src={second_img} alt="" />
        <h2 class="name">Winny</h2>
        <p class="job">Former Senior Director</p>
        <p class="email">Winny_develop@gmail.com</p>
        <p class="phone">+38 (098) 278 22 88</p>
      </div>
      <div class="element">
        <img className="img"   src={third_img} alt="" />
        <h2 class="name">Simon</h2>
        <p class="job">President of Commerce</p>
        <p class="email">Simon@gmail.com</p>
        <p class="phone">+38 (098) 278 44 00</p>
      </div>
      <div class="element">
        <img className="img"  src={first_img} alt="" />
        <div class="element-container" >
        <h2 class="name">Oliver</h2>
        <p class="job">
          VP, Global IT Operations
        </p>
        <p class="email">Oliver_develop@gmail.com</p>
        <p class="phone">+38 (098) 039 44 87</p>
        </div>
      </div>
      <div class="element">
        <img className="img"  src={second_img} alt="" />
        <h2 class="name">Gunther</h2>
        <p class="job">SFO</p>
        <p class="email">Gunther_develop@gmail.com</p>
        <p class="phone">+38 (098) 930 49 24</p>
      </div>
      <div class="element">
        <img className="img"   src={third_img} alt="" />
        <h2 class="name">Kristina</h2>
        <p class="job">Frontend Developer</p>
        <p class="email">frontend_develop@gmail.com</p>
        <p class="phone">+38 (098) 298 44 20</p>
      </div>
            </div>
            <button className="grid-button" type="button">Show more</button>
        </div>
    );
}

export default Grid;