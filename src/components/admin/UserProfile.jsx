import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import userProfileImg from '../../assets/images/profile/profile-image.png';;;;;
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { GrStatusUnknown } from "react-icons/gr";

const UserProfile = () => {

  return (
    <>
    <main>
        <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
          <section className="main-section-mid" >
            <section className='main-content-section'>
                <div className="main-topic-headign">
                  <h3>Dashboard  <MdKeyboardArrowRight /> <span>User Profile</span></h3>
                </div>


                <section className='profile-details-wrapper'>
                  <section className='profile-head-details'>
                      <div className='profile-head-details-cover'>
                          <div className='profile-head-img'><img src={userProfileImg} alt="" /></div>
                          <div className='profile-head-fullname'><h3>John Klabber</h3></div>
                          <div className='profile-head-mini-info'>
                              <span><MdAlternateEmail /> john.klabber@bimcap.com</span><span><IoLocationOutline /> SF, Bay Area</span><span><FaRegUser /> Manager</span>
                          </div>
                      </div>
                  </section>

                  <section className='profile-buttom-details'>

                    <div className='profile-buttom-details-head'>
                        <h3>Profile info</h3>
                    </div>

                    <div className='profile-buttom-details-list'>
                        <ul>
                          <li><span><CiClock2 /> Age:</span>21</li>
                          <li><span><FiPhone /> Phone:</span>+1 1234567890</li>
                          <li><span><GrStatusUnknown /> Status:</span>Active</li>
                        </ul>
                    </div>
                  </section>
                </section>

            </section>
          </section>
        <div className='bgImageFromMiddleButtom bgImageFromMiddleButtom-left' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
      </main>
    </>
  )
}

export default UserProfile