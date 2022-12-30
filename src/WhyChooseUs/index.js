import {CgProfile} from 'react-icons/cg'
import './index.css'

const WhyChooseUs = () => (
  <div>
    <div className="whychoosecards" style={{justifyContent: 'center'}}>
      <div className="card">
        <img
          className="image"
          src="https://res.cloudinary.com/dpyccbikx/image/upload/v1672229093/ca_concept_khge6h.png"
          alt="bulb"
        />
        <h4>Expert Faculty</h4>
        <p style={{textAlign: 'center'}}>
          Our Faculty are subject matter expertise with practical experience.
          They believe in #StudentFirst principle
        </p>
      </div>
      <div className="card">
        <img
          className="image"
          src="https://res.cloudinary.com/dpyccbikx/image/upload/v1672229094/ca_top_faculties_szecol.png"
          alt="bulb"
        />
        <h4>Expert Faculty</h4>
        <p style={{textAlign: 'center'}}>
          Our Faculty are subject matter expertise with practical experience.
          They believe in #StudentFirst principle
        </p>
      </div>
      <div className="card">
        <img
          className="image"
          src="https://res.cloudinary.com/dpyccbikx/image/upload/v1672229086/ca_unlimited_views_xwp27p.png"
          alt="bulb"
        />
        <h4>Expert Faculty</h4>
        <p style={{textAlign: 'center'}}>
          Our Faculty are subject matter expertise with practical experience.
          They believe in #StudentFirst principle
        </p>
      </div>
    </div>
    <div className="coursestatisticks" style={{justifyContent: 'center'}}>
      <div className="aboutcoursecard">
        <p style={{textAlign: 'center', fontWeight: 'bold'}}>Levels</p>
        <div>
          <CgProfile />
          <snap>Three (13 Papers)</snap>
        </div>
      </div>
      <div className="aboutcoursecard">
        <p style={{textAlign: 'center', fontWeight: 'bold'}}>Duration</p>
        <div>
          <CgProfile />
          <snap>6-30 months</snap>{' '}
        </div>
      </div>
      <div className="aboutcoursecard">
        <p style={{textAlign: 'center', fontWeight: 'bold'}}>Exams</p>
        <div>
          <CgProfile />
          <snap>Quarterly (online)</snap>
        </div>
      </div>
      <div className="aboutcoursecard">
        <p style={{textAlign: 'center', fontWeight: 'bold'}}>Exemptions</p>
        <div>
          <CgProfile />
          <snap>up to 9 papers</snap>
        </div>
      </div>
    </div>
  </div>
)
export default WhyChooseUs
