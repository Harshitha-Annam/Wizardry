import { forwardRef } from "react";
import noImage from '../assets/noimage.png';
import { houseImages } from "../utils/constants";
import close from '../assets/close.svg';
import maleIcon from '../assets/male.svg';
import femaleIcon from '../assets/female.svg';
const DetailsModal = forwardRef(function DetailsModal({character},ref) {
    // if(character === null)
    // {
    //     return <h1>Loading...</h1>
    // }
    // if(character === undefined)
    // {
    //     return <dialog >
        
    //     <h1>Something went wrong.</h1>
    //     <form method="dialog">
    //         <button className="close">Close</button>
    //     </form>
    // </dialog>
    // }
    const index = houseImages?.findIndex((item) => item.name === character?.house);
    return <dialog ref ={ref} >
     
        <div className=" flex flex-col md:flex-row p-[1rem]  gap-[0.8rem]">
            <div className="top-container max-w-[180px]">
                <div className="profile-details">
                    <div className="detailed-image">
                        <img src={character?.image || noImage } alt="character image" className="rounded-xl w-[200px] md:w-[160px] h-[220px] object-cover"/>
                
                    
                        {character?.house && <img src={houseImages[index]?.colors} alt={houseImages[index]?.name + '-Colors'} className=" w-[30px] detail-color"/>}
          
                    </div>
                    <div className="mt-[0.4rem] ml-[0.2rem] ">
                        <h1 className="font-bold">{character?.name}</h1>
                        <h2 className="font-medium text-[#878787]">{character?.actor}</h2>
                        <h3 className="text-[0.7rem] text-[#878787] font-medium "><i>{character?.alternate_names?.join(', ')}</i></h3>
                    </div>
                </div>
                
            </div>
            <div className="extra-details md:p-[0.6rem] w-[100%] md:w-auto text-[1.2rem]">
                <h1 className="text-center font-bold text-xl text-gray-500 ">DETAILS</h1>
                <div className="md:m-[0.5rem] mt-[0.8rem] text-gray-400 flex flex-col justify-between gap-[1rem] p-[0.5rem] w-[100%]">
                    <div className="flex md:flex-row flex-col justify-between">
                        {character?.house && <h1><img  src={houseImages[index]?.logo} className=" w-[50px] p-[0.5rem] bg-amber-100 rounded-2xl inline"/><span className="ml-[0.5rem] " style={{color: houseImages[index]?.color}}>{houseImages[index]?.name}</span></h1>}
                        <h1 className=""><strong className="font-bold">Gender : </strong><span className="ml-[0.5rem]"><img src={character?.gender === 'male' ? maleIcon : femaleIcon} className="w-[20px] inline"/></span></h1>
                        
                    </div>
                    <div className="flex md:flex-row flex-col gap-[0.5rem] justify-between ">
                        <h1 className=""><strong className="font-bold">Eye Colour : </strong><span className="ml-[0.5rem]">{character?.eyeColour || '--'}</span></h1>
                        <h1><strong className="font-bold">Hair Color :</strong> <span>{character?.hairColour || '--'}</span></h1>
                        
                    </div>
                    <div className="flex md:flex-row flex-col gap-[0.5rem] justify-between ">
                        <h1><strong className="font-bold">Ancestry : </strong><span >{character?.ancestry || '--'}</span></h1>
                        <h1><strong className="font-bold">Year Of Birth :</strong> <span>{character?.yearOfBirth || '--'}</span></h1>
                    </div>
                    <div className="flex md:flex-row flex-col gap-[0.5rem] justify-between">
                        <h1><strong className="font-bold">Wand-Core : </strong><span>{character?.wand?.core || '--'}</span></h1>
                        <h1><strong className="font-bold">Patronus: </strong><span>{character?.patronus || '--'}</span></h1>
                    </div>
                  
                </div>
                <div className="text-[1rem] self-end m-[0.5rem] text-[#797878] ml-[1rem]">
                        {character?.hogwartsStaff && <h1>Hogwarts Staff {' • '}</h1>}
                        {character?.hogwartsStudent && <span> Hogwarts Student {' • '}</span>}
                          {character?.wizard && <span>wizard {' • '}</span>}  {character?.species && <span>{character?.species}</span>} {character?.alive && <span> {' • '} alive</span>}
                </div>

            </div>
            

        
            
      
        <form method="dialog">
            <button className="close"><span><img src={close} className="w-[32px]"/></span></button>
        </form>
        </div>
    </dialog>
});
export default DetailsModal;