import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: {};
  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(item => {
      if (!!item.id) {
        this.api.getArticle(item.id).subscribe(res => {
          if (!!res.data) {
            console.log(res.data);
            this.article = res.data;
          }
        });
      }
    });
  }
}
