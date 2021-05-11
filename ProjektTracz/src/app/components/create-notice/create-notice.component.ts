import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Notice} from '../../shared/_models/Notice';
import {AuthenticationService} from '../../_services/authentication.service';
import {NoticeService} from '../../_services/notice.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.scss']
})
export class CreateNoticeComponent {
  @ViewChild('fileInput') fileInput: ElementRef;
  @Input()
  requiredFileType: string;

  fileName = '';
  uploadProgress: number;
  uploadSub: Subscription;

  noticeModel = new Notice(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '');
  /*uploadForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    imgSrc: new FormControl('', [Validators.required]),
  });*/
  constructor(private authenticationService: AuthenticationService,
              private noticeService: NoticeService,
              private router: Router) {
  }

  storeNotice(): void {
    localStorage.getItem('token');
    this.noticeService.storeNotice(this.noticeModel).subscribe(
      res => {
        console.log(res);
        console.log('poszło');
      }
    );
  }

  // tslint:disable-next-line:typedef
  /*onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      this.noticeModel.image = formData.append('thumbnail', file);
      console.log(this.noticeModel.image);
      const upload$ = this.http.post('https://citygame.ga/api/notices/store', this.noticeModel.image, {
        reportProgress: true,
        observe: 'events'
      })
        .pipe(
          finalize(() => this.reset())
        );
    }
  }*/

  // tslint:disable-next-line:typedef
  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  // tslint:disable-next-line:typedef
  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }


  logOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['h']);
  }

  toAllNotices(): void {
    this.router.navigate(['profile']);
  }
}
