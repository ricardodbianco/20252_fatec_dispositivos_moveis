import React from "react"
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export default class Busca extends React.Component{

    state = {
        termoDeBusca: ''
    }
    onTermoAlterado = (evento) => {
        //console.log(evento.target.value)
        this.setState({termoDeBusca: evento.target.value})
    }
    onFormSubmit = (evento) => {
        evento.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }
    render() {     //flex flex-column troca o eixo para vertical (horizontal é padrão em web)
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="flex flex-column">
                <IconField 
                    iconPosition='left'
                    className='w-full'>
                    <InputIcon className='pi pi-search'/>
                    <InputText
                        value={this.state.termoDeBusca}
                        className='w-full'
                        onChange={this.onTermoAlterado} 
                        placeholder={this.props.dica}/>
                </IconField>
                <Button 
                label='OK'
                className='mt-2'/>
                </div> 
            </form>

        )
    }
}
Busca.defaultProps = {
    dica: 'Buscar...'
}