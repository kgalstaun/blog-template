import global from "./global";
import messages from "./messages";
import ObjectHelper from "@/helpers/ObjectHelper";

const modules = {
  global,
  messages,
};

const Constant = {
  modules,
  get(module, property) {
    let value;

    try {
      value = ObjectHelper.find(modules[module], property);
    } catch (error) {
      value = "";
    }

    return value;
  },
};

export default Constant;
