"use client"

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Settings2Icon, SettingsIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension: any, time: number) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

export default function NotFound() {

  const router = useRouter()
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <div className='h-screen w-full'>
      <div className='h-full w-full relative'>
        <motion.img
          className="w-full h-full object-cover"
          src={'/images/lpsk-carousel.png'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        />
        <div className=' absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-5 justify-center place-items-center'>
          <h1 className='text-2xl font-bold'>COMING SOON</h1>
          <p>Our Website is under contructions</p>
          <div className='flex w-full justify-center place-items-center gap-5'>
            <CountdownCircleTimer
              {...timerProps}
              colors="#7E2E84"
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }} className='text-xl text-center'>
                  {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
              {...timerProps}
              colors="#D14081"
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }} className='text-xl text-center'>
                  {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
              {...timerProps}
              colors="#EF798A"
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }} className='text-xl text-center'>
                  {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
              {...timerProps}
              colors="#218380"
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > 0
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }} className='text-xl text-center'>
                  {renderTime("seconds", getTimeSeconds(elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          </div>
          <Button onClick={() => router.back()}>Kembali</Button>
        </div>
      </div>
    </div>
  )
}
