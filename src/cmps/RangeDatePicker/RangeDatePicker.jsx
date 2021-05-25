import React from 'react';
// import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// import styled from 'styled-components';

import './RangeDatePicker.scss';

import { DateRangePicker } from 'react-dates';
import { useState } from 'react';

export const RangeDatePicker = ({
	handleFocusChange,
	focusedInput,
	endDate,
	startDate,
	handleDatesChange,
	classNames,
}) => {
	const BLOCKED_DATES = [
		// moment().add(10, 'days'),
		// moment().add(11, 'days'),
		// moment().add(12, 'days'),
	];

	// const [startDate, setStartDate] = useState(moment());
	// const [endDate, setEndDate] = useState(moment().add(1, 'days'));
	// const [focusedInput, setFocusedInput] = useState('startDate');

	const numMonths = 2;
	const minimumNights = 1;
	const dateFormat = 'DD/MM/YYYY';

	// const handleDatesChange = ({ startDate, endDate }) => {
	// 	setStartDate(startDate);
	// 	setEndDate(endDate);
	// };

	// const handleFocusChange = (focusedInput) => {
	//     console.log(focusedInput);
	// 	setFocusedInput(focusedInput);
	// };

	const handleIsDayBlocked = (day) => {
		return BLOCKED_DATES.filter((d) => d.isSame(day, 'day')).length > 0;
	};

	return (
		<div className={classNames}>
				<DateRangePicker
					startDate={startDate}
					startDateId='unique_start_date_id'
					endDate={endDate}
					endDateId='unique_end_date_id'
					onDatesChange={handleDatesChange}
					focusedInput={focusedInput}
					onFocusChange={handleFocusChange}
					displayFormat={dateFormat}
					hideKeyboardShortcutsPanel={true}
					numberOfMonths={numMonths || 2}
					minimumNights={minimumNights}
					isDayBlocked={handleIsDayBlocked}
				/>{' '}
		</div>
	);
};

// const StyledDatePickerWrapper = styled.div`
// 	.DateRangePickerInput,
// 	.DateRangePickerInput_1,
// 	.DateRangePickerInput__withBorder,
// 	.DateRangePickerInput__withBorder_2 {
// 	}

// 	.DateRangePickerInput_arrow_svg,
// 	.DateRangePickerInput_arrow_svg_1 {
// 		display: none;
// 	}

// 	.DateInput, .DateInput_1 {
// 		width: 1px;
// 		height: 1px;
// 		overflow:hidden;
// 	}

// 	.DateRangePickerInput {
// 		background-color:#fff0;
// 	}

// 	.DateRangePickerInput__withBorder{
// 		border: none;
// 	}

// 	.DateInput_fang,
// 	.DateInput_fang_1 {
// 		display: none;
// 	}
// `;

// .DateInput {
// 	opacity: 0
// }
// .DateInput_1 {
// 	opacity: 0
// }
