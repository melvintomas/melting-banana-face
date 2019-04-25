const fs = require('fs');

class Agent{
    constructor(){
        this._agents = JSON.parse(fs.readFileSync('./data/agents.json'));
        this._maxID = this._agents.reduce((max,agent)=> agent._id > max._id ? agent : max)._id
    }
    getAgents(){
        return this._agents
    }

    getAgentByID(agentID){
        return this._agents.find(a=>a._id == agentID)
    }

    insertAgent(agent){
        const newAgent = {
            _id: this._maxID++,
            name: agent.name,
            address: agent.address,
            city: agent.city,
            state: agent.state,
            zipcode: agent.zipcode,
            tier: agent.tier,
            phone: {
                primary: agent.phone.primary,
                mobile: agent.phone.mobile
            }
        }
        this._agents.push(newAgent)
        return newAgent
    }

    updateAgent(agentID, agentUpdate){
        const agent  = this._agents.find(a=>a._id == agentID)
        agentUpdate.name ? agent.name = agentUpdate.name : null
        agentUpdate.address ? agent.address = agentUpdate.address : null
        agentUpdate.city ? agent.city = agentUpdate.city : null
        agentUpdate.state ? agent.state = agentUpdate.state : null
        agentUpdate.zipcode ? agent.zipcode = agentUpdate.zipcode : null
        agentUpdate.tier ? agent.tier = agentUpdate.tier : null
        if (agentUpdate.phone){
            agentUpdate.phone.primary ? agent.phone.primary = agentUpdate.phone.primary : null
            agentUpdate.phone.mobile ? agent.phone.mobile = agentUpdate.phone.mobile : null
        }
        return this.getAgentByID(agentID)
    }

    removeAgent(agentID){
        const agent = this._agents.find(a=>a._id == agentID)
        const agentIndex = this._agents.indexOf(agent)
        this._agents.splice(agentIndex,1)
    }
}

module.exports = new Agent()