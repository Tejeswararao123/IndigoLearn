import './index.css'
import ReactPopUp from '../RequestCallbackPopup'

const KickOff = () => (
  <div className="bottombox">
    <div>
      <h2>Kick off your ACCA Prep journey with IndigoLearn</h2>
      <p>Sign-in and get instant acccess to our FREE Courses</p>
      <button
        className="selflearningbutton"
        style={{width: '200px'}}
        type="button"
      >
        <p>Silver Learning Partner</p>
        <p style={{borderColor: 'white', borderStyle: 'solid'}}>ACCA</p>
      </button>
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
  </div>
)
export default KickOff
