import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostComment} from "../../interfaces/post-comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment?: PostComment
  @Output() onDeleteComment: EventEmitter<PostComment> = new EventEmitter<PostComment>();

  constructor() { }

  ngOnInit(): void {}

  deleteComment() {
    this.onDeleteComment.emit(this.comment);
  }
}
