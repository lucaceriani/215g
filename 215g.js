function G511(selector) {
  return $$_G512(selector, "innerHTML")[1];
}

function G512(selector) {
  return $$_G512(selector, "value");
}

function $$_G512(selector, property, events = [], dataToValue, valueToData) {
  const proto = {
    el: document.querySelector(selector),
    selector,
    property,
    events,
    dataToValue,
    valueToData,
  };

  function setProperty(newValue) {
    debugger;
    this.el[this.property] = newValue;
  }
  function getVal() {
    return this.el[this.property];
  }

  const bindableObj = Object.create(proto);

  return [getVal.bind(proto), setProperty.bind(proto)];
  events.forEach((eventName) =>
    document.querySelector(selector).addEventListener(eventName, (event) => event.target[property])
  );
}
