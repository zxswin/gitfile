(function($) {
  'use strict';

  $.extend($.fn.bootstrapTable.defaults, {
      leftFixedColumns: false,
      rightFixedColumns: false,
      leftFixedNumber: 0,
      rightFixedNumber: 0
  });

  var BootstrapTable = $.fn.bootstrapTable.Constructor,
      _initHeader = BootstrapTable.prototype.initHeader,
      _initBody = BootstrapTable.prototype.initBody,
      _resetView = BootstrapTable.prototype.resetView;

  BootstrapTable.prototype.initFixedColumns = function () {
      this.$fixedHeader = $([
          '<div class="fixed-table-header-container">',
          '<div class="fixed-table-header-columns-left" id="header-left">',
          '<table>',
          '<thead></thead>',
          '</table>',
          '</div>',
          '<div class="fixed-table-header-columns-right" id="header-right">',
          '<table>',
          '<thead></thead>',
          '</table>',
          '</div>',
          '</div>'
      ].join(''));

      this.$fixedLeftHeader =this.$fixedHeader.find('#header-left');

      this.$fixedRightHeader =this.$fixedHeader.find('#header-right');

      this.timeoutHeaderColumns_ = 0;
      this.$fixedLeftHeader.find('table').attr('class', this.$el.attr('class'));
      this.$fixedRightHeader.find('table').attr('class', this.$el.attr('class'));

      this.$fixedHeaderLeftColumns = this.$fixedLeftHeader.find('thead');
      this.$fixedHeaderRightColumns=this.$fixedRightHeader.find('thead');

      this.$tableHeader.parent().find('.fixed-table-header-container').remove();
      this.$tableHeader.before(this.$fixedHeader);

      this.$fixedBody=$([
          '<div class="fixed-table-body-container">',
          '<div class="fixed-table-body-columns-left" id="body-left">',
          '<table>',
          '<tbody></tbody>',
          '</table>',
          '</div>',
          '<div class="fixed-table-body-columns-right" id="body-right">',
          '<table>',
          '<tbody></tbody>',
          '</table>',
          '</div>',
          '</div>'
      ].join(''));

      this.$fixedLeftBody = this.$fixedBody.find('#body-left');
      this.$fixedRightBody = this.$fixedBody.find('#body-right');

      this.timeoutBodyColumns_ = 0;
      this.$fixedLeftBody.find('table').attr('class', this.$el.attr('class'));
      this.$fixedBodyLeftColumns = this.$fixedLeftBody.find('tbody');

      this.$fixedRightBody.find('table').attr('class', this.$el.attr('class'));
      this.$fixedBodyRightColumns = this.$fixedRightBody.find('tbody');

      this.$tableBody.parent().find('.fixed-table-body-container').remove();
      this.$tableBody.before(this.$fixedBody);
  };

  BootstrapTable.prototype.initHeader = function () {
      var options = this.options;

      _initHeader.apply(this, Array.prototype.slice.apply(arguments));

      if (!options.leftFixedColumns) {
        options.leftFixedNumber = 0;
      }

      if (!options.rightFixedColumns) {
        options.rightFixedNumber = 0;
      }

      if (!options.leftFixedColumns && !options.rightFixedColumns) {
          return;
      }

      this.initFixedColumns();

      var that = this,
        $trsLeft = this.$header.find('tr').clone(true, true),
        $trsRight=$trsLeft.clone(true, true);

      $trsLeft.each(function () {
          $(this).find('th:gt(' + that.options.leftFixedNumber + ')').remove();
      });

      var rth=$trsRight.find('th').length-that.options.rightFixedNumber;
      $trsRight.each(function () {
          $(this).find('th:lt(' + rth + ')').remove();
      });


      this.$fixedHeaderLeftColumns.html('').append($trsLeft);
      this.$fixedHeaderRightColumns.html('').append($trsRight);
  };

  BootstrapTable.prototype.initBody = function () {
      _initBody.apply(this, Array.prototype.slice.apply(arguments));

      var options = this.options;
      if (!options.leftFixedColumns && !options.rightFixedColumns) {
          return;
      }

      var that = this,
          rowspan = 0;

      this.$fixedBodyLeftColumns.html('');
      this.$fixedBodyRightColumns.html('');

      var $bodyTrElements= this.$body.find('> tr[data-index]');

      $bodyTrElements.each(function () {
          var $tr = $(this).clone(true, true).html(''),
              $tds = $(this).clone(true, true).find('td');

          // $tr.html('');
          var end = that.options.leftFixedNumber;
          if (rowspan > 0) {
              --end;
              --rowspan;
          }
          for (var i = 0; i < end; i++) {
            $tr.append($tds.eq(i));
          }
          that.$fixedBodyLeftColumns.append($tr);

          if ($tds.eq(0).attr('rowspan')){
              rowspan = $tds.eq(0).attr('rowspan') - 1;
          }
      });
      rowspan = 0;
      $bodyTrElements.each(function () {
          var $tr = $(this).clone(true, true).html(''),
              $tds = $(this).clone(true, true).find('td');

          // $tr.html('');
          var end = $tds.length;
          if (rowspan > 0) {
              --end;
              --rowspan;
          }
          for (var i = end-that.options.rightFixedNumber; i < end; i++) {
              $tr.append($tds.eq(i));
          }
          that.$fixedBodyRightColumns.append($tr);

          if ($tds.eq(0).attr('rowspan')){
              rowspan = $tds.eq(0).attr('rowspan') - 1;
          }
      });

  };

  BootstrapTable.prototype.resetView = function () {
      _resetView.apply(this, Array.prototype.slice.apply(arguments));

      var options = this.options;
      if (!options.leftFixedColumns && !options.rightFixedColumns) {
          return;
      }

      clearTimeout(this.timeoutHeaderColumns_);
      this.timeoutHeaderColumns_ = setTimeout($.proxy(this.fitHeaderColumns, this), this.$el.is(':hidden') ? 100 : 0);

      clearTimeout(this.timeoutBodyColumns_);
      this.timeoutBodyColumns_ = setTimeout($.proxy(this.fitBodyColumns, this), this.$el.is(':hidden') ? 100 : 0);
  };

  BootstrapTable.prototype.fitHeaderColumns = function () {
      var that = this,
          visibleFields = this.getVisibleFields(),
          leftHeaderWidth = 0,
          rightHeaderWidth = 0,
      trLength=0;


      this.$body.find('tr:first-child:not(.no-records-found) > *').each(function (i) {
          var $this = $(this),
              index = i;

          if (i >= that.options.leftFixedNumber) {
              return false;
          }

          if (that.options.detailView && !that.options.cardView) {
              index = i - 1;
          }

          that.$fixedLeftHeader.find('th[data-field="' + visibleFields[index] + '"]')
              .find('.fht-cell').width($this.innerWidth());

          leftHeaderWidth += $this.outerWidth();
      });
      this.$fixedLeftHeader.width(leftHeaderWidth + 1).show();
      trLength=this.$body.find('tr:first-child:not(.no-records-found) > *').length;
      this.$body.find('tr:first-child:not(.no-records-found) > *').each(function (i) {
          var $this = $(this),
              index = i;

          if (i >= trLength-that.options.rightFixedNumber) {
              if (that.options.detailView && !that.options.cardView) {
                  index = i - 1;
              }

              that.$fixedRightHeader.find('th[data-field="' + visibleFields[index] + '"]')
                  .find('.fht-cell').width($this.innerWidth());

              rightHeaderWidth += $this.outerWidth();
          }


      });
      this.$fixedRightHeader.width(rightHeaderWidth + 1).show();
  };

  BootstrapTable.prototype.fitBodyColumns = function () {
      var that = this,
          top = -(parseInt(this.$el.css('margin-top')) - 1),
          // the fixed height should reduce the scorll-x height
          height = this.$tableBody.height() - 1;


      if (!this.$body.find('> tr[data-index]').length) {
          this.$fixedLeftBody.hide();
          this.$fixedRightBody.hide();
          return;
      }

      if (!this.options.height) {
        if (this.options.rightFixedColumns) {
          top = this.$fixedRightHeader.height() - 1;
        } else {
          top = this.$fixedLeftHeader.height() - 1;
        }

        height = height - top;
      }

      //减去滚动条的高度
      height -= this.$tableBody[0].offsetHeight - this.$tableBody[0].clientHeight;

      if (this.options.leftFixedColumns) {
        this.$fixedLeftBody.css({
            width: this.$fixedLeftHeader.width(),
            height: height,
            top: top
        }).show();

        this.$fixedLeftHeader.find('th').each(function(i){
          //that.$fixedLeftBody.find('td:eq(' + i + ')').width($(this).width()-2);
        });
        //that.$fixedLeftBody.find('td:last-child').width('auto');
      }

      if (this.options.rightFixedColumns) {
        this.$fixedRightBody.css({
            width: this.$fixedRightHeader.width(),
            height: height,
            top: top
        }).show();

        this.$fixedRightHeader.find('th').each(function(i){
            //that.$fixedRightBody.find('td:eq(' + i + ')').width($(this).width()-2);
        });
        //that.$fixedRightBody.find('td:last-child').width('auto');
      }

      this.$body.find('> tr').each(function (i) {
          that.$fixedLeftBody.find('tr:eq(' + i + ')').height($(this).height());
          that.$fixedRightBody.find('tr:eq(' + i + ')').height($(this).height());
      });

      // events
      this.$tableBody.on('scroll', function () {
          that.$fixedBody.find('table').css('top', -$(this).scrollTop());
      });
      this.$body.find('> tr[data-index]').off('hover').hover(function () {
          var index = $(this).data('index');
          that.$fixedBody.find('tr[data-index="' + index + '"]').addClass('hover');
      }, function () {
          var index = $(this).data('index');
          that.$fixedBody.find('tr[data-index="' + index + '"]').removeClass('hover');
      });
      this.$fixedBody.find('tr[data-index]').off('hover').hover(function () {
          var index = $(this).data('index');
          that.$body.find('tr[data-index="' + index + '"]').addClass('hover');
      }, function () {
          var index = $(this).data('index');
          that.$body.find('> tr[data-index="' + index + '"]').removeClass('hover');
      });
  };

})(jQuery);
