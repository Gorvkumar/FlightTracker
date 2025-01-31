
import { Flight } from '../types/flight';
import { CheckCircle, Clock, Users, Plane } from 'lucide-react';

interface Props {
  status: Flight['status'];
}

export function FlightStatusBadge({ status }: Props) {
  const getStatusConfig = () => {
    switch (status) {
      case 'On Time':
        return {
          color: 'bg-green-100 text-green-800',
          icon: CheckCircle,
          pulse: false
        };
      case 'Delayed':
        return {
          color: 'bg-red-100 text-red-800',
          icon: Clock,
          pulse: true
        };
      case 'Boarding':
        return {
          color: 'bg-blue-100 text-blue-800',
          icon: Users,
          pulse: true
        };
      case 'Departed':
        return {
          color: 'bg-gray-100 text-gray-800',
          icon: Plane,
          pulse: false
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-800',
          icon: Clock,
          pulse: false
        };
    }
  };

  const { color, icon: Icon, pulse } = getStatusConfig();
  const pulseClass = pulse ? 'pulse' : '';

  return (
    <span className={`status-badge ${color} ${pulseClass} inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`}>
      <Icon className="w-4 h-4 mr-1" />
      {status}
    </span>
  );
}