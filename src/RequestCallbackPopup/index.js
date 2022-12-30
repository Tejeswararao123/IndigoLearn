import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button downloadbutton">
          Request Callback
        </button>
      }
    >
      {close => (
        <>
          <div className="popup">
            <h2 style={{color: 'green', fontWeight: 'bold'}}>
              Successfully Requested Callback
            </h2>
          </div>
          <button
            type="button"
            className="trigger-button close"
            onClick={() => close()}
          >
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
