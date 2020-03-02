import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<div class='container'>
  	<h1>Welcome to our page</h1>
  	<img src={{person.avatar}}/>
  	<h2>My name is {{person.firstname}} {{person.lastname}}</h2>
  	<h2>Age: {{person.age}} </h2>
  	<h2>Address:</h2>
  	<ul>
  	<li>Street: {{person.address.street}}</li>
  	<li>City: {{person.address.city}}</li>
  	<li>Country: {{person.address.country}}</li>
  	</ul>
  	<h2>Friends:</h2>
  	<ul>
  	<li *ngFor="let friend of person.friends">
  		Name: {{friend.name}}, age: {{friend.age}}
  	</li>
  	</ul>
  	</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstProfileApp';
  person = {
  	firstname: 'nhan',
  	lastname: 'nvh',
  	avatar: 'assets/Doge.PNG',
  	age: 20,
  	address:{
  		street: 'cau giay',
  		city: 'HN',
  		country: 'Vietnam'
  	},
  	friends:[
  		{name: 'john', age:19},
  		{name: 'jack', age:22}
  	]
  }
}
