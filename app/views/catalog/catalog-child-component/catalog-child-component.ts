import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'catalog-child-component',
  templateUrl: './catalog-child-component.html',
  styleUrls: ['./catalog-child-component.css'],
})
export class CatalogChildComponent implements OnInit {
  @Input() item = ''; // decorate the property with @Input()

  constructor() {}

  ngOnInit() {}
}
