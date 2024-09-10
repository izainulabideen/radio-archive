import { useFontConfig } from "../../context/FontProvider";

function ProductHero({ data }: any) {
  const { fontConfig } = useFontConfig();
  return (
    <>
      <div className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10">
        <img
          src={`${import.meta.env.BASE_URL}${data?.imageUrl || '/placeholder.webp'}`}
          alt={data?.title || ''}
          width={400}
          height={400}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="min-h-[480px] px-4 md:px-10 relative z-40 h-full flex flex-col justify-end items-start text-center p-6">
          <div className="bg-color2 text-left p-4 rounded-xl max-w-md">
            <span className="bg-color1 p-2 rounded-md text-xs">
              By {data?.author}
            </span>
            <h1 className="text-color1 sm:text-3xl text-2xl font-bold mt-6" style={{fontFamily: `${fontConfig?.specificFont.name}`}}>
              {data?.title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductHero;
