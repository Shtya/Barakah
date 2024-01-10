import React from 'react'
import Navbar1 from './Navbar'
import ImgIntro from "../assets/bg-about.jpg"
import ImgSectionFooter from "../assets/bg2.png"

import Serv1 from "../assets/serv1.png"
import Serv2 from "../assets/serv2.png"
import Serv3 from "../assets/serv3.png"
import Serv4 from "../assets/serv4.png"
import Serv5 from "../assets/serv5.png"
import Serv6 from "../assets/serv6.png"

const About = () => {
  return (
    <>
    <div className="hero">
        <div className="container"> <Navbar1 /> </div>
        <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>
      </div>

  <div class="services-page">
    <div class="container">

      <div class="box">  
        <img src={Serv1} />
        <div class="text">
          <span />
          <div class="h2-right"> خدمات توعوية وثقافية </div>
          <div class="p"> المحاضرات والندوات: تنظيم محاضرات وندوات لنشر الوعي حول أهمية الوقف وأثره الإيجابي. الدورات التدريبية: تقديم دورات تدريبية لتعزيز المعرفة والمهارات المتعلقة بالأوقاف. وسائل التواصل الاجتماعي: استخدام منصات متنوعة لنشر المعلومات والتفاعل مع الجمهور. المطبوعات والإصدارات العلمية: إصدار مطبوعات تعليمية ودراسات تفصيلية حول الأوقاف. الهيئة الاستشارية: توفير استشارات من خبراء متخصصين في مجال الأوقاف. </div>
        </div>
      </div>

      <div class="box">  
        <img src={Serv2} />
        <div class="text">
          <div class="h2-right"> تنظيم الفعاليات والمبادرات </div>
          <div class="p"> تنظيم الدورات التدريبية: توفير دورات تدريبية متخصصة لتعزيز المعرفة والمهارات اللازمة للعاملين في القطاع غير الربحي ولكل من يرغب في تطوير قدراته في مجال الأوقاف. تنظيم الملتقيات العلمية والمؤتمرات: إقامة ملتقيات علمية ومؤتمرات تجمع الخبراء والمهتمين في مجال الأوقاف لتبادل الأفكار والخبرات والتعريف بأحدث التطورات في القطاع. </div>
        </div>
      </div>

      <div class="box">  
        <img src={Serv3} />
        <div class="text">
        <span />
          <div class="h2-right"> خدمات قانونية </div>
          <div class="p"> الترافع أمام القضاء: تقديم التمثيل القانوني في القضايا المتعلقة بالأوقاف، بالتعاون مع مكاتب شركائنا القانونيين المعتمدين بالدولة توثيق وإثبات الأوقاف: العمل على توثيق الأوقاف وتسجيلها لدى الجهات المختصة، ضمانًا لحقوق الواقفين والمستفيدين خدمات التعقيب والمتابعة: تقديم خدمات التعقيب والمتابعة اللازمة لدى الجهات الحكومية والرسمية فيما يتعلق بالأوقاف إعداد وصياغة الوثيقة الوقفية: مساعدة الواقفين في إعداد وصياغة الوثائق الوقفية بطريقة مهنية ودقيقة </div>
        </div>
      </div>



      <div class="box">  
        <img src={Serv6} />
        <div class="text">
          <div class="h2-right"> إدارة وتطوير الكيانات الوقفية </div>
          <div class="p"> إدارة الأصول الوقفية: إدارة العقارات، المحافظ الاستثمارية، ومؤسسات وشركات وقفية، بطريقة تضمن الاستدامة والكفاءة. إعداد اللوائح التنظيمية والهيكلة الإدارية: تطوير الأنظمة الإدارية واللوائح التنظيمية للكيانات الوقفية. تأسيس وتسجيل الكيانات الوقفية: مساعدة في تأسيس الكيانات الوقفية وتسجيلها وفقًا للمعايير الشرعية والقانونية. إحياء الأوقاف المهملة ومعالجة الأوقاف المتعثرة: توفير حلول مالية وقانونية وشرعية لإحياء الأوقاف المهملة ومعالجة الأوقاف المتعثرة، مع التركيز على إعادة تنشيطها وجعلها أصولًا مثمرة. </div>
        </div>
      </div>

      <div class="box">  
        <img src={Serv4} />
        <div class="text">
          <div class="h2-right"> خدمات استشارية </div>
          <div class="p"> استشارات متخصصة في الأوقاف: تقديم حلول عملية واستشارات متخصصة لمواجهة التحديات في إدارة وتنمية الأوقاف. استشارات حول المنتجات المالية الإسلامية: توفير إرشاد ودعم متوافق مع المعايير الشرعية للتعامل مع المنتجات المالية الإسلامية. </div>
        </div>
      </div>

      <div class="box">  
        <img src={Serv5} />
        <div class="text">
          <div class="h2-right"> عقد مجالس صُلح للمتنازعين في الأوقاف </div>
          <div class="p"> تنظيم مجالس صلح لحل النزاعات والخلافات بين الأطراف المتنازعة أو المستحقين للأوقاف، بطريقة عادلة وفعّالة تضمن الحفاظ على حقوق جميع الأطراف المعنية. </div>
        </div>
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
    </>
  )
}

export default About