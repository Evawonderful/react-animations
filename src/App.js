import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faInstagramSquare, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'


function App() {
  return (
    <div className="App">

      <nav className='p-5' >
        <div className='flex justify-between'>
          <img src="assets/logo.png" width="100" height="100"/>

          <ul className='flex justify-between gap-5 mt-3 text-lg font-medium'>
            <li>Products</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Find Store</li>
          </ul>

          <span className='flex justify-between gap-2 h-fit '>
            <span className='border border-black rounded-full w-9 h-9 '><FontAwesomeIcon icon={faFacebookF} className='p-2 pl-3 transition ease-in-out delay-300 duration-300 hover:translate-y-3' /></span>
            <span className='border border-black rounded-full w-9 h-9 text-center'><FontAwesomeIcon icon={faTwitter} className='p-2'/></span>
            <span className='border border-black rounded-full w-9 h-9 text-center'><FontAwesomeIcon icon={faYoutube} className='p-2 '/></span>
            <span className='border border-black rounded-full w-9 h-9 text-center'><FontAwesomeIcon icon={faInstagram} className='p-2'/></span>

          </span>
        </div>
        
      </nav>

      <div className='w-[50%] ml-[30%]'>
        <div className='text-4xl'>At Welch’s®,</div>
        <div className='text-8xl font-bold'> We Put The Fruit <br/> In Fruit Snacks®</div>
        <div className='text-xl my-7'>Welch’s® are America’s Favorite Fruit <br/> Snacks®, made with Real Fruit delivering <br/> delicious taste the whole family loves.</div>
    
      </div>

      <img src="assets/frolic1.png" width="400" height="400" className='animate-bounce-slow right-0 top-50 absolute'/>
      <img src="assets/frolic2.png" width="400" height="400" className='animate-bounce-slow duration-600 left-0 top-44 absolute'/>
      <img src="assets/mayobowl.jpg" width="100" height="100"/> 
      <img src="assets/tomatoes.png" width="300" height="400" className='animate-bounce-slow right-0 top-44 absolute'/> 

     
    </div>
  );
}

export default App;
