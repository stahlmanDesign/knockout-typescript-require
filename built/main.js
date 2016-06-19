define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    // NOTE: if having two view models in one view, they need to be
    // bound to different elements
    // http://stackoverflow.com/questions/9293761/knockoutjs-multiple-viewmodels-in-a-single-view
    // NOTE: from Knockout docs:
    // http://knockoutjs.com/documentation/observables.html
    // Optionally, you can pass a second parameter to define which 
    // part of the document you want to search for data-bind attributes.
    // For example, ko.applyBindings(myViewModel, document.getElementById('someElementId')). 
    // This restricts the activation to the element with ID someElementId 
    // and its descendants, which is useful if you want to have 
    // multiple view models and associate each with a different 
    // region of the page.
    var ViewModel1 = (function () {
        function ViewModel1(language, framework) {
            this.language = ko.observable(''); // language: KnockoutObservable<string> // alternative syntax 
            this.framework = ko.observable(''); // framework: KnockoutObservable<string> // alternative syntax 
            this.language = ko.observable(language);
            this.framework = ko.observable(framework);
        }
        return ViewModel1;
    }());
    var vm1 = new ViewModel1("TypeScript", "Knockout");
    ko.applyBindings(vm1, document.getElementById('vm1'));
    // --------
    // Here's my data model
    var ViewModel2 = (function () {
        function ViewModel2(firstName, lastName) {
            var _this = this;
            this.firstName = ko.observable('Justin');
            this.lastName = ko.observable('Stahlman');
            this.fullName = ko.computed({
                owner: this,
                read: function () {
                    return _this.firstName() + " " + _this.lastName();
                }
            });
        }
        return ViewModel2;
    }());
    var vm2 = new ViewModel2("Planet", "Earth");
    ko.applyBindings(vm2, document.getElementById('vm2')); // This makes Knockout get to work
});
//# sourceMappingURL=main.js.map