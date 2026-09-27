import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MapPin, UserCheck, CalendarCheck, Navigation } from "lucide-react";
import Countdown from "./Countdown";
import Sparkles from "./Sparkles";
import Gallery from "./Gallery";
import InteractiveCalendar from "./InteractiveCalendar";
import RSVPModal from "./RSVPModal";
import Guestbook from "./Guestbook";

export default function Invitation({ isOpened }: { isOpened: boolean }) {

  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

   useEffect(() => {
  if (!isOpened) return;

  let animationFrame: number;
  let stopped = false;

  const stopAutoScroll = () => {
    stopped = true;
    cancelAnimationFrame(animationFrame);
  };

  const autoScroll = () => {
    if (stopped) return;

    window.scrollBy(0, 1.2);

    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 5;

    if (!reachedBottom) {
      animationFrame = requestAnimationFrame(autoScroll);
    }
  };

  animationFrame = requestAnimationFrame(autoScroll);

  window.addEventListener("wheel", stopAutoScroll, { passive: true });
  window.addEventListener("touchstart", stopAutoScroll, { passive: true });
  window.addEventListener("touchmove", stopAutoScroll, { passive: true });
  window.addEventListener("pointerdown", stopAutoScroll, { passive: true });
  window.addEventListener("keydown", stopAutoScroll);

  return () => {
    cancelAnimationFrame(animationFrame);

    window.removeEventListener("wheel", stopAutoScroll);
    window.removeEventListener("touchstart", stopAutoScroll);
    window.removeEventListener("touchmove", stopAutoScroll);
    window.removeEventListener("pointerdown", stopAutoScroll);
    window.removeEventListener("keydown", stopAutoScroll);
  };
}, [isOpened]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  const cornerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0.95, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <div className="min-h-screen w-full relative pb-24 overflow-x-hidden flex flex-col items-center bg-transparent font-serif text-brand-primary">
      {/* Responsive Decorative Background Corners */}
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 border-r-2 sm:border-r-[3px] border-t-2 sm:border-t-[3px] border-brand-border m-3 sm:m-6 md:m-8 origin-top-right pointer-events-none"
      />
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 border-l-2 sm:border-l-[3px] border-b-2 sm:border-b-[3px] border-brand-border m-3 sm:m-6 md:m-8 origin-bottom-left pointer-events-none"
      />
      
      <div className="max-w-4xl w-full px-4 sm:px-6 pt-12 sm:pt-20 md:pt-24 flex flex-col items-center text-center z-10">
        
        {/* Quranic Intro Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14 sm:mb-20 mt-4 sm:mt-8 w-full max-w-2xl px-2"
        >
    
      <br />
      <br />
      <br />
      <br />
      
{/* Main Message Box */}
<motion.div
  variants={fadeInUp}
  className="
    w-full
    flex
    justify-center
    mt-6
    sm:mt-8
    mb-8
    sm:mb-12
  "
>
  <div
    className="
      w-full
      max-w-3xl
      mx-auto
      px-6
      sm:px-10
      py-6
      sm:py-8
      rounded-2xl
      border
      border-brand-accent/30
      bg-white/40
      backdrop-blur-sm
      shadow-sm
    "
    dir="rtl"
  >
    {/* Decorative top */}
    <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
      <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />

      <span className="text-brand-accent text-sm sm:text-base">
        ❦
      </span>

      <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
    </div>

    {/* Main Message */}
    <p
      className="
        font-arabic
        text-lg
        sm:text-2xl
        md:text-3xl
        text-brand-primary
        leading-[2]
        sm:leading-[2.2]
        font-bold
        text-center
      "
    >
      في ليلةٍ يعلو الضياء بنورها،
      <br />
      عائلةُ القرب، صُحبةُ العمر، أحبابُ الروح
      <br />
      نتشرّف بدعوتكم …
    </p>

    {/* Decorative bottom */}
    <div className="flex items-center justify-center gap-3 mt-5 sm:mt-6">
      <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />

      <span className="text-brand-accent text-xs">
        ✦
      </span>

      <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
    </div>
  </div>
</motion.div>
{/* Families Section */}
<motion.div
  variants={fadeInUp}
  className="
    mt-8
    sm:mt-10
    mb-14
    sm:mb-20
    w-full
    flex
    justify-center
  "
  dir="rtl"
>
  <div
    className="
      w-full
      max-w-2xl
      mx-auto
      px-6
      sm:px-10
      py-7
      sm:py-9
      rounded-2xl
      border
      border-brand-accent/30
      bg-white/40
      backdrop-blur-sm
      shadow-sm
      text-center
    "
  >

    {/* Decorative top */}
    <div className="flex items-center justify-center gap-3 mb-6 sm:mb-7">
      <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />

      <span className="text-brand-accent text-sm sm:text-base">
        ❦
      </span>

      <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
    </div>

    {/* First Family */}
    <div
      className="
        font-arabic
        text-lg
        sm:text-xl
        md:text-2xl
        text-brand-primary
        font-bold
        leading-relaxed
      "
    >
      آل عاصم الأمين البدوي
    </div>

    {/* Ampersand */}
    <div
      className="
        font-serif
        text-xl
        sm:text-2xl
        text-brand-accent
        italic
        my-4
        sm:my-5
      "
    >
      &amp;
    </div>

    {/* Second Family */}
    <div
      className="
        font-arabic
        text-lg
        sm:text-xl
        md:text-2xl
        text-brand-primary
        font-bold
        leading-relaxed
      "
    >
      آل عبد السميع عامر الجعفري
    </div>

    {/* Decorative bottom */}
    <div className="flex items-center justify-center gap-3 mt-6 sm:mt-7">
      <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />

      <span className="text-brand-accent text-xs">
        ✦
      </span>

      <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
    </div>

  </div>
</motion.div>

         
        </motion.div>

{/* Names Section */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-60px" }}
  className="mb-16 sm:mb-24 relative w-full"
>
  {/* Title */}
  <h2
    className="
      font-arabic
      text-base
      sm:text-xl
      text-brand-primary
      font-extrabold
      mb-8
      sm:mb-10
      text-center
    "
    dir="rtl"
  >
    لحضور حفل زواج
  </h2>

  {/* Bride & Groom Names Box */}
  <div
    className="
      relative
      w-full
      max-w-2xl
      mx-auto
      px-6
      sm:px-10
      py-8
      sm:py-12
      rounded-3xl
      border
      border-brand-accent/30
      bg-white/40
      backdrop-blur-sm
      shadow-sm
      text-center
      overflow-hidden
    "
    dir="rtl"
  >
    {/* Inner elegant border */}
    <div
      className="
        absolute
        inset-2
        sm:inset-3
        rounded-2xl
        border
        border-brand-accent/15
        pointer-events-none
      "
    />

    {/* Top decoration */}
    <div className="relative z-10 flex items-center justify-center gap-3 mb-6 sm:mb-8">
      <span className="h-px w-12 sm:w-20 bg-brand-accent/30" />

      <span className="text-brand-accent text-lg sm:text-xl">
        ❦
      </span>

      <span className="h-px w-12 sm:w-20 bg-brand-accent/30" />
    </div>

    {/* Sparkles */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <Sparkles count={18} />
    </div>

    {/* Groom */}
    <h1
      className="
        relative
        z-10
        font-arabic
        text-5xl
        sm:text-7xl
        md:text-8xl
        lg:text-9xl
        font-bold
        leading-none
        text-brand-primary
        tracking-tight
      "
    >
      م. أمجد
    </h1>

    {/* & */}
    <div
      className="
        relative
        z-10
        flex
        items-center
        justify-center
        gap-4
        sm:gap-6
        my-4
        sm:my-5
      "
    >
      <span className="h-px w-8 sm:w-14 bg-brand-accent/25" />

      <span
        className="
          font-serif
          text-2xl
          sm:text-4xl
          italic
          font-normal
          text-brand-accent
        "
      >
        &amp;
      </span>

      <span className="h-px w-8 sm:w-14 bg-brand-accent/25" />
    </div>

    {/* Bride */}
    <h1
      className="
        relative
        z-10
        font-arabic
        text-5xl
        sm:text-7xl
        md:text-8xl
        lg:text-9xl
        font-bold
        leading-none
        text-brand-primary
        tracking-tight
      "
    >
      د. عائشة
    </h1>

    {/* Bottom decoration */}
    <div className="relative z-10 flex items-center justify-center gap-3 mt-7 sm:mt-9">
      <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />

      <span className="text-brand-accent text-xs sm:text-sm">
        ✦
      </span>

      <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
    </div>
  </div>
</motion.div>

        {/* Date & Countdown */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 sm:mb-24 w-full flex flex-col items-center"
        >
          <div className="inline-block tracking-[0.3em] text-[11px] sm:text-xs uppercase font-sans font-extrabold text-brand-primary mb-3">
            Save The Date
          </div>

          {/* Arabic Date */}
          <h3 className="font-arabic text-2xl sm:text-4xl font-bold text-brand-primary mb-2">
            الخميس، 15 اكتوبر 2026
          </h3>

          {/* English Date with strict LTR isolation */}
          <p 
            dir="ltr" 
            style={{ direction: "ltr", unicodeBidi: "isolate" }}
            className="text-lg sm:text-2xl font-serif italic text-brand-accent font-semibold mb-8 sm:mb-12"
          >
            Thursday, October 15, 2026
          </p>
          
          <Countdown />
        </motion.div>

        {/* Interactive Calendar */}
        <InteractiveCalendar />

        {/* RSVP Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 sm:mb-24 w-full flex flex-col items-center relative"
        >
          <span className="absolute text-6xl sm:text-8xl md:text-[130px] font-sans font-black text-brand-faint -z-10 opacity-60 uppercase tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            
          </span>

          <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-3">
            <CalendarCheck size={22} strokeWidth={1.5} />
          </div>

          <h2 className="font-serif tracking-[0.25em] text-xs sm:text-sm uppercase font-bold text-brand-primary mb-1">
            
          </h2>
          <h3 className="font-arabic text-2xl sm:text-3xl font-bold text-brand-accent mb-3">
            تأكيد الحضور
          </h3>
          <p className="font-arabic text-sm text-brand-secondary max-w-sm mx-auto mb-8 font-medium px-4">
            سعادتنا تكتمل بوجودكم، شاركونا فرحتنا وأكدوا حضوركم
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRSVPOpen(true)}
            className="flex items-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 bg-brand-primary text-brand-bg text-[11px] sm:text-xs uppercase tracking-[0.3em] font-sans font-bold hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer border-none rounded-full"
          >
            <UserCheck size={18} strokeWidth={1.8} />
            أكّد حضورك
          </motion.button>
        </motion.div>

       
        {/* Location Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="w-full relative text-center flex flex-col items-center mb-16 sm:mb-24"
          dir="rtl"
        >
          <div className="flex items-center gap-4 mb-8 justify-center bg-white/70 backdrop-blur-xs border border-brand-border/40 px-5 py-3 rounded-2xl shadow-xs">
             <div className="w-11 h-11 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent shrink-0">
               <MapPin size={22} strokeWidth={1.5} />
             </div>
             <div className="text-right" dir="ltr">
                <div className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-brand-secondary">The Venue</div>
                <div className="text-sm font-sans font-bold text-brand-primary mt-0.5">قاعة الماسة البيضاء</div>
             </div>
          </div>

          <p className="font-arabic text-lg sm:text-2xl text-brand-primary font-medium mb-8 leading-relaxed max-w-lg px-4">
            بكل الحب ننتظركم لتشاركونا فرحتنا يوم الخميس 15 اكتوبر 2026
            <br />
            في قاعة الماسة البيضاء - المدينة المنورة.
          </p>

          {/* Map */}
          <div className="w-full max-w-2xl h-64 sm:h-80 md:h-96 bg-brand-bg relative mb-8 border border-brand-border/60 overflow-hidden rounded-2xl shadow-md">
            <div className="absolute inset-0 border-[6px] sm:border-[10px] border-brand-bg/30 z-10 pointer-events-none rounded-2xl"></div>
            <iframe 
              title="موقع الحفل على الخريطة"
                src="https://www.google.com/maps?q=قصر%20الماسة%20البيضاء%20للاحتفالات%20والمؤتمرات،%20سعد%20بن%20خثمة،%20شوران،%20المدينة%20المنورة&output=embed"

              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 w-full h-full"
            />
          </div>

          <a 
            href="https://maps.app.goo.gl/M5JKgF3AHhp6jAXJ7?g_st=ic" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 bg-brand-primary text-brand-bg text-[11px] sm:text-xs uppercase tracking-[0.25em] font-sans font-bold hover:bg-brand-accent transition-all duration-300 rounded-full shadow-md hover:shadow-xl"
          >
            <Navigation size={16} />
            الوصول عبر الخريطة
          </a>
        </motion.div>

        {/* Guestbook */}
        <Guestbook />
        
      {/* Reception Time */}
<motion.div
  variants={fadeInUp}
  className="
    w-full
    max-w-xl
    mx-auto
    mt-12
    sm:mt-16
    mb-12
    sm:mb-16
    text-center
  "
  dir="rtl"
>
  {/* Decorative top */}
  <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
    <span className="h-px w-12 sm:w-20 bg-brand-accent/40" />
    <span className="text-brand-accent text-lg">❦</span>
    <span className="h-px w-12 sm:w-20 bg-brand-accent/40" />
  </div>

  {/* Main message */}
  <p
    className="
      font-arabic
      text-xl
      sm:text-2xl
      md:text-3xl
      text-brand-primary
      font-bold
      leading-relaxed
      mb-2
    "
  >
    نستقبلكم بكل حبٍ وسرور
  </p>

  <p
    className="
      font-arabic
      text-base
      sm:text-lg
      md:text-xl
      text-brand-secondary
      font-medium
      leading-relaxed
    "
  >
    أحبابنا ومعازيمنا الكرام
  </p>

  {/* Time */}
  <div
  className="
    inline-flex
    flex-col
    items-center
    justify-center
    mt-5
    sm:mt-6
    px-7
    sm:px-10
    py-3
    sm:py-4
    rounded-2xl
    border
    border-brand-accent/30
    bg-white/40
    backdrop-blur-sm
    shadow-sm
  "
>
  <span
    className="
      font-arabic
      text-sm
      sm:text-base
      text-brand-secondary
      mb-1
    "
  >
    موعد استقبالكم
  </span>

  <span
    className="
      font-arabic
      text-2xl
      sm:text-3xl
      md:text-4xl
      font-bold
      text-brand-accent
    "
  >
    الخميس 15 أكتوبر 2026
    <br />
    الساعة 8:00 مساءً
  </span>

  {/* الفاصل */}
  <div
    className="
      w-12
      sm:w-16
      h-px
      bg-brand-accent/25
      my-3
      sm:my-4
    "
  />

  {/* الأمنية */}
  <span
    className="
      font-arabic
      text-base
      sm:text-lg
      md:text-xl
      text-brand-primary
      font-bold
      leading-relaxed
      text-center
    "
    dir="rtl"
  >  </span>
</div>

  {/* Decorative bottom */}
  <div className="flex items-center justify-center gap-3 mt-5 sm:mt-6">
    <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
    <span className="text-brand-accent text-xs">✦</span>
    <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
  </div>
</motion.div>


        {/* Footer */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-20 sm:mt-32 mb-10 text-center w-full relative"
        >

            <p className="font-calligraphy text-4xl sm:text-6xl md:text-7xl text-brand-primary mb-5 z-10 relative font-bold leading-relaxed"
          dir="rtl" >  بكل حب </p>
          <div
  className="
    w-full
    max-w-3xl
    mx-auto
    mt-8
    sm:mt-10
    px-6
    sm:px-10
    py-7
    sm:py-9
    rounded-2xl
    border
    border-brand-accent/30
    bg-white/40
    backdrop-blur-sm
    shadow-sm
  "
  dir="rtl"
>
  {/* Decorative top */}
  <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
    <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
    <span className="text-brand-accent text-sm">❦</span>
    <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
  </div>

  {/* Message */}
  <p
    className="
      font-arabic
      text-base
      sm:text-lg
      md:text-xl
      text-brand-primary
      font-bold
      leading-[2.2]
      sm:leading-[2.4]
      text-center
    "
  >
    حين تكتمل الليالي بوجوه نحبها،
    <br />
    تصبح اللحظات عمرًا من الجمال…
    <br />
    <br />
    وحضوركم هو الحكاية الأجمل في فرحنا،
    <br />
    والذكرى التي ستبقى ما حيينا…
    <br />
    <br />
    نسأل الله أن يديم عليكم المسرات،
    <br />
    ويجعل الفرح دربًا لا يفارقكم أبدًا…
  </p>

  {/* Decorative bottom */}
  <div className="flex items-center justify-center gap-3 mt-6 sm:mt-7">
    <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
    <span className="text-brand-accent text-xs">✦</span>
    <span className="h-px w-10 sm:w-16 bg-brand-accent/30" />
  </div>
</div>
        </motion.div>

      </div>

      {/* RSVP Modal */}
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
    </div>
  );
}
