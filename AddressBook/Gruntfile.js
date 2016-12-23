module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks("grunt-systemjs-builder");

  grunt.initConfig({
    copy: {
      build: {
        files: [
          {expand: true, cwd: 'src/', src: ['server/**'], dest: 'dist/'},
          {expand: true, cwd: 'src/', src: ['client/app/**/*.html'], dest: 'dist/'},
        ],
      },
    },
    cssmin: {
      build: {
        files: {
          'dist/client/css/app.min.css': [
            'src/client/jspm_packages/github/twbs/bootstrap@3.3.7/css/bootstrap.css',
            'src/client/jspm_packages/github/angular/bower-angular@1.6.0/angular-csp.css'
          ]
        }
      }
    },
    systemjs: {
      options: {
        sfx: true,
        baseURL: "./src/client",
        configFile: "./src/client/config.js",
        minify: true,
        build: {
          mangle: true
        }
      },
      build: {
        files: [{
          src:  "./src/client/app/app.module.js",
          dest: "./dist/client/js/app.min.js"
        }]
      }
    }
  });

  grunt.registerTask('build', [
    'copy:build',
    'cssmin:build',
    'systemjs:build',
  ]);

};