"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var classAnimal_1 = require("./classAnimal");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(AnimalProperties) {
        var _this = _super.call(this, AnimalProperties.height, AnimalProperties.weight, AnimalProperties.legs) || this;
        _this.name = AnimalProperties.name;
        _this.color = AnimalProperties.color;
        return _this;
    }
    Dog.prototype.displayAll = function () {
        this.display();
        console.log("Name: " + this.name);
        console.log("Color: " + this.color);
    };
    return Dog;
}(classAnimal_1["default"]));
var animal1 = new classAnimal_1["default"](120, 50, 4);
animal1.display();
var data = { name: "Bravo", color: "white", height: 140, weight: 50, legs: 4 };
var dog1 = new Dog(data);
dog1.displayAll();
