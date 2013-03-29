Ext.define('Sencha.view.Main', {
    extend: 'Ext.TabPanel',
	requires: [
		'Sencha.view.Now',
		'Sencha.view.Connect',
		'Sencha.view.About',
		'Sencha.view.Store',
		],
	
    config: {
		tabBar: {
			docked: 'bottom',
			layout: {
				pack: 'center'
				}
		},
        items: [
			{
				xtype: 'nowcard'
			},
			{
				xtype: 'connectcard'
			},
			{
				xtype: 'aboutcard'
			},
			nestedList,
		]
    }
});