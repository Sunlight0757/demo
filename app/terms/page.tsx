import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-[100vh] mx-6 md:mx-20 xl:mx-28 2xl:mx-32 py-10">
      <Image src="/logo.png" alt="logo" width={50} height={50} priority />
      <div className="flex flex-col gap-y-8">
        <span className="uppercase font-bold text-sm xl:text-base 2xl:text-lg">
          Caribbean weather
        </span>
        <span className="capitalize font-bold text-2xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-normal">
          Terms of Service
        </span>
        <div className="flex flex-col">
          <span className="font-bold md:text-xl lg:text-base xl:text-xl 2xl:text-2xl">
            1. Introduction
          </span>
          <span className="md:w-2/3 lg:w-full md:text-xl lg:text-base xl:text-xl 2xl:text-2xl leading-normal">
            Welcome to the "Caribbean Weather" app, a service provided by App
            Banton Studios Ltd. ("we", "us", or "our"). Our app offers
            minimalistic weather data, funny weather commentary in creolized
            English, and timely weather alerts, primarily serving Caribbean
            islanders and the diaspora around the world.
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold md:text-xl lg:text-base xl:text-xl 2xl:text-2xl">
            2. Acceptance of Terms
          </span>
          <span className="md:w-2/3 lg:w-full md:text-xl lg:text-base xl:text-xl 2xl:text-2xl leading-normal">
            By accessing or using our app, you agree to be bound by these Terms
            of Service ("Terms") and our Privacy Policy. If you do not agree to
            these Terms, you should not use our app. These Terms apply to all
            users of the app, including without limitation users who are
            browsers, vendors, customers, merchants, and contributors of
            content.
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <span>&copy; Appbanton Studios</span>
        <span className="hidden md:block">made with 💗 in POS</span>
      </div>
    </div>
  );
}
