import { FiCheckCircle } from 'react-icons/fi';

function ProductDetailPros({ data }) {
  // console.log(data);
  return (
    <div className='my-10'>
      <h3 className='text-2xl'>Ammenities</h3>
      <div className='grid grid-cols-2 justify-between max-w-2xl items-stretch gap-4 mt-4 text-sm'>
        {data.map(({ val }, id) => {
          return (
            <div className='flex gap-4 items-center' key={id}>
              <FiCheckCircle className='text-purple-400 w-4 h-4 flex-shrink-0' />
              <p className='text-[#eee] font-normal'>{val}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDetailPros;
