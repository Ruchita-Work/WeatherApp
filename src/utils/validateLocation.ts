export const validateLocation = (location: string) => {
    const valid = /^[a-zA-Z\s]+$/.test(location);
    if (!valid) {
      throw new Error('Invalid location. Please enter a valid city name.');
    }
  };
  