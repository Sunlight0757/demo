import Image from "next/image";

export default function Terms() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-[100vh] max-w-[345px] tablet:max-w-[594px] desktop:max-w-[1200px]">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={48}
          height={48}
          priority
          className="py-10 mb-14"
        />
        <span className="font-lexend font-semibold text-sm leading-5 uppercase mt-2 mb-6">
          Caribbean weather
        </span>
        <span className="relative font-bold text-[32px] tablet:text-5xl leading-[48px] tablet:leading-[72px] capitalize mb-4">
          Terms of Service
        </span>
        <span className="text-lg tablet:text-2xl leading-[27px] tablet:leading-9 mb-4">
          <span className="font-bold">1. Introduction</span>
          Welcome to the "Caribbean Weather" app, a service provided by App
          Banton Studios Ltd. ("we", "us", or "our"). Our app offers
          minimalistic weather data, funny weather commentary in creolized
          English, and timely weather alerts, primarily serving Caribbean
          islanders and the diaspora around the world.
        </span>
        <span className="text-lg tablet:text-2xl leading-[27px] tablet:leading-9 mb-[46px]">
          <span className="font-bold">2. Acceptance of Terms</span>
          By accessing or using our app, you agree to be bound by these Terms of
          Service ("Terms") and our Privacy Policy. If you do not agree to these
          Terms, you should not use our app. These Terms apply to all users of
          the app, including without limitation users who are browsers, vendors,
          customers, merchants, and contributors of content. 3. Description of
          Services The "Caribbean Weather" app provides users with weather
          forecasts, funny weather commentary tailored to the Caribbean culture,
          and timely weather alerts. The app is designed to be user-friendly,
          providing weather information without clutter and fuss. 4.
          Intellectual Property Rights All contents of the app, including but
          not limited to text, graphics, logos, images, and software, are the
          property of App Banton Studios Ltd. or its licensors and are protected
          by Trinidad and Tobago and international copyright laws. 5. Conduct
          and Obligation You agree to use the app only for lawful purposes and
          in a way that does not infringe the rights of, restrict, or inhibit
          anyone else's use and enjoyment of the app.
        </span>
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
