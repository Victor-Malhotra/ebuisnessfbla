import { useEffect } from 'react';
import { useState } from 'react';
import ProductDetailImageDisplay from '../Components/ProductDetailImageDisplay';
import ProductDetailInformation from '../Components/ProductDetailInformation';
import { sendRequest } from '../Utils/requests';
import { Link } from 'react-router-dom';
function ProductDetail() {
  const [productData, setProductData] = useState({});
  const [userData, setUserData] = useState({});
  const [dateVisible, setDateVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const productID = window.location.search.substring(4);
    sendRequest('product/show', 'POST', {
      body: {
        productID: productID,
      },
    }).then((items) => {
      let allProducts = JSON.parse(items);
      setProductData(allProducts);
      sendRequest('user/show', 'POST', {
        body: {
          user: allProducts.creatorID,
        },
      }).then((user) => {
        // console.log("26------------",user.success!==false);
        if (user.success !== false) {
          setUserData(JSON.parse(user));
          setLoading(false);
        }
      });
    });
  }, [loading]);
  return !loading && userData.success !== false ? (
    <div
      className='p-8 xl:p-16 grid bg-[#404959] text-[#eee] w-full grid-cols-1 md:gap-4 xl:grid-cols-[auto_auto] xl:justify-center xl:gap-48 items-start justify-items-center min-h-[calc(100vh_-_56px)]'
      onClick={(e) => {
        if (!e.target.classList.contains('DATE') && dateVisible)
          setDateVisible(false);
      }}>
      <Link
        to={`/profile?id=${productData.creatorID}`}
        className='block xl:hidden'>
        <div className='items-center gap-4 group cursor-pointer flex'>
          <img
            src={
              'https://res.cloudinary.com/dztnsrrta/image/upload/' +
              userData.icon
            }
            alt='Profile Image'
            className='rounded-full w-16 h-16'
          />
          <div>
            <div className='text-lg font-normal no-underline text-blue-400 hover:text-blue-600 group-hover:underline'>
              {userData.username.charAt(0).toUpperCase() +
                userData.username.slice(1)}
            </div>
            <p className='text-[#eee] text-sm'>
              Member Since {userData.joinDate}
            </p>
          </div>
        </div>
      </Link>
      <div className='my-8 border h-[1px] w-1/2 mx-auto block xl:hidden'></div>
      <h2 className='text-3xl mb-6 mt-2 font-semibold w-max block md:hidden'>
        {productData.name}
      </h2>
      <ProductDetailImageDisplay
        alternateImages={productData.images.map(
          (i) => 'https://res.cloudinary.com/dztnsrrta/image/upload/' + i
        )}
      />
      <ProductDetailInformation
        creatorID={productData.creatorID}
        pros={productData.pros}
        status={productData.status}
        company={userData.username}
        image={
          'https://res.cloudinary.com/dztnsrrta/image/upload/' + userData.icon
        }
        memberSince={userData.joinDate}
        title={productData.name}
        reviewsCount={0}
        price={productData.price}
        discount={productData.discount / 100}
        description={productData.description}
        setDateVisible={setDateVisible}
        dateVisible={dateVisible}
      />
    </div>
  ) : (
    <div>Loading!</div>
  );
}

export default ProductDetail;
