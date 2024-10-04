import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MarkdownContentComponent } from '../../shared/components/markdown-content.component';

@Component({
  selector: 'pvs-content-page',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, MarkdownContentComponent, MarkdownContentComponent],
  templateUrl: './content-page.component.html',
  preserveWhitespaces: true,
})
export class ContentPageComponent {
  public pageTitle = input.required<string>();
  public contentSrc = input<string | null>(null);
}
