import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {

  articles: Array<any>;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getArticles().subscribe(res => {
      console.log('res', res);
      if (!!res.data) {
        this.articles = res.data;
      }
    });
  }
  deleteArticle(id) {
    this.api.deleteArticle(id).subscribe(res => {
      if (res.status) {
        this.articles = this.articles.filter(item => item.id !== id);
      }
    });
  }
}
