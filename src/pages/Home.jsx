import React from 'react'
import ImgSection3 from "../assets/Footer-01.jpg"
import ImgSectionContact from "../assets/contactus.jpg"
import ImgSectionFooter from "../assets/bg2.png"
import Navbar1 from './Navbar'
import ImgIntro from "../assets/bg2.jpg"
import Imgblog from "../assets/blog/1.jpg"
import share from "../assets/share.png"


const Home = () => {
  return (
    <div className='all'>
      <div className="hero">
        <div className="container"> <Navbar1 /> </div>
        <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>
      </div>
      
      <div class="section1">
        <div class="container">
          <div class="boxes">
            <div class="coverImg"> <img src="https://iili.io/J7eDZMP.jpg" alt=""/> </div>
            <div class="box">
              <div class="h1-right">مركز بركة الوقف</div>
              <div class="p">مؤسسة رائدة في مجال الأوقاف، تأسست برؤية لخدمة الواقفين و النظّار وجميع المهتمين بالأوقاف. نتبنى في مركزنا نهجًا مؤسسيًا معتمدًا على المنهجية العلمية لنشر ثقافة الوقف وتعزيز مفهوم الاستدامة في المجتمع. 
                نسعى دائمًا لأن يكون مركزنا رائدًا للعمل الوقفي في الإمارات، مع التزامنا بتقديم خدمات على أعلى مستوى من الكفاءة والجودة.
                نحرص على متابعة وتحليل الفرص والتحديات التي تواجه الأوقاف، ليكون مركز بركة الوقف هو الوجهة المثالية لكل من يسعى لفهم وتطبيق مفاهيم الوقف بطريقة عصرية وفعّالة.
                </div>
            </div>
          </div>
        </div>
      </div>

  <div class="section2 bs-white">
    <div class="h1"> الأهداف </div>
    <div class="container">

      <div class="boxs boxs1">
        <div class="box">
          <div class="icon"> <span></span> <img src="https://iili.io/J7kEJkB.png" alt=""/></div>
          <div class="text">
            <div class="h2-right"> الريادة والتميز في العمل الوقفي            </div>
            <div class="p">  يهدف مركز بركة الوقف إلى أن يصبح المعيار الأعلى للأوقاف، بترسيخ مكانته كمؤسسة رائدة على الساحتين المحلية والدولية، وذلك من خلال توفير خدمات استثنائية تدفع بعجلة التقدم والابتكار في القطاع الوقفي            </div>
          </div>
        </div>

        <div class="box">
          <div class="icon"> <span></span> <img src="https://iili.io/J7kEJkB.png" alt=""/></div>
          <div class="text">
            <div class="h2-right"> تعزيز كفاءة النظّار            </div>
            <div class="p"> نسعى إلى تمكين النظّار من خلال تطوير مهاراتهم وبناء قدراتهم الإدارية، لضمان تحقيق الاستدامة والكفاءة العالية في إدارة الأوقاف، ما يضمن الاستثمار الأمثل للموارد            </div>
          </div>
        </div>
      </div>

      <div class="coverImg"> <img src="https://iili.io/J7kq9EJ.webp" alt=""/>  </div>

      <div class="boxs">
        <div class="box">
          <div class="icon"> <span></span> <img src="https://iili.io/J7kEJkB.png" alt=""/></div>
          <div class="text">
            <div class="h2-right"> التوعية والمساهمة المجتمعية            </div>
            <div class="p"> نستهدف توعية المجتمع بأهمية الأوقاف ودورها الفاعل في التنمية، مشجعين الأفراد على المساهمة الإيجابية والمشاركة الفعّالة في الأعمال الوقفية
            </div>
          </div>
        </div>
        <div class="box">
          <div class="icon"> <span></span> <img src="https://iili.io/J7kEJkB.png" alt=""/></div>
          <div class="text">
            <div class="h2-right"> الدعم ونشر المعرفة            </div>
            <div class="p"> نلتزم بتقديم الدعم اللازم للواقفين في تأسيس وتوثيق أوقافهم، وكذلك نشر المعرفة المتعلقة بالأحكام الشرعية والأنظمة المتعلقة بالأوقاف. ونسعى إلى تعميم ثقافة الوقف والمنتجات المالية الإسلامية بمساعدة خبراء وأكاديميين متخصصين            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="section3">
    <div class="coverImg"> <img src={ImgSection3} alt=""/> </div>
    <div class="container">
      <div class="p"> مركز بركة الوقف يحمل رؤية رائدة نحو تحقيق استدامة الأوقاف، مستشرفًا مستقبلًا واعدًا حيث تصبح الأوقاف ركيزة للتنمية الشاملة. وتتجلى رسالتنا في الارتقاء بالقطاع غير الربحي، متمثلة في نشر ثقافة الوقف وتحقيق استدامة الأصول الوقفية. نعمل بجدية وتفانٍ لتقديم خدمات احترافية تضمن نماء الأوقاف، بدعم من كادر من المختصين المؤهلين، الذين يتميزون بالخبرة والكفاءة في إدارة وتنمية الأوقاف. </div>
    </div>
  </div>

  <div class="services">
    <div class="container">
      <div class="h1">خدماتنا</div>
      <div class="boxes">

        <div class="box">  
          <div class="icon"> <img src="https://iili.io/J7kOyOb.png" /> </div> 
          <div class="text">   
            <div class="h2-right"> خدمات توعوية وثقافية </div>  
            <div class="p"> نعمل على توعية المجتمع بأهمية الأوقاف من خلال تقديم محاضرات وندوات معرفية، ودورات تدريبية متخصصة، إضافةً إلى نشر المحتوى عبر وسائل التواصل الاجتماعي وإصدارات علمية دقيقة ننظم أيضًا مجالس للنقاش والتبادل الفكري، ونوفر استشارات عبر الهاتف وموقعنا الرسمي، كل ذلك يسهم في تعزيز مفهوم الوقف كركيزة أساسية للتنمية المستدامة </div>  
          </div>  
        </div>
        

        <div class="box">  
          <div class="icon"> <img src="https://iili.io/J7kOmJe.png" /> </div> 
          <div class="text">   
            <div class="h2-right"> تنظبم الفاعليات والمبادرات  </div>  
            <div class="p"> نسعى لتنظيم مجموعة متنوعة من الفعاليات والمبادرات التي تشمل دورات تدريبية، ملتقيات علمية، ومؤتمرات. هذه الأنشطة تهدف إلى توسيع الأفق المعرفي للعاملين في القطاع غير الربحي وكذلك لكل من يرغب في تطوير قدراته الشخصية والمهنية من أجل خدمة الأوقاف بشكل أكثر فعالية </div>  
          </div>  
        </div>
        

        <div class="box">  
          <div class="icon"> <img src="https://iili.io/J7kOp5u.png" /> </div> 
          <div class="text">   
            <div class="h2-right"> خدمات قانونية </div>  
            <div class="p"> نقدم مجموعة متكاملة من الخدمات القانونية بالتعاون مع مكاتب شركائنا المعتمدين، تشمل الترافع أمام القضاء، توثيق وإثبات الأوقاف وتسجيلها لدى الجهات المختصة، خدمات التعقيب والمتابعة الحكومية، وإعداد وصياغة الوثائق الوقفية، لضمان حقوق ومصالح كل من يتعامل مع الأوقاف </div>  
          </div>  
        </div>
        

        <div class="box">  
          <div class="icon"> <img src="https://iili.io/J7keJzx.png" /> </div> 
          <div class="text">   
            <div class="h2-right"> خدمات استشارية </div>  
            <div class="p"> نوفر استشارات متخصصة وحلولًا عملية للمشاكل المتعلقة بالأوقاف والمنتجات المالية الإسلامية، لتلبية الاحتياجات المحددة وضمان التوافق مع المعايير الشرعية </div>  
          </div>  
        </div>
        
        <div class="box">  
          <div class="icon"> <img src="https://iili.io/J7kedWQ.png" /> </div> 
          <div class="text">   
            <div class="h2-right"> عقد مجالس الصلح </div>  
            <div class="p"> ننظم مجالس الصلح لتسوية النزاعات وحل الخلافات بين المتنازعين أو المستحقين للأوقاف، بهدف الوصول إلى حلول عادلة تضمن حقوق جميع الأطراف </div>  
          </div>  
        </div>
        

        <div class="box">  
          <div class="icon"> <img src="https://iili.io/J7ke9bj.png" /> </div> 
          <div class="text">   
            <div class="h2-right"> إدارة وتطوير الكيانات الوقفية </div>  
            <div class="p"> نقدم مجموعة واسعة من الخدمات التي تشمل إدارة الأصول الوقفية مثل العقارات، المحافظ الاستثمارية، والمؤسسات والشركات الوقفية، إعداد اللوائح التنظيمية والهيكلة الإدارية والوصف الوظيفي للكيانات، تأسيس الكيانات الوقفية وتسجيلها، بالإضافة إلى إحياء الأوقاف المهملة ومعالجة الأوقاف المتعثرة، مع تقديم حلول مالية، شرعية وقانونية فعّالة لها </div>  
          </div>  
        </div>
        
      </div>
        <a href="/services" class="bt"> اعرف المزيد </a>
    </div>
  </div>

  <div class="partners bs-white">
    <div class="h1"> شركائنا</div>
    <div class="phead">شركاء في بناء مستقبل أوقافًا مستدامة</div>
    <div class="container">
      <div class="box"> 
        <img alt="" src="https://img.freepik.com/free-photo/young-happy-man-standing-isolated_171337-1127.jpg?size=626&ext=jpg&ga=GA1.1.1988574402.1703486342&semt=ais"/> 
        <div class="text"> <div class="h2">د. وائل السعيد</div> <div class="p"> نعمل  في الأوقاف على تحقيق الأهداف من خلال دعم المشاريع الخيرية والإنسانية وتقديم الدعم المالي والمعنوي لها</div> </div>
      </div>
      <div class="box"> 
        <img alt="" src="https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?size=626&ext=jpg&ga=GA1.1.1988574402.1703486342&semt=ais"/> 
        <div class="text"> <div class="h2">د. وائل السعيد</div> <div class="p"> نعمل  في الأوقاف على تحقيق الأهداف من خلال دعم المشاريع الخيرية والإنسانية وتقديم الدعم المالي والمعنوي لها</div> </div>
      </div>
      <div class="box"> 
        <img alt="" src="https://img.freepik.com/free-photo/artist-white_1368-3546.jpg?size=626&ext=jpg&ga=GA1.1.1988574402.1703486342&semt=ais"/> 
        <div class="text"> <div class="h2">د. وائل السعيد</div> <div class="p"> نعمل  في الأوقاف على تحقيق الأهداف من خلال دعم المشاريع الخيرية والإنسانية وتقديم الدعم المالي والمعنوي لها</div> </div>
      </div>
      <div class="box"> 
        <img alt="" src="https://img.freepik.com/premium-photo/fashion-happy-portrait-man-model-studio-with-stylish-casual-luxury-outfit-natural-smile-young-male-with-style-cool-trendy-clothes-isolated-by-white-background_590464-128041.jpg?size=626&ext=jpg&ga=GA1.1.1988574402.1703486342&semt=ais"/> 
        <div class="text"> <div class="h2">د. وائل السعيد</div> <div class="p"> نعمل  في الأوقاف على تحقيق الأهداف من خلال دعم المشاريع الخيرية والإنسانية وتقديم الدعم المالي والمعنوي لها</div> </div>
      </div>
    </div>
  </div>

  <div class="blog">
    <div class="h1"> احدث المدونات</div>
    <div class="phead"> تعلم، استكشف، وشارك في فعالياتنا </div>
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

    </div>
  </div>

  <div class="contact bs-white">
    <div class="container">
      <div class="right"> <img src="https://iili.io/J7koZW7.png" alt=""/> </div>
      <div class="middle">
        <div class="h2-right"> انضم إلينا وكن جزءًا من التغيير  </div>
        <div class="phead">  نرحب بالأفراد والمؤسسات للتعاون من أجل مجتمع أوقاف مستدام</div>
        <form action="">
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

export default Home