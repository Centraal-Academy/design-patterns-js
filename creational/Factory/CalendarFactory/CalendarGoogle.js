const Calendar = require('./Calendar')
module.exports = class GoogleCalendar extends Calendar {
  constructor (calendarInfo) {
    super(calendarInfo.title, calendarInfo.description)
  }
}
