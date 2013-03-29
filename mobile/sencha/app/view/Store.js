Ext.define('Sencha.view.Store', {
	extend: 'Ext.List',
	xtype: 'storecard',
	config: {
		iconCls: 'home',
		title: 'Store',
		itemTpl : '{itemTitle} ${price}',
		store: store
	}
});
