
const PetGroomingSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-yellow-100 via-white to-black-100 p-10 md:p-16 rounded-3xl shadow-xl overflow-hidden">
      {/* Left Side - Description */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
        <h2 className="text-4xl font-extrabold text-grey-800 mb-6 leading-tight">
          Pamper Your Pet with <span className="text-yellow-500">Professional Grooming</span>
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          We provide gentle, expert grooming services to keep your furry friends clean, healthy, and happy. Our services include:
        </p>
        <ul className="list-disc pl-6 text-gray-600 text-base space-y-2">
          <li>Luxury Bath & Brush</li>
          <li>Custom Haircuts & Styling</li>
          <li>Painless Nail Clipping</li>
          <li>Ear Cleaning & Teeth Brushing</li>
          <li>Anti-Flea & Tick Treatment</li>
          <li>Pet Spa & Aroma Therapy</li>
        </ul>
       
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://cdn.shopify.com/s/files/1/0259/9626/3490/files/dog-grooming-1.png?v=1665519040"
          alt="Pet Grooming"
          className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
        />
      </div>
    </div>
  );
};



export default PetGroomingSection;
