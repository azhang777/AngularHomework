/*
Before we use an external function or class, 
we need to define where to find it using an import statement.
It allows us to use exported members such as:
other files in our application,
from angular framework,
external javascript libraries
*/
import { Component } from '@angular/core';

/*
meta-data for angular to understand how to instantiate the component, 
construct the view, and interact with the component. 
When attached to a class, it is known as a decorator.

a decorator is a function that adds metadata to class, its members or its method arguments
*/
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html', //directive is a custom html element
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started';
}

/*
NOTES

The index.html contains the main page for the application, it also
loads everything else in. Therefore it is often the only 
web page of the application. This is why Angular application is 
often known as a SPA (Single Page Application)

Binding coordinates communication between the 
component's class and its template and often involves passing data

example of binding is interpolation {{}}, when we put typescript code 
(variables, methods, operations) 
into html

angular has built in directives which are known as structural directives
for example *ngIf: If logic and *ngFor: For loops
these are usually placed into html tags and take in code value / methods
* marks it as a structural directive
Structural directives help us to power up our html dynamically

4 Types of databinding:
{{}} Interpolation
<img [src]='value'> Property Binding
<button (click)='toggleImage()'> Event Binding
<input [(ngModel)]='listFilter' /> Two-Way Binding | Banana in a Box

we can use pipes to transform data before they are rendered

to specify strong types and components, we can define interfaces

A lifecycle hook is an interface we implement to write code when a component lifecycle 
event occurs

OnInit: Perform component initialization, retrieve data
OnChanges: Perform action after changes, input properties
ONDestroy: Perform cleanup
*/
