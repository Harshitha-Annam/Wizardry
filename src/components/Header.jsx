const Header = () => {
    return (
        <header className=" flex flex-row items-center p-[1rem] pl-[2rem] gap-[0.5rem]   w-screen   title-gradient header-sticky z-50">
            <img src="./smoke.png" className="sm:w-[40px] w-[30px] "/>
            <h1 className="text-2xl md:text-3xl font-bold">Wizardry</h1>
        </header>
    )
}
export default Header;