import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import { changeNumber, changeNumberAsync } from '../slice/ExampleSlice';
import XFButton from '../components/Core/XFButton';

interface ExampleRouteProps {}

const ExampleRoute: React.FC<ExampleRouteProps> = () => {
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.example.id);

  return (
    <div>
      <p>Hello</p>
      <p>Current ID = {id}</p>
      <XFButton
        variant='primary'
        onClick={() => dispatch(changeNumber(id + 1))}
      >
        Add
      </XFButton>
      <XFButton
        variant='secondary'
        onClick={() => dispatch(changeNumber(id - 1))}
      >
        Subtract
      </XFButton>
      <XFButton
        variant='primary'
        onClick={() => dispatch(changeNumberAsync(id + 1))}
      >
        Add
      </XFButton>
      <XFButton
        variant='secondary'
        onClick={() => dispatch(changeNumberAsync(id - 1))}
      >
        Subtract
      </XFButton>
    </div>
  );
};

export default ExampleRoute;
