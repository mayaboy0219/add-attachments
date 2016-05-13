/*
 * AddAttachFile Plugin for CKEditor (https://github.com/mayaboy0219/addattachfile)
 * Created by omdriver.com - Wang Zhuo - 12. May 2016
 * Licensed under the terms of GPL, LGPL and MPL licenses.
 */

CKEDITOR.plugins.add('addattachfile', {
	requires: 'fakeobjects',
	lang: 'en,zh-cn',
	icons: 'addattachfile',
	hidpi: true,
	init: function(editor) {
		var pluginName = 'addattachfile'; // dialogCommand
		
		// Register the dialog.
		CKEDITOR.dialog.add(pluginName, this.path + 'dialogs/addattachfile.js');

		// Register the command.
		editor.addCommand(pluginName, new CKEDITOR.dialogCommand(pluginName));
		
		// Register the toolbar button.
		editor.ui.addButton && editor.ui.addButton('AddAttachFile', {
			label: editor.lang.addattachfile.label,
			command: pluginName
		});
	}
});
