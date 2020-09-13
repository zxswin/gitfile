// 创建一个验证类
class Validate {
  max(value, len) {
    return value.length <= len;
  }
  min(value, len) {
    return value.length >= len;
  }
  isNumber(value) {
    return /^\d+$/.test(value);
  }
}

let validate = new Validate();
console.log(validate.max("abc", 2));

// 创建一个代理工厂
function ProxyFactory(target) {
  return new Proxy(target, {
    get(target, key) {
      return target[key];
    },
    set(target, key, el) {
      const rule = el.getAttribute("rule");
      const validate = new Validate();
      let state = rule.split(",").every((rule) => {
        const info = rule.split(":");
        return validate[info[0]](el.value, info[1]);
      });

      el.classList[state ? "remove" : "add"]("error");
      return true;
    },
  });
}

const validateDoms = document.querySelectorAll("[validate]");
const proxy = ProxyFactory(validateDoms);

proxy.forEach((item, i) => {
  item.addEventListener("keyup", function () {
    proxy[i] = this;
  });
});
