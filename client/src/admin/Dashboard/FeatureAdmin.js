import React from 'react';


export default class FeatureAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      title: "",
      description: "",
      editing: false,
      editingIndex: -1
    };
  }

  async componentDidMount() {
    fetch("/features")
      .then(res => res.json())
      .then(features =>
        this.setState({ features }, () => console.log("users fetched..", features))
      );
  }


  title = e => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };
  description = e => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  };


 

  deleteFeature(featID) {
    let arr = this.state.features;
    const result = arr.filter(feature => feature.featID !== featID);

    fetch(`/features/delete/${featID}`)
      .then(res => res.json())
      .then(features => {
        this.setState({ features: result });
      });
  }

  editFeature = featID => {
    const feature = this.state.features.find(feature => feature.featID === featID);
    this.setState({
      editing: true,
      title: feature.title,
      description: feature.description,
      image: feature.image,
      editingIndex: featID
    });
  };

  updateFeature = async (e) => {
    e.preventDefault();
    debugger;
    const file = e.target.myImage.files[0];
    console.log(file);
    const body = new FormData();
    body.append('myImage', file);

    const response = await fetch("http://localhost:5000/upload", {
      method: 'POST',
      body: body
    });

    const result = await response.json();
    console.log("result", result.file)


    const res = await fetch(
      `/features/update/${this.state.editingIndex}?title=${this.state.title}&image=${result.file}&description=${this.state.description}`
    );
    const features = await res.json();

    this.setState({
      features: this.state.features.map(feature =>
        feature.featID === this.state.editingIndex
          ? { ...feature, title: this.state.title, description: this.state.description, image: result.file }
          : feature
      ),
      editing: false,
      title: "",
      description: ""
    });
  };


  onSubmit = async (e) => {
    e.preventDefault();
    debugger;
    const file = e.target.myImage.files[0];
    console.log(file);
    const body = new FormData();
    body.append('myImage', file);

    const response = await fetch("http://localhost:5000/upload", {
      method: 'POST',
      body: body
    });

    const result = await response.json();
    console.log("result", result.file)

    let newList = this.state.features;
    if (this.state.title === "" || this.state.description === "") {
      return "error";
    }

    fetch(
      `/features/add?featID=${this.state.featID}&title=${this.state.title}&description=${this.state.description}&image=${result.file}`
    )
      .then(res => res.json())
      .then(features => {
        console.log(features)
        newList.push(features);
        this.setState({ features: newList, title: "", description: "" });
      });

  }


  render() {
    return (
      <main>

        <h1>Features List</h1>
        <div className="flex-grid">
          <div>

            <form
              onSubmit={e => {
                this.state.editing ? this.updateFeature(e) : this.onSubmit(e)
              }}
            >
              <h2><input
                type="text"
                placeholder="Enter feature title"
                value={this.state.title}
                onChange={e => this.title(e)}
              /><input
                  type="text"
                  placeholder="Enter feature description"
                  value={this.state.description}
                  onChange={e => this.description(e)}
                />

                <span>File</span>
                <input name="myImage" type="file" />
                <input
                  type="submit"
                  value={this.state.editing ? "Update" : "Add"}
                />


              </h2>

            </form>
            <ul>
              {this.state.features.map((feature, index) => {
                return (
                  <li key={index}>
                    {feature.featID}- {feature.title} / {feature.description} / <img src={`http://localhost:5000/${feature.image}`} />
                    <button type="button" onClick={() => this.deleteFeature(feature.featID)}>delete</button>
                    <button type="button" onClick={() => this.editFeature(feature.featID)}>edit</button>
                  </li>

                );
              })}
            </ul></div></div>


      </main>
    )
  }
}


