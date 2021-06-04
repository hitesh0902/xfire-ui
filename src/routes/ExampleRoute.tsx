import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import { changeNumber, changeNumberAsync } from '../slice/ExampleSlice';

interface ExampleRouteProps {}

const ExampleRoute: React.FC<ExampleRouteProps> = () => {
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.example.id);

  return (
    <div>
      <p>Hello</p>
      <p>Current ID = {id}</p>
      <button
        className='border border-gray-500 mx-2 w-[200px]'
        onClick={() => dispatch(changeNumber(id + 1))}
      >
        Add
      </button>
      <button
        className='border border-gray-500 mx-2'
        onClick={() => dispatch(changeNumber(id - 1))}
      >
        Subtract
      </button>
      <button
        className='border border-gray-500 mx-2'
        onClick={() => dispatch(changeNumberAsync(id + 1))}
      >
        Add
      </button>
      <button
        className='border border-gray-500 mx-2'
        onClick={() => dispatch(changeNumberAsync(id - 1))}
      >
        Subtract
      </button>
    </div>
  );
};

export default ExampleRoute;
