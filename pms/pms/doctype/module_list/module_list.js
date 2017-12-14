// Copyright (c) 2017, Valiant Systems  and contributors
// For license information, please see license.txt
// import frappe.modules

frappe.ui.form.on('Module List', {
	refresh: function(frm) {

	}

});


// frappe.ui.form.on("Module List", "onload", function(frm){
// frappe.call({
// method: "pms.pms.doctype.module_list.module_list.get_screens",
// args: {
//             project: frm.doc.project,
//             module: frm.doc.name
//                     },
// callback: function (r) {
// 			data = r.message;
// 			for (var k=0; k < data.length; k++){
// 			frappe.model.add_child(cur_frm.doc, "Module Screen Child", "table_9"); 
// 			$.each(frm.doc.table_9 || [], function(e, v){
// 			frappe.model.set_value(v.doctype, v.name, "screen_name", data[k][0])
// 			})

// 			}


// 		}

// 	})

// });




// frappe.ui.form.on("Module List", "onload", function(frm){
// frappe.call({
// method: "pms.pms.doctype.module_list.module_list.delete",
// args: {
//             project: frm.doc.project,
//             module: frm.doc.name
//                     },
// callback: function (r) {
// cur_frm.save();
// }
// })
// });

// for(var i=0; i<r.message.length; i++){
// frappe.model.add_child(cur_frm.doc, "Module Screen Child", "table_9");  	
// $.each(frm.doc.table_9 || [], function(e, v) {
// frappe.model.set_value(v.doctype, v.name, "screen_name", r.message[i][0])
// })
//  frm.refresh_field("table_9");
// }