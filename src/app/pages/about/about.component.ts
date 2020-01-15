import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services';
import { Information } from '../../models/information';

@Component({
    selector: 'about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']
})

export class AboutComponent implements  OnInit {
  
  information :Information[] = [];

  constructor(
    private aboutService: AboutService
  ) {}

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation(){
    this.aboutService.getInformation().toPromise().then(
      (data: Information[]) => {
        this.information = data;
      }
    ) .catch(() => {
      console.log('Error: get information in about component')
    });
  }


   

}
