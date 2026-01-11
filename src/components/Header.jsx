
const Header = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <nav className="flex justify-between items-center py-4 border-b border-b-[#47008a]">
                <h2 className="text-2xl font-bold cursor-pointer">A<span className="text-[rgb(146,51,233)]">B</span>C <span className="text-[#47008a]">Tution Hub</span></h2>
                <div>
                    <ul className="flex gap-5 justify-center items-center text-[#9233E9] font-medium">
                        <li><a className="hover:text-[#47008a] hover:underline hover:underline-offset-4" href="">Home</a></li>
                        <li><a className="hover:text-[#47008a] hover:underline hover:underline-offset-4" href="">Courses</a></li>
                        <li><a className="hover:text-[#47008a] hover:underline hover:underline-offset-4" href="">Tutors</a></li>
                        <li><a className="hover:text-[#47008a] hover:underline hover:underline-offset-4" href="">Pricing</a></li>
                        <li><a className="hover:text-[#47008a] hover:underline hover:underline-offset-4" href="">About</a></li>
                    </ul>
                </div>
                <div><button className="btn bg-[#9233E9] border-none shadow-none hover:bg-[#47008a] text-lg font-semi-bold text-white">Sign Up</button></div>
            </nav>
        </div>
    );
};

export default Header;