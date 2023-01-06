import Availability from './Availability';
import LabeledDropdown from './LabeledDropdown';
import ProductDetailPros from './ProductDetailPros';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import propTypes from 'prop-types';
import DateReserve from './DateReserve';
import { useState } from 'react';
import { addDays } from 'date-fns';
import { MdOutlineArrowDropDown } from 'react-icons/md';

function ProductDetailInformation({
  pros,
  status,
  company,
  image,
  memberSince,
  creatorID,
  title,
  reviewsCount,
  price,
  discount,
  description,
  setDateVisible,
  dateVisible,
}) {
  const [data, setData] = useState({
    selection: {
      startDate: addDays(new Date(), 3),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  });
  return (
    <div className=''>
      <h2 className='text-4xl mb-6 mt-2 font-semibold hidden md:block w-max'>
        {title}
      </h2>
      <div className='flex gap-4 mb-6 w-max mx-auto md:mx-0'>
        <p className='text-[#eee] text-xl'>
          12 guests · 5 bedrooms · 7 beds · 2 baths
        </p>
      </div>
      <div className='my-8 border h-[1px] w-3/4 hidden xl:flex'></div>
      <div className='mb-2 w-max'>
        <p
          className={`text-red-400 font-bold text-sm mb-1 ${
            discount == 0 && 'hidden'
          }`}>
          {discount * 100}% OFF
        </p>
        <p className='text-4xl font-semibold'>
          <span
            className={`${
              discount == 0 ? 'text-blue-400' : 'text-[#eee] line-through'
            } mr-4`}>
            ${price}
          </span>
          <span className={`text-blue-400 ${discount == 0 && 'hidden'}`}>
            ${(price * (1 - discount)).toFixed(2)}
          </span>
        </p>
      </div>
      <Availability
        type={status == 'Instock'}
        labels={['Available', 'Unavailable']}
      />
      <h3 className='text-2xl mb-4'>Overview</h3>
      <div className='text-[#eee] font-normal leading-7 max-w-2xl'>
        {description}
      </div>
      <ProductDetailPros data={pros} />
      {/* <div className='flex items-center gap-8'>
        <LabeledDropdown label={'Quantity'} data={[1, 2, 3, 4, 5]} />
        <LabeledDropdown label={'Size'} data={['Small', 'Medium', 'Large']} />
      </div> */}
      <div className='flex gap-4'>
        <div className='basis-full'>
          <p className='text-center text-sm'>
            Selected {data.selection.startDate.toDateString()} {' - '}
            {data.selection.endDate.toDateString()}
          </p>

          <button
            className='btn-primary mt-2 w-full mx-auto mb-5 py-2 rounded bg-blue-500 hover:bg-blue-600 transition font-semibold flex items-center justify-center gap-4 relative'
            onClick={(e) => {
              e.preventDefault();
              setDateVisible(!dateVisible);
            }}>
            <FaCalendarAlt />
            <p>Select A Date</p>
            <div className={`absolute top-[-25rem]`}>
              <DateReserve
                dateVisible={dateVisible}
                data={data}
                setData={setData}
              />
              {/* ${dateVisible ? 'opacity-100' : 'opacity-0'} */}
            </div>
          </button>
        </div>
        <div className='basis-full'>
          <p className='text-center text-sm'>1 Guest</p>
          <button className='btn-primary mt-2 w-full mx-auto mb-5 py-2 rounded bg-blue-500 hover:bg-blue-600 transition font-semibold flex items-center justify-center gap-1 relative'>
            Select Guests
            <MdOutlineArrowDropDown className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  );
}

ProductDetailInformation.propTypes = {
  pros: propTypes.array,
  status: propTypes.string,
  company: propTypes.string,
  image: propTypes.string,
  memberSince: propTypes.string,
  creatorID: propTypes.string,
  title: propTypes.string,
  reviewsCount: propTypes.number,
  price: propTypes.number,
  discount: propTypes.number,
  description: propTypes.string,
};

export default ProductDetailInformation;
