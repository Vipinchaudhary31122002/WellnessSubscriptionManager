import React from 'react';
import { Calendar as CalendarIcon, Clock, Users, MapPin } from 'lucide-react';

const Schedule = () => {
  const classes = [
    {
      name: 'Morning Yoga',
      instructor: 'Emma Wilson',
      time: '08:00 AM',
      duration: '60 min',
      capacity: 12,
      location: 'Studio A',
      date: 'Today'
    },
    {
      name: 'HIIT Training',
      instructor: 'Mike Johnson',
      time: '10:00 AM',
      duration: '45 min',
      capacity: 8,
      location: 'Studio B',
      date: 'Today'
    },
    {
      name: 'Pilates',
      instructor: 'Sarah Chen',
      time: '02:00 PM',
      duration: '50 min',
      capacity: 10,
      location: 'Studio A',
      date: 'Today'
    },
    {
      name: 'Strength Training',
      instructor: 'Alex Thompson',
      time: '04:00 PM',
      duration: '60 min',
      capacity: 6,
      location: 'Studio C',
      date: 'Today'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Class Schedule</h1>
            <p className="text-gray-600">Book your next fitness class</p>
          </div>
          <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
            View Calendar
          </button>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{classItem.name}</h3>
                <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  {classItem.date}
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{classItem.time} ({classItem.duration})</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Instructor: {classItem.instructor}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{classItem.location}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Capacity: {classItem.capacity} spots
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule; 