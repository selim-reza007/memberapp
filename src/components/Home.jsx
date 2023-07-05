import { Link, useNavigate } from "react-router-dom";

export default function Home() {

    const history = useNavigate();
    const stroageData = JSON.parse(localStorage.getItem("Person")) || [];//cloning data from localState
    
    // console.log(stroageData); 
    //Now stroageData is containing localStroage data


    const handleDelete = (phone) => {
        let index = stroageData.map(p => p["Phone"]).indexOf(phone);
        // console.log(index);
        // //geting the item's index numbeer
        stroageData.splice(index,1);
        // deleting that array item
        localStorage.setItem("Person", JSON.stringify(stroageData));
        //update the localStroage
        history("/");
    }

    const handleEdit = (phone) => {
        localStorage.setItem("Phone",phone);
        //setting new row in localState for edit purpose
        history("/edit");
    }

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <p className="text-3xl font-bold text-center mb-2">Members list</p>
            <div className="overflow-x-auto border-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Degree</th>
                            <th>Phone number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stroageData.length > 0 ?
                            stroageData.map(p => {
                                return (
                                    <tr>
                                        <td>{p["Name"]}</td>
                                        <td>{p["Degree"]}</td>
                                        <td>{p["Phone"]}</td>
                                        <td>
                                            <button onClick={() => handleEdit(p["Phone"])} className="p-2 bg-green-300 rounded">Edit</button>
                                            &nbsp;
                                            <button onClick={() => handleDelete(p["Phone"])} className="p-2 bg-green-300 rounded">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }): <tr>
                                <td></td>
                                <td></td>
                                <td className="text-red-400 font-bold">No Data!</td>
                                <td></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            <Link to="/create"><button className="p-3 bg-blue-300 rounded hover:bg-green-300 w-full mt-5">New Member create</button></Link>

        </div>
    );
}