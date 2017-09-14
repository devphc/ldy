
const price = 990;

function setTotal() {
    return $('#total').html('¥' + price * $('.text_box').val());
}

Template.site.onCreated(function () {
});
Template.site.helpers({});
Template.site.events({
    "click .min": function () {
        var t = $('.text_box');
        if (t.val() > 1) {
            t.val(t.val() - 1);
        } else {
            t.val(1)
        }
        setTotal()
    },
    "click #submit": function (event) {
        event.preventDefault();

        const number = $('#number').val();
        const total = number * 990;
        const username = $('#username').val();
        const tel = $('#tel').val();
        const cmbProvince = $('#cmbProvince').val();
        const cmbCity = $('#cmbCity').val();
        const cmbArea = $('#cmbArea').val();
        const address = $('#address').val();
        const liuyan = $('#liuyan').val();
        const productName = '130张面值990元兑换：价格990元';

        const telLength = tel.toString().length;

        if (!username) {
            alert('请填写姓名');
            return;
        }
        if (!tel) {
            alert('请填写手机号');
            return;
        }
        if (!address) {
            alert('请填写详细地址');
            return;
        }

        if (telLength !== 11) {
            alert('请填写正确的手机号');
            return;
        }

        Meteor.call("saveOrders", {
            number: number,
            total: total,
            username: username,
            tel: tel,
            cmbProvince: cmbProvince,
            cmbCity: cmbCity,
            cmbArea: cmbArea,
            address: address,
            liuyan: liuyan,
            productName: productName,
            createAt: new Date()
        }, (err, res) => {
            if (err) {
                alert(err);
            } else {
                alert("订单创建成功");
                $('#number').val(1);
                $('#total').html('¥' + 990);
                $('#username').val('');
                $('#address').val('');
                $('#liuyan').val('请尽快安排发货，送货之前手机联系，谢谢');
                $('#tel').val('');
            }
        });

    }
});

Template.site.onRendered(function () {
    addressInit('cmbProvince', 'cmbCity', 'cmbArea', '北京市', '北京市', '东城区');
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        mousewheelControl: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
});
