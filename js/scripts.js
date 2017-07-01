//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state, zipCode) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + " " + this.city + ", " + this.state + " " + this.zipCode;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-zipCode").val("");
    $(".submitDump").empty();
}

// user interface logic
$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address submitDump">' +
                                '<select class="form-control" id="new-type">' +
                                  '<option>Home</option>' +
                                  '<option>Work</option>' +
                                  '<option>Shipping</option>' +
                                  '<option>Billing</option>' +
                                '</select>' +
                                '<div class="form-group">' +
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control new-street">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-city">City</label>' +
                                  '<input type="text" class="form-control new-city">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-state">State</label>' +
                                  '<input type="text" class="form-control new-state">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-zipCode">Zip code</label>' +
                                  '<input type="text" class="form-control new-zipCode">' +
                                '</div>' +
                               '</div>');
  });

  $("form#new-member").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedType = $(this).find("#new-type").val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedZipCode = $(this).find("input.new-zipCode").val();
      var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState, inputtedZipCode);
      newContact.addresses.push(newAddress);
    });

    $("ul#members").append("<li><span class='member'>" + newContact.fullName() + "</span></li>");

    $(".member").last().click(function() {
      $("#show-member").show();
      $("#show-member h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });
    resetFields();

  });
});
