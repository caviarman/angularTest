import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  
  editorForm: FormGroup;

  ngOnInit() {

    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })

  }

  onSubmit() {
    console.log('1111', this.editorForm.value.editor);
  }
}
