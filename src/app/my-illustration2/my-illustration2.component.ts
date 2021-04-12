import { Component, OnInit } from "@angular/core";
import { Component } from "@angular/core";

import { products } from "../products";
@Component({
  selector: "app-my-illustration2",
  templateUrl: "./my-illustration2.component.html",
  styleUrls: ["./my-illustration2.component.css"]
})
export class MyIllustration2Component implements OnInit {
  products = products;
  constructor() {}

  ngOnInit() {}
  signin() {
    window.alert(
      "Your feedback message is been sent! Thank you for your information!"
    );
  }
  signup() {
    window.alert("The product has been shared!");
  }
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}
