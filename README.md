# yet-another-sort-table

* you can click on the header and sort.


todo:
a better faq/readme.

include yajts.js, style.css and jquery in your html.
check index.html for an example.

#configuration

 * add to the table a class, and another class for the tbody.
 * choose the sorting algorythim using data-sort="sort-function" in every td in the head you want to sort.

#edit the object yajtsConf using this parameters:

* fixedColumns
number of columns to fix

* you can add other methods to compare (date, text, number/values by default) by adding an object in the compareMethods

  //this will not work, just a generic example
  nameCompareFunction: function(param1, param2) {
    return param1 - param2;
  }


 * define table class to define

tableToSort = '.class'

* define class of table body

 tableBodyClass = '.class';

