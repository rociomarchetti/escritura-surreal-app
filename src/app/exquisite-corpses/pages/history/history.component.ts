import { map, tap } from 'rxjs/operators';

import { TextsService } from '../../services/texts.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import {
  Video,
  VideoFile,
} from 'src/app/exquisite-corpses/interfaces/videos.interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  
 /*  videoList: Video[] = [];
  videoFiles: VideoFile[] = []; */
  media: any[] = [];
  videoUrl: string = '';
  /* isVideo: boolean = false; */
  counter: number = 0;
  videoId: string = '';

  getVideo() {
    this.videoUrl = ''
    this.textsService
      .getVideo()
      .pipe(
        map((resp) => {
          this.media = resp.media;
          console.log(this.media);
          
          this.videoId = resp.media[this.counter].id;
          console.log(this.videoId);

          this.videoUrl = resp.media[this.counter].video_files[0].link
          this.cdRef.detectChanges()
          console.log(this.videoUrl)
          
        })
      )
      .subscribe((resp: any) => {
        this.counter++
      });
  }

  /* Esta función igual me lleva al mismo archivo desde player externo */
/*   getVideoById(id: string) {
    this.textsService
      .getVideoById(id)
      .subscribe((resp: any) => {
        this.videoUrl = resp.video_files[0].link
        console.log(resp);
      });
  } */

  constructor(private textsService: TextsService, private cdRef: ChangeDetectorRef) {}
}
