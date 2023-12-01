import { useState } from 'react';
import './Note.css';
const NoteComponent = ({ title, note, id, deleteButton }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className='flex justify-between m-5 bg-cyan-500 rounded p-4 h-auto'>
        <h1
          className=' text-lg font-semibold'
          onClick={handleModal}>
          {title}
        </h1>
        <button
          className='font-bold p-1 bg-red-300 rounded-full w-8 text-center'
          onClick={() => deleteButton(id)}>
          X
        </button>
      </div>
      {modal && (
        <div
          className='fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center flex-col z-10 modal'
          onClick={handleModal}>
          <div className='  bg-white w-50 relative w-3/4 h-3/4 p-7 rounded-lg'>
            <h1 className=' text-lg font-semibold mb-6'>{title}</h1>
            <p className='text-black'>{note}</p>
            <button
              onClick={handleModal}
              className='text-black font-bold p-1 bg-red-300 rounded-full w-8 text-center absolute -top-2 -right-2'>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default NoteComponent;
