import { Link } from "react-router-dom"
import BasicChips from "../minor/BasicChips"
import Heading from "../minor/Heading"
import UserAvatar from "../minor/UserAvatar"
import EditSoftwareModel from "./EditSoftwareModel"
import DeleteModel from "./DeleteModel"

const Tables = () => {
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Software</th>
                <th>Category</th>
                <th>Version</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tr>
            <td>
                <Link to="/" className="d-flex d-flex-align-center gap-10">
                    <UserAvatar /> <Heading heading="Autocad" className="fs-16"></Heading>
                </Link>
            </td>
            <td>Autodesk</td>
            <td>2022</td>
            <td>
                <BasicChips label="Active"></BasicChips>
            </td>
            <td>
                <div className="d-flex cj-left gap-10">
                    <EditSoftwareModel></EditSoftwareModel>
                    <DeleteModel></DeleteModel>
                </div>
            </td>
        </tr>
    </table>
    </>
  )
}

export default Tables