import { Link } from 'react-router-dom'
import '../Css/navbar.css'
import { FC } from 'react'

export const Nav:FC =()=> {
  return (
    <nav>
    <Link to="/do-quiz">เริ่มเล่น</Link> |{" "}
    <Link to="/quiz-create">สร้างคำถาม</Link> |{" "}
    <Link to="/show-quiz">รายการคำถาม</Link> 
   
  </nav>
  )
}
