import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordformat',
  templateUrl: './wordformat.component.html',
  styleUrls: ['./wordformat.component.css']
})
export class WordformatComponent implements OnInit {
  isOpened:boolean=false;
  wordformat: any=[];
  categories = [ 
    {name :"italic", id: 1},
    {name :"bold", id: 2},
    {name :"underline", id: 3}
  ];
  clickedValue: string;
  words=[
    {
    word:'hello'
    },
    {
      word:'bye'
    },
    {
      word:'action'
    },
    {
      word:'code'
    },
    {
      word:'develop'
    },
    {
      word:'javascript'
    },
    {
      word:'angular'
    },
    {
      word:'math'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  openModal(e){
    this.clickedValue=e.srcElement.id;
    this.isOpened=!this.isOpened;
  }

  onChange(format:string, isChecked: boolean) {
    if(isChecked) {
      this.wordformat.push(format);
    } else {
      let index = this.wordformat.indexOf(format);
      this.wordformat.splice(index,1);
    }
  }

  onSubmit(param){
    let element=(<HTMLInputElement>document.getElementById(this.clickedValue));
    for(let i=0; i<param.length; i++){
    switch(param[i]){
      case 'underline':
        element.style.textDecoration='underline';
        break;
      case 'bold':
        element.style.fontWeight='bold';
        break;
      case 'italic':
        element.style.fontStyle='italic';
        break;
      default:
        break;
    }
  }
  this.isOpened=false;
  }

}
