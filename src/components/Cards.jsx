import CourseCard from "./CourseCard";


const Cards = () => {
    return (
        <div className="max-h-11 max-w-11/12 mx-auto my-20 text-center">
            <h2 className="text-4xl font-extrabold">Featured Courses</h2>
            <CourseCard></CourseCard>
        </div>
    );
};

export default Cards;