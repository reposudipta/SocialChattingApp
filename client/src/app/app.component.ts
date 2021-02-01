import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'This is a social chatting app';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService){}

  ngOnInit() {
    //this.getUsers();
    this.setCurrentUser();
  }

  //each time the app is loaded it chekcs the localstorage and passing that to our account service
  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  //get users method to get all users from users table
  // getUsers(){
  //   this.http.get('https://localhost:5001/api/users').subscribe(response =>{
  //     this.users = response
  //   },
  //   error => {
  //     console.log(error);
  //   })
  // }

}
