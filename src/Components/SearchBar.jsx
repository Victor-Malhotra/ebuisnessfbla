import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default function SearchBar({ search, setSearch }) {
  return (
    <div className='bg-[#3b69a2] bg-opacity-40 text-[#eee] p-5 rounded-md m-10'>
      <div className='sm:flex sm:justify-center'>
        <form
          action=''
          className='flex flex-col gap-20 sm:flex-row sm:w-full max-w-3xl justify-evenly'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name='query'
            placeholder='Search...'
            className='p-3 rounded border-2  outline-none text-neutral-900'></input>
          <div className='flex items-center'>
            <label htmlFor='filter' className='mr-3'>
              Sort By
            </label>
            <select className='p-2 pl-3 pr-7 rounded border-2 text-neutral-900 outline-none m-0'>
              <option defaultValue>All</option>
              <option value='Popular'>Popular</option>
              <option value='High Price'>High Price</option>
              <option value='Low Price'>Low Price</option>
              <option value='High Rating'>High Rating</option>
              <option value='Low Rating'>Low Rating</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
