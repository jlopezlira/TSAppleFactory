interface IProduct {
  build(): void;
}

interface IAppleFactory {
  create(type: string): IProduct;
}

class EmptyBox implements IProduct {
  constructor() {
    this.build();
  }
  build() {
    console.log("Here is your empty box!!!");
  }
}

class Iphone implements IProduct {
  constructor() {
    this.build();
  }
  build() {
    console.log("Here is your Iphone <3");
  }
}

class Ipad implements IProduct {
  constructor() {
    this.build();
  }
  build() {
    console.log("Here is your Ipad :)");
  }
}

class AppleFactory implements IAppleFactory {
  public create(type: string): IProduct {
    switch (type) {
      case "Iphone":
        return new Iphone();
      case "Ipad":
        return new Ipad();
      default:
        return new EmptyBox();
    }
  }
}

const iphone = new AppleFactory();
iphone.create("Iphone");

const ipad = new AppleFactory();
ipad.create("Ipad");

const macBook = new AppleFactory();
macBook.create("macBook");
