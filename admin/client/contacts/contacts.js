// Meteor.startup(function () {
//     navigations.add("contacts", "联系我们", "/contacts", "");
// });
//
// FlowRouter.route('/contacts', {
//     action: function (params, queryParams) {
//         FlowLayout.render('layout', {
//             content: "contacts"
//         });
//     }
// });
//
// Template.contacts.onCreated(function () {
//     this.subscribe("contacts");
//     // this.subscribe("goods");
//     // this.subscribe("users");
//     // navigations.focus("orders");
// });
//
// Template.contacts.onRendered(function () {
//     var grid = $("#datagrid").ligerGrid({
//         columns: [{
//             display: '日期',
//             render: function (r, d) {
//                 if (format(r.createdAt) === format(new Date())) {
//                     return '今天';
//                 } else {
//                     return format(r.createdAt);
//                 }
//             }
//         }, {
//             display: '时间',
//             render: function (r, d) {
//                 return format2(r.createdAt);
//             }
//         }, {
//             display: '备注',
//             render: function (r, d) {
//
//                 return r.values.note
//             }
//         }],
//         width: '100%',
//         height: '100%',
//         pageSize: 30,
//         pageSizeOptions: [30, 60, 100, 200],
//         dataAction: "client",
//         rownumbers: true
//     });
//
//     Tracker.autorun(function () {
//         var jsonObj = {};
//         jsonObj.Rows = Contacts.find({}, {sort: {createdAt: -1}}).fetch();
//         grid.set({
//             data: jsonObj
//         });
//     });
// });
