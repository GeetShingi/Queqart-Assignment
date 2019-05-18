import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { throwError } from 'rxjs';
import { Post } from '../shared/post';
import { Comment } from '../shared/comment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  userId: string = undefined;
  username: string = undefined;
  private currentUser: firebase.User = null;
  constructor(private afs: AngularFirestore,
    private authService: AuthService) { 
      this.authService.getAuthState()
      .subscribe((user) => {
        if (user) {
          // User is signed in.
          this.userId = user.uid;
          this.username = user.email;
        } else {
          this.userId = undefined;
        }
      });
    }
    getBlogs(): Observable<Post[]> {
      return this.afs.collection<Post>('blogs').snapshotChanges()
      .pipe(map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Post;
          const _id = action.payload.doc.id;
          return { _id, ...data };
        });
      }));
    }
  
    getDish(id: string): Observable<Post> {
      return this.afs.doc<Post>('blogs/' + id).snapshotChanges()
      .pipe(map(action => {
          const data = action.payload.data() as Post;
          const _id = action.payload.id;
          return { _id, ...data };
        }));
    }
    getComments(id: string): Observable<any[]> {
      return this.afs.collection('blogs').doc(id).collection('comments').snapshotChanges()
      .pipe(map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Post;
          const _id = action.payload.doc.id;
          return { _id, ...data };
        });
      }));
    }

    postblog(name: string,description: string,image: string) {
      if (this.userId) {
        return this.afs.collection('blogs').add({userid: this.userId, name: name, description: description, edit: false, image: image});
      } else {
        return Promise.reject(new Error('No User Logged In!'));
      }
    }

    putBlog(id: string,name: string,description: string) {
      if (this.userId) {
        return this.afs.collection('blogs').doc(id).update({name: name, description: description });
      } else {
        return Promise.reject(new Error('No User Logged In!'));
      }
    }
    postcomment(id: string,comment: string)
    {
      if (this.userId) {
        return this.afs.collection('blogs').doc(id).collection('comments').add({userid : this.userId,author: this.username,comment: comment,createdAt: new Date(),edit: false})
      } else {
        return Promise.reject(new Error('No User Logged In!'));
      }
    }
    deleteBlog(id: string): Promise<void> {
      const db = firebase.firestore();
      if (this.userId) {
          // return db.doc('blogs/' + id + '/comments').delete();
          return db.doc('blogs/' + id).delete();
      } else {
        return Promise.reject(new Error('No User Logged In!'));
      }
    }
    putcomment(id:string,commentid: string,comment: string)
    {
      if (this.userId) {
        return this.afs.collection('blogs').doc(id).collection('comments').doc(commentid).update({comment: comment });
      } else {
        return Promise.reject(new Error('No User Logged In!'));
      }
    }
    deleteComment(id: string,commentid: string): Promise<void> {
      const db = firebase.firestore();
      if (this.userId) {
          return db.doc('blogs/' + id + '/comments/' + commentid).delete();
      } else {
        return Promise.reject(new Error('No User Logged In!'));
      }
    }
}
