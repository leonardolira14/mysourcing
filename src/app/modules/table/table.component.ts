import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonsService } from '../../core/persons.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { personentity } from './models/personentity';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild("filedoc", {static: false}) filedoc: any;
  listperson:Array<personentity> = [];
  closeResult = '';
  tempperson:any = [];
  constructor(
    private api:PersonsService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    if(!localStorage.getItem('persons')){
      this.listperson = this.api.gelistperson();
    }else{
      const personsparse:string | any = localStorage.getItem('persons');
      this.listperson = JSON.parse(personsparse);
    }


  }

  open(content:any,person:personentity) {
    this.tempperson= person;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  inputdoc(){
    let archivos = this.filedoc.nativeElement.files[0];
    this.tempperson['document'] = archivos.name
  }

  savepersons(){
    localStorage.setItem('persons', JSON.stringify(this.listperson));
    this.modalService.dismissAll();
    alert('Datos salvados');
  }
  clear(person:personentity){
    person.document = '';
    localStorage.setItem('persons', JSON.stringify(this.listperson));
    alert('Datos salvados');
  }

}
