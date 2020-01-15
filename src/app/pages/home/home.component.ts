import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services';
import { Image } from '../../models/image';
@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements  OnInit {

  images :Image[] = [];
  position = 0;
  constructor(
    private imageService: ImageService
  ) {
  }

  ngOnInit(): void {
    this.getImages();
    setInterval(() => {
      this.images[this.position].isActive = false;
      this.position++;
      if (this.position > this.images.length -1 ) { this.position = 0 };
      this.images[this.position].isActive =  true;
    }, 5000);
  }

  getImages(){
    this.imageService.getImages().toPromise().then(
      (data: Image[]) => {
        this.images = data;
      }
    ) .catch(() => {
      console.log('Error: get images')
    });
  }

   

}
