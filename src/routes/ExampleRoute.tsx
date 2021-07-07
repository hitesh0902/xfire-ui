import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootState } from '../types';
import { changeNumber, changeNumberAsync } from '../slice/ExampleSlice';
import XFButton from '../components/Core/XFButton';
import XFSelectField from '../components/Core/XFSelectField';
import XFCheckbox from '../components/Core/XFCheckbox';
import XFTextField from '../components/Core/XFTextField';
import XFRadioButton from '../components/Core/XFRadioButton';
import XFControlledTextField from '../components/Core/XFControlledTextField';

interface ExampleRouteProps {}

const ExampleRoute: React.FC<ExampleRouteProps> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const [name, setName] = useState('No Name');

  const [sport, setSport] = useState('Nothing');

  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.example.id);

  const setNameEvent = (event: any) => {
    setName(event.target.value);
  };

  const sportsSelected = (event: any) => {
    setSport(event.target.value);
  };

  const onSubmit = handleSubmit((data) => console.log('[data]', data));

  console.log('[errors]', errors);

  return (
    <div>
      <p>Hello</p>
      <p>My name is {name}</p>
      <p>My Fav sport is {sport}</p>
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
          { label: 'Label1', value: 'One' },
          { label: 'Label2', value: 'Two' },
          { label: 'Label3', value: 'Three' },
          { label: 'Label4', value: 'Four', disabled: true },
        ]}
        onChange={(e) => {
          console.log(e.target.value + ' ' + e.target.checked);
        }}
      />
      <XFTextField
        label='name'
        placeHolder='Enter your name'
        onChange={setNameEvent}
      />
      <XFRadioButton
        groupName='sports'
        values={['football', 'basketball', 'cricket', 'volleyball']}
        onChange={sportsSelected}
      />
      <div className='mt-5 max-w-xs'>
        <form onSubmit={onSubmit}>
          <XFControlledTextField
            control={control}
            errors={errors}
            name='example'
            label='Example TextField'
            placeholder='Example TextField'
            rules={{
              minLength: {
                value: 6,
                message: 'Minimum length should be 6',
              },
              required: 'Is Required',
            }}
          />
          <div className='mt-3'>
            <input type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExampleRoute;
