import { ChangeDetectorRef, Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { TextsService } from '../../services/texts.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {

  media: any[] = [];
  videoUrl: string = '';
  counter: number = 0;
  videoId: string = '';

  searchingVideo: boolean = false;

  getVideo() {
    this.videoUrl = ''
    this.searchingVideo = true;
    this.textsService
      .getVideo()
      .pipe(
        map((resp) => {
          this.media = resp.media;          
          this.videoId = resp.media[this.counter].id;
          this.videoUrl = resp.media[this.counter].video_files[0].link
          this.cdRef.detectChanges()          
        })
      )
      .subscribe((resp: any) => {
        this.counter++
      });
  }

  constructor(private textsService: TextsService, private cdRef: ChangeDetectorRef) {}
}
