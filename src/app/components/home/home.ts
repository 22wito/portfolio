import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isMuted = false;
  showBio = false;

  togglePlay(play: boolean) {
    if (play) {
      this.videoPlayer.nativeElement.play();
    } else {
      this.videoPlayer.nativeElement.pause();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.videoPlayer.nativeElement.muted = this.isMuted;
  }
}
