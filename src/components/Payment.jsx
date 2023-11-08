import React from 'react';
import { PaystackButton } from 'react-paystack';

const publicKey = 'pk_test_f9fd3ddf5826d25939a3774ce57402d95fc696ad';

const config = {
  reference: (new Date()).getTime(),
  email: 'user@example.com',
  amount: 20000,
  publicKey: publicKey,
};

const Payment = () => {
  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log('Payment closed');
  };

  return (
    <PaystackButton
      text="Make Payment"
      onSuccess={onSuccess}
      onClose={onClose}
      {...config}
    />
  );
};



export default Payment;