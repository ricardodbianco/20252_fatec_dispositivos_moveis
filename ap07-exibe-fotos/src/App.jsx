import React from "react"
import Busca from "./components/Busca"
import { createClient } from 'pexels'
import PexelsLogo from "./components/PexelsLogo"

export default class App extends React.Component {

  pexelsClient = null
//declarar uma variável de estado e guardar o vetor photos nela. ela pode se chamar photos
state = {
  photos: []
}

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo
    })
    .then(result => this.setState({photos: result.photos}))
  }

  componentDidMount() {

    this.pexelsClient = createClient('hvDHGFz1LhGR9DUarGppzPI80zV5k67TPgNN2NLsPVH21EaElOYhkgTk')
  }

  render() {
    return (
      <div className='grid w-9 m-auto p-2 border-1 border-400 border-round-md'>
        <div className="col-12">
          <div className="flex">
            <PexelsLogo />
            <div className="ml-3">
              <i
              className="pi pi-android"
              style={{ fontSize: '2rem' }}></i>
            </div>          
          </div>
        </div>
        <div className="col-12">
          Exibir uma lista de...
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          {
            this.state.photos.map((photo) => (
              <div key={photo.id}>
                <img src={photo.src.small} alt={photo.alt}/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
