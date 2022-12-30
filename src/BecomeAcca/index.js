import {ImSmile2} from 'react-icons/im'
import './index.css'
import ReactPopUp from '../RequestCallbackPopup'

const BecomeAcca = () => (
  <div className="aboutandapply">
    <div className="about">
      <h1>Become ACCA in 18 months</h1>
      <p>
        Acquire globally recognized accountancy qualification, ACCA (also called
        as Global CA), and get placed in top MNCs & Big4s. Begin ACCA prep with
        1FIN now.
      </p>
      <div className="onlyforwindow">
        <div className="flexrow statisticks">
          <div className="aboutboxes">
            <div className="flexrow ">
              <ImSmile2 />
              <p>Registered Users</p>
            </div>
            <p style={{margin: '0px'}}>879809</p>
          </div>
          <div className="aboutboxes">
            <div className="flexrow">
              <ImSmile2 />
              <p>Registered Users</p>
            </div>
            <p style={{margin: '0px'}}>879809</p>
          </div>
          <div className="aboutboxes">
            <div className="flexrow">
              <ImSmile2 />
              <p>Registered Users</p>
            </div>
            <p style={{margin: '0px'}}>879809</p>
          </div>
          <div className="aboutboxes">
            <div className="flexrow">
              <ImSmile2 />
              <p>Registered Users</p>
            </div>
            <p style={{margin: '0px'}}>879809</p>
          </div>
        </div>
        <div className="buttons">
          <button className="downloadbuttonb" type="button">
            Download Brochure
          </button>
          <button className="selflearningbutton" type="button">
            Silver Learning Partner
          </button>
        </div>
      </div>
    </div>
    <form className="applicationform">
      <h3>Aspiring to be an ACCA? Get in touch with us</h3>
      <input type="text" placeholder="Phone Number" />
      <input type="text" placeholder="Email ID" />
      <label htmlFor="qualification" data-shrink="true">
        Qualification
      </label>

      <select id="qualification">
        <option>CA</option>
        <option>CS</option>
        <option>B COM</option>
        <option>CSA</option>
        <option>OTHERS</option>
      </select>
      <label htmlFor="course">Interested in</label>
      <select id="course">
        <option>ACCA Level 1</option>
        <option>ACCA Level 2</option>
        <option>ACCA Level 3</option>
      </select>

      <ReactPopUp />
    </form>
    <div className="onlyformobile">
      <div className="flexrow statisticks">
        <div className="aboutboxes">
          <div className="flexrow ">
            <ImSmile2 />
            <p>Registered Users</p>
          </div>
          <p style={{margin: '0px'}}>879809</p>
        </div>
        <div className="aboutboxes">
          <div className="flexrow">
            <ImSmile2 />
            <p>Registered Users</p>
          </div>
          <p style={{margin: '0px'}}>879809</p>
        </div>
        <div className="aboutboxes">
          <div className="flexrow">
            <ImSmile2 />
            <p>Registered Users</p>
          </div>
          <p style={{margin: '0px'}}>879809</p>
        </div>
        <div className="aboutboxes">
          <div className="flexrow">
            <ImSmile2 />
            <p>Registered Users</p>
          </div>
          <p style={{margin: '0px'}}>879809</p>
        </div>
      </div>
      <div className="buttons">
        <button className="downloadbuttonb" type="button">
          Download Brochure
        </button>
        <button className="selflearningbutton" type="button">
          Silver Learning Partner
        </button>
      </div>
    </div>
  </div>
)
export default BecomeAcca
