function createCounter() {
  let counter = 0;
  return function increase() {
    return ++counter;
  };
}

const counter1 = createCounter();
console.log("counter1:", counter1());
console.log("counter1:", counter1());
console.log("counter1:", counter1());

// Example logger
function createLogger(namespace) {
  function logger(message) {
    console.log(`[${namespace}] ${message}`);
  }

  return logger;
}

// Info
const infoLogger = createLogger("Info");
infoLogger("Function start");
infoLogger("Function end");

// Error
const errorLogger = createLogger("Error");
errorLogger("Error 1");
errorLogger("Error 2");

// Example storage
function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };

  return storage;
}

const profileSetting = createStorage("profile_setting");

profileSetting.set("fullName", "Khoa");
