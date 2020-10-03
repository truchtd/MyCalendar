import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar } from '@fullcalendar/core';


function MyCalendar() {

	document.addEventListener('DOMContentLoaded', function () {
		let calendarEl = document.getElementById('calendar');

		let calendar = new Calendar(calendarEl, {
			googleCalendarApiKey: '<YOUR API KEY>',
			eventSources: [
				{
					googleCalendarId: 'abcd1234@group.calendar.google.com'
				},
				{
					googleCalendarId: 'efgh5678@group.calendar.google.com',
					className: 'nice-event'
				}
			]
		});

		calendar.render();
	});

	return (
		<FullCalendar
			plugins={[dayGridPlugin]}
			initialView="dayGridMonth"
			weekends={false}
			eventContent={renderEventContent}
			events={[
				{ title: 'event 1', date: '2020-10-01' },
				{ title: 'event 2', date: '2020-10-02' }
			]}
		/>
		// <div id="calendar"></div>
	);

	function renderEventContent(eventInfo) {
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<i>{eventInfo.event.title}</i>
			</>
		)
	}

}

export default MyCalendar;