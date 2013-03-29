Ext.define("ListItem", {extend: "Ext.data.Model", 
	fields: [{name: 'text', type: 'string'}]
});


var nestedList = new Ext.NestedList({
    fullscreen: true,
    title: 'Groceries',
    displayField: 'text',
	data: [{
        text: 'Drinks',
        items: [{
            text: 'Water',
            items: [{
                text: 'Sparkling',
                leaf: true
            },{
                text: 'Still',
                leaf: true
            }]
        },{
            text: 'Coffee',
            leaf: true
        },{
            text: 'Espresso',
            leaf: true
        },{
            text: 'Redbull',
            leaf: true
        },{
            text: 'Coke',
            leaf: true
        },{
            text: 'Diet Coke',
            leaf: true
        }]
    },{
        text: 'Fruit',
        items: [{
            text: 'Bananas',
            leaf: true
        },{
            text: 'Lemon',
            leaf: true
        }]
    },{
        text: 'Snacks',
        items: [{
            text: 'Nuts',
            leaf: true
        },{
            text: 'Pretzels',
            leaf: true
        },{
            text: 'Wasabi Peas',
            leaf: true
        }]
    },{
        text: 'Empty Category',
        items: []
    }]
});


Ext.application({
    name: 'Sencha',
	//controllers: ['Main'],
	views: ['Main'],
    launch: function() {
	Ext.Viewport.add({
		xclass: 'Sencha.view.Main'
       });
   }
});
