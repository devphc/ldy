import { Meteor } from 'meteor/meteor';

Meteor.methods({
    saveOrders: function (args) {
        check(args, Object);

        Orders.insert({
            number: args.number,
            total: args.total,
            username: args.username,
            tel: args.tel,
            cmbProvince: args.cmbProvince,
            cmbCity: args.cmbCity,
            cmbArea: args.cmbArea,
            address: args.address,
            liuyan: args.liuyan,
            productName: args.productName,
            createAt: args.createAt
        });
        return args;
    }
});
