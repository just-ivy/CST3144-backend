class Order {
    constructor(name, phone, items) {
        this.name = name;
        this.phone = phone;
        this.items = items; // array of { lessonId, quantity }
    }
}

module.exports = Order;
