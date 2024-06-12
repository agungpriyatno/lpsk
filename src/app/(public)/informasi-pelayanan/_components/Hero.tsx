import Image from "next/image";

type HeroProps = {
  title: string;
  description?: string;
};

const Hero = ({ title, description }: HeroProps) => {
  return (
    <div className="h-[400px] w-full bg-background">
      <div className=" flex w-full h-full justify-center place-items-center relative">
        <div className=" absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-5 justify-center place-items-center bg-primary">
          <div className=" relative">
            <Image
              src={"/images/logo-lg.png"}
              alt=""
              height={150}
              width={150}
              sizes="100vh"
            />
          </div>
          <h1 className=" text-3xl font-bold text-slate-100">
            {title}
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export { Hero };
