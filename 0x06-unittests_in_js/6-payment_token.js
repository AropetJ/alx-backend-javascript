const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return new Promise((resolve) => {
      resolve({ data: 'Successful response from the API' });
    });
  }
  return Promise.reject(new Error('Unsuccessful response from the API'));
};

module.exports = getPaymentTokenFromAPI;
