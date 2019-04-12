Ext.define("App.view.theme.Theme", {
    xtype: "theme",
    routeId: "theme",
    extend: "Ext.panel.Panel",
    iconCls: "x-fa fa-laptop",
    title: "主题",
    layout: {
        type: 'vbox',
        align: "stretch"
    },
    items: [
        {
            xtype: "container",
            flex: 1,
            layout: {
                type: 'hbox',
                align: "stretch"
            },
            defaults: {
                flex: 1,
                style: {
                    border:"1px #ddd solid"
                }
            },
            defaultType: "panel",
            items: [
                {
                    layout: "fit",
                    margin:"20px 10px 10px 20px",
                    tbar: [
                        {
                            xtype: 'container',
                            html: "主题一",
                            style: {
                                "font-size": "20px",
                                "font-weight": 600
                            }
                        }
                    ],
                    items: [{ xtype: "image", src: "resources/images/theme/Theme1.bmp" }]
                },
                {
                    layout: 'fit',
                    margin:"20px 10px 10px 10px",
                    tbar: [
                        {
                            xtype: 'container', html: "主题二",
                            style: {
                                "font-size": "20px",
                                "font-weight": 600
                            }
                        }
                    ],
                    items: [{ xtype: "image", src: "resources/images/theme/ing.png", height: "60%", width: "60%" }]
                },
                {
                    layout: 'fit',
                    margin:"20px 20px 10px 10px",
                    tbar: [
                        {
                            xtype: 'container', html: "主题三",
                            style: {
                                "font-size": "20px",
                                "font-weight": 600
                            }
                        }
                    ],
                    items: [{ xtype: "image", src: "resources/images/theme/ing.png", height: "60%", width: "60%" }]
                }
            ]
        },
        {
            xtype: "container",
            flex: 1,
            layout: {
                type: 'hbox',
                align: "stretch"
            },
            defaults: {
                flex: 1,
                style: {
                    border:"1px #ddd solid"
                }
            },
            defaultType: "panel",
            items: [
                {
                    layout: "fit",
                    margin:"10px 10px 20px 20px",
                    tbar: [
                        {
                            xtype: 'container', html: "主题四",
                            style: {
                                "font-size": "20px",
                                "font-weight": 600
                            }
                        }
                    ],
                    items: [{ xtype: "image", src: "resources/images/theme/ing.png", height: "60%", width: "60%" }]
                },
                {
                    layout: 'fit',
                    margin:"10px 10px 20px 10px",
                    tbar: [
                        {
                            xtype: 'container', html: "主题五",
                            style: {
                                "font-size": "20px",
                                "font-weight": 600
                            }
                        }
                    ],
                    items: [{ xtype: "image", src: "resources/images/theme/ing.png", height: "60%", width: "60%" }]
                },
                {
                    layout: 'fit',
                    margin:"10px 20px 20px 10px",
                    tbar: [
                        {
                            xtype: 'container', html: "主题六",
                            style: {
                                "font-size": "20px",
                                "font-weight": 600
                            }
                        }
                    ],
                    items: [{ xtype: "image", src: "resources/images/theme/ing.png", height: "60%", width: "60%" }]
                }
            ]
        }
    ]
})