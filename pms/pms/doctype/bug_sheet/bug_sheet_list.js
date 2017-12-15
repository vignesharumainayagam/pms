frappe.listview_settings['Bug Sheet'] = {
	add_fields: ["status"],
	get_indicator: function(doc) {
		if(doc.status=="Fixed") {
			return [__("Fixed"), "orange"];
		} else if(doc.status=="Verified") {
			return [__("Verified"), "green"];
		} else if(doc.status=="Open") {
			return [__("Open"), "red"];
		} else if(doc.status=="Re-open") {
			return [__("Re-open"), "red"];
		}
	}
};
