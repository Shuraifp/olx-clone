import guitar from '../assets/guitar.png'
import google from '../assets/google.png'
import phone from '../assets/phone.png'
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const Login = ({toggleLogin}) => {

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <div>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-96 sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <h1 onClick={toggleLogin} className='cursor-pointer font-semibold text-3xl'>X</h1>
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <div className="mt-2">
                <img src={guitar} className='w-20 h-20 ml-44'/>
                <p className="text-base text-center font-medium mt-5">Help us to become one of the safest places<br/>to buy and sell.</p>
                <div className='flex border-2 border-black p-2 rounded-md mt-12 cursor-pointer'>
                  <img src={phone} className='w-10 h-10' />
                  <h1 className='font-semibold ml-3 mt-2'>Continue with phone</h1>
                </div>
                <div onClick={signInWithGoogle} className='flex border border-gray-300 p-2 rounded-md mt-5 cursor-pointer'>
                  <img src={google} className='w-6 h-6' />
                  <h1 className='font-semibold ml-12'>Continue with Google</h1>
                </div>
                <h1 className='text-center font-semibold mt-4'>OR</h1>
                <h1 className='text-center font-semibold mt-4 underline cursor-pointer'>Login with Email</h1>
                <h1 className='text-center font-semibold text-xs mt-28'>All your personal details are safe with us.</h1>
                <h1 className='text-center font-semibold text-xs mt-4'>If you continue, you are accepting <span className='text-blue-500'>OLX Terms and<br/>Conditions and Privacy Policy</span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login
