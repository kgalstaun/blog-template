import global from "@/constants/global";
import messages from "@/constants/messages";
import ObjectHelper from "@/helpers/ObjectHelper";

const modules = {
  global,
  messages,
};

const ConstantService = {
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

export default ConstantService;
