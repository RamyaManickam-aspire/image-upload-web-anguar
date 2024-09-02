import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'web-angular';
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onFileUpload(event: any) {
    event.preventDefault();
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.http
        .post(
          'https://image-upload-node-server-o7yeawi66q-uc.a.run.app/upload',
          formData
        )
        .subscribe((response) => {
          console.log('File uploaded successfully', response);
        });
    }
    var form: any = document.getElementById('myForm');
    form.reset();
  }
}
