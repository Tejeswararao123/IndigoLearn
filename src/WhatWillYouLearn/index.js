import './index.css'

const whatWillYouLearn = () => (
  <div className="wwlcards" style={{justifyContent: 'center', height: '350px'}}>
    <div className="wwlcard">
      <div>
        <h4 className="headandbottom">Knowledge Level</h4>
        <ul>
          <li>Business and Technology (BT)</li>
          <li>Management Accounting (MA)</li>
          <li>Financial Accounting (FA)</li>
        </ul>
      </div>
      <h4 className="headandbottom">3 Papers</h4>
    </div>
    <div className="wwlcard">
      <div>
        <h4 className="headandbottom">Skill Level</h4>
        <ul>
          <li>Corporate and Business Law (LW)</li>
          <li>Performance Management (PM)</li>
          <li>Taxation (TX)</li>
          <li>Financial Reporting (FR)</li>
          <li>Audit and Assurance (AA)</li>
          <li>Financial Management (FM)</li>
        </ul>
      </div>
      <h4 className="headandbottom">6 Papers</h4>
    </div>
    <div className="wwlcard">
      <div>
        <h4 className="headandbottom">Professionel Level</h4>
        <h4 style={{margin: '0px', paddingLeft: '14px'}}>Compulsory</h4>
        <ul style={{margin: '0px'}}>
          <li>SBL- Strategic Business Leader</li>
          <li>SBR- Strategic Business Reporting</li>
        </ul>
        <h4 style={{margin: '0px', paddingLeft: '14px'}}>2 Out of following</h4>
        <ul style={{margin: '0px'}}>
          <li>Advanced Financial Management (AFM)</li>
          <li>Advanced Performance Management (APM)</li>
          <li>Advanced Taxation (ATX)</li>
          <li>Advanced Audit and Assurance (AAA)</li>
        </ul>
      </div>
      <h4 className="headandbottom">4 Papers</h4>
    </div>
  </div>
)

export default whatWillYouLearn
