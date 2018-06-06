var Threadless = {
  start: function($) {
    $('.activity-stream').on('click', 'a', function() {
      $('.notifications-list').toggle();
    });
    
    var template = Handlebars.compile($('#notification-entries').html());
    function loadNotifications(data) {
      $('<ul/>', {'class': 'notifications', html: template(data)}).appendTo('.notifications-list');
    }
    
    $.get('http://localhost:3001/notifications', loadNotifications);
  }
};