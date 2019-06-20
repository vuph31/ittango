import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  wordSearchForm;
  constructor(
    private formBuilder: FormBuilder
  ) {
      this.wordSearchForm = this.formBuilder.group({
      search_word:''
    });
    }
  ngOnInit() {
  }
  onSubmit(searchData){
     // Process checkout data here
    console.warn('Your order has been submitted', searchData);
  }
}

