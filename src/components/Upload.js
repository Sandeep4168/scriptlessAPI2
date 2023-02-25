import React, { useEffect } from "react";
import innovateImage from "../assets/upload1.svg";
import { useState,createContext } from "react";
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom";
import Modal from "./Modal"
import { useDispatch, useSelector } from "react-redux";


export const JsonDataContext = createContext(null);
 

const Upload = () => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(false);
  const [fileName,setFileName] = useState("Click Select");
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [jsonData,setJsonData] = useState(null);
  const [collectionsNames,setCollectionNames] = useState([]);
  const [collections,setCollections] = useState([]);
  const[headers,setHeaders] = useState([]);
  
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

 

  const handleFileUpload = (event) => {
    
   const file = event.target.files[0];
   
   setFileName(file.name)
    const reader = new FileReader();
    reader.onload = () => {
      const json = JSON.parse(reader.result);
      setJsonData(json)
      localStorage.setItem("jsonFile",reader.result);
      setFile(localStorage.getItem("jsonFile"));
      const collections = json.item;
      setCollections(collections);
      const names = collections.map((collection) => collection.name)
      setHeaders(collections.map((collection) => collection.request.body));
      setCollectionNames(names)
     
      
    }
    reader.readAsText(file);
    
  }

  useEffect(() => {
    for(let i =0 ; i < collections.length ; i++){
      if(collections[i].name === selectedOption){
        console.log(JSON.parse(headers[i].raw))
        const obj = JSON.parse(headers[i].raw)
        console.log(typeof(obj))
        localStorage.setItem("header",JSON.stringify(obj))
      }
    }



  },[selectedOption])

  

  
  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value)
    const data = localStorage.getItem("jsonFile");
    for(let i =0 ; i < collections.length ; i++){
      if(collections[i].name === selectedOption){
        console.log(JSON.parse(headers[i].raw))
        const obj = JSON.parse(headers[i].raw)
        console.log(typeof(obj))
        localStorage.setItem("header",JSON.stringify(obj))
      }
    }
    
  
  };

  

  function handleSubmit() {
    handleShowModal()
    
    
  }

 

  function handleClear(){
    localStorage.removeItem("jsonFile")
    setFile(false)
    setFileName("Click Select")
    handleHideModal()

  }

  const updatedCollectionNames = ["Please select an option"].concat(collectionsNames)
  
  const handleProceed = () => {
    
    navigate("/edit")
  }; 

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  


  return (
    <div name="upload">
       
      {showModal && <div className={!showModal?"hidden":" w-screen fixed h-screen bg-black/50 flex justify-center align-center top-0 z-[10]"}>
        <div className="w-[600px] h-[300px] absolute bg-white flex flex-col justify-center top-[20%] rounded-2xl ">
          <div className='top-2 px-3 py-5 flex justify-center'>
            <h1 className='text-3xl font-bold text-red-400'>Select a collection</h1>
          </div>

          <div className="flex justify-center items-center text-2xl border-red-400 mb-3">
            <select value={selectedOption} onChange={handleSelectOption} className="w-[70%] py-2  text-bold text-xl focus-red border-2 border-red-400 rounded-[3px] px-2">
              
              {updatedCollectionNames && updatedCollectionNames.map((item) => (<option className="p-1"  value={item}>{item}</option>)) }
            </select>
          </div>
          
          <div className="flex justify-center px-2 items-center ">
            <button className="mx-5 py-3 px-4 sm:w-[40%] my-6 max-w-[200px] border-indigo-400 bg-indigo-400 hover:text-indigo-400" onClick={handleProceed}>Proceed</button>
            <button className="mx-5 py-3 px-4 sm:w-[40%] my-6 max-w-[200px]" onClick={handleHideModal}>Close</button>
          </div>
        </div>
      </div>}
      <div className="flex flex-col justify-center ">
        <div className="grid md:grid-cols-2 max-w-[1240px] p-4 ">
          <img
            src={innovateImage}
            alt="InnovateImage"
            className="w-[500px] px-4 ml-5"
          />

          <div className="flex flex-col items-center justify-center w-full">
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-400 hover:bg-gray-100 dark:border-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-300"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <form action="submit" onSubmit={handleSubmit} className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-11 h-11 mb-3 text-gray-200 left-[50%]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-1  text-white text-2xl dark:text-gray-200">
                      <span className="font-semibold">
                        {file ? `${fileName}` : "Click to select"}
                      </span>{" "}
                    
                    </p>
                    <p className="text-xl text-white dark:text-gray-200">
                      Collections in .json format
                    </p>
                  </form>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  accept="application/JSON"
                  onChange={handleFileUpload}
                />
                
              </label>
            </div>
            <div className="w-full flex justify-center   ">
              <button
                type="submit"
                className="py-3 px-6 sm:w-[60%] my-6 max-w-[200px] border-indigo-400     bg-indigo-400 hover:text-indigo-400"
                onClick={handleSubmit}
              >
                Submit
              </button>
              
P              <button
               onClick={handleClear}
                className="mx-5 py-3 px-6 sm:w-[60%] my-6 max-w-[200px]"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
