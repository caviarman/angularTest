import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  example: string;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getSome().subscribe((res) => {
      console.log('res', res);
      this.example = res.data.text;
    });
  }
  
}
