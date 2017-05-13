var RegistrationForm = function () {
    /* the model */
    var customer = {
        personalInfo: {
            title: ko.observable(),
            firstName: ko.observable(),
            middleName: ko.observable(),
            lastName: ko.observable()
        },
        contactDetails: {
            phoneNumber: ko.observable(),
            emailAddress: ko.observable(),
            preferredContact: ko.observable()
        }
    };

    /* computed observable for title drop down text change */
    var titleSelect = ko.pureComputed(function () {
        if (customer.personalInfo.title() == null) {
            return "select"
        } else {
            return customer.personalInfo.title();
        }
    });

    /* options for the title drop down*/
    var titleOptions = [
        {
            value: 'Mr',
            setTitle: function () {
                RegistrationForm.customer.personalInfo.title("Mr");
            }
        },
        {
            value: 'Mrs',
            setTitle: function () {
                RegistrationForm.customer.personalInfo.title("Mrs");
            }
        },
        {
            value: 'Miss',
            setTitle: function () {
                RegistrationForm.customer.personalInfo.title("Miss");
            }
        },
        {
            value: 'Dr',
            setTitle: function () {
                RegistrationForm.customer.personalInfo.title("Dr");
            }
        }
    ];


    var init = function () {
        ko.applyBindings(RegistrationForm);

    }
    $(init);

    var submit = function () {
        console.log(ko.toJSON(customer));
       // console.log("This form is submitted");
    };

    return {
        submit: submit
    };



}();
