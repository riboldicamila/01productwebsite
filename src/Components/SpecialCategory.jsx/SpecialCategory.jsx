import { useState, useEffect } from 'react';

const categories = [
  {
    id: 1,
    title: 'Pottery',
    image: '/api/placeholder/400/500',
  },
  {
    id: 2,
    title: 'Plate',
    image: '/api/placeholder/400/500',
  },
  {
    id: 3,
    title: 'Vases',
    image: '/api/placeholder/400/500',
  },
  {
    id: 4,
    title: 'Pottery',
    image: '/api/placeholder/400/500',
  },
  {
    id: 5,
    title: 'Plate',
    image: '/api/placeholder/400/500',
  },
];

const CategoryShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 3 >= categories.length ? 0 : prevIndex + 3
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleCategories = categories.slice(currentIndex, currentIndex + 3);
  while (visibleCategories.length < 3) {
    visibleCategories.push(...categories.slice(0, 3 - visibleCategories.length));
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-gray-900">Exclusive</span>
          <span className="text-gray-500 ml-2">Category</span>
        </h2>
        <p className="text-gray-600">
          Discover our fantastic early booking discounts & start planning your journey.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {visibleCategories.map((category) => (
            <div 
              key={category.id}
              className="w-1/3 flex-shrink-0"
            >
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white px-6 py-2 rounded-full text-gray-800 font-medium">
                    {category.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;