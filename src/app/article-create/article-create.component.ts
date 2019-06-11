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
      'editor': new FormControl(null)
    })  
  }

  onSubmit() {
    console.log('1111', this.editorForm.value.editor);
    this.api.createArticle({
      author: 'Olga Ilina',
      title: 'Test',
      epigraph: 'Epigraph',
      text: this.editorForm.value.editor  
    }).subscribe(res =>{
      console.log('res', res);
    });
  }

}
