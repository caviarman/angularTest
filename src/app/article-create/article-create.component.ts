import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }
  
  editorForm: FormGroup;

  ngOnInit() {
    this.editorForm = new FormGroup({
      'title': new FormControl(null),
      'epigraph': new FormControl(null),
      'text': new FormControl(null)
    })  
  }

  onSubmit() {
    console.log('1111', this.editorForm.value.editor);
    this.api.createArticle({
      author: 'Olga Ilina',
      title: this.editorForm.value.title,
      epigraph: 'Epigraph',
      text: this.editorForm.value.text  
    }).subscribe(res =>{
      console.log('res', res);
    });
  }

}
