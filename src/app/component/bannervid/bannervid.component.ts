import { Component, ViewChild, AfterViewInit } from '@angular/core';

declare const FontAwesome: any;
@Component({
  selector: 'app-bannervid',
  templateUrl: './bannervid.component.html',
  styleUrls: ['./bannervid.component.css'],
})
export class BannervidComponent {
  userIcon = 'fa fa-user';
  envelopeIcon = 'fas fa-envelope';

  videoUrl =
    'https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Horizontal/ss23-move-for-the-planet/sustainability-ss23-mftp-educate-onsite-mh-t.mp4';
  isPlaying = false;

  @ViewChild('videoPlayer') videoElement: any;

  ngAfterViewInit(): void {
    this.playVideo();
  }

  toggleVideoPlayback(): void {
    const videoPlayer: HTMLVideoElement = this.videoElement.nativeElement;
    if (this.isPlaying) {
      videoPlayer.pause();
    } else {
      videoPlayer.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  playVideo(): void {
    const videoPlayer: HTMLVideoElement = this.videoElement.nativeElement;
    videoPlayer.play();
    this.isPlaying = true;
    videoPlayer.addEventListener('ended', () => {
      this.isPlaying = false;
      videoPlayer.currentTime = 0;
      videoPlayer.play();
      this.isPlaying = true;
    });
  }
}
