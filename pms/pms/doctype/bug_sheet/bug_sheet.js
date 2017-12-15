// Copyright (c) 2017, Valiant Systems  and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bug Sheet', {
	refresh: function(frm) {

	}
});

// frappe.ui.from.on("Bug Sheet", "onload", function(frm){
// alert("Hi")
// });

// frappe.ui.form.on("Bug Sheet", "onload", function(frm){
// $( ".col-md-2" ).remove();
// });

frappe.ui.form.on("Bug Sheet", "validate", function(frm){
var data = frappe.datetime.now_date();
if (frm.doc.status == "Fixed") {
cur_frm.set_value("fixed_on", data);
}
else if (frm.doc.status == "Verified") {
cur_frm.set_value("verified_on", data);	
}
});