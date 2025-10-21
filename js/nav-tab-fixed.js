import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavTabFixed extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-tab", "fixed")

  this.innerHTML = /* HTML */`
   <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">distance</span>
    Ubicar
   </a>

   <a ${resaltaSiEstasEn(["/secundaria.html"])} href="secundaria.html">
    <span class="material-symbols-outlined">archive</span>
    Archivos
   </a>

   <a id="navtabfixed" ${resaltaSiEstasEn(["/navTabFixed.html"])}
     href="navTabFixed.html">
    <span class="material-symbols-outlined">photo_camera</span>
    Cámara
   </a>

   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">help</span>
    Ayuda
   </a>`
 }

}

customElements.define("nav-tab-fixed", NavTabFixed)