import { useId, useState } from 'react';
import NoteComponent from './NoteComponent';

function App() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    setList((prev) => [
      {
        id: title,
        title,
        note,
      },
      ...prev,
    ]);
  };
  const handleDelete = (id) => {
    setList((prev) => prev.filter((elem) => elem.id !== id));
  };

  return (
    <>
      <div className=' flex h-screen'>
        <div className='bg-cyan-900 text-white w-1/4 h-screen '>
          <h1 className='text-4xl text-center mt-3'>Take Notes</h1>
          <form
            className='flex flex-col items-center justify-center mt-20'
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
            <label
              className='font-bold'
              htmlFor='title'>
              Title
            </label>
            <textarea
              className='text-black rounded p-2'
              name='note'
              id='note'
              cols='40'
              rows='1'
              maxLength='100'
              onChange={(e) => setTitle(e.target.value)}
            />
            <label
              className='font-bold mt-4'
              htmlFor='note'>
              Note
            </label>
            <textarea
              className='text-black rounded p-2 '
              name='note'
              id='note'
              cols='40'
              rows='10'
              onChange={(e) => setNote(e.target.value)}
            />

            <button
              className='bg-cyan-600 w-2/4 p-2 rounded m-4 font-bold'
              type='submit'>
              Add note
            </button>
          </form>
        </div>
        <div className=' w-3/4 h-screen'>
          {list.map((elem, i) => (
            <NoteComponent
              id={elem.id}
              key={i}
              title={elem.title}
              note={elem.note}
              deleteButton={(id) => handleDelete(id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
