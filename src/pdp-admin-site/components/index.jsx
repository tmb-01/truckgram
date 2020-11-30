import React, {Component} from 'react';
import myFile from "../file.json"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:myFile
        }

    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((value) => {
                        console.log(value)
                        return (
                            <div key={value.id}>
                                <p>{value.name}</p>
                                <p>{value.surname}</p>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

export default Index;