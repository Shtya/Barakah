import React from 'react'
import Navbar1 from './Navbar'
import ImgIntro from "../assets/bg-about.jpg"
import ImgSectionFooter from "../assets/bg2.png"
import About2 from "../assets/about2.jpg"
import About3 from "../assets/about3.jpg"
import About4 from "../assets/about4.jpg"

const About = () => {
  return (
    <div id='up'>
    <div className="hero">
        <div className="container"> <Navbar1 /> </div>
        <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>
      </div>

    <div class="about">
    <div class="top bs-white">
      <div class="container">
      <div class="coverImg"> <img src={About2} alt=""/> </div>
      <div class="text">
        <div class="p">في قلب الإمارات، يقف مركز بركة الوقف كمؤسسة رائدة في مجال الأوقاف، متميزًا برؤيته العميقة ومهمته الملهمة. تأسس المركز برسالة واضحة: خدمة الواقفين، النظّار، وجميع المهتمين بعالم الأوقاف. نحن هنا ليس فقط للإدارة الفعّالة للأوقاف، بل أيضًا لنشر ثقافة الوقف وتعزيز مفهوم الاستدامة في المجتمع.</div>
        <div class="p">في مركز بركة الوقف، نتبنى نهجًا مؤسسيًا يستند إلى المنهجية العلمية. نسعى لتحقيق التميز والريادة في العمل الوقفي على مستوى الإمارات، مع التزامنا بتقديم خدمات على أعلى مستوى من الكفاءة والجودة. نعمل جاهدين لتحليل الفرص والتحديات التي تواجه الأوقاف، مما يجعلنا الوجهة المثالية لكل من يسعى لفهم وتطبيق مفاهيم الوقف بطريقة عصرية وفعّالة.</div>
        <div class="p">نحن  نؤمن بأن الأوقاف تمثل أداة قوية للتنمية المستدامة والتأثير الاجتماعي. لذا، نحن ملتزمون بتقديم خدمات متنوعة ومبتكرة تلبي احتياجات الواقفين والنظّار وجميع المهتمين بالأوقاف. من خلال تحليل دقيق لواقع الأوقاف وإمكانياتها، نسعى إلى تقديم حلول عملية لأي تحديات قد تواجهها، بينما نستعد لمواجهة أيّة أزمات محتملة بفعالية وحكمة.</div>
        <div class="p">نفتخر  بأننا نعمل يوميًا على ترسيخ مكانتنا كقائد للعمل الوقفي في الإمارات، مساهمين في تشكيل مستقبل الأوقاف بما يخدم المجتمع ويدعم مسيرة التنمية المستدامة.</div>
      </div>
    </div>
  </div>

    <div class="center">
      <div class="container">
      <div class="boxes">
        <div class="box">
          <div class="h2-right"> الرؤية</div>
          <div class="p">في مركز بركة الوقف نتبنى رؤية طموحة تهدف إلى تحقيق استدامة الأوقاف واستشراف مستقبل واعد حيث تصبح الأوقاف عنصرًا أساسيًا في التنمية الشاملة. نسعى لتطوير الأوقاف بطرق مبتكرة تضمن استثمارها بشكل فعّال ومستدام، ما يعزز من دورها في النمو الاقتصادي والاجتماعي. </div>
          <div class="p"> تتمحور رؤيتنا حول استغلال الأوقاف كمحرك للتنمية، مع التركيز على إدارتها بحكمة لتحقيق الفائدة المثلى للمجتمع. نلتزم بجعل الأوقاف جسرًا يربط بين الحاضر ومستقبل مزدهر، من خلال العمل الدؤوب والشراكات الاستراتيجية.
          </div>
        </div>
  
        <div class="box">
          <div class="h2-right"> الرسالة</div>
          <div class="p"> نحمل رسالة محورية تركز على الارتقاء بالقطاع غير الربحي من خلال نشر ثقافة الوقف وتحقيق استدامة الأصول الوقفية. نسعى بكل جدية وتفانٍ لتقديم خدمات احترافية تعزز من نمو وتطور الأوقاف. </div>
            <div class="p">يتمثل هدفنا في تحقيق التميز في إدارة وتنمية الأوقاف، بدعم من فريق عمل متخصص ومؤهل، يمتلك الخبرة والكفاءة اللازمة لتحقيق هذه الغاية. نعمل على توفير حلول مستدامة وفعّالة تضمن تحقيق أقصى استفادة ممكنة من الأوقاف، مساهمين بذلك في تطوير المجتمع ودعم مسيرته نحو التنمية المستدامة.</div>
        </div>
      </div>

      <div className="coverImg"> <img src={About3} alt=""/> </div>

    </div>
    </div>
  </div>

  <div class="vission bs-white">
    <div class="container">
      <div class="box">
        <div class="h2"> القيم</div>
        <div class="ul">

          <div class="inner-box"> 
            <div class="p"> <span>التميز والإبتكار: </span>  نسعى دائمًا للتفوق وإدخال أفكار جديدة ومبتكرة في عملنا </div>
            <div class="p"> <span>الاحترافية والمهنية: </span>  نتمسك بأعلى معايير الاحترافية في كل ما نقوم به </div>
            <div class="p"> <span>الشفافية والنزاهة: </span>  نلتزم بالصدق والوضوح في جميع تعاملاتنا وقراراتنا </div>
          </div>
          <div class="inner-box"> 
            <div class="p"> <span>الشراكة الفعالة: </span>  نؤمن بقوة التعاون والتنسيق مع شركائنا </div>
            <div class="p"> <span>العمل المؤسسي: </span>  نتبع نهجاً منظماً ومنهجياً في جميع أنشطتنا </div>
            <div class="p"> <span>المسؤولية الاجتماعية: </span>  نحمل في قلوبنا مسؤولية تجاه مجتمعنا، ملتزمين بإحداث تأثير إيجابي ومستدام </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="goals">
    <div class="h1"> الأهداف </div>
    <div class="container">
      <div className="coverImg"> <img src={About4} alt=""/>   </div>
      <div class="boxes">

        <div class="box">
          <div class="h2-right"> الريادة والتميز في العمل الوقفي            </div>
          <div class="p">  يهدف مركز بركة الوقف إلى أن يصبح المعيار الأعلى للأوقاف، بترسيخ مكانته كمؤسسة رائدة على الساحتين المحلية والدولية، وذلك من خلال توفير خدمات استثنائية تدفع بعجلة التقدم والابتكار في القطاع الوقفي            </div>
        </div>

        <div class="box">
            <div class="h2-right"> تعزيز كفاءة النظّار            </div>
            <div class="p"> نسعى إلى تمكين النظّار من خلال تطوير مهاراتهم وبناء قدراتهم الإدارية، لضمان تحقيق الاستدامة والكفاءة العالية في إدارة الأوقاف، ما يضمن الاستثمار الأمثل للموارد            </div>
        </div>

        <div class="box">
            <div class="h2-right"> التوعية والمساهمة المجتمعية            </div>
            <div class="p"> نستهدف توعية المجتمع بأهمية الأوقاف ودورها الفاعل في التنمية، مشجعين الأفراد على المساهمة الإيجابية والمشاركة الفعّالة في الأعمال الوقفية   .
        </div>  </div>
  
        <div class="box">
            <div class="h2-right"> الدعم ونشر المعرفة            </div>
            <div class="p"> نلتزم بتقديم الدعم اللازم للواقفين في تأسيس وتوثيق أوقافهم، وكذلك نشر المعرفة المتعلقة بالأحكام الشرعية والأنظمة المتعلقة بالأوقاف. ونسعى إلى تعميم ثقافة الوقف والمنتجات المالية الإسلامية بمساعدة خبراء وأكاديميين متخصصين            </div>
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
    </div>
  )
}

export default About