from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Requiment Gathering & Management"),
			"items": [
				{
					"type": "doctype",
					"name": "Project"
				},				
				{
					"type": "doctype",
					"name": "Module List",
					"label": "Module"
				},
				{
					"type": "doctype",
					"name": "Screen List"
				}
			]
		},
		{
			"label": _("Bug & Error Tracking "),
			"items": [
				{
					"type": "doctype",
					"name": "Bug Sheets"
				},			
		 	# 	{
				# 	"type": "page",
				# 	"name": "pms",
				# 	"label": _("PMS"),
				# 	"description": _("PMS")
				# },
		# 		{
		# 			"type": "doctype",
		# 			"name": "Screen List"
		# 		}
			]
		},
		{
			"label": _("Setup"),
			"items": [
				{
					"type": "doctype",
					"name": "Field Type"
				},			
				{
					"type": "doctype",
					"name": "Validation"
				}
			]
		},		
	] 