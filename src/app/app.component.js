import { Component } from "@angular/core"

export class AppComponent {
  constructor() {
    this.message = "Hello from the AppComponent"
  }
}

AppComponent.annotations = [
    new Component({
      selector: "my-app",
      template: `
        <h1>{{message}}</h1>
      `
    })
]