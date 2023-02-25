import React, { useState } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  const handleSelectOption = (event) => setSelectedOption(event.target.value);

  return (
    <>


      <div className="w-full fixed h-full bg-black/50 flex justify-center align-center top-0 z-[10]">
        <div className="w-[600px] h-[400px] absolute bg-white flex flex-col justify-center top-6  ">
          <div className='top-2 px-3 py-5'>
            <h2>Select an Collection</h2>
          </div>

          <div>
            <select value={selectedOption} onChange={handleSelectOption} className="">
              <option value="">Please select an Collection</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div>
            <button onClick={!showModal}>Close</button>
          </div>
        </div>
      </div>


    </>
  );
}

export default Modal