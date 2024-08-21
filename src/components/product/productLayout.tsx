import { useParams } from "react-router-dom";
import Demo from "../Demo";
import Common from "./Common";
import Product from "./Product";

export default function ProductLayout() {
  const {slug} = useParams();

  return (
    <>
      <Product slug={slug || ''} />
      <div className="max-w-3xl">
        <Common />
      </div>
      <Demo />
    </>
  );
}
