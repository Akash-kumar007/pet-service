import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productName } = useParams();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">{productName}</h1>
      <p>This page will show more details about {productName}.</p>
    </div>
  );
};

export default ProductDetail;
