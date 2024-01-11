import React, { useEffect, useState } from 'react'
import ImgSectionFooter from "../assets/bg2.png"
import Navbar1 from './Navbar'
import ImgIntro from "../assets/project/bg.jpg"

import P_ImgCover1 from "../assets/project/1.jpg"
import P_Imgmain1 from "../assets/project/2.jpg"
import P_Imgmain2 from "../assets/project/3.jpg"
import P_Imgmain3 from "../assets/project/4.jpg"
import P_Imgmain4 from "../assets/project/5.jpg"
import { Link } from 'react-router-dom'


const Projects = () => {
  const [id , setid] = useState()
  const [indexImg , setindexImg] = useState(0)

  const [projects , setProjects] = useState([
    {  curr: 0 , id: 1 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 2 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 3 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 4 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
  ])

  const handleImg = (IdxOfImg , id , IdxOfPro)=>{
  setindexImg(IdxOfImg)
  setid(id)
  const updatedProjects = [...projects];
  updatedProjects[IdxOfPro] = { ...updatedProjects[IdxOfPro], curr: IdxOfImg};
  setProjects(updatedProjects)
  }


  return (
    <div className='projects-page' >
      <div className="container"> <Navbar1 /> </div>
      <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>
      
      <div className="project">
        <div className="container">
          <div className="phead"> تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة </div>
          <div className="boxes">
            {
              projects?.map((e,index)=>(
                <div className="box" key={index}>
              <div className="coverImg">
                <img src={e.images?.submain[ id == e.id && indexImg || e.curr]} alt="" />
                <div className="allImg"> { e?.images?.submain.map((ele,idx)=> ( <img onClick={_=> handleImg(idx , e.id , index)} key={idx} src={ele} alt="" />  )) } </div>
              </div>

              <Link to="" className="text" >
                <div className="h2">{e.title} </div>
                <div className="p"> {e.desc} </div>
                <div className="bt">رؤية المزيد</div>
              </Link>
            </div>
              ))
            }
            
            
          </div>
        </div>

        <div class="pagination">
          <button class="btn-nav left-btn">   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="left-icon">     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />   </svg> </button>
          <div class="page-numbers">
            <button class="btn-page">1</button>
            <button class="btn-page btn-selected">2</button>
            <button class="btn-page">3</button>
          </div>
          <button class="btn-nav right-btn"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="right-icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /> </svg> </button>
        </div>

      </div>
      
    <footer>

    <div class="imgCover"> <img src={ImgSectionFooter} alt="" /> </div>
    <div class="top">
      <div class="container">
        <ul class="logo-ul">
          <div class="coverImg"> <img src="https://iili.io/J7koZW7.png" alt=""/>  <img class="second" src="https://iili.io/J7koQxS.png" alt=""/></div>
          <div class="p">نرتقي بالقطاع غير الربحي، ننشر ثقافة الوقف، ونحقق استدامة الأصول من أجل مستقبل أفضل</div>
          
        </ul>

        <ul>
          <div class="h1"> روابط سريعه </div>
          <li> الرئيسية </li>
          <li> الخدمات</li>
          <li> تواصل معنا </li>
          <li> حولنا </li>
        </ul>

        <ul class="en">
          <div class="h1"> كن علي تواصل </div>
          <li> <img src="https://cdn-icons-png.flaticon.com/128/81/81666.png?ga=GA1.1.1988574402.1703486342&semt=ais" /> info@bwaqf.ae </li>
          <li> <img src="https://cdn-icons-png.flaticon.com/128/738/738572.png?ga=GA1.1.1988574402.1703486342&semt=ais" /> 10A st. Villa 47 <br/> Umm Al Sheif, Dubai </li>
          <li> <img src="https://cdn-icons-png.flaticon.com/128/3059/3059502.png?ga=GA1.1.1988574402.1703486342&semt=ais" /> +97143339645 </li>
          <li> <img src="https://cdn-icons-png.flaticon.com/128/13/13936.png?ga=GA1.1.1988574402.1703486342&semt=ais" /> +971554541122 </li>
        </ul>

        <ul>
          <div class="h1"> مواقع التواصل </div>
          <div class="social">  
            <li> <img src="https://cdn-icons-png.flaticon.com/128/4782/4782336.png?ga=GA1.1.1988574402.1703486342" alt=""/>  <div class="p">  لينكدإن</div> </li>
            <li> <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png?ga=GA1.1.1988574402.1703486342&semt=ais" alt=""/>  <div class="p"> تويتر</div> </li>
            <li> <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png?ga=GA1.1.1988574402.1703486342&semt=ais" alt=""/>  <div class="p"> إنستجرام</div> </li>
            <li> <img src="https://cdn-icons-png.flaticon.com/128/145/145802.png?ga=GA1.1.1988574402.1703486342" alt=""/>  <div class="p"> فيسبوك</div> </li>
          </div>
        </ul>

      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="p"> حقوق الطبع والنشر محفوظة </div>
        <div class="p">تم انشاءه بواسطه <span> MRM </span></div>
      </div>
    </div>
    </footer>

</div>
  )
}

export default Projects