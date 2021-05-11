import {Component, ElementRef, ViewChild} from '@angular/core';
import {Notice} from '../../shared/_models/Notice';
import {AuthenticationService} from '../../_services/authentication.service';
import {NoticeService} from '../../_services/notice.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.scss']
})
export class CreateNoticeComponent {
  @ViewChild('fileInput') fileInput: ElementRef;
  imgFile: string;
  userID: string;
  token: string;
  user: string;
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
  uploadForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    imgSrc: new FormControl('', [Validators.required]),
  });

  constructor(private authenticationService: AuthenticationService,
              private noticeService: NoticeService,
              private fb: FormBuilder,
              private router: Router,
              private userService: UserService) {
    this.authenticationService.getUserInfo();

    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.userService.getUser();
    this.authenticationService.userObservable.subscribe(
      user => {
        this.user = user.name;
      });
  }

  storeNotice(): void {
    console.log(this.noticeModel);
    if (this.noticeModel.image === ''){
      this.noticeModel.image = undefined;
    }
    localStorage.getItem('token');
    this.noticeService.storeNotice(this.noticeModel).subscribe(
      res => {
        console.log(res);
        console.log('poszło');
      }
    );
  }

  get uf(): any {
    return this.uploadForm.controls;
  }

  onImageChange(e): any {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          imgSrc: reader.result
        });
        console.log(this.uploadForm);
        this.noticeModel.image = JSON.stringify(this.uploadForm.value);
      };
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
