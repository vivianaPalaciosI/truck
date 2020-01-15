import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Truck} from '../../models/truck';
import {TruckService, ModalService } from '../../services';

@Component({
    selector: 'service',
    templateUrl: 'service.component.html',
    styleUrls: ['service.component.scss']
})

export class ServiceComponent implements  OnInit {
  trucks :Truck[] = [];
  truck_selected :Truck;
  quoteForm: FormGroup;
  constructor(
    private truckService: TruckService,
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {
    this.truck_selected = new Truck;
    this.truck_selected.name = '';
  }

  ngOnInit(): void {
    this.resetForm();
    this.getTrucks();
  }

  getTrucks(){
    this.truckService.getTrucks().toPromise().then(
      (data: Truck[]) => {
        this.trucks = data;
      }
    ) .catch(() => {
      console.log('Error: get trucks')
    });
  }

  openModalQuote(id: string, truck: Truck) {
    this.resetForm();
    this.truck_selected = truck;
    this.modalService.open(id);
  }

  closeModalQuote(id: string) {
    this.modalService.close(id);
    const payload: any = {
      type: this.truck_selected.id,
      name: this.quoteForm.get('name').value.trim(),
      mail: this.quoteForm.get('mail').value.trim(),
      phone: this.quoteForm.get('phone').value.trim(),
      origin: this.quoteForm.get('origin').value.trim(),
      destination: this.quoteForm.get('destination').value.trim(),
    };
    this.resetForm();
    console.log(payload)
  }

  resetForm(){
    this.quoteForm = this.formBuilder.group({
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

}
