Template.home.onRendered(function() {
  Materialize.updateTextFields();
});

Template.home.events({

  "click #btn-send" (event, template) {
    alert("Hello");
  },

  "submit #form1" (e, t) {
    e.preventDefault();
    alert( $("first_name").val() );
  }

});
