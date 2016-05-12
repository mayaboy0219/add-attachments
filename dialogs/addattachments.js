/*
 * AddAttachments Plugin for CKEditor (https://github.com/mayaboy0219/add-attachments)
 * Created by omdriver.com - Wang Zhuo - 12. May 2016
 * Licensed under the terms of GPL, LGPL and MPL licenses.
 */

(function() {
	var attachmentDialog = function(editor, dialogType) {
		return {
			title: editor.lang.addattachments.title,
			minWidth: 420,
			minHeight: 160,
			onOk: function() {
				var addonUrl = this.getValueOf('Link', 'txtUrl');
				var addonTitle = this.getValueOf('Link', 'txtTitle');
				var tempVar = '<div class="attachments">\r';
				tempVar += '    <a target="_blank" href="' + addonUrl + '"><i></i>'+addonTitle+'</a>\r';
				tempVar += '</div>\r';
				editor.insertHtml(tempVar);
			},
			contents: [{
				id: 'Link',
				label: editor.lang.addattachments.labelLink,
				padding: 0,
				type: 'vbox',
				elements: [{
					type : 'vbox',
					padding: 0,
					children: [{
						id: 'txtTitle',
						type: 'text',
						label: editor.lang.addattachments.labelTxtTitle,
						style: 'width: 60%',
						'default': ''
					},
					{
						id: 'txtUrl',
						type: 'text',
						label: editor.lang.addattachments.labelTxtUrl,
						style: 'width: 100%',
						'default': ''
					},
					{
						type: 'button',
						id: 'browse',
						filebrowser: {
							action: 'Browse',
							target: 'Link:txtUrl',
							url: '../include/dialog/select_soft.php'
						},
						style: 'float:right',
						hidden: true,
						label: editor.lang.common.browseServer
					}]
				}]
			}]
		};
	};

	CKEDITOR.dialog.add('addattachments', function(editor) {
		return attachmentDialog(editor, 'addattachments');
	});
})();
