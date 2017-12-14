// Copyright (c) 2017, Valiant Systems  and contributors
// For license information, please see license.txt
// import frappe.modules

frappe.ui.form.on('Module List', {
	refresh: function(frm) {

	}

});


frappe.ui.form.on("Module List", "onload", function(frm){

if(!frm.doc.__islocal)
{
cur_frm.save()
frappe.call({
method: "pms.pms.doctype.module_list.module_list.get_screens",
args: {
            project: frm.doc.project,
            module: frm.doc.name
                    },
callback: function (r) {
console.log(r.message)

for(var e=0; e<r.message.length; e++)
    {
        frappe.model.add_child(cur_frm.doc, "Module Screen Child", "table_9");  
        $.each(frm.doc.table_9 || [], function(e, v) {
        frappe.model.set_value(v.doctype, v.name, "screen_name", r.message[e][0])
        })
        frm.refresh_field("table_9");
    }

		}


	})
}
else {
	return 0;
}
});


