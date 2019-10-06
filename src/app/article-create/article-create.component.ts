import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {
  @ViewChild('uploadImage') uploadImage;

  editMode = false;
  id = 0;
  editorForm: FormGroup;
  image;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.editorForm = new FormGroup({
      title: new FormControl(null),
      epigraph: new FormControl(null),
      text: new FormControl(null)
    });

    this.route.params.subscribe(item => {
      if (!!item.id) {
        this.id = item.id;
        this.editMode = true;
        this.api.getArticle(item.id).subscribe(res => {
          if (!!res.data) {
            this.editorForm.setValue({
              title: res.data.title,
              epigraph: res.data.epigraph,
              text: res.data.text
            });
          }
        });
      }
    });

  }

  onSubmit() {
    this.api.createArticle({
      author: 'Olga Ilina',
      title: this.editorForm.value.title,
      epigraph: this.editorForm.value.epigraph,
      text: this.editorForm.value.text,
      image: this.image
    }).subscribe(() => {
      this.router.navigateByUrl('/admin/articles');
    });
  }

  updateArticle() {
    this.api.updateArticle(this.id, {
      author: 'Olga Ilina',
      title: this.editorForm.value.title,
      epigraph: this.editorForm.value.epigraph,
      text: this.editorForm.value.text
    }).subscribe(res => {
      console.log('update', res);
    });
  }

  onFileAdd() {
    const file: File = this.uploadImage.nativeElement.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.onloadend = (e) => {
      console.log('READER RESULT', fileReader.result);
      this.image = /base64,(.+)/.exec(String(fileReader.result))[1];
    };
    fileReader.readAsDataURL(file);
  }

}
