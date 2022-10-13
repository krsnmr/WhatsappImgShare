module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            build: {
                src: 'dist/*.css',
                dest: 'css/styles.min.css'
            }
        },



        /* объединение */
        concat: {
            options: {
                separator: '\n\n'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'js/<%= pkg.name %>.js'
            }
        },

        /* сжатие */
        uglify: {
            options: {
                mangle: false,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'js/<%= pkg.name %>.min.js': ['js/<%= pkg.name %>.js']
                }
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};