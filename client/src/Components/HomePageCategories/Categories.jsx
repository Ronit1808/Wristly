import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="Categories flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 mx-4 sm:mx-4 py-6 bg-gray-900">
      {/* Men Category */}
      <Link to="/products/1">
        <div className="category-section flex flex-col gap-4 h-96 w-full sm:w-80 md:w-80 mb-4">
          <div className="category-section-heading text-center text-slate-200 font-semibold text-xl sm:text-2xl">
            Men
          </div>
          <div className="category-section-image w-full h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              className="object-cover w-full h-full hover:cursor-pointer"
              src="https://images.pexels.com/photos/1578531/pexels-photo-1578531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Men"
            />
          </div>
        </div>
      </Link>

      {/* Women Category */}
      <Link to="/products/2">
        <div className="category-section flex flex-col gap-4 h-96 w-full sm:w-80 md:w-80 mb-4">
          <div className="category-section-heading text-center text-slate-200 font-semibold text-xl sm:text-2xl">
            Women
          </div>
          <div className="category-section-image w-full h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              className="object-cover w-full h-full hover:cursor-pointer"
              src="https://images.pexels.com/photos/6691699/pexels-photo-6691699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Women"
            />
          </div>
        </div>
      </Link>

      {/* Kids Category */}
      <Link to="/products/3">
        <div className="category-section flex flex-col gap-4 h-96 w-full sm:w-80 md:w-80 mb-4">
          <div className="category-section-heading text-center text-slate-200 font-semibold text-xl sm:text-2xl">
            Kids
          </div>
          <div className="category-section-image w-full h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              className="object-cover w-full h-full hover:cursor-pointer"
              src="https://images.pexels.com/photos/15227231/pexels-photo-15227231/free-photo-of-cute-boy-doing-thumb-s-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Kids"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
