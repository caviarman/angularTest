import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Array<any>;
  example: string;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getArticles().subscribe((res) => {
      console.log('res', res);
      if (!!res.data) {
        this.articles = res.data;
      }
      this.example = res.data[2].text;
    });
  }
  
}
