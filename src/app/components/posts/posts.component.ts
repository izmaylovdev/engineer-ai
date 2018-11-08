import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import IPost from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts$: Observable<IPost[]>;
  public displayedColumns: string[] = [ 'title', 'url', 'created_at', 'author' ];

  constructor(private _data: DataService, private _dialog: MatDialog) { }

  ngOnInit() {
    this.posts$ = this._data.fetchData();
  }

  public showModal(post: IPost): void {
    this._dialog.open(ModalComponent, {
      width: '550px',
      data: post
    });
  }
}
