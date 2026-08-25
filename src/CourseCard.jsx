
const CourseCard = ({title,des,image,price}) => {
return (
        <div className="course-card">
    <img src={image} alt="" />
            <div className="text-name">
            <h2>{title}</h2>
            <p>{des}</p>
            <p>{price}</p>
            </div>

        </div>
    )
}

export default CourseCard