var moneyCommands = {
    money: function (data) {
        this
            .click("@getStarted")
            .click("@nextButton")
            .click("@nextButton")
            .click("@primaryHome")
            .click("@yesButton")
            .click("@yesButton")

            .verify.urlEquals('http://localhost:3000/#/wSix', 'VERIFIED: "Purchase Price" and "Down Payment" page: http://localhost:3000/#/wSix')
            .setValue("@purchasePrice", data.purchasePrice)
            .verify.value("@purchasePrice", data.purchasePrice, "VERIFIED: The value of the 'Purchase Price' field equals: " + data.purchasePrice)
            .setValue("@downPayment", data.downPayment)
            .verify.value("@downPayment", data.downPayment, "VERIFIED: The value of the 'Down Payment' field equals: " + data.downPayment)
            .click("@nextButton")

            .click("@creditScore")
            .click("@bankruptcy")
            .click("@nextButton")
            .click("@nextButton")

            .verify.containsText("@overviewPrice", data.overviewPrice, "BUG: Characters other than numbers can be submitted in the 'Purchase Price' field: " + data.overviewPrice)
            .verify.containsText("@overviewDownPayment", data.overviewDownPayment, "BUG: Characters other than numbers can be submitted in the 'Down Payment' field: " + data.overviewDownPayment)

            .click("@restartButton")

        return this
    }
}

module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [moneyCommands],
    elements: {
        getStarted: {
            selector: "//button[@name='nextButton']",
            locateStrategy: 'xpath'
        },
        loanType: {
            selector: "//select[@id='loanTypes']",
            locateStrategy: 'xpath'
        },
        propertyTypes: {
            selector: "//select[@id='propertyTypes']",
            locateStrategy: 'xpath'
        },
        nextButton: {
            selector: "//button[@name='nextButton']",
            locateStrategy: 'xpath'
        },
        cityName: {
            selector: "//input[@placeholder='city name']",
            locateStrategy: 'xpath'
        },
        primaryHome: {
            selector: "//button[contains(text(),'Primary Home')]",
            locateStrategy: 'xpath'
        },
        yesButton: {
            selector: "//button[@name='yesButton']",
            locateStrategy: 'xpath'
        },
        purchasePrice: {
            selector: "//input[1]",
            locateStrategy: 'xpath'
        },
        downPayment: {
            selector: "//input[2]",
            locateStrategy: 'xpath'
        },
        creditScore: {
            selector: "//button[contains(text(),'Excellent')]",
            locateStrategy: 'xpath'
        },
        bankruptcy: {
            selector: "//button[contains(text(),'No')]",
            locateStrategy: 'xpath'
        },
        addressOne: {
            selector: "//input[@id='addressOne']",
            locateStrategy: 'xpath'
        },
        addressThree: {
            selector: "//input[@id='addressThree']",
            locateStrategy: 'xpath'
        },
        firstName: {
            selector: "//input[@id='first']",
            locateStrategy: 'xpath'
        },
        lastName: {
            selector: "//input[@id='last']",
            locateStrategy: 'xpath'
        },
        email: {
            selector: "//input[@id='email']",
            locateStrategy: 'xpath'
        },
        restartButton: {
            selector: "//button[@name='restartButton']",
            locateStrategy: 'xpath'
        },
        overviewName: {
            selector: "//div[contains(text(),'Name:')]",
            locateStrategy: 'xpath'
        },
        overviewEmail: {
            selector: "//div[contains(text(),'Email:')]",
            locateStrategy: 'xpath'
        },
        overviewLoanType: {
            selector: "//div[contains(text(),'What type of loan will you be needing?:')]",
            locateStrategy: 'xpath'
        },
        overviewPropertyType: {
            selector: "//div[contains(text(),'What type of property are you purchasing?:')]",
            locateStrategy: 'xpath'
        },
        overviewCity: {
            selector: "//div[contains(text(),'In what city will the property be located?:')]",
            locateStrategy: 'xpath'
        },
        overviewNameLoanType: {
            selector: "//div[contains(text(),'Type of property the loan is applied to:')]",
            locateStrategy: 'xpath'
        },
        overviewFoundHome: {
            selector: "//div[contains(text(),'Have you already found your new home?:')]",
            locateStrategy: 'xpath'
        },
        overviewAgent: {
            selector: "//div[contains(text(),'Currently working with a real estate agent?:')]",
            locateStrategy: 'xpath'
        },
        overviewPrice: {
            selector: "//div[contains(text(),'Estimated purchase price of the home:')]",
            locateStrategy: 'xpath'
        },
        overviewDownPayment: {
            selector: "//div[contains(text(),'Down payment:')]",
            locateStrategy: 'xpath'
        },
        overviewCreditScore: {
            selector: "//div[contains(text(),'Credit score:')]",
            locateStrategy: 'xpath'
        },
        overviewBankruptcy: {
            selector: "//div[contains(text(),'Bankruptcy history:')]",
            locateStrategy: 'xpath'
        },
        overviewAddressOne: {
            selector: "//span[@id='addressOne']",
            locateStrategy: 'xpath'
        },
        overviewAddressThree: {
            selector: "//span[@id='addressThree']",
            locateStrategy: 'xpath'
        }
    }
}
