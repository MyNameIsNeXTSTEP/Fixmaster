import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Col, Row } from 'react-bootstrap';
import dayjs, { Dayjs } from 'dayjs';
import styled from 'styled-components';
import { CustomToggle } from '../AccordeonItems/RecordPageAccordion';

const BtnsContainer = styled.div`
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: space-between;
`;

interface IProps {
	onClick: (name?: string, value?: Dayjs | null | undefined) => void,
};

const Calendar = ({onClick}: IProps) => {
	const timeTheCloc = [ '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00' ];
	const [ value, setValue ] = React.useState<Dayjs | null>( dayjs( new Date() ) );
	const btnClick = (el = '') => {
		onClick( el, value );
	};

	return (

		<div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker value={value} onChange={(newValue) => setValue( newValue )}/>
			</LocalizationProvider>

			<BtnsContainer>
				{timeTheCloc.map( el => {
					return (
						<CustomToggle eventKey='0'>
							<Button onClick={() => btnClick( el )} variant='outline-dark'>
								{el}
							</Button>
						</CustomToggle>
					);
				} )}
			</BtnsContainer>
		</div>
	)
		;
};

export default Calendar;