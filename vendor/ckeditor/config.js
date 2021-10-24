/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.contentsCss = '/css/style.css';
    config.allowedContent = true;
	config.extraPlugins = 'lineutils,widgetselection,oembed,widget,btgrid,showblocks';

    config.filebrowserImageUploadUrl = "/admin/ckeditor/upload?_token=" + $('meta[name="csrf-token"]').attr('content');
    config.filebrowserUploadMethod = 'form';

	config.toolbar = 'Default';

	config.toolbar_Full =
	[
		{ name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
		{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
		{ name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
		{ name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton',
	        'HiddenField' ] },
		'/',
		{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
		'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
		{ name: 'links', items : [ 'Link','Unlink','Anchor' ] },
		{ name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
		'/',
		{ name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
		{ name: 'colors', items : [ 'TextColor','BGColor' ] },
		{ name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
	];

	config.toolbar_Default =
	[
		{ name: 'clipboard', items : ['PasteText','PasteFromWord' ] },
		{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','-','RemoveFormat' ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-',
		'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','Blockquote','CreateDiv', ] },
		{ name: 'insert', items : ['Table','Image','Iframe'] },
		'/',
		{ name: 'links', items : [ 'Link','Unlink','Anchor' ] },
		{ name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
		{ name: 'colors', items : [ 'TextColor','BGColor' ] },
		{ name: 'elements', items : [ 'table','btgrid','HorizontalRule' ] },
		{ name: 'document', items : [ 'Source','ShowBlocks' ] }
	];

	config.toolbar_CompanyEdit =
	[
		{ name: 'clipboard', items : ['PasteText','PasteFromWord' ] },
		{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','-','RemoveFormat' ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList'] },
		{ name: 'insert', items : [ 'Link','Unlink' ] },
	];

	config.colorButton_colors = '127AAE,454545,FFF,CCC,DDD,CCEAEE,66AB16';
};
