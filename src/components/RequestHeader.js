import React,{useState} from 'react'



const RequestHeader = ({name,value}) => {

  
  const [text,setText] = useState(value);
  const [checked,setChecked] = useState(false);

  const handleCheckChange = (e) =>{
    setChecked(e.target.checked)
  }
  const handleTextChange = (e) =>{
    
    setText(e.target.value)
  }


  return (
    
        <div className=' flex flex-row border-[2px] border-black  p-2 rounded-md shadow-2xl hover:scale-102 duration-500 bg-white'>
            <form className='flex flex-row '>
              <div className='p-2 flex items-center'>
              <input type="checkbox" onChange={handleCheckChange} id="vehicle1" checked={checked} name="vehicle1"  className='w-[20px] h-[20px]' />  
              </div>
                  
                <div className='max-w-[300px] px-2'>
                
                <label className=' text-2xl text-red-400 ' for="vehicle1"> {name}</label><br/>
                <input type="text" id="vehicle1" onChange={handleTextChange} value={text} name="vehicle1" disabled={!checked} className=' w-auto h-[30px] border-2 border-gray-500 rounded-md p-2 my-2 shadow-inner bg-white'/>

                </div>
                
            </form>
            

        </div>
    
  )
}

export default RequestHeader