import CourseCard from "./CourseCard"


const CourseList = () => {
    return (
    <div className="course">
      {/* course card */}
        <CourseCard title= "Book1" des="Description book1" image="public/5bb0f73a7b3e0f976acad614a42e5040.png" price="30$"/>
        <CourseCard title= "Book2" des="Description book2" image="public/5bb0f73a7b3e0f976acad614a42e5040.png" price="40$"/>
        <CourseCard title= "Book3" des="Description book3" image="public/5bb0f73a7b3e0f976acad614a42e5040.png" price="90$"/>
        <CourseCard title= "Book4" des="Description book4" image="public/5bb0f73a7b3e0f976acad614a42e5040.png" price="20$"/>
    </div>
    )
}
export default CourseList