'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',

        // AdminLTE
        'public/lib/bower_components/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/bower_components/font-awesome/css/font-awesome.min.css',
        'public/lib/bower_components/Ionicons/css/ionicons.min.css',
        'public/lib/dist/css/AdminLTE.min.css',
        'public/lib/dist/css/skins/_all-skins.min.css',
        'public/lib/bower_components/morris.js/morris.css',
        'public/lib/bower_components/jvectormap/jquery-jvectormap.css',
        'public/lib/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
        'public/lib/bower_components/bootstrap-daterangepicker/daterangepicker.css',
        'public/lib/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
        
      ],
      js: [
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/angular-file-upload.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',

        //// AdminLTE
        'public/lib/bower_components/bootstrap/dist/js/bootstrap.min.js',
        'public/lib/bower_components/raphael/raphael.min.js',
        'public/lib/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js',
        'public/lib/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        'public/lib/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        'public/lib/bower_components/jquery-knob/dist/jquery.knob.min.js',
        'public/lib/bower_components/moment/min/moment.min.js',
        'public/lib/bower_components/bootstrap-daterangepicker/daterangepicker.js',
        'public/lib/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        'public/lib/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
        'public/lib/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
        'public/lib/bower_components/fastclick/lib/fastclick.js',
        'public/lib/dist/js/adminlte.min.js',
        'public/lib/dist/js/pages/dashboard.js',
        'public/lib/dist/js/demo.js',

      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
