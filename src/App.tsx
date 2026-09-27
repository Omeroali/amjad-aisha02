import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import Cover from "./components/Cover";
import Invitation from "./components/Invitation";
import AudioPlayer from "./components/AudioPlayer";
import ringsBg from "./assets/rings.png";
import musicTrack from "./assets/el-leil-we-samah.mpeg";
import { supabase } from "./lib/supabase";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setIsOpened(true);
    setIsPlaying(true);

    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  // إيقاف حالة التشغيل عند انتهاء الأغنية
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // اختبار اتصال Supabase
  useEffect(() => {

    const testSupabaseConnection = async () => {
      const { error } = await supabase
        .from("guestbook_messages")
        .select("id")
        .limit(1);

      if (error) {
        console.error("Supabase connection failed:", error);
        return;
      }

      console.log("Supabase connection successful.");
    };

    testSupabaseConnection();
  }, []);

  return (
    <main
      className="relative min-h-screen font-serif text-brand-primary selection:bg-brand-accent selection:text-brand-bg bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${ringsBg})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Music */}
      <audio ref={audioRef}>
        <source src={musicTrack} type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {!isOpened && <Cover key="cover" onOpen={handleOpen} />}
      </AnimatePresence>

      {isOpened && (
        <>
          <Invitation isOpened={isOpened} />

          <AudioPlayer
            isPlaying={isPlaying}
            onToggle={toggleAudio}
            audioRef={audioRef}
          />
        </>
      )}
    </main>
  );
}