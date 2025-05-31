import { PawPrint, ShieldCheck, Truck, PhoneCall } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
    title: "Certified Pet Experts",
    description: "Experienced groomers and vets who truly care for your pet.",
  },
  {
    icon: <PawPrint className="w-10 h-10 text-yellow-500" />,
    title: "Full Grooming Packages",
    description: "Bath, haircut, nail clipping, ear cleaning & more.",
  },
  {
    icon: <Truck className="w-10 h-10 text-yellow-500" />,
    title: "Pick & Drop Available",
    description: "We pick up and drop your pet safely at your doorstep.",
  },
  {
    icon: <PhoneCall className="w-10 h-10 text-yellow-500" />,
    title: "24/7 Support",
    description: "We're always available for pet emergencies or queries.",
  },
];

const PetServiceHighlights = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        🐾 Why Pet Parents Love Us
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              {feature.icon}
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetServiceHighlights;
