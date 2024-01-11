import React, { useEffect } from 'react'
import Navbar1 from './Navbar'
import ImgSectionFooter from "../assets/bg2.png"
import ImgSectionContact from "../assets/contactus.jpg"


import place from "../assets/place.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"
import phone2 from "../assets/phone2.png"
import ImgIntro from "../assets/contact-us.jpg"

const ContactUs = () => {
  // useEffect(_=>{
  //   axios.get('http://localhost/project/wp-json/wp/v2/posts').then(response => console.log(response.data))

  // } ,[])

  return (
    <div id='up'>
    
        <div className="container"> <Navbar1 /> </div>
        <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>

      <div class="contact-page bs-white">
    <div class="container">
      <div class="middle">
        <form action="">
          <div class="h2-right"> انضم إلينا وكن جزءًا من التغيير  </div>
          <div class="phead">  نرحب بالأفراد والمؤسسات للتعاون من أجل مجتمع أوقاف مستدام</div>
          <div class="group"> <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png?ga=GA1.1.1988574402.1703486342&semt=ais" alt=""/> <input type="text" name="username" placeholder="اسم المستخدم"/> </div>
          <div class="group"> <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png?ga=GA1.1.1988574402.1703486342&semt=ais" alt=""/> <input type="email" name="email" placeholder="البريد الالكتروني"/> </div>
          <div class="group"> <img src="https://cdn-icons-png.flaticon.com/128/597/597177.png?ga=GA1.1.1988574402.1703486342&semt=ais" alt=""/> <input type="text" name="phone" placeholder="رقم الهاتف"/> </div>
          <div class="group"> <img src="https://cdn-icons-png.flaticon.com/128/711/711733.png?ga=GA1.1.1988574402.1703486342&semt=ais" alt=""/> <textarea name="message"  placeholder="رساله" ></textarea> </div>
          <div class="bt"> تقديم</div>
        </form>

      </div>
      <div class="left">
        <img src={ImgSectionContact} alt=""/>
        
      </div>
    </div>
    <div className="container">
    <div className="information">
          <div> <img src={place } />  <div className="h2"> 10 A st., Villa 47 Umm Al Sheif, Dubai </div> </div>
          <div> <img src={email } />  <div className="h2">info@bwaqf.ae  </div> </div>
          <div> <img src={phone } />  <div className="h2"> +971554541122 </div> </div>
          <div> <img src={phone2} />  <div className="h2"> +97143339645 </div> </div>
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

export default ContactUs