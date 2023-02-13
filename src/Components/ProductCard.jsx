import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdEdit, MdDelete } from 'react-icons/md';
import swal from "sweetalert";
import { sendRequest } from "../Utils/requests";
import { getLocal, storeLocal } from "../Utils/useLocalStorageAuth";
import propTypes from 'prop-types'
function ProductCard({ id, type = "favorite", image, title, price, discount, location, link }) {
  const [favorited,setFavorited]=useState(false);
  
  var discountedPrice=(price*(1-(discount/100))).toFixed(2)

  useEffect(() => {
    if (getLocal("user")) {
      setFavorited(JSON.parse(getLocal("user")).favorites.includes(id));
    }
  }, []);

  const handleFavorite = (e) => {
    let user = JSON.parse(getLocal("user"));
    if (!favorited) {
      user.favorites.push(id);
    } else {
      user.favorites = user.favorites.filter(f => f !== id);
    }
    storeLocal("user", JSON.stringify(user));
    setFavorited(!favorited);
    e.stopPropagation();
  }
  const navigate = useNavigate();

  const handleDelete = () => {
    swal({
      title: "Are you sure you want to delete this product",
      icon: "warning",
      buttons: {
        cancel: true,
        confirm: "Delete"
      },
    }).then(confirm => {
      if (confirm) {
        sendRequest("product/deleteProduct", "DELETE", {
          body: {
            productID: id
          }
        }).then(res => {
          swal({
            title: "Deleted!",
            icon: "success",
            timer: "2500"
          }).then(() => {
            // temporary fix i guess...
            window.location.reload(false);
          })
        })
      }
    })
  }
  return (
    <div
      onClick={(e)=>navigate(`/productDetail?id=${id}`)} 
      className="flex flex-col justify-center group cursor-pointer relative overflow-hidden  md:mx-0">
      {
        type === "favorite" ?
          <div className={`absolute top-4 left-4 text-2xl z-10 hover:scale-125 transition ${!favorited && "-translate-x-10"} group-hover:translate-x-0`}>
            <div onClick={(e) => handleFavorite(e)}>
              {favorited ? <AiFillHeart className="text-red-400" /> : <AiOutlineHeart className="text-red-400" />}
            </div>
          </div>
          :
          // <div className={`absolute top-4 left-4 text-2xl z-10 hover:scale-125 transition ${!favorited && "-translate-x-10"} group-hover:translate-x-0`}>
          <div className="z-10 text-2xl" onClick={(e) => e.stopPropagation()}>
            <div style={{ boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )" }} className={`border-[rgba(37,99,235,0.18)] backdrop-blur-sm bg-[rgba(37,99,235,0.4)] text-white absolute top-4 left-4 transition -translate-x-20 group-hover:-translate-x-4 rounded-tr rounded-br pl-8 pr-2 py-1`}>
              <MdEdit className="hover:scale-125 transition" onClick={() => navigate(`/addEdit?id=${id}`)} />
            </div>
            <div style={{ boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )" }} className={`border-[rgba(248,113,113,0.18)] backdrop-blur-sm bg-[rgba(248,113,113,0.4)] text-white absolute top-4 right-4 transition translate-x-20 group-hover:translate-x-4 rounded-tl rounded-bl pr-8 pl-2 py-1`}><MdDelete onClick={() => { handleDelete() }} className="hover:scale-125 transition" /></div>
          </div>
        // <div onClick={()=>setFavorited(!favorited)}>
        //   {favorited ? <AiFillHeart className="text-red-400"/> : <AiOutlineHeart className="text-red-400"/>}
        //   </div>
        // </div>
      }
      <div className="block relative">
        <div className="absolute inset-0 bg-[#121212] opacity-[0.2] hidden group-hover:block"></div>
        <img src={image} alt={"Product"} className="rounded w-60 aspect-square object-cover" />
      </div>
      <p className="font-semibold text-lg group-hover:underline hover:underline">{title}</p>
      {discount>0?(
        <h3 className="text-base text-white">${discountedPrice}&nbsp;&nbsp;<span className="text-sm text-slate-300">List Price: <span className="line-through">${price}</span>&nbsp; <span className="text-sm text-slate-200">&#123;{discount}% off&#125;</span></span></h3>
      ):(
        <h3 className="text-base">${price}</h3>
      )}
      
      <h3 className="text-sm text-slate-200">{location}</h3>
    </div>
  )
}

ProductCard.propTypes = {
  id: propTypes.string,
  image: propTypes.string,
  title: propTypes.string,
  price: propTypes.number,
  location: propTypes.string,
  discount: propTypes.number,
  link: propTypes.string
}

export default ProductCard