import { Image } from "@chakra-ui/react";

export const Landing = () => {
  return (
    <section
      className="relative w-full h-[800px] mt-16 my-auto bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/beverage-brown-caffeine.jpg')]">
      <div className="absolute top-[46%] left-[43%] translate-x-[-50%] translate-y-[-50%]">
        <Image src="logo_transparent.png" className="w-[40vw] h-auto" alt="logo"/>
      </div>
      <div
        className="absolute top-[56%] left-[47%] translate-x-[-50%] translate-y-[-50%] text-[1.2em] text-[#503]">合同会社アーサーズ
      </div>
      <div
        className="absolute top-[62%] left-[47%] translate-x-[-50%] translate-y-[-50%] text-[#503]">WEBサービスを開発しています。
      </div>
    </section>
  )
}
