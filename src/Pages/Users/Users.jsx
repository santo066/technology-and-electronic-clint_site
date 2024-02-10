import { useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Users() {
    const loadedusers = useLoaderData()
    const [users, setusers] = useState(loadedusers)

    const hendeldelete = (_id) => {
        fetch(`https://technology-and-electronics-server-ashen.vercel.app/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('delete success fully')
                    const remaininguser = users.filter(user => user._id !== _id)
                    setusers(remaininguser)
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto mx-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user =>
                                <tr key={user._id}>
                                    <th>*</th>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => hendeldelete(user._id)}>x</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}