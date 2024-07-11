import React, { useContext, useState } from 'react'
import Sidebar from '../UI/Sidebar'
import axios from 'axios'
import { MyContext } from '../Utils/MyContext';
import Error from '../UI/Error';
import Success from '../UI/Success';
import Loading from '../UI/Loading';

export default function Categories() {

  const [category, setCategory] = useState();
  const { userData } = useContext(MyContext);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const saveCategory = (e) => {
    e.preventDefault();
    if (category && userData && userData.key && userData.key.id) {
      axios.post('https://expense-api-evxi.onrender.com/categories', {
        id: userData.key.id,
        category: category

      }).then((response) => {
        setMessage(response.data.message);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 1200);
      }).catch((error) => {
        setMessage(error.response.data);
        setError(true);
        setTimeout(() => setError(false), 1200);
      });
    }else{
      setMessage('Please enter a category');
      setError(true);
      setTimeout(() => setError(false), 1200);
    }
    setCategory('');
  }



  return (
    <>
    {
      userData?<>
      <Sidebar />
      <div className='p-5 absolute flex justify-center left-72 top-16 overflow-auto m-8 right-0 bottom-0 max-lg:left-0 max-lg:ml-4 max-lg:mr-4'>
        {/* <div className='mr-'> */}
          <form className='p-6 text-black rounded-[12px] h-fit bg-primary'>
            <div className='flex justify-center w-80 pb-4 my-4 text-2xl border border-l-0 border-r-0 border-t-0 border-gray-700'>
              <h1>Add Categories</h1>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black">Enter Category</label>
              <input
                type='text'
                placeholder='e.g. Online Shopping'
                value={category || ''}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-black focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-inherit focus:outline-none" />
            </div>
            <div className='my-3'>
              <button
                onClick={saveCategory}
                type="submit" className="ring-1 w-full ring-gray-300 rounded-[20px] p-2 hover:bg-secondary hover:text-white">
                Save Category</button>
            </div>
          </form>

        {/* </div> */}
        <div className='ml-3'>

        </div>
        <div>{
          error && <Error error={message} />
        }</div>
        <div>{
          success && <Success success={message} />  
        }</div>
      </div>

      </>:<Loading/>
    }
    </>
  )
}
