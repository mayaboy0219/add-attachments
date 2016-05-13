/*
 * AddAttachFile Plugin for CKEditor (https://github.com/mayaboy0219/addattachfile)
 * Created by omdriver.com - Wang Zhuo - 12. May 2016
 * Licensed under the terms of GPL, LGPL and MPL licenses.
 */

(function() {
	var attachFileDialog = function(editor, dialogType) {
		return {
			title: editor.lang.addattachfile.title,
			minWidth: 420,
			minHeight: 160,
			onOk: function() {
				var attachFileUrl = this.getValueOf('Link', 'txtUrl');
				var attachFileTitle = this.getValueOf('Link', 'txtTitle');
				var tempVar = '<a target="_blank" href="' + attachFileUrl + '"><img src="/images/2016/addattachfile.png" alt="Attach File" />'+attachFileTitle+'</a>\r';
				editor.insertHtml(tempVar);
			},
			contents: [{
				id: 'Link',
				label: editor.lang.addattachfile.labelLink,
				padding: 0,
				type: 'vbox',
				elements: [{
					type : 'vbox',
					padding: 0,
					children: [{
						id: 'txtTitle',
						type: 'text',
						label: editor.lang.addattachfile.labelTxtTitle,
						style: 'width:60%; margin-bottom:10px;',
						'default': ''
					},
					{
						id: 'txtUrl',
						type: 'text',
						label: editor.lang.addattachfile.labelTxtUrl,
						style: 'width:100%; margin-bottom:10px;',
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

	CKEDITOR.dialog.add('addattachfile', function(editor) {
		return attachFileDialog(editor, 'addattachfile');
	});
})();
