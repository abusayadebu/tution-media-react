
const CourseCard = () => {
    return (
        <div className="flex gap-5 py-8">
            {/* card-1 */}
            <div className="p-6 rounded-xl bg-[#030067] flex flex-col gap-3 justify-center text-white">
                <h3 className="text-xl font-bold">Mathematics Fundamentals</h3>
            <p className="text-slate-500 text-justify">Build a strong foundation in basic to advanced mathematics. This course focuses on problem-solving, logical thinking, and exam-oriented preparation with step-by-step guidance.</p>
            <div className="flex gap-2">
                <p><small><i class="fa-solid fa-certificate"></i><strong> For Whom: </strong> Beginner</small></p>
                <p><small><i class="fa-solid fa-clock"></i> <strong>Duration:</strong> 3 Months</small></p>
            </div>
            <div><button className="btn-xs bg-[#9233E9] border-none shadow-none hover:bg-[#47008a] text-white py-1.5 px-3 rounded-xl">Enroll Now</button></div>
            </div>

            {/* card-2 */}
            <div className="p-6 rounded-xl bg-[#670045] flex flex-col gap-3 justify-center text-white">
                <h3 className="text-xl font-bold">Science Essentials</h3>
            <p className="text-slate-500 text-justify">Build a strong foundation in basic to advanced mathematics. This course focuses on problem-solving, logical thinking, and exam-oriented preparation with step-by-step guidance.</p>
            <div className="flex gap-2">
                <p><small><i class="fa-solid fa-certificate"></i><strong> For Whom: </strong> Intermediate</small></p>
                <p><small><i class="fa-solid fa-clock"></i> <strong>Duration:</strong> 3 Months</small></p>
            </div>
            <div><button className="btn-xs bg-[#9233E9] border-none shadow-none hover:bg-[#47008a] text-white py-1.5 px-3 rounded-xl">Enroll Now</button></div>
            </div>

            {/* card-3 */}
            <div className="p-6 rounded-xl bg-[#180067] flex flex-col gap-3 justify-center text-white">
                <h3 className="text-xl font-bold">English Communication Skills</h3>
            <p className="text-slate-500 text-justify">Build a strong foundation in basic to advanced mathematics. This course focuses on problem-solving, logical thinking, and exam-oriented preparation with step-by-step guidance.</p>
            <div className="flex gap-2">
                <p><small><i class="fa-solid fa-certificate"></i><strong> For Whom: </strong> Beginner</small></p>
                <p><small><i class="fa-solid fa-clock"></i> <strong>Duration:</strong> 3 Months</small></p>
            </div>
            <div><button className="btn-xs bg-[#9233E9] border-none shadow-none hover:bg-[#47008a] text-white py-1.5 px-3 rounded-xl">Enroll Now</button></div>
            </div>

            {/* card-4 */}
            <div className="p-6 rounded-xl bg-[#00003d] flex flex-col gap-3 justify-center text-white">
                <h3 className="text-xl font-bold">Introduction to Coding</h3>
            <p className="text-slate-500 text-justify">Build a strong foundation in basic to advanced mathematics. This course focuses on problem-solving, logical thinking, and exam-oriented preparation with step-by-step guidance.</p>
            <div className="flex gap-2">
                <p><small><i class="fa-solid fa-certificate"></i><strong> For Whom: </strong> Beginner</small></p>
                <p><small><i class="fa-solid fa-clock"></i> <strong>Duration:</strong> 3 Months</small></p>
            </div>
            <div><button className="btn-xs bg-[#9233E9] border-none shadow-none hover:bg-[#47008a] text-white py-1.5 px-3 rounded-xl">Enroll Now</button></div>
            </div>
            
            
        </div>
    );
};

export default CourseCard;