Ext.define('Sencha.view.Now', {
	extend: 'Ext.Container',
	xtype: 'nowcard',
	config: {
		iconCls: 'star',
		title: 'Now',
		defaults: { flex: 1 },
		layout: {
			type: 'vbox',
			pack: 'center'
		},
		items: [
			{
				style: "background-color: #FF0000; color: white",
				title: "Red",
				html: "Song title"
			},
			{
				style: "background-color: #FFBF00; color: white",
				title: "Amber",
				flex: 3,
				html: "Song Lyrics"
			}
		]
	}
});