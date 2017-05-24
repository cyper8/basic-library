/* global Basic */

const module = {
  name: "SampleModule",
  type: "module",
  style: "styles/samplemodule.css",
  content: "",
  action: "samplemodule.js"
};

const config = {
  greeting: "Hello",
  name: "world"
};

export default (function(module_function){
  if (!Basic) throw new Error(`${module.name}: no framework`);
  window.Basic.System.ModuleStack.modules[module.name].entry = function(module_root){
    var module_tree = module_function(module_root);
    if (typeof module_root === 'object'){
      if (module_root.insert) {
        module_root.insert(module_root[module.name] = module_tree,null);
      }
      else {
        module_root.appendChild(module_root[module.name] = module_tree);
      }
      
      /* optional container tweaking begin */
      
      if (module_root.parentNode.classList.contains("selector")) {
        module_tree.classList.add("toolbar");
        module_tree.style.top = (module_root.parentNode.clientHeight).toString()+"px";
        module_root.switch = function(state){
          if (state) module_root[module.name].show();
          else module_root[module.name].hide();
        };
      }
      else {
        module_root.trinfobar.show();
      }
      
      /* end */
      
      module_root.classList.remove("hidden");
      
      // something to be done after actual DOM mounting goes here
      
      
      
      // END
    }
  };
  
  return window.Basic.System.ModuleStack.modules[module.name];
})(function(root){
  // module tree generation and logic code
  
  
  var modtree = Basic.UI.element("div#samplemodule");
  modtree.innerHTML = `${config.greeting}, ${config.name}`;
  
  
  return modtree;
})