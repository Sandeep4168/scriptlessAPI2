import React, { useState, useEffect } from 'react'
import RequestHeader from '../components/RequestHeader'
import { useNavigate, useParams, Link } from "react-router-dom";

const Edit = () => {

  const navigate = useNavigate();
  const [jsonData, setJsonData] = useState(null);
  const [headerName, setHeaderName] = useState([]);
  const [headerValue, setHeaderValue] = useState([]);
  const [headers, setHeaders] = useState();


  useEffect(() => {
    const data = localStorage.getItem("header");
    console.log(JSON.parse(data))
    if (data) {
      setJsonData(JSON.parse(data))
      const jsonValues = Object.values(JSON.parse(data))
      const jsonHeaders = Object.keys(JSON.parse(data))
      const Headers = Object.entries(JSON.parse(data))
      setHeaderValue(jsonValues)
      setHeaderName(jsonValues)
      setHeaders(Headers)
    }


  }, [])


  const handleSave = () => {

    navigate("/validate");

  }


  return (
    <div className='flex flex-col '>
      <div className='bg-red-600 text-3xl flex h-[250px] align-center items-center justify-center'>
        <h2 className='text-5xl text-white'>Edit the Request Headers</h2>
      </div>
      
      <div className="w-[90%] flex justify-center relative pt-15 mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
          {headers &&
            headers.map(([key, value]) => (
              <RequestHeader key={key} name={key} value={value} />
            ))}
     



      </div>
      <div className='flex justify-center'>
        <button
          onClick={handleSave}
          className="mx-5 py-3 px-6 sm:w-[60%] my-6 max-w-[200px]"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Edit