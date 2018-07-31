import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  // values property - will receive the response from the getValues method below

  constructor(private http: HttpClient) { }
  // inject Http Client service

  ngOnInit() {
    this.getValues();
  // onInit is lifecycle
  // after the constructor is called and the component is initialized
  // on initialization the getValues method is called
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
    // http.get response returns an observable of the body as an object
    // observable = stream of data coming back from the server
    // in order to get observable data we need to subscribe to it
    // subscribe = takes two parameters
    // the first is a callback - what to do when these responses are received
    // second is what to do in the case of an error
    // third is what to do when the response is complete
  }
}
