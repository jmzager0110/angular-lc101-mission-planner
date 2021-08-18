import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  
  equipment: string[] = ['Habitat Dome', 'Drones', 'Food Containers', 'Oxygen Tanks'];

  constructor() { }

  ngOnInit() {
  }

  addEq(eqName: string) {
    this.equipment.push(eqName)
  }

  removeEq(eqName: string) {
    let index = this.equipment.indexOf(eqName);
    this.equipment.splice(index, 1);
  }

  eqBeingEdited: string = null;

  editEq(eqName: string) {
    this.eqBeingEdited = this.equipment;
  }



}
