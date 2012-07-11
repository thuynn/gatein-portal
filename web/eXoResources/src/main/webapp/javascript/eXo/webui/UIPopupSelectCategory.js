/**
 * Copyright (C) 2009 eXo Platform SAS.
 * 
 * This is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 * 
 * This software is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this software; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA, or see the FSF
 * site: http://www.fsf.org.
 */

eXo.webui.UIPopupSelectCategory = {

  init : function(parentId) {
	  var parent = parentId;
	  if (typeof parent == "string") {
		  parent = gj("#" + parentId);
	  }
	  gj(parent).find(".UIPopupCategory").closest(".ControlIcon, .EditIcon").off("click").on("click", function(event) {
		  _module.UIPopupSelectCategory.show(this, event);
	  });
	  return false;
  }, 
  
  /**
   * Show UIPopupCategory object
   * 
   * @param {Object}
   *          obj document object contains UIPopupCategory
   * @param {Event}
   *          evt
   */
  show : function(obj, evt) {
    var popup = gj(obj).find("div.UIPopupCategory");
    if (popup.length && popup.css("display") == "none")
    {
      popup.show();
      gj(document).one("click", function()
	  {
    	  gj(document).one("click", function() {
    		  popup.hide();    		  
    	  });
	  });
    } 
  }
};

_module.UIPopupSelectCategory = eXo.webui.UIPopupSelectCategory;