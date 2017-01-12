import { FlowRouter} from 'meteor/kadira:flow-router';
import { BlazeLayout} from 'meteor/kadira:blaze-layout';
import './main.html';

FlowRouter.notFound = {
	action() {

	}
};

FlowRouter.route('/INV', {
	name: 'Home',
	action() {
		BlazeLayout.render('invMain', { add: "addInvoice", view: "viewInvoice" })
	}
});
