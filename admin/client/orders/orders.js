Meteor.startup(function () {
    navigations.add("index", "订单管理", "/", "cart-arrow-down");
});

FlowRouter.route('/', {
    action: function (params, queryParams) {
        FlowLayout.render('layout', {
            content: "orders"
        });
    }
});

Template.orders.onCreated(function () {
    this.subscribe("orders");
    // this.subscribe("goods");
    this.subscribe("users");
    // navigations.focus("orders");
});

Template.orders.onRendered(function () {
    var grid = $("#datagrid").ligerGrid({
        columns: [{
            display: '日期',
            render: function (r, d) {
                if (format(r.createAt) === format(new Date())) {
                    return '今天';
                } else {
                    return format(r.createAt);
                }
            }
        }, {
            display: '时间',
            render: function (r, d) {
                return format2(r.createAt);
            }
        }, {
            display: '姓名',
            render: function (r, d) {

                return r.username
            }
        }, {
            display: '手机号',
            render: function (r, d) {

                return r.tel
            }
        }, {
            display: '省份',
            render: function (r, d) {

                return r.cmbProvince
            }
        }, {
            display: '城市',
            render: function (r, d) {

                return r.cmbCity
            }
        }, {
            display: '区县',
            render: function (r, d) {

                return r.cmbArea
            }
        }, {
            display: '详细地址',
            width: 300,
            render: function (r, d) {

                return r.address
            }
        }, {
            display: '购买数量',
            render: function (r, d) {

                return r.number
            }
        }, {
            display: '价格',
            render: function (r, d) {

                return r.total
            }
        }, {
            display: '留言',
            width: 300,
            render: function (r, d) {

                return r.liuyan
            }
        }],
        width: '100%',
        height: '100%',
        pageSize: 30,
        pageSizeOptions: [30, 60, 100, 200],
        dataAction: "client",
        rownumbers: true,
    });

    Tracker.autorun(function () {
        var jsonObj = {};
        jsonObj.Rows = Orders.find().fetch();
        grid.set({
            data: jsonObj
        });
    });
    // edit = function (id) {
    //     var orders = Orders.findOne({
    //         _id: id
    //     });
    //
    //     $("#editFor").val(id);
    //     $("#e-status").val(orders.status);
    //
    //     $("#edit").show();
    //
    // }
    //
    // del = function (id) {
    //     Orders.remove({_id: id});
    // }


});
// Template.orders.events({
//     "click #update": function () {
//         Orders.update({
//             _id: $("#editFor").val()
//         }, {
//             $set: {status: $("#e-status").val()}
//         });
//         $("#edit").hide();
//
//
//     }
// });
