import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements : [
    {
      type : string,
      name: string,
      content: string,
    }
  ] = [{type: '', name: '', content: ''}];

  onServerEdit(event: {name: string, content: string}) {
    this.serverElements.push(
      {
        type: 'server',
        name: event.name,
        content: event.content,
      }
    );
  }

  onBluePrintEdit(event: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.name,
      content: event.content,
    });
  }

}
