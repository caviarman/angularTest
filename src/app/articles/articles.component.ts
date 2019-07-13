import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Array<any>;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getArticles().subscribe((res) => {
      console.log('res', res);
      if (!!res.data) {
        this.articles = res.data;
        this.articles = this.articles.map(item => {
          item.text = `${item.text}<a href="article/${item.id}">...далее</a>`;
          return item;
        });
      }
    });
  }
  
}
