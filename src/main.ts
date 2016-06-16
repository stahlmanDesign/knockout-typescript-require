import * as ko from "knockout";

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

class ViewModel1 {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
    }
}
const vm1 = new ViewModel1("TypeScript", "Knockout");
ko.applyBindings(vm1,document.getElementById('vm1'));


// --------


// Here's my data model
class ViewModel2 {
    public firstName: KnockoutObservable<string>;
    public lastName: KnockoutObservable<string>;
    public fullName: KnockoutComputed<string>;

    constructor(firstName:string,lastName:string) {
        this.firstName = ko.observable('Justin');
        this.lastName = ko.observable('Stahlman');
        this.fullName = ko.computed({
            owner: this,
            read: () => {
                return this.firstName() + " " + this.lastName();
            }
        });
    }
}

const vm2 = new ViewModel2("Planet", "Earth");
ko.applyBindings(vm2,document.getElementById('vm2')); // This makes Knockout get to work