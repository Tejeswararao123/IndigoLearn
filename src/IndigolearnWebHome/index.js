import './index.css'
import Header from '../Header'
import BecomeAcca from '../BecomeAcca'
import WhyChooseUs from '../WhyChooseUs'
import WhatWillYouLearn from '../WhatWillYouLearn'
import Placement from '../Placement'
import KickOff from '../KickOff'
import Eligibility from '../AccaEligibility'

const IndigolearnWebHome = () => (
  <div>
    <Header />
    <BecomeAcca />
    <h2 style={{textAlign: 'center'}}>Why Choose Us?</h2>
    <WhyChooseUs />
    <h2 style={{textAlign: 'center'}}>ACCA - Eligibility</h2>
    <Eligibility />
    <h2 style={{textAlign: 'center'}}>What Will You Learn in ACCA</h2>
    <WhatWillYouLearn />
    <Placement />
    <KickOff />
  </div>
)

export default IndigolearnWebHome
