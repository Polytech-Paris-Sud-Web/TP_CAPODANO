import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../models/article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  constructor() {
  }

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  delete(){
    this.deletedArticle.emit(this.article);
  }

  ngOnInit() {
  }

}
