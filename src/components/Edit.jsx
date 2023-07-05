import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function () {
    const [name, setName] = useState("");
    const [degree, setDegree] = useState("");
    const [phone, setPhone] = useState("");

    const history = useNavigate();


    const phoneNo = localStorage.getItem("Phone");
    //retrived desired phone number which will be edited
    // console.log(phoneNo);
    const stroageData = JSON.parse(localStorage.getItem("Person"));
    //cloning data
    let index = stroageData.map(e => e["Phone"]).indexOf(phoneNo);
    //retrived specific item's array index number

    

    const handleUpdate = (e) => {
        e.preventDefault();

        stroageData[index].Name = name;
        stroageData[index].Degree = degree;
        //updating data
        // console.log(stroageData);
        localStorage.setItem("Person",JSON.stringify(stroageData));

        history("/");
    }

    useEffect(() => {
        setName(stroageData[index].Name);
        setDegree(stroageData[index].Degree);
        setPhone(stroageData[index].Phone);
    }, []);
    //setting all states value by localStorage data only for the first time


    return (
        <div>
            <div className="max-w-2xl mx-auto mt-10">
                <p className="text-3xl font-bold text-center mb-2">Update member</p>
                <form action="">
                    <div className="form-control">
                        <label className="input-group input-group-vertical">
                            <span>Name</span>
                            <input name="name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" className="input input-bordered" />
                        </label>
                    </div>
                    <br />
                    <div className="form-control">
                        <label className="input-group input-group-vertical">
                            <span>Degree</span>
                            <input name="degree" value={degree} onChange={e => setDegree(e.target.value)} type="text" placeholder="Enter degree" className="input input-bordered" />
                        </label>
                    </div>
                    <br />
                    <div className="form-control">
                        <label className="input-group input-group-vertical">
                            <span>Phone number</span>
                            <input disabled name="phone" value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder="Enter Phone number" className="input input-bordered" />
                        </label>
                    </div>
                </form>
                <button className="p-3 bg-blue-300 rounded hover:bg-green-300 w-full mt-5" onClick={(e) => handleUpdate(e)} >Update</button>
            </div>
        </div>
    );
}