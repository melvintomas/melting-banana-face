const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const Agent = require('./models/Agents')
const Customer = require('./models/Customers')


//use bodyparser body as json
app.use(bodyParser.json())

//get all agents
app.get('/agents',(req,res)=>{ 
    res.json(Agent.getAgents())
})

//insert a new agent
app.post('/agents',(req,res)=>{
    let newAgent = Agent.insertAgent(req.body)
    res.json(newAgent)
})

//get an agent by agent id
app.get('/agents/:id',(req,res)=>{
    const agentID = req.params.id
    const agent = Agent.getAgentByID(agentID)
    if(!agent){
        res.status(404).json("Agent not found")
    }
    res.json(agent)
})

//update an existing agent
app.put('/agents/:id',(req,res)=>{
    const agentID = req.params.id
    const agent = Agent.updateAgent(agentID,req.body)
    if(!agent){
        res.status(404).json("Agent not found")
    }
    res.json(agent)
})

//get all customers or get customer by agent id
app.get('/customers',(req,res)=>{
    if(req.query.agent_id){
        const agentID = req.query.agent_id
        const customer = Customer.getCustomersByAgentID(agentID)
        if(!customer){
            res.status(404).json("Customers not found")
        }
        res.json(customer)
    }else{
        res.json(Customer.getCustomers())
    }
})

//insert a new customer
app.post('/customers',(req,res)=>{
    let newCustomer = Customer.insertCustomer(req.body)
    res.json(newCustomer)
})

//update an existing customer
app.put('/customers/:id',(req,res)=>{
    const customerID = req.params.id
    res.json(Customer.updateCustomer(customerID,req.body))
})

//delete a customer
app.delete('/customers/:id',(req,res)=>{
    const customerID = req.params.id
    res.json(Customer.removeCustomer(customerID))
})


//start express on port
app.listen(port,(err)=> {
    if(!err) console.log(`Melting Banana-Face listening on port ${port}`)
})
