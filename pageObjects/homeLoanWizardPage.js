var homeLoanWizardCommands = {
    navigateThroughSite: function (data) {
        this
            // Homepage
            .click("@getStarted")
            // Page One
            .setValue("@loanType", data.loanType)
            .setValue("@propertyTypes", data.propertyTypes)
            .click("@nextButton")
            // Page Two
            .setValue("@cityName", data.cityName)
            .click("@nextButton")
            // Page Three
            .click("@primaryHome")
            // Page Four
            .click("@yesButton")
            // Page Five
            .click("@yesButton")
            // Page Six
            .setValue("@purchasePrice", data.purchasePrice)
            .setValue("@downPayment", data.downPayment)
            .click("@nextButton")
            // Page Seven
            .click("@creditScore")
            // Page Eight
            .click("@bankruptcy")
            // Page Nine
            .setValue("@addressOne", data.addressOne)
            .setValue("@addressThree", data.addressThree)
            .click("@nextButton")
            // Page Ten
            .setValue("@firstName", data.firstName)
            .setValue("@lastName", data.lastName)
            .setValue("@email", data.email)
            .click("@nextButton")
            // Page Eleven - Overview
            .verify.containsText("@overviewName", data.overviewName, 
                "VERIFIED: The value of the 'Name' field equals: " + 
                data.overviewName)
            .verify.containsText("@overviewEmail", data.overviewEmail, 
                "VERIFIED: The value of the 'Email' field equals: " + 
                data.overviewEmail)
            .verify.containsText("@overviewLoanType", data.overviewLoanType, 
                "VERIFIED: The value of the 'LoanType' field equals: " + 
                data.overviewLoanType)
            .verify.containsText("@overviewPropertyType", data.overviewPropertyType, 
                "VERIFIED: The value of the 'PropertyType' field equals: " + 
                data.overviewPropertyType)
            .verify.containsText("@overviewCity", data.overviewCity, 
                "VERIFIED: The value of the 'City' field equals: " + 
                data.overviewCity)
            .verify.containsText("@overviewLoanTypeProperty", data.overviewLoanTypeProperty, 
                "VERIFIED: The value of the 'Loan Type Property' field equals: " + 
                data.overviewLoanTypeProperty)
            .verify.containsText("@overviewFoundHome", data.overviewFoundHome, 
                "VERIFIED: The value of the 'Found Home' field equals: " + 
                data.overviewFoundHome)
            .verify.containsText("@overviewAgent", data.overviewAgent, 
                "VERIFIED: The value of the 'Agent' field equals: " + 
                data.overviewAgent)
            .verify.containsText("@overviewHomePrice", data.overviewHomePrice, 
                "VERIFIED: The value of the 'Home Price' field equals: " + 
                data.overviewHomePrice)
            .verify.containsText("@overviewDownPayment", data.overviewDownPayment, 
                "VERIFIED: The value of the 'Down Payment' field equals: " + 
                data.overviewDownPayment)
            .verify.containsText("@overviewCreditScore", data.overviewCreditScore, 
                "VERIFIED: The value of the 'Credit Score' field equals: " + 
                data.overviewCreditScore)
            .verify.containsText("@overviewBankruptcy", data.overviewBankruptcy, 
                "VERIFIED: The value of the 'Bankruptcy' field equals: " + 
                data.overviewBankruptcy)
            .verify.containsText("@overviewAddressOne", data.overviewAddressOne, 
                "VERIFIED: The value of the 'Address Line One' field equals: " + 
                data.overviewAddressOne)
            .verify.containsText("@overviewAddressThree", data.overviewAddressThree, 
                "VERIFIED: The value of the 'Address Line Three' field equals: " + 
                data.overviewAddressThree)
            // Start Again - Go to Homepage
            .click("@restartButton")
        return this
    },
    purchasePage: function (data) {
        this
             // Homepage
            .click("@getStarted")
            // Page One - Five
            .click("@nextButton")
            .click("@nextButton")
            .click("@primaryHome")
            .click("@yesButton")
            .click("@yesButton")
            // Page Six
            .verify.urlEquals('http://localhost:3000/#/wSix', 
                'VERIFIED: "Purchase Price" and "Down Payment" page: http://localhost:3000/#/wSix')
            .setValue("@purchasePrice", data.purchasePrice)
            .verify.value("@purchasePrice", data.purchasePrice, 
                "VERIFIED: The value of the 'Purchase Price' field equals: " + 
                data.purchasePrice)
            .setValue("@downPayment", data.downPayment)
            .verify.value("@downPayment", data.downPayment, 
                "VERIFIED: The value of the 'Down Payment' field equals: " + 
                data.downPayment)
            .click("@nextButton")
            // Page Seven - Ten
            .click("@creditScore")
            .click("@bankruptcy")
            .click("@nextButton")
            .click("@nextButton")
            // Page Eleven - Overview
            .verify.containsText("@overviewHomePrice", data.overviewHomePrice, 
                "BUG: Characters other than numbers can be submitted in the 'Purchase Price' field: " + 
                data.overviewHomePrice)
            .verify.containsText("@overviewDownPayment", data.overviewDownPayment, 
                "BUG: Characters other than numbers can be submitted in the 'Down Payment' field: " + 
                data.overviewDownPayment)
            // Start Again - Go to Homepage
            .click("@restartButton")
        return this
    }
}

module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [homeLoanWizardCommands],
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
        overviewLoanTypeProperty: {
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
        overviewHomePrice: {
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
