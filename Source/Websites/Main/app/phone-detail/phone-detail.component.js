
angular.
  module('phoneDetail').
  component('phoneDetail', {
      templateUrl: 'phone-detail/phone-detail.template.html',
      controller: ['$routeParams', 'Phone', PhoneDetailController]
  });

function PhoneDetailController($routeParams, Phone) {
    var self = this;
    self.pageHeader = $routeParams.phoneId;

    self.setImage = function (imageUrl) {
        self.mainImageUrl = imageUrl;
    }

    self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
        self.setImage(phone.images[0]);
    });


    //$http.get('phones/' + $routeParams.phoneId + '.json').then(function (response) {
    //    self.phone = response.data;
    //    self.setImage(self.phone.images[0]);
    //});
}