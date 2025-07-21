import { MapPinIcon, BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/outline';

export const OfficeDetails = () => {
  return (
    <section className="bg-gray-900 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Registered Address */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <BuildingOfficeIcon className="w-6 h-6 mr-3 text-green-400" />
              Registered Address
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    201, 1st Floor, Kale Business Center, Al Bustan Building,<br />
                    Al Sadd, Doha, Qatar
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-green-400 font-medium">CR:</span>
                <span className="text-gray-300">UE991MH-1984PC032639</span>
              </div>
            </div>
          </div>

          {/* Nodal Officer Details */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <UserIcon className="w-6 h-6 mr-3 text-green-400" />
              Nodal Officer Details
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-green-400 font-medium">Email:</p>
                <a 
                  href="mailto:nodal.officer@madadfintech.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  nodal.officer@madadfintech.com
                </a>
              </div>
              
              <div>
                <p className="text-green-400 font-medium">Contact Number:</p>
                <a 
                  href="tel:+97430390833"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +974 3039 0833
                </a>
                <p className="text-gray-400 text-sm">Except on Fri, Sat & Public Holidays</p>
              </div>
              
              <div>
                <p className="text-green-400 font-medium">Officer Name:</p>
                <p className="text-gray-300">Mr. Abdul Aziz Hamdan</p>
              </div>
              
              <div>
                <p className="text-green-400 font-medium">Officer Address:</p>
                <p className="text-gray-300">
                  1st Floor, 201, Kale Business Center, Al Bustan Building, Al Sadd, Doha, Qatar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
