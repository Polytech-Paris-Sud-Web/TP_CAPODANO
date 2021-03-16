import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from '../article.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public articles : Article[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe((value) => {
      this.articles = value;
    })
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe((articles) => {
      this.getArticles();
    });
  }

  getArticles() {
    this.articleService.getArticles().subscribe((value) => {
      this.articles = value;
    })
  }
}
