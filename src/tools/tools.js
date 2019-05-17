import {
   createTool,
   selectParent,
   addSeperator,
   addSelectOption
} from "./tool-logic";

import {
   ID,
   ICON,
   FONTS,
   CLASS,
   ELEMENT,
   TOOLBAR,
   FONT_SIZE,
   HEADING_TYPES
} from "../constants";

/**
 * Add Heading types in toolbar.
 *
 * @param {Object} parent
 */
export const addHeadingTypeList = parent => {
   const selectTagParent = selectParent(parent);
   const headingTypeList = createTool({
      id: ID.HEADING_TYPE,
      type: ELEMENT.SELECT,
      parent: selectTagParent,
      className: CLASS.SELECT_TAG
   });

   addSeperator(selectTagParent);
   addSelectOption(headingTypeList, HEADING_TYPES);
};

/**
 * Adds font list to toolbar.
 *
 * @param {Object} parent
 */
export const addFontList = parent => {
   const selectTagParent = selectParent(parent);
   const fontList = createTool({
      id: ID.FONT_LIST,
      type: ELEMENT.SELECT,
      parent: selectTagParent,
      className: CLASS.SELECT_TAG
   });

   addSeperator(selectTagParent);
   addSelectOption(fontList, FONTS);
};

/**
 * Adds font sizes in toolbar.
 *
 * @param {Object} parent
 */
export const addFontSizeList = parent => {
   const selectTagParent = selectParent(parent);
   const fontSizeList = createTool({
      id: ID.FONT_SIZE_LIST,
      type: ELEMENT.SELECT,
      parent: selectTagParent,
      className: CLASS.SELECT_TAG
   });

   addSeperator(selectTagParent);
   addSelectOption(fontSizeList, FONT_SIZE);
};

/**
 * Adds bold botton to toolbar.
 *
 * @param {Object} parent
 */
export const addBoldBtn = parent => {
   const boldBtn = createTool({
      parent: parent,
      id: ID.BOLD_BTN,
      type: ELEMENT.BUTTON
   });
   boldBtn.innerHTML = ICON.BOLD;
};

/**
 * Adds italic botton to toolbar.
 *
 * @param {Object} parent
 */
export const addItalicBtn = parent => {
   const italicBtn = createTool({
      parent: parent,
      id: ID.ITALIC_BTN,
      type: ELEMENT.BUTTON
   });
   italicBtn.innerHTML = ICON.ITALIC;
};

/**
 * Adds underline botton to toolbar.
 *
 * @param {Object} parent
 */
export const addUnderlineBtn = parent => {
   const underlineBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      id: ID.UNDERLINE_BTN
   });
   underlineBtn.innerHTML = ICON.UNDERLINE;
};

/**
 * Adds strike through botton to toolbar.
 *
 * @param {Object} parent
 */
export const addStrikeBtn = parent => {
   const strikeBtn = createTool({
      parent: parent,
      id: ID.STRIKE_BTN,
      type: ELEMENT.BUTTON
   });
   strikeBtn.innerHTML = ICON.STRIKE;
   addSeperator(strikeBtn);
};

/**
 * Adds align left button.
 *
 * @param {Object} parent
 */
export const addAlignLeftBtn = parent => {
   const alignLeftBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      id: ID.ALIGN_LEFT_BTN,
      className: ICON.ALIGN_LEFT
   });
};

/**
 * Adds align right button.
 *
 * @param {Object} parent
 */
export const addAlignRightBtn = parent => {
   const alignRightBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      id: ID.ALIGN_RIGHT_BTN,
      className: ICON.ALIGN_RIGHT
   });
};

/**
 * Adds align center button.
 *
 * @param {Object} parent
 */
export const addAlignCenterBtn = parent => {
   const alignCenterBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      id: ID.ALIGN_CENTER_BTN,
      className: ICON.ALIGN_CENTER
   });
};

/**
 * Adds jsutify button.
 *
 * @param {Object} parent
 */
export const addAlignJustifyBtn = parent => {
   const alignJustifyBtn = createTool({
      parent: parent,
      type: ELEMENT.BUTTON,
      id: ID.ALIGN_JUSTIFY_BTN,
      className: ICON.ALIGN_JUSTIFY
   });

   addSeperator(alignJustifyBtn);
};
