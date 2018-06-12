const ServiceFactory = require('./ServiceFactory')

const factory = ServiceFactory.getFactory('insurance')

const service = factory.createForAutomobile()

service.charge()
