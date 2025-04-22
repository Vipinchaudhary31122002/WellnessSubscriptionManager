import React from 'react';
import { Check } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: 'month',
      features: [
        'Basic workout tracking',
        '5 class bookings per month',
        'Basic nutrition tracking',
        'Email support',
        'Mobile app access'
      ],
      color: 'emerald'
    },
    {
      name: 'Pro',
      price: '$49',
      period: 'month',
      features: [
        'Advanced workout tracking',
        'Unlimited class bookings',
        'Advanced nutrition tracking',
        'Priority email support',
        'Mobile app access',
        'Personalized workout plans',
        'Progress analytics'
      ],
      color: 'blue',
      popular: true
    },
    {
      name: 'Elite',
      price: '$79',
      period: 'month',
      features: [
        'Everything in Pro',
        '1-on-1 coaching sessions',
        'Custom meal plans',
        '24/7 priority support',
        'Advanced analytics',
        'Group fitness classes',
        'Wellness workshops'
      ],
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your wellness journey. All plans include access to our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className={`h-5 w-5 ${
                        plan.color === 'emerald' ? 'text-emerald-500' :
                        plan.color === 'blue' ? 'text-blue-500' :
                        'text-purple-500'
                      } mr-2 flex-shrink-0`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg text-white font-semibold ${
                    plan.color === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-600' :
                    plan.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                    'bg-purple-500 hover:bg-purple-600'
                  } transition-colors duration-200`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans; 