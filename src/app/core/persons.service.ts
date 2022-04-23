import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(
    private http: HttpClient
  ) { }

  gelistperson(){
    let resut = [];
    for(let i=0;i<=10;i++){
      resut.push(
        {
          name:faker.name.findName(),
          age:faker.random.number({min:1,max:99}),
          gender:faker.name.gender(),
          document:''
          }
      )
    }
    return resut
  }
}
