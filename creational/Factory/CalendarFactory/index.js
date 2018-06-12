const CalendarApple = require('./CalendarApple')
const CalendarGoogle = require('./CalendarGoogle')

module.exports = class CalendarFactory {
  create (calendarInfo) {
    let calendar = ''
    switch (calendarInfo.type) {
      case 'apple':
        calendar = new CalendarApple(calendarInfo)
        break
      default:
        calendar = new CalendarGoogle(calendarInfo)
        break
    }
    return calendar
  }
}
