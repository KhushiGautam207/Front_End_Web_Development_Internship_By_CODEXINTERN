import React from "react";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#007bff"
        className="w-8 mb-6 inline-block"
        viewBox="0 0 32 32"
      >
        <path d="..." />
      </svg>
    ),
    title: "Customization",
    description: "Tailor our product to suit your needs.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#007bff"
        className="w-8 mb-6 inline-block"
        viewBox="0 0 682.667 682.667"
      >
        <path d="..." />
      </svg>
    ),
    title: "Security",
    description: "Your data is protected by the latest security measures.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#007bff"
        className="w-8 mb-6 inline-block"
        viewBox="0 0 512.001 512.001"
      >
        <path d="..." />
      </svg>
    ),
    title: "Support",
    description: "24/7 customer support for all your inquiries.",
  },
  // Add more features as needed
];

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center">
      {icon}
      <h3 className="text-gray-800 text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function Feature() {
  return (
    <div className="max-w-6xl mx-auto font-[sans-serif]">
      <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-16">
        Discover Our Exclusive Features
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Feature;
