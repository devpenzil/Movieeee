import Image from 'next/image'
import tmdblogo from '../public/tmdblogo.svg'
function NavBar() {
    return (
        <div className="bg-primary p-6">
           <div className="flex flex-row justify-between items-center">
               <div className="text-3xl font-bold text-gray-100 ">
                    Movieeee
               </div>
               <div>
                    <Image src={tmdblogo} width={50} height={50}/>
               </div>
           </div>
        </div>
    )
}

export default NavBar
