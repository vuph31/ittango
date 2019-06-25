import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  assets_ref = "https://hanhtrinhbrse.com/assets/";
  menu_dropdown_display = "none";
  constructor(
    private modalService:ModalService
  ) { }

  ngOnInit() {
  }
  navMenuClick() {
    if(this.menu_dropdown_display == "none"){
      this.menu_dropdown_display = "block";
    }else{
      this.menu_dropdown_display = "none"
    }
  }

  initLoginModal() {
    let inputs = {
      isMobile: false
    }
    this.modalService.init(LoginComponent, inputs, {});
  }
}

