import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  title() {
    return 'FirstTryMeteor';
  },
});

Template.hello.events({
  'click .normal'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'click .special'(event, instance) {
    instance.counter.set(instance.counter.get() + 5);
  },
  'click .save-number'(event, instance) {
    Nombres.insert({
      value: instance.counter.get(),
      createAt: new Date()
    });
  },
});

Template.list_nombre.helpers({
  nombres(){
    return Nombres.find().fetch();
  }
});
