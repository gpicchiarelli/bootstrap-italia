---
layout: docs
title: Torna su
description: Consente agli utenti di scorrere agevolmente verso la parte superiore della pagina.
group: menu-di-navigazione
toc: true
---

Per aggiungere un pulsante che si abilita automaticamente allo scorrimento della pagina, e che aiuta l'utente a tornare in alto con un solo click su di esso, è sufficiente usare un link con attributo `data-bs-toggle="backtotop"` e con una classe `.back-to-top` che lo posiziona nella parte inferiore destra nella pagina.
Le animazioni sono state realizzate con il plugin javascript [AnimeJs](https://animejs.com).

<style>
  /* Style override for Documentation purposes */
  .back-to-top:not(#example) {
    position: relative;
    bottom: unset;
    right: unset;
    visibility: visible;
    margin: 0 auto;
    opacity: 1;
    transform: scale(1);
  }
</style>

## Esempio

Per visualizzare il Back to top nella posizione corretta è necessario scrollare questa pagina. L'esempio del codice sottostante sarà visibile solo a scroll avvenuto.

{% comment %}Example name: Base, funzionante{% endcomment %}
{% capture example %}
<a href="#" aria-label="Torna su" data-bs-toggle="backtotop" class="back-to-top" id="example">
<svg class="icon icon-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
</a>
{% endcapture %}{% include example.html content=example %}

**Per facilitare la visualizzazione delle varie versioni di Back to top disponibili i seguenti esempi saranno visualizzati in linea.**

{% comment %}Example name: Base, esempio{% endcomment %}
{% capture example %}
<a href="#" aria-label="Torna su" data-bs-toggle="backtotop" class="back-to-top">
<svg class="icon icon-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
</a>
{% endcapture %}{% include example.html content=example %}

### Versione ridotta

Aggiungendo la classe `.back-to-top-small` al link si ottiene un pulsante di dimensioni ridotte.

{% comment %}Example name: Compatto, esempio{% endcomment %}
{% capture example %}
<a href="#" aria-label="Torna su" data-bs-toggle="backtotop" class="back-to-top back-to-top-small">
<svg class="icon icon-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
</a>

{% endcapture %}{% include example.html content=example %}

### Versione con ombra

Aggiungendo la classe `.shadow` al link si aggiunge un'ombra al pulsante.

{% comment %}Example name: Con ombra, esempio{% endcomment %}
{% capture example %}
<div class="d-flex align-items-center">
  <a href="#" aria-label="Torna su" data-bs-toggle="backtotop" class="back-to-top shadow">
    <svg class="icon icon-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
  </a>
  <a href="#" aria-label="Torna su" data-bs-toggle="backtotop" class="back-to-top back-to-top-small shadow">
    <svg class="icon icon-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
  </a>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione per sfondo scuro

Aggiungendo la classe `.dark` al link si ottiene un pulsante utilizzabile su sfondo scuro.

{% comment %}Example name: Per sfondo scuro, esempio{% endcomment %}
{% capture example %}
<div class="d-flex align-items-center p-4 neutral-1-bg-a8">
  <a href="#" aria-label="Torna su" data-bs-toggle="backtotop" class="back-to-top dark">
    <svg class="icon icon-secondary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
  </a>
  <a href="#" aria-label="Torna su" data-bs-toggle="backtotop" class="back-to-top back-to-top-small dark">
    <svg class="icon icon-secondary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
  </a>
</div>
{% endcapture %}{% include example.html content=example %}

#### Ombra su sfondo scuro

Aggiungendo le classi `.dark` e `.shadow` al link si ottiene un pulsante con ombra utilizzabile su sfondo scuro.

{% comment %}Example name: Con ombra, per sfondo scuro, esempio{% endcomment %}
{% capture example %}
<div class="d-flex align-items-center p-4 neutral-1-bg-a8">
  <a href="#" aria-label="Torna su" data-bs-toggle="backtotop" class="back-to-top dark shadow">
    <svg class="icon icon-secondary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
  </a>
  <a href="#" aria-label="Torna su" data-bs-toggle="backtotop" class="back-to-top back-to-top-small dark shadow">
    <svg class="icon icon-secondary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
  </a>
</div>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite codice

{% include callout-bundle-methods.md %}

È possibile creare un'istanza con il constructor, ad esempio:

```js
import { BackToTop } from 'bootstrap-italia';

const backToTopElement = document.getElementById('#backToTop');
const backToTop = new BackToTop(backToTopElement, options);
```

#### Opzioni

Le opzioni possono essere passate tramite gli attributi data o tramite Javascript. Per quanto riguarda gli attributi data, aggiungi il nome dell'opzione a `data-bs`, come in `data-bs-scroll-limit=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Nome</th>
      <th style="width: 50px;">Tipo</th>
      <th style="width: 50px;">Predefinito</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>positionTop</td>
      <td>number </td>
      <td>0</td>
      <td>Posizione Y espressa in pixel alla quale ritornarne al click sull'elemento</td>
    </tr>
    <tr>
      <td>scrollLimit</td>
      <td>number </td>
      <td>100</td>
      <td>Posizione Y espressa in pixel alla quale far comparire l'elemento</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>number</td>
      <td>800</td>
      <td>Durata dell'animazione di scroll espressa in millisecondi</td>
    </tr>
    <tr>
      <td>easing</td>
      <td>string</td>
      <td>easeInOutSine</td>
      <td>Inerzia dell'animazione di scroll. Per i valori fare riferimento alla <a href="https://animejs.com/documentation/#linearEasing">documentazione di AnimeJs</a>.</td>
    </tr>
  </tbody>
</table>

#### Metodi

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show</td>
      <td>Mostra il pulsante</td>
    </tr>
    <tr>
      <td>hide</td>
      <td>Nasconde nasconde il pulsante</td>
    </tr>
    <tr>
      <td>scrollToTop</td>
      <td>Attiva l'animazione di scroll verso la coordinata Y indicata dall'opzione <code>positionTop</code></td>
    </tr>
  </tbody>
</table>

## Breaking change

{% capture callout %}
- Rimossi gli attributi `tabindex="-1"` e `aria-hidden="true"` per permettere il focus da tastiera e l'interazione da strumenti assistivi. 
- Aggiunto attributo `aria-label="Torna su"` per comunicare lo scopo a strumenti assistivi.
{% endcapture %}{% include callout-breaking.html content=callout version="2.12.0" type="danger" %}
