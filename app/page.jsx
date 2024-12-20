// components

"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// Dynamic Imports (코드 스플리팅을 통해 초기 로드 시간을 줄임)
const Stats = dynamic(() => import("../components/Stats"), {
  ssr: false,
});
const SwiperComponent = dynamic(() => import("../components/Swiper"), {
  ssr: false,
});
const ActivitySwiper = dynamic(() => import("../components/ActivitySwiper"), {
  ssr: false,
});

const slides = [
  {
    image: "/images/Story0.jpg",
    link: "https://www.instagram.com/p/DBVqxdSzvDU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "story 0",
  },
  {
    image: "/images/Story1.jpg",
    link: "https://www.instagram.com/p/C99F5w3BJ20/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "story 1",
  },
  {
    image: "/images/Story2.jpg",
    link: "https://www.instagram.com/p/C99D2Vuhmc2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "story 2",
  },
  {
    image: "/images/Story3.jpg",
    link: "https://www.instagram.com/p/C9we_zOBqW8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "story 3",
  },
  {
    image: "/images/Story4.jpg",
    link: "https://www.instagram.com/p/Ck2-X5yBVom/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "story 4",
  },
  {
    image: "/images/Story5.jpg",
    link: "https://www.instagram.com/p/C9skQSDzUuv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "story 5",
  },
  {
    image: "/images/Story6.jpg",
    link: "https://www.instagram.com/p/C9skcPdTEV0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "story 6",
  },
  {
    image: "/images/Story7.jpg",
    link: "https://www.instagram.com/p/Ch6_UOSJJ3m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "story 7",
  },
];

const Home = () => {
  return (
    <section className="mb-16 xl:mb-36 relative">
      {/* banner */}
      <div className="h-[390px] xl:h-[620px] bg-[url('/images/Home_bg.webp')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        <div className="container mx-auto h-full z-20 relative">
          <div className="pt-[140px] xl:pt-[220px] relative z-30">
            <span className="text-white xl:text-[20px] font-semibold">
              2024
            </span>
            <h1 className="text-white mt-[15px] xl:mt-[19px] font-bold text-4xl mb-[22px] xl:text-[65px] xl:mb-[22px] xl:leading-tight">
              민족사관고등학교 <br /> 옹달샘
            </h1>
            <p className="text-white xl:text-[20px]">
              국내 유일 적정기술 해외봉사 동아리
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto h-full">
        {/* introduction */}
        <div className="mt-[60px] mb-[20px] xl:mt-[100px] xl:mb-[40px] w-full">
          <h2 className="font-semibold text-[20px] text-left xl:text-center xl:text-[35px] xl:font-bold">
            옹달샘의 특별한 <span className="text-primary">봉사 이야기</span>
          </h2>

          <div className="flex flex-col xl:flex-row justify-center items-start xl:items-end w-full ">
            <p className="font-light text-gray-600 text-[16px] mt-2 text-left xl:text-left xl:text-[18px] xl:font-normal">
              작은 노력이 모여 비로소 <br className="sm:hidden"></br> 변화가
              시작될 것이라 믿습니다.
            </p>
            <a href="https://www.instagram.com/ongdalsam.kmla?igsh=MWNxZXhxdzBjZ2xxZQ==">
              <p className="mt-2 text-gray-600 sm:hidden">
                인스타그램 팔로우 -
              </p>
            </a>
          </div>
        </div>

        {/* Swiper Component */}
        <SwiperComponent slides={slides} height="300px" />

        {/* numbers */}
        <div className="w-full mt-[40px] xl:mt-[140px]">
          <h2 className="font-semibold text-[20px] text-left xl:text-center xl:text-[35px] xl:font-bold">
            옹달샘은?
          </h2>
          <p className="font-light text-gray-600 text-[16px] mt-2 text-left xl:text-center xl:text-[18px] xl:font-normal">
            민족사관고등학교 학생들이 운영하는
            <br className="sm:hidden"></br>
            <span className="font-semibold"> 적정기술</span> 해외봉사
            동아리입니다.
          </p>

          {/* Lazy loading 적용된 Stats */}
          <Stats />
        </div>

        {/* award */}
        <div className="w-full mt-[70px] xl:mt-[180px] flex flex-col xl:flex-row xl:bg-[#F9DD93] xl:p-6 absolute top-[1600px] xl:top-[1750px] left-0">
          <div className="w-[100%] xl:w-[50%] flex flex-col">
            <h2 className="text-center font-bold text-[20px] xl:text-[25px] py-5 md:hidden">
              수상
            </h2>
            <div className="w-[100%] flex">
              <div className="w-[50%] flex flex-col justify-between items-center text-center">
                <div className="w-[100px] h-[100px]">
                  {/* Lazy loading 적용 */}
                  <Image
                    src="/images/apa.png"
                    alt={`apa philanthropist`}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>{" "}
                <p>
                  APA 선정 2017 올해의 <br></br> 청소년 필란트로피스트
                </p>
              </div>
              <div className="w-[50%] flex flex-col justify-between items-center text-center">
                <div className="w-[100px] h-[100px]">
                  <Image
                    src="/images/prize.png"
                    alt={`prize`}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>{" "}
                <p className="xl:mt-5">
                  2024 <br className="sm:hidden"></br> 전국청소년자원봉사대회{" "}
                  <br></br> 보건복지부 장관상 수상
                </p>
              </div>
            </div>
          </div>

          <div className="w-[100%] xl:w-[50%] flex flex-col xl:mt-0 mt-10">
            <h2 className="text-center font-bold text-[20px] xl:text-[25px] py-5 md:hidden">
              협력
            </h2>
            <div className="w-[100%] flex">
              <div className="w-[50%] flex flex-col justify-between items-center text-center">
                <div className="w-[120px] h-[120px]">
                  <Image
                    src="/images/kia.png"
                    alt={`Kia`}
                    width={120}
                    height={120}
                    loading="lazy"
                  />
                </div>{" "}
                <p>희망친구 기아대책</p>
              </div>
              <div className="w-[50%] flex flex-col justify-between items-center text-center ">
                <div className="w-[120px] h-[120px]">
                  <Image
                    src="/images/koica.png"
                    alt={`Koica`}
                    width={120}
                    height={120}
                    loading="lazy"
                  />
                </div>{" "}
                <p>KOICA 라오스 사무소</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Swiper Component */}
        <ActivitySwiper />

        {/* donation */}
        <div className="w-full mt-[80px] xl:mt-[140px]">
          <h2 className="font-semibold text-[20px] text-left xl:text-center xl:text-[35px] xl:font-bold">
            나에게 맞는 맞춤후원
          </h2>
          <p className="font-light text-gray-600 text-[15px] xs:text-[16px] mt-2 text-left xl:text-center xl:text-[18px] xl:font-normal mb-4 xl:mb-10">
            당신의 소중한 후원으로 세상이 따뜻하게 바뀝니다.
          </p>

          <div className="flex flex-col xl:flex-row gap-5 justify-center">
            {/* Lazy loading 적용된 이미지 */}
            <div className="w-full h-[150px] xl:h-[351px] xl:max-w-[351px] relative">
              <Link href={"/donation"}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-50 z-10 flex justify-center items-center">
                  <h2 className=" z-20 font-bold text-[20px] text-white">
                    일시후원
                  </h2>
                </div>
              </Link>

              <Image
                src="/images/m-donation1.webp"
                alt={`donation 1`}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <div className="w-full h-[150px] xl:h-[351px] xl:max-w-[351px] relative">
              <Link href={"/donation"}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-50 z-10 flex justify-center items-center">
                  <h2 className=" z-20 font-bold text-[20px] text-white">
                    정기후원
                  </h2>
                </div>{" "}
              </Link>

              <Image
                src="/images/m-donation2.jpeg"
                alt={`donation 2`}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <div className="w-full h-[150px] xl:h-[351px] xl:max-w-[351px] relative">
              <Link href={"/donation"}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-50 z-10 flex justify-center items-center">
                  <h2 className=" z-20 font-bold text-[20px] text-white">
                    물품지원
                  </h2>
                </div>{" "}
              </Link>

              <Image
                src="/images/m-donation3.jpeg"
                alt={`donation 3`}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
