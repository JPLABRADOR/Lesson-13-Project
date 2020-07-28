var homeLoanWiz = {}
var fieldData = require('../testAssets/homeLoanWizardArray')
var fieldDataInvalid = require('../testAssets/homeLoanWizardInvalidArray')

module.exports = {
    beforeEach: browser => {
        homeLoanWiz = browser.page.homeLoanWizardPage()
        homeLoanWiz
            .maximizeWindow()
            .navigate()
    },
    after: browser => {
        homeLoanWiz.end()
    },
    'Test 1 - Home Loan Wizard Double Run Through': browser => {
        fieldData.forEach(test => {
            homeLoanWiz.navigateThroughSite(test)
        })
    },
    'Test 2 - Purchase Price and Down Payment Fields': browser => {
        fieldDataInvalid.forEach(test => {
            homeLoanWiz.purchasePage(test)
        })
    }
}