// Copyright (c) 2017, Valiant Systems  and contributors
// For license information, please see license.txt

frappe.ui.form.on('Screen List', {
	refresh: function(frm) {
$(frm.fields_dict['html_field'].wrapper).html("<h1>Screen Design </h1>");
	}
});

