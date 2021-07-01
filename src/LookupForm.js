import React from "react";
import { CodeBlock } from '@atlaskit/code';
var store = require('app-store-scraper');

export default class LookupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          appId: '553834731',
          appInfo: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({appId: event.target.value});
    }
  
    async handleSubmit(event) {
        event.preventDefault();
        store.app({id: this.state.appId}).then(res => {
            this.setState({appInfo: res})
        }).catch(console.log);
    }
  
    render() {
      return (
          <>
        <form onSubmit={this.handleSubmit}>
          <label>
            App Id<br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className='smallerText'>
              <CodeBlock 
                text={`${JSON.stringify(this.state.appInfo, null, 4)}`}
                language={'json'}
                showLineNumbers={false}
              />
          </div>
        </>
      );
    }
  }