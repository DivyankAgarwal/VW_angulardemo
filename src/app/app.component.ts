import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html", //UI of page
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Hello VWIT";
  name = "Angular";
  a: string = "This is my variable";
  b = 1099;
  count = 1;
  message: string = "";
  arr = ["Apple", "Mango", "Banana", "Orange"];
  loginFlag = true;

  // hello() {
  //   if (this.b % 2 == 0) {
  //     this.message = "This is even number";
  //     console.log(this.message);
  //   } else {
  //     this.message = "This is odd number";
  //     console.log(this.message);
  //   }
  //   console.log("hello world");
  //   return "hello world " + this.a;
  // }
  hello() {
    this.title = "You clicked button";
    console.log("hello world");
    if (this.loginFlag == false) {
      this.loginFlag = true;
    } else {
      this.loginFlag = false;
    }
  }
  bye() {
    console.log("hi this is from text box");
    this.name = "hi" + this.count;
    this.count++;
  }
}
