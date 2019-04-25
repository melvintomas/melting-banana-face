const fs = require('fs');
const crypto = require("crypto");

class Customer {
    constructor() {
        this._customers = JSON.parse(fs.readFileSync('./data/customers.json'));
        this._maxID = this._customers.reduce((max, customer) => customer._id > max._id ? customer : max)._id
    }

    getCustomers() {
        return this._customers
    }

    getCustomerByID(customerID) {
        return this._customers.find(a => a._id == customerID)
    }

    getCustomersByAgentID(agentID) {
        return this._customers.filter(a => a.agent_id == agentID)
    }

    insertCustomer(customer) {
        const newcustomer = {
            _id: this._maxID++,
            agent_id: customer.agent_id,
            guid: crypto.randomBytes(16).toString("hex"),
            isActive: customer.isActive,
            balance: customer.balance,
            age: customer.age,
            eyeColor: customer.eyeColor,
            name: {
                first: customer.name.first,
                last: customer.name.last
            },
            company: customer.company,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
            registered: customer.registered,
            latitude: customer.latitude,
            longitude: customer.longitude,
            tags: customer.tags
        }
        console.log(newcustomer)
        this._customers.push(newcustomer)
        return newcustomer
    }

    updateCustomer(customerID, customerUpdate) {
        const customer = this._customers.find(a => a._id == customerID)
        
        customerUpdate.agent_id ? customer.agent_id = customerUpdate.agent_id : null
        customerUpdate.isActive !== undefined ? customer.isActive = customerUpdate.isActive : null
        customerUpdate.balance ? customer.balance = customerUpdate.balance : null
        customerUpdate.age ? customer.age = customerUpdate.age : null
        customerUpdate.eyeColor ? customer.eyeColor = customerUpdate.eyeColor : null
        if (customerUpdate.name) {
            customerUpdate.name.first ? customer.name.first = customerUpdate.name.first : null
            customerUpdate.name.last ? customer.name.last = customerUpdate.name.last : null
        }
        customerUpdate.company ? customer.company = customerUpdate.company : null
        customerUpdate.email ? customer.email = customerUpdate.email : null
        customerUpdate.phone ? customer.phone = customerUpdate.phone : null
        customerUpdate.address ? customer.address = customerUpdate.address : null
        customerUpdate.registered ? customer.registered = customerUpdate.registered : null
        customerUpdate.latitude ? customer.latitude = customerUpdate.latitude : null
        customerUpdate.longitude ? customer.longitude = customerUpdate.longitude : null
        customerUpdate.tags ? customer.tags = customerUpdate.tags : null
        return this.getCustomerByID(customerID)
    }

    removeCustomer(customerID) {
        const customer = this._customers.find(a => a._id == customerID)
        const customerIndex = this._customers.indexOf(customer)
        this._customers.splice(customerIndex, 1)
        return ("test")
    }
}

module.exports = new Customer()