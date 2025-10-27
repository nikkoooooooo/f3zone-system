import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faCalendar} from "@fortawesome/free-solid-svg-icons"


// we put props that will be a placeholder for every customer info
const AdminTable = ({ name, email, contact, plan, createAt, num=1}) => {
  return (

        <>
            {/* we create a components that will be blueprint for the customer info later */}
            <tr className="border-b border-gray-500">
                <td>{num}</td>
                <td>{name}</td>
                <td className="flex flex-col">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} className="pr-2"/>
                        {email}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faPhone} className="pr-2"/>
                        {contact}
                    </span>
                </td>
                <td>{plan}</td>
                    <td>
                    <FontAwesomeIcon icon={faCalendar} className="pr-1"/>
                    {createAt}
                </td>
                <td>
                    <span className='bg-yellow-500 p-1 w-4 rounded-lg font-semibold'>Pending</span>
                </td>
                <td>
                    <button className='btn bg-transparent border border-yellow-500 text-yellow-500 mr-2'>Contact</button>
                </td>
            </tr>
        </>           
    )
}

export default AdminTable





// TODO: MAKE THE CONTACT BUTTON WORK WHEN THE ADMIN CLICK IT SHOUDL BE DELETE THE CUSTOMER THAT IS SELECTED
// TODO: TRY TO DO IT MANUALLY FIRST TO PRACTICE, learn more about jwt like procting the route every req