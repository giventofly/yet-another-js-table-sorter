//number of fixed collumns
// var fixedColumns = 3;

$(document).ready(function () {


let yajtsConf = {
  //fixed columns
  fixedColumns : "3",
  //add compare methods
  compareMethods : {
    //date compare
    date: function (a, b) {
      a = new Date(a);
      b = new Date(b);
      return a - b;
    }
  },
  //table body class
  tableBodyClass : ".sortable-body-yajts",
  //table class
  tableToSort : ".table-to-sort-yajts"
}

/**************** CODE  */
let yajtscompare = {
  //text compare
  text: function (a, b) {
    if (a < b) { return -1; } else { return a > b ? 1 : 0; }
  },
  //number compare
  number: function (a, b) {
    const regex = /(\d+[,\.]?\d*)[^\d]*/i;
    if ((m = regex.exec(a)) !== null) {a = m[1];} else {a = -1;}
    if ((m = regex.exec(b)) !== null) {b = m[1];} else { b = -1;}
    return a - b;
  }
};

//add new compare functions
yajtsConf.compareMethods != true ? newCompare = yajtsConf.compareMethods : newCompare = {};
$.extend(yajtscompare, newCompare);


$('thead td:nth-child(-n+' + yajtsConf.fixedColumns + ')').css("position", "relative");
$('tbody td:nth-child(-n+' + yajtsConf.fixedColumns + ')').css("position", "relative");

$(yajtsConf.tableToSort).each(function () {

  var $table = $(this);
  var $tbody = $table.find('tbody');
  var $controls = $(yajtsConf.tableBodyClass).find('td');
  var rows = $tbody.find('tr').toArray();

  $controls.on('click', function () {
    var $header = $(this);
    var order = $header.data('sort');
    var column;

    if ($header.is('.yajts-ascending') || $header.is('.yajts-descending')) {
      $header.toggleClass('yajts-ascending yajts-descending');
      $tbody.append(rows.reverse());
    } else {
      $header.addClass('yajts-ascending');
      $header.siblings().removeClass('yajts-ascending yajts-descending');
      if (yajtscompare.hasOwnProperty(order)) {
        column = $controls.index(this);

        rows.sort(function (a, b) {
          a = $(a).find('td').eq(column).text();
          b = $(b).find('td').eq(column).text();
          return yajtscompare[order](a, b);
        });

        $tbody.append(rows);
      }
    }
  });
});

//scrollable function
$('tbody').scroll(function (e) {
  $('thead').css("left", -$("tbody").scrollLeft());
  $('thead td:nth-child(-n+' + yajtsConf.fixedColumns + ')').css("left", $("tbody").scrollLeft());
  $('tbody td:nth-child(-n+' + yajtsConf.fixedColumns + ')').css("left", $("tbody").scrollLeft());
});

});