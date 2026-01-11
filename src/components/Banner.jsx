
const Banner = () => {
    return (
        <div className="max-w-11/12 mx-auto min-h-screen bg-gradient-to-r from-[#30045c] via-[#47008a] to-[#400d70] text-center text-white flex flex-col justify-center gap-3">
            <h4 className="text-3xl text-slate-300">Personalized online tuition for students of all levels</h4>
            <h2 className="text-5xl font-extrabold">Learn from the Best Tutors Anywhere</h2>
            <p className="text-slate-500">TutorConnect is a modern online tuition platform designed to connect students <br/> with experienced tutors from anywhere. Whether you’re preparing <br /> for exams, improving academic skills, or learning something new, ,<br /> TutorConnect offers personalized guidance <br /> tailored to your learning needs.</p>
            <div><button className="btn px-10 py-6 bg-[#9233E9] border-none shadow-none hover:bg-[#5d01b3] text-lg font-semi-bold text-white mt-2">Get Started</button></div>
        </div>
    );
};

export default Banner;