// const System = require('systemjs');

/**
 * Mock the module with the given name and overwrite it with the object provided in
 * value.
 * @param systemjs  {SystemJS}  your global SystemJS instance (mandatory because of the project-specific configuration and mapping)
 * @param name      {String}  name of the module (absolute and/or relative; gets normalized using System.normalizeSync)
 * @param value     {Object}  object to overwrite current module with
 */
module.exports = function mockModule(System, name, value) {
  const normalizedName = System.normalizeSync(name);

  System.delete(normalizedName);
  System.set(normalizedName, System.newModule(Object.assign({ default: value }, value)));
}
