Ext.define("App.view.systemmanage.sysuser.SysUserController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysuser',

    //新增
    onAdd: function () {
        var me = this, window, record, view = me.getView();
        record = Ext.create("App.model.systemmanage.SysUser");
        window = Ext.widget({
            title: "新增用户",
            xtype: "sysuseredit",
            status: "add",
            scope: view,
            viewModel: {
                data: {
                    user: record.data
                },
                stores: {
                    treestore: {
                        type: "systemmanage.sysorg.treestore",
                    }
                }
            }
        });
        window.show();
    },

    //编辑
    onEdit: function () {
        var me = this, view = me.getView(), grid = view.getGrid("Grid"), window, record;
        if (App.Page.selectionModel(grid, false)) {
            record = grid.getSelectionModel().getSelection()[0];
            window = Ext.widget({
                title: "编辑用户",
                xtype: "sysuseredit",
                status: "edit",
                scope: view,
                viewModel: {
                    data: {
                        user: record.data
                    },
                    stores: {
                        treestore: {
                            type: "systemmanage.sysorg.treestore",
                        }
                    }
                }
            });
            window.show();
        };
    },

    //删除
    onDelete: function () {
        var me = this, view = me.getView(), grid = view.getGrid("Grid"), records, idArray = [];
        if (App.Page.selectionModel(grid, true)) {
            records = grid.getSelectionModel().getSelection();
            Ext.each(records, function (record, index) {
                idArray.push(record.id);
            })
            Ext.Msg.confirm("提示", "确认删除选中的" + idArray.length + "行数据项吗？",
                function (btn) {
                    if (btn == "yes") {
                        App.Ajax.request({
                            url: "~/api/SystemManage/SysUser/DeleteSysUser",
                            method: "POST",
                            nosim: false,
                            type: "JSON",
                            showmask: true,
                            maskmsg: "正在删除...",
                            params: idArray,
                            success: function (data) {
                                App.Msg.Info("删除成功");
                                var gridstore = grid.getStore();
                                gridstore.loadPage(1);
                            },
                            error: function (data) {
                                App.Msg.Error("删除失败");
                            }
                        })
                    }
                })
        }
    },

    //分配角色
    onUserRole: function () {
        var me = this, grid = me.getView().getGrid("Grid"), sysUserId, userRole;
        if (App.Page.selectionModel(grid, false)) {
            sysUserId = grid.getSelection()[0].get("SysUserId");
            userRole = Ext.widget("sysuserrole", {
                viewModel: {
                    data:{
                        UserId:sysUserId
                    },
                    stores: {
                        roleStore: {
                            type: "systemmanage.sysuser.comboxrolestore"
                        }
                    }
                }
            })
            userRole.show();
        }
    }
})