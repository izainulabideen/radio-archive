import Content from "../Content";

function ProductContent({ data }: { data: string }) {

  return (
    <div className="max-w-3xl">
      <div className="px-4 md:px-10 py-12">
        <Content data={data} />
      </div>
    </div>
  );
}

export default ProductContent;
