import { useContext } from 'react';
import { Switch } from '@headlessui/react';
import { AvailabilityContext } from '../context/AvailabilityContext';

const AvailabilityToggle = () => {
  const { isAvailable, toggleAvailability } = useContext(AvailabilityContext);

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-700 dark:text-darkText">Availability Status:</span>
      <Switch
        checked={isAvailable}
        onChange={toggleAvailability}
        className={`${isAvailable ? 'bg-green-500' : 'bg-red-500'}
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
      >
        <span className="sr-only">Toggle availability</span>
        <span
          className={`${isAvailable ? 'translate-x-6' : 'translate-x-1'}
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </Switch>
      <span className={`text-sm font-medium ${isAvailable ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
        {isAvailable ? 'Open to Hiring' : 'Not Available'}
      </span>
    </div>
  );
};

export default AvailabilityToggle;