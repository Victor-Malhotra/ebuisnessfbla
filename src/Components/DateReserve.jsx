import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';

function DateReserve() {
  const [data, setData] = useState({
    selection: {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  });
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <DateRangePicker
        onChange={(item) => setData({ ...data, ...item })}
        showMonthAndYearPickers={false}
        minDate={addDays(new Date(), 0)}
        maxDate={addDays(new Date(), 90)}
        direction='vertical'
        scroll={{ enabled: true }}
        ranges={[data.selection]}
      />
    </div>
  );
}

export default DateReserve;
