# Melting Banana Face
Demo RESTful API excerise

## Getting Started

### Prerequisites
Node.js
NPM  

### Installation
Run `npm install` to get required package dependancy
Use `npm start` to start the API on port 3000

## Built With
* [Express](http://expressjs.com/en/4x/api.html) - Fast, unopinionated, minimalist web framework for Node.js

## Assumptions
- Agent and Customer schemas are explicitly defined with no flexible or extendable fields
- Agent ID, Customer ID, and Customer GUID cannot be modified
- No other endpoint are needed besides the 9 listed requirements
- Datasources will eventually be moved into a database
- Validation will eventually be added based on requirements
- Sensitive Personal Identifiable Data will be secured
- API endpoints will eventually support pagination(have record counts, limits,link to prev/next page) to prevent overwhelming resource

## Additional Requirement Questions

- Who is authorized to access this senstive data and what methods to use to secure data?
- What are the requirements for the individual fields (required fields, min/max length, default values)?
- Which fields need to be exposed to the API and which can be hidden
- Do we need an endpoint to delete an Agent?
- Do we need an endpoint to get a customer by ids?
- Do we a need both PUT/PATCH http methods to disthinguish between update all fields or specified fields  
  

## API URLS

### Agent List Page

- Return List of all Agents
GET `http://localhost:3000/agents`

- Ability to Add New Agent
POST `http://localhost:3000/agents`

### Agent Detail Page

- Retrieve all Agent Details by agent’s INT ID
GET `http://localhost:3000/agents/:id`

- Update Any/All Fields by Agent’s INT ID
PUT `http://localhost:3000/agents/:id`

  

### Agent’s Customer List View Page
- List all customers associated with a given Agent's INT ID (UI will list Name – last, first – and city, state in List View)
GET `http://localhost:3000/customers?agent_id=:agent_id`

- Ability to Add New Customer
POST `http://localhost:3000/customers`

- Ability to Delete Existing Customer
DELETE `http://localhost:3000/customers/:id`

  

### Agent’s Customer Detail Page
- Return all customer data from our system.
GET `http://localhost:3000/customers`

- Provide ability to Update Customer Information
PUT `http://localhost:3000/customers/:id`

## Authors
* **Melvin Tomas**

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details