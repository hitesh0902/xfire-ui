import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import { changeNumber, changeNumberAsync } from '../slice/ExampleSlice';
import XFButton from '../components/Core/XFButton';
import XFSelectField from '../components/Core/XFSelectField';
import XFCheckbox from '../components/Core/XFCheckbox';

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
      <XFSelectField
        options={[
          { label: 'Label1', value: 'value1' },
          { label: 'Label2', value: 'value2' },
          { label: 'Label3', value: 'value3' },
          { label: 'Label4', value: 'value4', disabled: true },
        ]}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <XFCheckbox
        options={[
          { label: 'Label1', value: 'value1' },
          { label: 'Label2', value: 'value2' },
          { label: 'Label3', value: 'value3' },
          { label: 'Label4', value: 'value4', disabled: true },
        ]}
        onChange={(e) => {
          console.log(e.target.value, e.target.checked);
        }}
      />
    </div>
  );
};

export default ExampleRoute;
