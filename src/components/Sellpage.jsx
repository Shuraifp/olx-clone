import olx from '../assets/olx.png';
import { imgDB, txtDB } from '../firebase';
import { useState, useContext } from 'react';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection} from "firebase/firestore";
import { dbContext } from './DbProvider';


const SellPage = ({toggleSell}) => {

  const {getProducts} = useContext(dbContext)

  const [details, setDetails] = useState({
    title: '',
    category: '',
    price: '',
    description: '',
    image: '',
    id: '',
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    const imageRef = ref(imgDB, `images/${image.name + v4()}`);
    await uploadBytes(imageRef, image);
    getDownloadURL(imageRef).then((url) => {
      setDetails((prevDetails) => ({ ...prevDetails, image: url, id: v4() }));
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const detRef = collection(txtDB,'product Details');
    await addDoc(detRef, {...details})
    setDetails({
      title: '',
      category: '',
      price: '',
      description: '',
      image: '',
    })
    alert('Data added succesfully')
    getProducts()
    toggleSell();
  }

  return (
    <div className="fixed inset-0 w-full min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="overflow-y-scroll w-full no-scrollWheel bg-slate-200 shadow-lg p-6 max-w-2xl mt-10">
        <h1 className="from-neutral-50 mb-4 text-gray-800 text-center"><img className='w-96' src={olx} alt="" /></h1>
        
        <form className="space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={details.title}
              onChange={(e) => setDetails({ ...details,  title: e.target.value })}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              placeholder="Enter title"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={details.category}
              onChange={(e) => setDetails({ ...details, category: e.target.value })}
              required
              className="mt-1 block w-full p-2 border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>Select Category</option>
              <option>Mobile Phones</option>
              <option>House</option>
              <option>Real Estate</option>
              <option>Apartments</option>
              <option>Jacket</option>
              <option>Shirt</option>
              <option>Scooters</option>
              <option>Bike</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              id="price"
              name="price"
              value={details.price}
              onChange={(e) => setDetails({ ...details, price: e.target.value })}
              type="number"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              placeholder="Enter price"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={details.description}
              onChange={(e) => setDetails({ ...details, description: e.target.value })}
              rows="4"
              required
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100"
              placeholder="Describe your item"
            />
          </div>

          {/* Upload Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Images
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e)}
              className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100 file:cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button onClick={toggleSell} className="w-72 bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
            <button
              onClick={(e) => {
                if (details.title === '' || details.category === '' || details.price === '' || details.description === '') {
                  alert('Please fill all the fields');
                } else {
                  handleSubmit(e);
                }
              }}
              type="submit"
              className="w-80 ml-2 bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Post Ad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellPage;
