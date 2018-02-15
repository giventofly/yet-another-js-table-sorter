# yet-another-sort-table

todo:
a better faq/readme.

include yajts.js and jquery in your html.

configuration:

edit the object yajtsConf using this parameters:

fixedColumns, number of columns to fix

you can add other methods to compare (date, text, number/values by default) by adding an object in the compareMethods

  //this will not work, just a generic example
  nameCompareFunction: function(param1, param2) {
    return param1 - param2;
  }


define table class to define

tableToSort = '.class'

define class of table body

tableBodyClass = '.class';

