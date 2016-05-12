/*
 * AddAttachments Plugin for CKEditor (https://github.com/mayaboy0219/add-attachments)
 * Created by omdriver.com - Wang Zhuo - 12. May 2016
 * Licensed under the terms of GPL, LGPL and MPL licenses.
 */

CKEDITOR.plugins.add( 'addattachments', {
	requires: 'fakeobjects',
	lang: 'en,zh-cn',
	icons: 'addattachments',
	hidpi: true,
	init: function(editor) {
		var pluginName = 'addattachments'; // dialogCommand
		
		// Register the dialog.
		CKEDITOR.dialog.add(pluginName, this.path + 'dialogs/addattachments.js');

		// Register the command.
		editor.addCommand(pluginName, new CKEDITOR.dialogCommand(pluginName));
		
		// Register the toolbar button.
		editor.ui.addButton && editor.ui.addButton(pluginName, {
			label: editor.lang.addattachments.label,
			command: pluginName
		});
	}
});
