describe('app login flow', function () {
  var loginUrl, homeUrl, name

  beforeAll(() => {
    browser.waitForAngularEnabled(false)
    browser.get('/')
    homeUrl = browser.getCurrentUrl()
  }
  )

  it('Check homeUrl', function () {
    expect(homeUrl).toBe('http://localhost:8080/')
  })

  it('Check title', function () {
    // Can be considered to be beforeAll, which Protractor lacks.
    var title = browser.getTitle()
    expect(title).toBe('task04')
  })

  it('Check empty search', function () {
    $('#inputSearch').sendKeys('')

    $('#SearchButton').click()
    browser.sleep(1000 * 1)
    var errDiv = $('div.FilmErrorBoundary')
    expect(errDiv.getText()).toContain('Пустой поиск')
  })

  it('Check not empty search', function () {
    $('#inputSearch').sendKeys('test')

    $('#SearchButton').click()
    browser.sleep(1000 * 1)
    var filmList = element.all(by.css('.Film'))
    filmList.then(function (items) {
      expect(items.length).toBe(4)
    })
  })
})
