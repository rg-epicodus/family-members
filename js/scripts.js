//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// user interface logic
$(document).ready(function() {
  $("form#new-member").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#members").append("<li><span class='member'>" + newContact.firstName + "</span></li>");

    $(".member").last().click(function() {
      $("#show-member").show();
      $("#show-member h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
