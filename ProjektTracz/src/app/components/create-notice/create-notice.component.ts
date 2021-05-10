import {Component, ElementRef, ViewChild} from '@angular/core';
import {Notice} from '../../shared/_models/Notice';
import {AuthenticationService} from '../../_services/authentication.service';
import {NoticeService} from '../../_services/notice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.scss']
})
export class CreateNoticeComponent {
  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';

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
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name + ' - ';
      });

      // HTML5 FileReader API
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  logOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['h']);
  }

  toAllNotices(): void {
    this.router.navigate(['profile']);
  }
}
