import { FlowRouter} from 'meteor/kadira:flow-router';
import { BlazeLayout} from 'meteor/kadira:blaze-layout';
// import './main.html';

//Layout Design//
// import '../../layouts/login/';
import '../../layouts/customer/';

//Project Modules//
// import '../../m_login/';
import '../../m_invoices/';



FlowRouter.notFound = {
	action() {

	}
};

// FlowRouter.route('/INV', {
// 	name: 'Home',
// 	action() {
// 		BlazeLayout.render('invMain', { add: "addInvoice", view: "viewInvoice" })
// 	}
// });

FlowRouter.route('/addinvoice', {
	name: 'addinvoice',
	action() {
		BlazeLayout.render('invMain', { display: "addInvoice" })
	}
});

FlowRouter.route('/viewinvoice', {
	name: 'viewinvoice',
	action() {
		BlazeLayout.render('invMain', {  display: "viewInvoice" })
	}
});

FlowRouter.route('/', {
	name: 'viewinvoice',
	action() {
		BlazeLayout.render('invMain', {  display: "viewInvoice" })
	}
});
