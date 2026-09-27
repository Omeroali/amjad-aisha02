import { motion } from "motion/react";
import Sparkles from "./Sparkles";
import ringsBg from "../assets/rings.png";
import openImage from "../assets/Openit.png";
import type { Key } from "react";

interface CoverProps {
  key?: Key;
  onOpen: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const cornerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 0.95,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Cover({ onOpen }: CoverProps) {
  return (
    <motion.div
      className="
        fixed
        inset-0
        z-50
        overflow-hidden
        bg-brand-bg
      "
      exit={{
        y: "-100%",
        opacity: 0,
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      }}
    >
      {/* =========================================
          Full Screen Background
          ========================================= */}

      <img
        src={openImage}
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

      {/* =========================================
          Optional Soft Overlay
          ========================================= */}

      <div
        className="
          absolute
          inset-0
          bg-white/5
          pointer-events-none
        "
      />

      {/* =========================================
          Decorative Corners
          ========================================= */}

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
          sm:w-32
          sm:h-32
          md:w-56
          md:h-56
          border-r-2
          sm:border-r-[3px]
          border-t-2
          sm:border-t-[3px]
          border-brand-border
          m-3
          sm:m-6
          md:m-8
          z-20
          origin-top-right
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
          sm:w-32
          sm:h-32
          md:w-56
          md:h-56
          border-l-2
          sm:border-l-[3px]
          border-b-2
          sm:border-b-[3px]
          border-brand-border
          m-3
          sm:m-6
          md:m-8
          z-20
          origin-bottom-left
          pointer-events-none
        "
      />

      {/* =========================================
          Main Content
          ========================================= */}

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
        {/* =========================================
            Central Circle / Names Area
            ========================================= */}

        <motion.button
          variants={itemVariants}
          onClick={onOpen}
          whileHover={{
            scale: 1.035,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[48vw]
            h-[48vw]
            max-w-[520px]
            max-h-[520px]
            min-w-[280px]
            min-h-[280px]
            rounded-full
            bg-transparent
            border-none
            outline-none
            cursor-pointer
            z-30
            p-0
            flex
            items-center
            justify-center
          "
          aria-label="افتح الدعوة"
        >
          {/* =========================================
              Names
              ========================================= */}

          <div
            className="
              relative
              z-30
              flex
              flex-col
              items-center
              justify-center
              text-center
              select-none
            "
            dir="rtl"
          >
            {/* Sparkles */}
            <div
              className="
                absolute
                inset-0
                pointer-events-none
              "
            >
              <Sparkles count={8} />
            </div>

            {/* Amjad */}
            <motion.span
              whileHover={{
                scale: 1.15,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 14,
              }}
              className="
                font-arabic
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-none
                text-brand-primary
                drop-shadow-md
                transition-colors
                duration-300
                group-hover:text-brand-accent
                relative
                z-10
              "
            >
              م.أمجد
            </motion.span>

            {/* & */}
            <motion.span
              className="
                font-serif
                text-2xl
                sm:text-3xl
                md:text-4xl
                italic
                font-normal
                text-brand-accent
                my-2
                sm:my-3
                relative
                z-10
              "
              whileHover={{
                scale: 1.15,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 14,
              }}
            >
              &amp;
            </motion.span>

            {/* Aisha */}
            <motion.span
              whileHover={{
                scale: 1.15,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 14,
              }}
              className="
                font-arabic
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-none
                text-brand-primary
                drop-shadow-md
                transition-colors
                duration-300
                group-hover:text-brand-accent
                relative
                z-10
              "
            >
              د.عائشة
              <br />
              <br />
              <br />
              
            </motion.span>
          </div>

          {/* =========================================
              Invisible Circular Hover Area
              ========================================= */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-brand-accent/0
              hover:bg-brand-accent/5
              transition-all
              duration-500
              pointer-events-none
            "
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}