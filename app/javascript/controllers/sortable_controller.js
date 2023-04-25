import { Controller } from "@hotwired/stimulus"
import Sortable from 'sortablejs'
import { patch } from "@rails/request.js"

// Connects to data-controller="sortable"
export default class extends Controller {
  connect() {
    //console.log('Do what you want here.')
    this.sortable = Sortable.create( this.element, {
      handle: ".postit",
      group: "shared",
      animation: 150,
      onEnd: this.end.bind(this)
    })
  }

  end(event) {
    // console.log(event)
    const elItem = event.item
    const id = elItem.dataset.id
    const bloc_number = elItem.parentElement.dataset.bloc
    const href = this.data.get("url").replace(":id", id)
    patch( `${ href }`, {
      body: JSON.stringify({ position: event.newIndex + 1, bloc: bloc_number }),
    })
  }

}
