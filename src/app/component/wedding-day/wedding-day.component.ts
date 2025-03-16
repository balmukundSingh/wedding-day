import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-day',
  templateUrl: './wedding-day.component.html',
  styleUrls: ['./wedding-day.component.css']
})
export class WeddingDayComponent implements OnInit {

  weddingImages: string[] = [];  
  portraitImages: string[] = [];
  landscapeImages: string[] = [];

  loadedPortraitImages: string[] = [];  // Stores currently loaded portrait images
  loadedLandscapeImages: string[] = []; // Stores currently loaded landscape images

  batchSize = 5; // Number of images to load per batch
  portraitIndex = 0; // Current batch index for portrait images
  landscapeIndex = 0; // Current batch index for landscape images
  imageCache: { [key: string]: { width: number; height: number } } = {}; // Cache for image dimensions

  constructor() {
    this.loadImages();
  }

  ngOnInit(): void {}

  /** Prepares the list of all images but does not load them */
  loadImages(): void {
    const totalImages = 116;
    for (let i = 1; i <= totalImages; i++) {
      const imagePath = `assets/images/wedding/wedding-${i.toString().padStart(2, '0')}.jpg`;
      this.categorizeImage(imagePath);
    }
  }

  /** Categorize images based on orientation */
  categorizeImage(imgPath: string): void {
    if (!this.imageCache[imgPath]) { // Check if already cached
      let img = new Image();
      img.src = imgPath;
      img.onload = () => {
        this.imageCache[imgPath] = { width: img.width, height: img.height };
        this.sortImage(imgPath, img.width, img.height);
      };
    } else {
      this.sortImage(imgPath, this.imageCache[imgPath].width, this.imageCache[imgPath].height);
    }
  }

  /** Sort images into portrait and landscape lists */
  sortImage(imgPath: string, width: number, height: number): void {
    if (width > height) {
      this.landscapeImages.push(imgPath);
      if (this.landscapeImages.length <= this.batchSize) {
        this.loadedLandscapeImages.push(imgPath); // Load first batch automatically
      }
    } else {
      this.portraitImages.push(imgPath);
      if (this.portraitImages.length <= this.batchSize) {
        this.loadedPortraitImages.push(imgPath); // Load first batch automatically
      }
    }
  }

  loadPreviousPortraitBatch(): void {
    if (this.portraitIndex > 0) {
      this.portraitIndex -= this.batchSize;
      this.loadedPortraitImages = this.portraitImages.slice(0, this.portraitIndex + this.batchSize);
    }
  }
  
  loadNextPortraitBatch(): void {
    if (this.portraitIndex + this.batchSize < this.portraitImages.length) {
      this.portraitIndex += this.batchSize;
      this.loadedPortraitImages = this.portraitImages.slice(0, this.portraitIndex + this.batchSize);
    }
  }
  
  loadPreviousLandscapeBatch(): void {
    if (this.landscapeIndex > 0) {
      this.landscapeIndex -= this.batchSize;
      this.loadedLandscapeImages = this.landscapeImages.slice(0, this.landscapeIndex + this.batchSize);
    }
  }
  
  loadNextLandscapeBatch(): void {
    if (this.landscapeIndex + this.batchSize < this.landscapeImages.length) {
      this.landscapeIndex += this.batchSize;
      this.loadedLandscapeImages = this.landscapeImages.slice(0, this.landscapeIndex + this.batchSize);
    }
  }

  /** Extracts file name from the path */
  getFileName(imagePath: string): string {
    return imagePath.split('/').pop() || ''; 
  }
}
