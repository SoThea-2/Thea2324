import CourseCard from "./CourseCard"
import CourseList from "./CourseList"
import Footer from "./Footer"
import Header from "./Header"

function App(){
  // return (
  //   <div className="containar">
  //     <div className="header">
  //     <h1>MASTERIT CAMBODIA</h1>
  //     </div>
  //     <div className="header1">
  //       <p className="st">វគ្គសិក្សារបស់យើង</p>
  //       <p>បណ្តុះបណ្តាលជំនាញ​ សម្រាប៉ការងារ</p>
  //     </div>
  //     <div className="all-logo">
  //       <div className="logo1">
  //         <div className="img1">
  //           <img src="public/5bb0f73a7b3e0f976acad614a42e5040.png" alt="" />
  //         </div>
  //         <div className="p1">
  //           <p>Adode After Effects</p>
  //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
  //           <p>30$</p>
  //         </div>
  //       </div>
  //       <div className="logo1">
  //         <div className="img1">
  //           <img src="public/5bb0f73a7b3e0f976acad614a42e5040.png" alt="" />
  //         </div>
  //         <div className="p1">
  //           <p>Adode After Effects</p>
  //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
  //           <p>30$</p>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="all-logo">
  //       <div className="logo1">
  //         <div className="img1">
  //           <img src="public/5bb0f73a7b3e0f976acad614a42e5040.png" alt="" />
  //         </div>
  //         <div className="p1">
  //           <p>Adode After Effects</p>
  //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
  //           <p>30$</p>
  //         </div>
  //       </div>
  //       <div className="logo1">
  //         <div className="img1">
  //           <img src="public/5bb0f73a7b3e0f976acad614a42e5040.png" alt="" />
  //         </div>
  //         <div className="p1">
  //           <p>Adode After Effects</p>
  //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
  //           <p>30$</p>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="PP">
  //       <p>ចំណាប់អារម្មណ៏ចង់សិក្សា</p>
  //     </div>

  //     <div className="btn">
  //       <button>ទិញ</button>
  //     </div>

      


  //   </div>
  // )

  return (
  <div className="container">
    {/* header */}
    <Header/>
    {/* course */}
    <CourseList/>
    <Footer/>
  </div>

  )
}
export default App