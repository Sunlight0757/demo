import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-between h-[100vh] max-w-[345px] tablet:max-w-[594px] desktop:max-w-[1200px]">
        <div className="flex flex-col tablet:gap-y-14">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={48}
            height={48}
            priority
            className="py-10"
          />
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-y-24 desktop:gap-x-[108px] items-center">
            <div className="flex flex-col">
              <span className="font-lexend font-semibold text-sm leading-5 uppercase mb-6">
                Caribbean weather
              </span>
              <span className="relative font-bold text-[32px] tablet:text-5xl leading-[48px] tablet:leading-[72px] capitalize mb-4">
                A Refreshingly Simple Weather App For The Caribbean
                <Image
                  src="/images/line.png"
                  alt="line"
                  width={223}
                  height={12}
                  priority
                  className="hidden tablet:block absolute left-2 bottom-1 -z-10"
                />
              </span>
              <span className="font-normal text-lg tablet:text-2xl leading-[27px] tablet:leading-9 mb-12">
                A minimalist weather app tailored to Caribbean Islanders and the
                diaspora
              </span>
              <div className="flex gap-x-4 items-center">
                <Image
                  src="/images/apple.png"
                  alt="apple"
                  width={120}
                  height={40}
                  priority
                />
                <Image
                  src="/images/google.png"
                  alt="google"
                  width={135}
                  height={40}
                  priority
                />
              </div>
            </div>
            <VideoPlayer />
          </div>
        </div>
        <div className="flex justify-between py-7">
          <span>© Appbanton Studios</span>
          <span className="hidden tablet:block">
            made with <span className="font-arial">❤️️</span> in POS
          </span>
        </div>
      </div>
    </div>
  );
}
