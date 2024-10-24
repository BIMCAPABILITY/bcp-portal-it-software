import { MdKeyboardArrowRight } from "react-icons/md"
import Tables from "../componenets/major/Tables"
import AddSoftwareModel from "../componenets/major/AddSoftwareModel"
import AddVersionModel from "../componenets/major/AddVersionModel"

const SoftwareList = () => {
  return (
    <>
     <section className='main-content-section'>
        <div className="main-topic-headign">
            <h3>Dashboard  <MdKeyboardArrowRight /><span>Software List</span></h3>
        </div>
        <section className="mt-50 table-pro-style">
            <div className="mb-20 d-flex cj-right">
              <AddSoftwareModel></AddSoftwareModel>
              <AddVersionModel></AddVersionModel>
            </div>
            <Tables></Tables>
        </section>
    </section>
    </>
  )
}

export default SoftwareList