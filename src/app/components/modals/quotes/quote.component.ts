import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from '../../../services';


@Component({
  selector: 'quote-modal',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteComponent implements OnInit, OnDestroy {
  @Input() id: string;
  // @Input() my_modal_title;
  // @Input() my_modal_content;


  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', el => {
        if (el.target.className === 'quote-modal') {
            this.close();
        }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  // open modal
  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('quote-modal-open');
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('quote-modal-open');
  }
}
