Forked jaguarjs-jsdoc-patched and added the following tweaks:

v0.0.4
Fixed navigation issue where clicking on a module name would reload the page instead of opening the sub-menus

v0.0.3
Display overriden methods/members
Members display line number reference
Navigation is alphabetical (for namespace grouping)
Members with a type show up as properties
Sort overriden/new methods & members before inherited ones

-------------------
A patched version of [JaguarJS-JSDoc](https://github.com/davidshimjs/jaguarjs-jsdoc)
---

Usage
---
1. Install from npm
  ```
  $ npm install jaguarjs-jsdoc-patched-2 --save-dev
  ```

2. Copy the `conf.json` file to the root directory of your repo.  Edit as necessary.

3. Assuming you're using [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc), set the template to `./node_modules/jaguarjs-jsdoc-patched-2`
  ``` javascript
    grunt.initConfig({
      ..other grunt tasks here..
      jsdoc : {
        dist : {
          src: ['src/*.js', 'README.md'],
          options: {
            destination: 'docs',
            configure : "conf.json",
            template: './node_modules/jaguarjs-jsdoc-patched-2'
          }
        }
      }
    });
  ```
Other task runners should work similarly.

3. Again assuming you're using grunt-jsdoc, simply run `grunt jsdoc`!


License
---
This project under the MIT License.

