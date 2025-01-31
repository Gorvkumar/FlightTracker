import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Plane, Clock, MapPin, Terminal } from 'lucide-react';
import { Flight } from '../types/flight';
import { getFlight } from '../api/flightApi';
import { FlightStatusBadge } from './FlightStatusBadge';
import Footer from './Footer';
import Navbar from './Navbar';
import { FlightBoard } from './FlightBoard';


export function FlightDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [flight, setFlight] = useState<Flight | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlightDetail = async () => {
      if (!id) return;
      try {
        const data = await getFlight(id);
        setFlight(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch flight details');
      } finally {
        setLoading(false);
      }
    };

    fetchFlightDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <Clock className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading flight details...</p>
        </div>
      </div>
    );
  }

  if (error || !flight) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-red-50 p-6 rounded-lg shadow-sm">
            <p className="text-red-700 mb-4">{error || 'Flight not found'}</p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center text-red-700 hover:text-red-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Flight Board
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/FlightBoard')}
          className=" w-full flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 "
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Flight Board
        </button>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        Flight {flight.flightNumber}
                      </h1>
                      <p className="text-gray-500">{flight.airline}</p>
                    </div>
                  </div>
                  <FlightStatusBadge status={flight.status} />
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Route Information</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm font-medium text-gray-500">Origin</span>
                        </div>
                        <p className="text-gray-900">{flight.origin}</p>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm font-medium text-gray-500">Destination</span>
                        </div>
                        <p className="text-gray-900">{flight.destination}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Time Information</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Clock className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm font-medium text-gray-500">Scheduled Departure</span>
                        </div>
                        <p className="text-gray-900">
                          {format(new Date(flight.departureTime), 'PPpp')}
                        </p>
                      </div>
                      {flight.actualDeparture && (
                        <div>
                          <div className="flex items-center mb-2">
                            <Clock className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm font-medium text-gray-500">Actual Departure</span>
                          </div>
                          <p className="text-gray-900">
                            {format(new Date(flight.actualDeparture), 'PPpp')}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {(flight.gate || flight.terminal) && (
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Terminal Information</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {flight.terminal && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Terminal className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm font-medium text-gray-500">Terminal</span>
                          </div>
                          <p className="text-gray-900">{flight.terminal}</p>
                        </div>
                      )}
                      {flight.gate && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Terminal className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm font-medium text-gray-500">Gate</span>
                          </div>
                          <p className="text-gray-900">{flight.gate}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Flight Path</h2>
                <div className="map-container">
                  <div className="flight-path"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Plane className="w-8 h-8 text-blue-500 transform -rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}