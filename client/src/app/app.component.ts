import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'This is a social chatting app';
  users: any;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getUsers();
  }

  //get users method to get all users from users table
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users = response
    },
    error => {
      console.log(error);
    })
  }

}
