import { Component, OnInit, Inject } from '@angular/core';
import { ModalService } from '../modal.service';
import { DOCUMENT } from '@angular/common';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(
    private modalService:ModalService,
    private formBuilder: FormBuilder,
    @Inject(DOCUMENT) document
  ) { 
    this.loginForm = this.formBuilder.group({
        login_user:'',
        login_password:''
      });
  }

  ngOnInit() {
  }
  public close() {
    this.modalService.destroy();
  }
  onSubmit(searchData){
     // Process checkout data here
    alert("Chưa có dữ liệu đâu mà search");
  }
}