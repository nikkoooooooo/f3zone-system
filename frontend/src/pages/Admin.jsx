import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie, faPhone, faEnvelope, faSearch, faCalendar} from "@fortawesome/free-solid-svg-icons"
import Stats from "../components/Stats"
import AdminTable from "../components/Admin/AdminTable.jsx"
import api from "../lib/axios.js"
import { useState } from "react"
import { useEffect } from "react"



const Admin = () => {
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        async function fetchCustomer() {
            try {
                const res = await api.get('customer')
                setCustomer(res.data)
            } catch (error) {
                console.log("error to fetch the customers", error)
            }
        }
        fetchCustomer()
    },[])


  return (
    <div className="bg-[linear-gradient(135deg,#0a0a0a_50%,#e6bc06_50%)] w-full min-h-screen">
        <div className='pt-20 flex flex-col   gap-3 px-5 mb-4'>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faUserTie} className="text-6xl text-yellow-500" />
                <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            </div>
            <div>
                <p className="text-gray-500">Manage customer inquires and membership applications</p>
            </div>
        </div>

        
    <div className="flex flex-col items-center w-full justify-center p-5 gap-5">

        <div className="flex w-full gap-5 items-center h-[100px] bg-white rounded-lg px-5">
            <label className="input w-full bg-black">
                <FontAwesomeIcon icon={faSearch} className="text-xl text-yellow-500" />
                <input type="search" required placeholder="Search" />
            </label>

            <select defaultValue="All Memberships" className="select bg-black">
                <option disabled={true}>All Memberships</option>
                <option>Student Memberships</option>
                <option>Regular Memberships</option>
            </select>

           
        </div>

    <div className="overflow-x-auto rounded-box  bg-white w-full `p-5">
        <table className="table text-black">
            {/* head */}
            <thead>
                <tr className="text-yellow-500 text-xl border-b border-gray-500">
                    <th>NO.</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Membership</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
                <tbody>
                    {customer.map((customer, index)=> (
                        <AdminTable 
                            key={customer._id}
                            name={customer.name}
                            email={customer.email}
                            contact={customer.contact}
                            plan={customer.plan}
                            createAt={customer.createdAt}
                            num={index + 1}
                        />))}
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default Admin