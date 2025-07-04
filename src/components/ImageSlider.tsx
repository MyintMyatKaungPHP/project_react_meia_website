import React, { useState, useEffect, useRef } from "react";

interface ImageSliderProps {
  images: string[];
}

const INTERVAL_MS = 5000;

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(INTERVAL_MS);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0); // percent (0-100)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function clear() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }
  function clearProgress() {
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = null;
  }

  function startTimer(duration: number) {
    clear();
    setStartTime(Date.now());
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setTimeLeft(INTERVAL_MS);
      setStartTime(Date.now());
      setProgress(0);
    }, duration);

    clearProgress();
    progressRef.current = setInterval(() => {
      const elapsed = Math.min(Date.now() - startTime, duration);
      setProgress((elapsed / INTERVAL_MS) * 100);
    }, 16); // update ~60fps
  }

  useEffect(() => {
    if (!images.length) return;

    if (paused) {
      setTimeLeft((ms) => Math.max(0, ms - (Date.now() - startTime)));
      clear();
      clearProgress();
    } else {
      startTimer(timeLeft);
    }

    return () => {
      clear();
      clearProgress();
    };
  }, [paused]);

  // Whenever images or current changes (slide moves), restart timer/progress
  useEffect(() => {
    setTimeLeft(INTERVAL_MS);
    setStartTime(Date.now());
    setPaused(false);
    setProgress(0);
    clear();
    clearProgress();
    if (images.length > 0) startTimer(INTERVAL_MS);

    return () => {
      clear();
      clearProgress();
    };
  }, [images, current]);

  // Whenever images prop changes, reset to 0
  useEffect(() => {
    setCurrent(0);
  }, [images]);

  if (!images.length) return null;
  return (
    <div
      className="relative mb-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[current]}
          alt="slider"
          className="w-full h-[400px] object-cover object-center rounded-lg"
        />
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div
            className="h-full bg-green-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 mx-auto inline-flex -translate-x-1/2 space-x-[6px] rounded-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`bg-gray-300 h-2 rounded-full transition-all ${
              current === idx ? "w-[14px] opacity-100" : "w-2 opacity-30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
