(function () {
  
  'use strict';


  angular.module('myModule', [])
    .controller('itemController', ItemController)
    .service('carService', CarService);


  ItemController.$inject = ['carService'];
  function ItemController(service) {
    var controller = this;
    controller.carItems = service.getCarItems();

    controller.hideCarItem = function (index) {
      controller.carItems[index].displayed = false;
    };

    controller.deleteCarItem = function (index) {
      controller.carItems[index].present = false;
    };
  };

  class CarItem {
    constructor(mark, quantity) {
      this.mark = mark;
      this.quantity = quantity;
      this.displayed = true;
      this.present = true;
    };
  };

  function CarService() {

    var service = this;

    var carItems = [
      new CarItem('Мерседес', 7),
      new CarItem('Ауді', 6),
      new CarItem('Рено', 31),
      new CarItem('Мазда', 2),
      new CarItem('Фіат', 18)
    ];

    service.getCarItems = function () {
      return carItems;
    };
  };

})();
