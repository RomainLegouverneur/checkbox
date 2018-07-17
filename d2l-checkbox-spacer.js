/**
`d2l-checkbox-spacer`
Spacer to align secondary content with checkboxes

@demo demo/index.html
*/
import '../@polymer/polymer/polymer-legacy.js';

import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="d2l-checkbox-spacer">
	<template strip-whitespace="">
		<style>
			:host {
				display: block;
				padding-left: 1.7rem;
				margin-bottom: 0.9rem;
			}
			:host-context([dir="rtl"]) {
				padding-right: 1.7rem;
				padding-left: 0;
			}
		</style>
		<slot></slot>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-checkbox-spacer'
});
