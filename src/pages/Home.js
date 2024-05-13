
import dp from '../styles/images/its_me.JPG';
import '../styles/home.css';
const Home =  () => {
return (
    
    <div className= 'flex justify-center p-12'>
        
            
            <div class='flex bg-black h-[770px] text-white p-4 w-5/6 rounded-lg hover:shadow-amber-500/40 shadow-lg shadow-cyan-500/50 justify-between'>
            <div>
                <img
                src={dp}
                
                 className='rounded-full h-[370px] w-[370px] object-cover animate-pulse hover:shadow-amber-500/40 shadow-lg  shadow-indigo-500/50 translate-x-[86px] translate-y-[76px]'
                    />
                </div>
            
                
            
                <h1 className='translate-y-[180px]  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-19 w-74 translate-x-[370px] text-5xl'>M.R.S.N Full Stack Devoloper</h1>
                <p className='-translate-x-[120px] translate-y-[300px] text-2xl '>In the realm of coding, I stand as a virtuoso Full Stack Developer, </p>
                

            </div>
        
        
    </div>
    
);
};
export default Home;