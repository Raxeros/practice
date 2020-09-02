import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';



@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const projects = [
      { name : 'WebOne' , year : 2011,img_url:'/src/assets/bg.jpeg' },
      {name : 'WebTwo' , year : 2013, img_url:'/src/assets/bg.jpeg' },
      { name : 'WebThree' , year : 2014 , img_url:'/src/assets/bg.jpeg'},
      { name : 'WebFour' , year : 2016 , img_url:'/src/assets/bg.jpeg'},
      { name : 'WebFive' , year : 2017, img_url:'/src/assets/bg.jpeg' },
      { name : 'WebSix' , year : 2018, img_url:'/src/assets/bg.jpeg' },
      { name : 'WebSeven' , year : 2019 , img_url:'/src/assets/bg.jpeg'},
      { name : 'WebEight' , year : 2019, img_url:'/src/assets/bg.jpeg' },

    ];
    const employees = [
      { name : 'Alex' , lastname :'Watson', age:21, profession:"Web Developer", img_url:'/src/assets/1.jpg' },
      { name : 'Gordon' , lastname :'Walker', age:27, profession:"Web Designer",  img_url:'/src/assets/2.jpg' },
      { name : 'David' , lastname :'Johnson', age:22, profession:"SEO", img_url:'/src/assets/3.jpg' },
      { name : 'Bob' , lastname :'Thompson', age:28, profession:"Designer", img_url:'/src/assets/4.jpg' },
      { name : 'Alexander' , lastname :'Will', age:22, profession:"Developer" , img_url:'/src/assets/5.jpeg'},
      { name : 'Johanna' , lastname :'Alen', age:25, profession:"Developer", img_url:'/src/assets/6.jpg' },
      { name : 'Helen' , lastname :'Robertson', age:22, profession:"Developer", img_url:'/src/assets/7.jpg' },


    ];
    const msg = [
      {firstname:'', lastname:''},


    ];
 
    return {projects,employees,msg}



    



  
  

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

}}
