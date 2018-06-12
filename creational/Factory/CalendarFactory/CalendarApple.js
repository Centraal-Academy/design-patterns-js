const Calendar = require('./Calendar')
module.exports = class AppleCalendar extends Calendar {
  constructor (calendarInfo) {
    super(calendarInfo.title, calendarInfo.description)
  }
}
