import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html", //UI of page
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Hello VWIT";
  a: string = "This is my variable";
  b = 1099;
  message: string = "";

  hello() {
    if (this.b % 2 == 0) {
      this.message = "This is even number";
      console.log(this.message);
    } else {
      this.message = "This is odd number";
      console.log(this.message);
    }
    console.log("hello world");
    return "hello world " + this.a;
  }
}
