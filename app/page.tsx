import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-[100vh] mx-6 md:mx-20 xl:mx-28 2xl:mx-32 py-10">
      <Image src="/logo.png" alt="logo" width={50} height={50} priority />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-y-24  lg:gap-x-24">
        <div className="flex flex-col gap-y-8">
          <span className="uppercase font-bold text-sm xl:text-base 2xl:text-lg">
            Caribbean weather
          </span>
          <span className="capitalize font-bold text-2xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-normal">
            A Refreshingly Simple Weather App For The Caribbean
          </span>
          <span className="md:w-2/3 lg:w-full md:text-xl lg:text-base xl:text-xl 2xl:text-2xl leading-normal">
            A minimalist weather app tailored to Caribbean Islanders and the
            diaspora
          </span>
          <div className="flex gap-x-4">
            <Image
              src="/apple.png"
              alt="apple"
              width={150}
              height={50}
              priority
            />
            <Image
              src="/google.png"
              alt="google"
              width={150}
              height={50}
              priority
            />
          </div>
        </div>
        <VideoPlayer />
      </div>
      <div className="flex justify-between">
        <span>&copy; Appbanton Studios</span>
        <span className="hidden md:block">made with 💗 in POS</span>
      </div>
    </div>
  );
}
