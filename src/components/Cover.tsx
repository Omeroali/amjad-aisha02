import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Sparkles from "./Sparkles";

import openBackground from "../assets/Openit.png";
import doorLeft from "../assets/door-left.png";
import doorRight from "../assets/door-right.png";
import doorInside from "../assets/door-inside.png";

interface CoverProps {
  onOpen: () => void;
}

/* =========================================================
   دخول عناصر الغلاف
   ========================================================= */

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const cornerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },

  visible: {
    opacity: 0.9,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Cover({ onOpen }: CoverProps) {
  const [isOpening, setIsOpening] = useState(false);

  /* =========================================================
     فتح الدعوة
     ========================================================= */

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);
  };

  /* =========================================================
     بعد انتهاء حركة الباب
     ننتقل إلى الدعوة الرئيسية
     ========================================================= */

  useEffect(() => {
    if (!isOpening) return;

    const timer = window.setTimeout(() => {
      onOpen();
    }, 2300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isOpening, onOpen]);

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-50
        overflow-hidden
        bg-brand-bg
      "
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        scale: 1.015,
        transition: {
          duration: 0.55,
          ease: "easeInOut",
        },
      }}
    >
      {/* =====================================================
          الخلفية الرئيسية
          Openit.png
          ===================================================== */}

      <img
        src={openBackground}
        alt=""
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          select-none
          pointer-events-none
        "
      />

      {/* طبقة خفيفة جدًا */}

      <div
        className="
          absolute
          inset-0
          bg-white/5
          pointer-events-none
        "
      />

      {/* =====================================================
          الزوايا الزخرفية
          ===================================================== */}

      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="
          absolute
          top-0
          right-0
          w-16
          h-16
          sm:w-28
          sm:h-28
          md:w-48
          md:h-48
          border-r-2
          border-t-2
          sm:border-r-[3px]
          sm:border-t-[3px]
          border-brand-border
          m-3
          sm:m-5
          md:m-7
          z-20
          pointer-events-none
        "
      />

      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="
          absolute
          bottom-0
          left-0
          w-16
          h-16
          sm:w-28
          sm:h-28
          md:w-48
          md:h-48
          border-l-2
          border-b-2
          sm:border-l-[3px]
          sm:border-b-[3px]
          border-brand-border
          m-3
          sm:m-5
          md:m-7
          z-20
          pointer-events-none
        "
      />

      {/* =====================================================
          المحتوى الرئيسي
          ===================================================== */}

      <motion.div
        className="
          absolute
          inset-0
          z-10
          flex
          items-center
          justify-center
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ===================================================
            منطقة الباب
            =================================================== */}

        <motion.div
          variants={itemVariants}
          className="
            absolute
            left-1/2
            top-[45%]
            -translate-x-1/2
            -translate-y-1/2

            w-[64vw]
            h-[63vh]

            sm:w-[61vw]
            sm:h-[65vh]

            md:w-[540px]
            md:h-[650px]

            lg:w-[565px]
            lg:h-[675px]

            max-w-[565px]
            max-h-[675px]

            min-w-[280px]
            min-h-[430px]

            flex
            items-center
            justify-center

            z-30
          "
          style={{
            perspective: 1800,
          }}
        >
          {/* =================================================
              الصورة الداخلية خلف الباب
              ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2

              w-[96%]
              h-[96%]

              overflow-hidden

              rounded-t-[44%]
              rounded-b-[18px]

              bg-[#f6dfd3]

              shadow-[0_20px_60px_rgba(70,20,30,0.22)]
            "
          >
            {/* المشهد الداخلي */}

            <motion.img
              src={doorInside}
              alt=""
              draggable={false}
              initial={{
                scale: 1.08,
                opacity: 0.82,
              }}
              animate={
                isOpening
                  ? {
                      scale: 1,
                      opacity: 1,
                    }
                  : {
                      scale: 1.08,
                      opacity: 0.82,
                    }
              }
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                select-none
                pointer-events-none
              "
            />

            {/* =================================================
                نص العروسين
                يظهر داخل الدعوة بعد بداية فتح الباب
                ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 12,
              }}
              animate={
                isOpening
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0.94,
                      y: 12,
                    }
              }
              transition={{
                delay: 0.75,
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                inset-0
                z-20

                flex
                flex-col
                items-center
                justify-center

                text-center
                select-none

                px-6
              "
              dir="rtl"
            >
              {/* م. أمجد */}

              <div
                className="
                  font-arabic
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl

                  font-bold

                  leading-tight

                text-[#65152B]
drop-shadow-[0_2px_4px_rgba(255,248,235,0.95)]
                "
              >
                م. أمجد
              </div>

              {/* & */}

              <div
                className="
                  font-serif
                  text-2xl
                  sm:text-3xl
                  md:text-4xl

                  italic

                 text-[#A9783A]
drop-shadow-[0_2px_3px_rgba(255,248,235,0.9)]
                  my-2
                  sm:my-3
                "
              >
                &
              </div>

              {/* د. عائشة */}

              <div
                className="
                  font-arabic
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl

                  font-bold

                  leading-tight

                 text-[#65152B]
drop-shadow-[0_2px_4px_rgba(255,248,235,0.95)]
                "
              >
                د. عائشة
              </div>

              {/* الخط + القلب + الخط */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3

                  mt-4
                  sm:mt-5
                "
              >
                <span
                  className="
                    w-8
                    sm:w-12
                    h-px
                    bg-[#74152d]/70
                  "
                />

                <span
                  className="
                    text-lg
                    sm:text-xl
                   text-[#A9783A]
                  "
                >
                  ♥
                </span>

                <span
                  className="
                    w-8
                    sm:w-12
                    h-px
                    bg-[#74152d]/70
                  "
                />
              </div>
            </motion.div>

            {/* =================================================
                إضاءة عند الفتح
                ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={
                isOpening
                  ? {
                      opacity: [0, 0.65, 0],
                    }
                  : {
                      opacity: 0,
                    }
              }
              transition={{
                duration: 1.25,
                ease: "easeOut",
              }}
              className="
                absolute
                inset-0
                bg-white
                blur-3xl
                pointer-events-none
                z-30
              "
            />
          </div>

          {/* =================================================
              الباب الأيسر
              ================================================= */}

          <motion.button
            type="button"
            onClick={handleOpen}
            aria-label="افتح الدعوة"
            disabled={isOpening}
            initial={{
              rotateY: 0,
            }}
            animate={{
              rotateY: isOpening ? -112 : 0,
              x: isOpening ? -10 : 0,
            }}
            transition={{
              duration: 1.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
            }}
            className="
              absolute

              left-[0%]
              top-[2%]
              bottom-[2%]

              w-[53%]

              p-0
              border-0
              bg-transparent

              cursor-pointer

              overflow-hidden

              rounded-t-[44%]
              rounded-b-[16px]

              shadow-[7px_12px_30px_rgba(70,20,30,0.20)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-accent
            "
          >
            <img
              src={doorLeft}
              alt=""
              draggable={false}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                select-none
                pointer-events-none
              "
            />

            {/* انعكاس بسيط */}

            <motion.div
              animate={
                isOpening
                  ? {
                      opacity: 0,
                    }
                  : {
                      opacity: [0.04, 0.09, 0.04],
                    }
              }
              transition={{
                duration: 2.8,
                repeat: isOpening ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-0
                bg-white
                pointer-events-none
              "
            />
          </motion.button>

          {/* =================================================
              الباب الأيمن
              ================================================= */}

          <motion.button
            type="button"
            onClick={handleOpen}
            aria-label="افتح الدعوة"
            disabled={isOpening}
            initial={{
              rotateY: 0,
            }}
            animate={{
              rotateY: isOpening ? 112 : 0,
              x: isOpening ? 10 : 0,
            }}
            transition={{
              duration: 1.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformOrigin: "right center",
              transformStyle: "preserve-3d",
            }}
            className="
              absolute

              right-[0%]
              top-[2%]
              bottom-[2%]

              w-[53%]

              p-0
              border-0
              bg-transparent

              cursor-pointer

              overflow-hidden

              rounded-t-[44%]
              rounded-b-[16px]

              shadow-[-7px_12px_30px_rgba(70,20,30,0.20)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-accent
            "
          >
            <img
              src={doorRight}
              alt=""
              draggable={false}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                select-none
                pointer-events-none
              "
            />

            {/* انعكاس بسيط */}

            <motion.div
              animate={
                isOpening
                  ? {
                      opacity: 0,
                    }
                  : {
                      opacity: [0.04, 0.09, 0.04],
                    }
              }
              transition={{
                duration: 2.8,
                repeat: isOpening ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-0
                bg-white
                pointer-events-none
              "
            />
          </motion.button>

          {/* =================================================
              اللمعة أثناء فتح الباب
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={
              isOpening
                ? {
                    opacity: [0, 0.75, 0],
                    scale: [0.5, 1.1, 1.35],
                  }
                : {
                    opacity: 0,
                    scale: 0.5,
                  }
            }
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="
              absolute

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              w-[38%]
              h-[58%]

              rounded-full

              bg-[#fff4dc]

              blur-3xl

              shadow-[0_0_80px_rgba(255,225,170,0.85)]

              pointer-events-none

              z-40
            "
          />

          {/* =================================================
              النجوم
              ================================================= */}

          <div
            className="
              absolute
              inset-0
              z-50
              pointer-events-none
            "
          >
            <Sparkles count={8} />
          </div>

          {/* =================================================
              رسالة الضغط
              ================================================= */}

          {!isOpening && (
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: [0, -4, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                },
                y: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute

                bottom-[-4%]

                left-1/2
                -translate-x-1/2

                z-[60]

                whitespace-nowrap

                font-arabic

                text-base
                sm:text-lg
                md:text-xl

                text-brand-primary

                drop-shadow-sm
              "
              dir="rtl"
            >
              اضغط لفتح الدعوة
            </motion.div>
          )}
        </motion.div>

        {/* ===================================================
            العبارة السفلية
            =================================================== */}

        <motion.div
          variants={itemVariants}
          className="
            absolute

            bottom-[3%]

            left-1/2
            -translate-x-1/2

            text-center

            z-40

            select-none
          "
          dir="rtl"
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
              sm:gap-5

              text-brand-primary

              mb-2
            "
          >
            <span className="w-10 sm:w-14 h-px bg-brand-primary/70" />

            <span className="text-lg sm:text-xl">
              ❧
            </span>

            <span className="w-10 sm:w-14 h-px bg-brand-primary/70" />
          </div>

          <p
            className="
              font-arabic

              text-xl
              sm:text-2xl
              md:text-3xl

              text-brand-primary

              whitespace-nowrap
            "
          >
            لحظة تبدأ .. حكايتنا
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}