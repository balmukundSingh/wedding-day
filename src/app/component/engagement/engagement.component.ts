import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css']
})
export class EngagementComponent implements OnInit {

  weddingImages: string[] = [];  
  portraitImages: string[] = [];
  landscapeImages: string[] = [];
  showRotationPrompt = false;

  constructor() {
    this.loadImages();
  }

  ngOnInit(): void {}

  loadImages(): void {
    const totalImages = 32;
    for (let i = 1; i <= totalImages; i++) {
      const imagePath = `assets/images/tilak/tilak-${i.toString().padStart(2, '0')}.jpg`;
      console.log('imagePath: ', imagePath);
      this.categorizeImage(imagePath);
    }
    console.log(this.landscapeImages, this.portraitImages);
  }

  categorizeImage(imgPath: string): void {
    let img = new Image();
    img.src = imgPath;
    img.onload = () => {
      if (img.width > img.height) {
        this.landscapeImages.push(imgPath);
      } else {
        this.portraitImages.push(imgPath);
      }
    };
  }

  getFileName(imagePath: string): string {
    return imagePath.split('/').pop() || ''; // Extract file name
  }

  checkRotation(imgPath: string) {
    let img = new Image();
    img.src = imgPath;
    img.onload = () => {
      this.showRotationPrompt = img.width > img.height && window.innerWidth < 768;
    };
  }

  // @HostListener('window:resize')
  // onResize() {
  //   this.showRotationPrompt = false;
  // }
}
