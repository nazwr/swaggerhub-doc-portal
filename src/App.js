import React, { Component } from 'react';
import SwaggerUI from 'swagger-ui-react';
import Config from './organization_config.json';
import Sidebar from './Sidebar.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        organizationConfig: null,
        definitionList: null,
        definitionLink: "https://petstore.swagger.io/v2/swagger.json"
      }
      this.swaggerhub = this.swaggerhub.bind(this)
      this.getOrganizationData = this.getOrganizationData.bind(this)
      this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
    }

  componentWillMount() {
    this.setState({
      organizationConfig:  Config.orgData,
    })
  }

  swaggerhub(inputMethod, inputResource, inputParams) {
    let url = ""
    if (inputParams) {
      url = "https://api.swaggerhub.com/apis/" + inputResource + "?" + inputParams
    } else {
      url = "https://api.swaggerhub.com/apis/" + inputResource
    }
    
    return fetch(url, {
        method: inputMethod
    }).then(response => {
      if (response.ok) {
        return response.json()
      } throw new Error('There was an issue requesting the API')
    }).then(json => {
      return json
    })
  }

  getOrganizationData(organization) {
    let inputParams = "page=0&limit=10&sort=NAME&order=ASC"
    let inputResource = organization;
  
    this.swaggerhub('GET', inputResource, inputParams).then(response => {
      this.setState({
        definitionList: response.apis
      })
    })
  }

  updateDefinitionLink(newLink) {
    this.setState({
      definitionLink: newLink
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar 
          organizationConfig={this.state.organizationConfig}
          definitionList={this.state.definitionList}
          updateDefinitionLink={this.updateDefinitionLink}
          getOrganizationData={this.getOrganizationData}
        />
        
        <div id="api-data">
          <SwaggerUI 
            url={this.state.definitionLink}
            docExpansion="list"
          />
        </div>
      </div>
    );
  }
}

export default App;
