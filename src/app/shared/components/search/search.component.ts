import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 searchForm:FormGroup=this.Fb.group({
  InputSearch:['']
})
  @Output() searchValue:EventEmitter<string>=new EventEmitter()
  constructor(private Fb:FormBuilder){

  }
  ngOnInit(): void {

   this.searchForm.get('InputSearch')?.valueChanges.pipe(debounceTime(500)).subscribe({
    next:(res:any)=>{
      this.search(res)
    }
   })
  }

  search(value:string){
    console.log(value);
    this.searchValue.emit(value)
  }

}
