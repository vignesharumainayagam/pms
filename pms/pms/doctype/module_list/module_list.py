# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems  and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class ModuleList(Document):
	pass



@frappe.whitelist()
def get_screens(project, module):
	data = frappe.db.sql("""SELECT screen_name FROM `tabScreen List` WHERE project=%s AND module=%s""",(project, module))
	return data