import { useEffect, useState, useRef } from "react";
import maleIcon from '../assets/male.svg';
import femaleIcon from '../assets/female.svg';
import noImage from '../assets/noimage.png';
import Search from './Search';
import DetailsModal from "./DetailsModal";
const Body = () => {
    const [characters, setCharacters] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const dialog = useRef(null);
    useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch('https://hp-api.onrender.com/api/characters');
    const json = await data.json();
    console.log(json);
    setCharacters(json);
    setFiltered(json);
  }
  const search = (value) => {
    setSearchText(value);
    setFiltered(characters.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase())));
  }
  const handleClick = (character) => {
    setSelectedCharacter(character);
    dialog.current.showModal();
  }
  if(characters.length == 0) return <h1>Loading...</h1>
    return (
        <>
        <Search text = {searchText} handleSearch = {search}/>

        {(filtered.length ===0)? <main className=" max-w-[1400px] w-[90%] p-[1rem] mt-[1rem] container flex items-center "><img src={noImage} className="w-[100px]"/></main>:

        <main className=" max-w-[1400px] w-[90%] p-[1rem] mt-[1rem] container ">
          <DetailsModal ref= {dialog} character = {selectedCharacter}/>
           {filtered.map((character) => {
                return (<div key={character.id} className="flex flex-col  card" >
                    <img src={character.image || noImage} className="h-[200px] object-cover rounded-t-2xl"/>
                    <div className="p-[0.2rem] mt-[0.4rem] flex flex-row justify-between">
                        <div>
                            <h1 className="font-bold text-amber-50 hide-text">{character.name}</h1>
                            <h2 className="font-medium text-[#5a5858] hide-text">{character.actor || '—'}</h2>
                        </div>
                        <div className="h-[90%] flex items-between"><img src={character.gender === 'male' ?maleIcon : femaleIcon} className="w-[16px]" aria-label={character.gender === 'male' ? 'Male' : 'Female'} /></div>
                    </div>
                    <button className="border-[1px]  pt-[0.5rem] p-[0.6rem] rounded-xl button text-[#2827271d]" onClick={() => handleClick(character)}>VIEW</button>
                </div>)
            })}
        </main>}
        </>
    )
}
export default Body;