module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig(
        {
            typescript: {
                options: {
                    sourceMap: true
                },
                example_files: {
                    src: ['examples/**/*.ts'],
                    dest: 'examples/compiled.js'
                },
                moar_example_files: {
                    src: ['moar_examples/**/*.ts']
                }
            },
            watch: {
                files: ['./**/*.ts'],
                tasks: ['typescript']
            }
        }
    );
};