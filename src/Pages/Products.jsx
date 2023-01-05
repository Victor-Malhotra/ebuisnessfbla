import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import ResponsiveGridDisplay from '../Components/ResponsiveGridDisplay';
import SearchBar from '../Components/SearchBar';
import { sendRequest } from '../Utils/requests';
function Products() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');

  useEffect(() => {
    sendRequest('product/all', 'GET', {}).then((items) => {
      let allProducts = JSON.parse(items);
      setProducts(allProducts.products);
      setLoading(false);
      // console.log(products);
    });
  }, [loading]);

  return (
    !loading && (
      <div className='mt-[-.5rem]p-8 bg-[#404959] text-[#eee] min-h-[calc(100vh_-_3.5rem)]'>
        <h2 className='font-bold text-3xl ml-8 py-6'>Rooms Available</h2>
        <div className='p-4 pt-0'>
          <ResponsiveGridDisplay title={''}>
            {products.map((p, idx) => {
              if (search.length > 0) {
                if (p.name.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <ProductCard
                      key={idx}
                      id={p._id}
                      type='favorite'
                      image={
                        'https://res.cloudinary.com/dztnsrrta/image/upload/' +
                        p.images[0]
                      }
                      title={p.name}
                      price={p.price}
                      location={p.Location}
                      link={`/productDetail?id=${p._id}`}
                    />
                  );
                } else {
                  return;
                }
              }
              return (
                <ProductCard
                  key={idx}
                  id={p._id}
                  type='favorite'
                  image={
                    'https://res.cloudinary.com/dztnsrrta/image/upload/' +
                    p.images[0]
                  }
                  title={p.name}
                  price={p.price}
                  location={p.Location}
                  link={`/productDetail?id=${p._id}`}
                />
              );
            })}
          </ResponsiveGridDisplay>
        </div>
      </div>
    )
  );
}

export default Products;
