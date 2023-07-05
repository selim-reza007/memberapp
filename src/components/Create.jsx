import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Person from "./Person";

export default function Create() {
    const [name,setName] = useState("");
    const [degree,setDegree] = useState("");
    const [phone,setPhone] = useState("");
    const history = useNavigate();
    

    const handleSave = (e) => {
        e.preventDefault();

        Person.push({ Name:name, Degree:degree, Phone:phone });
        //pushing states data in array
        localStorage.setItem("Person",JSON.stringify(Person));
        //putting array in localStorage
        history("/");
    }

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <p className="text-3xl font-bold text-center mb-2">Add member</p>
            <form action="">
                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Name</span>
                        <input onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" className="input input-bordered" />
                    </label>
                </div>
                <br />
                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Degree</span>
                        <input onChange={e => setDegree(e.target.value)} type="text" placeholder="Enter degree" className="input input-bordered" />
                    </label>
                </div>
                <br />
                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Phone number</span>
                        <input onChange={e => setPhone(e.target.value)} type="text" placeholder="Enter Phone number" className="input input-bordered" />
                    </label>
                </div>
            </form>
            <button className="p-3 bg-blue-300 rounded hover:bg-green-300 w-full mt-5" onClick={(e) => handleSave(e)} >Save</button>
        </div>
    );
}