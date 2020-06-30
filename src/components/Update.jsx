import React from 'react';
import Navigation from './Navigation';
import UpdateForm from '../containers/UpdateFormContainer';

const update = () => {
  return (
    <>
      <Navigation page='create' />
      <UpdateForm />
    </>
  );
};

export default update;
