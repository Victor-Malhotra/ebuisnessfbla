import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';

function DateReserve({ dateVisible, data, setData }) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${
        dateVisible
          ? 'shadow-[0px_0px_5000px_5000px_rgba(0,0,0,0.3)]'
          : 'shadow-[0px_0px_5000px_5000px_rgba(0,0,0,0)]'
      } transition-shadow duration-300 text-black`}>
      {dateVisible && (
        <DateRangePicker
          onChange={(item) => setData({ ...data, ...item })}
          showMonthAndYearPickers={false}
          minDate={addDays(new Date(), 0)}
          maxDate={addDays(new Date(), 90)}
          direction='vertical'
          scroll={{ enabled: true }}
          ranges={[data.selection]}
        />
      )}
    </div>
  );
}

export default DateReserve;
