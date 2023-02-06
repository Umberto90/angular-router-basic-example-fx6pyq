import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'catalog-parent-component',
  templateUrl: './catalog-parent-component.html',
  styleUrls: ['./catalog-parent-component.css'],
})
export class CatalogViewComponent {
  currentItem = 'Television';
}
