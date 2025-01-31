import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const routes = [
  {
    from: 'New York (JFK)',
    to: 'London (LHR)',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: '$299'
  },
  {
    from: 'Los Angeles (LAX)',
    to: 'Tokyo (HND)',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: '$499'
  },
  {
    from: 'Dubai (DXB)',
    to: 'Paris (CDG)',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: '$399'
  }
];

const PopularRoutes = () => {
    const navigate = useNavigate();
    const handlebooking = () =>{
        navigate('/contact')
    }
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={route.image}
                alt={`${route.from} to ${route.to}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">From</p>
                    <p className="font-semibold">{route.from}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-600 mx-4" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">To</p>
                    <p className="font-semibold">{route.to}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{route.price}</span>
                  <button onClick={handlebooking} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularRoutes;