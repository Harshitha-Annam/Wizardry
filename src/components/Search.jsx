const Search = ({text, handleSearch}) => {
   
    return (
        
        <div className="border-[2px] text-white bg-transparent  w-[90%] max-w-[800px] border-[#2e2d2d] rounded-2xl mt-[1rem]">
            <input type="text" onChange={(e) => handleSearch(e.target.value)} value = {text} placeholder="search" className="text-gray-400 text-2xl w-[100%] h-[100%] p-[1rem] pt-[0.5rem] border-0 hide-focus"/>
        </div>
    )
}
export default Search;