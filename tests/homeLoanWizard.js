
var fieldData = require('../testAssets/homeLoanWizardArray')

var fieldDataInvalid = require('../testAssets/homeLoanWizardInvalidArray')

var homeLoanWiz = {}

var navigateThroughSite = (object, data) => {
    object
        .click("@getStarted")

        .setValue("@loanType", data.loanType)
        .setValue("@propertyTypes", data.propertyTypes)
        .click("@nextButton")

        .setValue("@cityName", data.cityName)
        .click("@nextButton")

        .click("@primaryHome")

        .click("@yesButton")

        .click("@yesButton")

        .setValue("@purchasePrice", data.purchasePrice)
        .setValue("@downPayment", data.downPayment)
        .click("@nextButton")

        .click("@creditScore")

        .click("@bankruptcy")

        .setValue("@addressOne", data.addressOne)
        .setValue("@addressThree", data.addressThree)
        .click("@nextButton")

        .setValue("@firstName", data.firstName)
        .setValue("@lastName", data.lastName)
        .setValue("@email", data.email)
        .click("@nextButton")

        .verify.containsText("@overviewName", data.overviewName)
        .verify.containsText("@overviewEmail", data.overviewEmail)
        .verify.containsText("@overviewLoanType", data.overviewLoanType)
        .verify.containsText("@overviewPropertyType", data.overviewPropertyType)
        .verify.containsText("@overviewCity", data.overviewCity)
        .verify.containsText("@overviewNameLoanType", data.overviewNameLoanType)
        .verify.containsText("@overviewFoundHome", data.overviewFoundHome)
        .verify.containsText("@overviewAgent", data.overviewAgent)
        .verify.containsText("@overviewPrice", data.overviewPrice)
        .verify.containsText("@overviewDownPayment", data.overviewDownPayment)
        .verify.containsText("@overviewCreditScore", data.overviewCreditScore)
        .verify.containsText("@overviewBankruptcy", data.overviewBankruptcy)
        .verify.containsText("@overviewAddressOne", data.overviewAddressOne)
        .verify.containsText("@overviewAddressThree", data.overviewAddressThree)

        .click("@restartButton")
}

module.exports = {
    beforeEach: browser => {
        homeLoanWiz = browser.page.homeLoanWizardPage()
        homeLoanWiz.navigate()
    },
    after: browser => {
        homeLoanWiz.end()
    },

    'Test 1 - Home Loan Wizard Double Run Through': browser => {

        fieldData.forEach(test => {
            navigateThroughSite(homeLoanWiz, test)
        })
           
    },

    'Test 2 - Purchase Price and Down Payment Fields': browser => {

        fieldDataInvalid.forEach(test => {
            homeLoanWiz
                .money(test)
        })

    },

}