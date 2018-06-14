module.exports = class DirectorCardBuilder {
  constructPlatinumCard (builder) {
    builder.reset()
    builder.withBenefit('extra point')
    return builder.build()
  }
}
