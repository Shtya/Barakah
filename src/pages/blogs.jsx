import React, { useEffect } from 'react'
import Navbar1 from './Navbar'
import ImgSectionFooter from "../assets/bg2.png"
import ImgIntro from "../assets/blog/1.jpg"
import Imgblog from "../assets/blog/1.jpg"
import share from "../assets/share.png"

const Blogs = () => {

  return (
    <div className='blogs-page' id='up'>
    <div className="container"> <Navbar1 /> </div>
    <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>

    <div class="blog-page">
    {/* <div class="h1"> جميع المدونات</div> */}
    <div class="phead"> ابقَ مطلعًا على كل جديد في العمل الوقفي وساهم معنا في الفعاليات والمبادرات لبناء أوقاف مستدامة</div>
    <div class="container">

      <div class="box">
        <div class="coverImg">
          <img class="main" src={Imgblog} alt=""/>
          <img class="second" src={share} alt=""/>
          <div class="box-data">
            <div class="num">18</div>
            <div class="month"> May </div>
          </div>
        </div>

        <div class="h2"> استمتع في الحديقه  </div>
        <div class="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div class="bt"> معرفه المزيد </div>
      </div>
      
      <div class="box">
        <div class="coverImg">
          <img class="main" src={Imgblog} alt=""/>
          <img class="second" src={share} alt=""/>
          <div class="box-data">
            <div class="num">18</div>
            <div class="month"> May </div>
          </div>
        </div>

        <div class="h2"> استمتع في الحديقه  </div>
        <div class="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div class="bt"> معرفه المزيد </div>
      </div>

      <div class="box">
        <div class="coverImg">
          <img class="main" src={Imgblog} alt=""/>
          <img class="second" src={share} alt=""/>
          <div class="box-data">
            <div class="num">18</div>
            <div class="month"> May </div>
          </div>
        </div>

        <div class="h2"> استمتع في الحديقه  </div>
        <div class="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div class="bt"> معرفه المزيد </div>
      </div>

      <div class="box">
        <div class="coverImg">
          <img class="main" src={Imgblog} alt=""/>
          <img class="second" src={share} alt=""/>
          <div class="box-data">
            <div class="num">18</div>
            <div class="month"> May </div>
          </div>
        </div>

        <div class="h2"> استمتع في الحديقه  </div>
        <div class="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div class="bt"> معرفه المزيد </div>
      </div>
      
      <div class="box">
        <div class="coverImg">
          <img class="main" src={Imgblog} alt=""/>
          <img class="second" src={share} alt=""/>
          <div class="box-data">
            <div class="num">18</div>
            <div class="month"> May </div>
          </div>
        </div>

        <div class="h2"> استمتع في الحديقه  </div>
        <div class="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div class="bt"> معرفه المزيد </div>
      </div>

      <div class="box">
        <div class="coverImg">
          <img class="main" src={Imgblog} alt=""/>
          <img class="second" src={share} alt=""/>
          <div class="box-data">
            <div class="num">18</div>
            <div class="month"> May </div>
          </div>
        </div>

        <div class="h2"> استمتع في الحديقه  </div>
        <div class="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div class="bt"> معرفه المزيد </div>
      </div>

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

export default Blogs