import React from 'react';

function PurchaseSuccess() {
  return (
    <div class='flex flex-col bg-white justify-center items-center h-screen'>
      <img
        src={require('../assets/thankyou.png')}
        alt='Thank You'
        className='w-[35rem] object-cover aspect-video mb-4'
      />
      <div class='p-6 text-center text-4xl text-green-500'>
        <h1 class='text-4xl font-medium mb-4'>Thank you for your purchase!</h1>
        <p class='text-xl text-gray-600'>
          Your order has been received and is being processed. You will receive
          a confirmation email shortly.
        </p>
        <p class='text-xl text-gray-600'>
          We appreciate your business and look forward to serving you again.
        </p>
      </div>
    </div>
  );
}

export default PurchaseSuccess;
