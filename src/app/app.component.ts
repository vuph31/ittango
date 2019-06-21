import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
  )]
})
export class AppComponent  {
  wordSearchForm;
  assets_ref = "https://hanhtrinhbrse.com/assets/";
  constructor(
    private formBuilder: FormBuilder,
    @Inject(DOCUMENT) document
  ) {
      this.wordSearchForm = this.formBuilder.group({
        search_word:''
      });
    }
  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     /*if (window.pageYOffset > 68) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }*/
  }
  onSubmit(searchData){
     // Process checkout data here
    alert("Chưa có dữ liệu đâu mà search");
  }
}

