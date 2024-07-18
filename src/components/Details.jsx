import React, { useState } from "react";
import { db } from "../config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,doc,
  updateDoc
  
} from "firebase/firestore";
import { useEffect } from "react";

const Details = () => {
  const data = {
    names: "John Doe",
    email: "john.doe@example.com",
    message: "This is a sample message.",
  };
  const [userlist, setUserlist] = useState([]);
  const dataref = collection(db, "userDetails");

  const getlist = async () => {
    const data = await getDocs(dataref);
    console.log(data);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUserlist(filteredData);
    console.log(filteredData);
  };

  useEffect(() => {
    getlist();
  }, []);

//   const [userDtails, setUserDtails] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const submitForm = async () => {
    const data = { name: name, email: email, msg: msg };
    // setUserDtails(...userDtails, data);

    await addDoc(dataref, data);
    getlist();
  };

  const deleteData = async (id) => {
    const singleData = doc(dataref, id);
    console.log(id);
    await deleteDoc(singleData);
    getlist() 
  };

  const [updatedName,setUpdatedName]=useState('')

  const updateDetails= async(id)=>{

    const singleData = doc(dataref, id);
    console.log(id)
    await updateDoc(singleData,{name:updatedName})
    getlist()

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-500 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center">User Details Form</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                onChange={(e) => setMsg(e.target.value)}
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              onClick={submitForm}
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {userlist.map((data) => {
          return (
            <div className="max-w-sm p-6 m-3 bg-gray-400 border border-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl mb-4">User Details</h3>
              <p className="mb-2">
                <>Name:</> {data.name}
              </p>
              <p className="mb-2">
                <>Email:</> {data.email}
              </p>
              <p className="mb-2">
                <>Message:</> {data.message}
              </p>
              <button onClick={() => deleteData(data.id)}>delete</button>
              <input type="text" onChange={e=>setUpdatedName(e.target.value)} />
              <button onClick={()=>updateDetails(data.id)}>update </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
